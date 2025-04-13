const Hotel = require("./modules/Hotel");
const Room = require("./modules/Room");
const UI = require("./modules/UI");
const PremiumRoom = require("./modules/PremiumRoom");
const User = require("./modules/Users");
const UserManager = require("./modules/userManager");
const HotelApi = require("./modules/HotelApi");

const hotel = new Hotel("Aliance Hotel");
hotel.loadFromLocalStorage();

const userManager = new UserManager();

if (hotel.rooms.length === 0) {
  const room1 = new Room(1, "single", hotel);
  const room2 = new Room(2, "double", hotel);
  const room3 = new Room(3, "suite", hotel);
  const room4 = new PremiumRoom(4, "double", "Gym free access", hotel);
  const room5 = new PremiumRoom(5, "suite", "All Inclusive", hotel);
  const room6 = new PremiumRoom(6, "double", "Abonement to SPA", hotel);

  hotel.addRoom(room1);
  hotel.addRoom(room2);
  hotel.addRoom(room3);
  hotel.addRoom(room4);
  hotel.addRoom(room5);
  hotel.addRoom(room6);

  hotel.saveToLocalStorage();
}

const ui = new UI(hotel);
ui.renderRooms();

window.bookRoom = function (number) {
  const room = hotel.rooms.find((r) => r.number === number);
  const userLogin = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  const logged = userManager.login(userLogin, userPass);
  if (!logged) {
    alert("Log in for booking!");
    return;
  }
  alert(room.book(userLogin));
  ui.renderRooms();
};

window.cancelBooking = function (number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.cancelBooking());
    ui.renderRooms();
  }
};

window.registerUser = function () {
  const userLogin = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  const registered = userManager.register(userLogin, userPass);
  if (registered) {
    document.getElementById("userStatus").textContent =
      "Registration succeed! Log in please";
  }
};

window.loginUser = function () {
  const userLogin = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  const logged = userManager.login(userLogin, userPass);
  if (logged) {
    document.getElementById(
      "userStatus"
    ).textContent = `Logged as ${userLogin}`;
  }
};

window.loadReviews = async function (btn) {
  const roomDiv = btn.closest(".Room");
  const isComments = roomDiv.querySelector(".commentsCont");

  if (isComments) {
    isComments.remove();
    return;
  }

  const res = await HotelApi.loadReviews();
  const threeComments = res.slice(0, 3);
  const markup = `
    <div class="commentsCont">
      <h4>Reviews</h4>
      ${threeComments
        .map(({ email, body }) => {
          return `<p><span class="rev-span">${email}:</span> ${body}</p>`;
        })
        .join("")}
    </div>
  `;

  roomDiv.insertAdjacentHTML("beforeend", markup);
};

module.exports = { bookRoom, cancelBooking, loadReviews, registerUser };

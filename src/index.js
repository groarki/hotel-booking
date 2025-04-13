import Hotel from "./modules/Hotel";
import Room from "./modules/Room";
import UI from "./modules/UI";
import PremiumRoom from "./modules/PremiumRoom";
import User from "./modules/Users";
import UserManager from "./modules/userManager";
import HotelApi from "./modules/HotelApi";

import "./styles.scss";

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

function bookRoom(number) {
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
}

function cancelBooking(number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.cancelBooking());
    ui.renderRooms();
  }
}

function registerUser() {
  const userLogin = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  const registered = userManager.register(userLogin, userPass);
  if (registered) {
    document.getElementById("userStatus").textContent =
      "Registration succeed! Log in please";
  }
}

function loginUser() {
  const userLogin = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  const logged = userManager.login(userLogin, userPass);
  if (logged) {
    document.getElementById(
      "userStatus"
    ).textContent = `Logged as ${userLogin}`;
  }
}

async function loadReviews(btn) {
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
}

export { bookRoom, cancelBooking, loadReviews, registerUser, loginUser };

window.bookRoom = bookRoom;
window.cancelBooking = cancelBooking;
window.registerUser = registerUser;
window.loadReviews = loadReviews;
window.loginUser = loginUser;

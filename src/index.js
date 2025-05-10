import Hotel from "./modules/Hotel";
import { Room, PremiumRoom } from "./modules/Room";
import UI from "./modules/servises/UI";
import UserManager from "./modules/servises/userManager";
import HotelApi from "./modules/servises/HotelApi";

import "./styles.scss";

const hotel = new Hotel("Aliance Hotel");
const userManager = new UserManager();
hotel.loadFromLocalStorage();

let userLogged = null;

const savedUser = sessionStorage.getItem("loggedInUsers");
if (savedUser) {
  const user = JSON.parse(savedUser);
  userLogged = user.username;
  document.getElementById("userStatus").textContent = `Logged as ${userLogged}`;
}

const ui = new UI(hotel, userLogged);

ui.updateUser(userLogged);
updateLogStatus();
ui.renderRooms();

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

function bookRoom(number) {
  if (!userLogged) {
    alert("Log in for booking!");
    return;
  }

  const room = hotel.rooms.find((r) => r.number === number);
  room.book();
  room.setCardNumber(prompt("Enter your card: "));
  room.bookedBy = userLogged;

  hotel.saveToLocalStorage();

  alert(
    `Room ${room.number} has been booked by ${
      room.bookedBy
    }\nCard Number: ${room.getCardNumber()}`
  );
  ui.renderRooms();
}

function cancelBooking(number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.cancelBooking());
    room.bookedBy = null;

    hotel.saveToLocalStorage();

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
  const userLogin = document.getElementById("username").value.trim();
  const userPass = document.getElementById("password").value.trim();

  const logged = userManager.login(userLogin, userPass);
  if (logged) {
    document.getElementById(
      "userStatus"
    ).textContent = `Logged as ${userLogin}`;
    sessionStorage.setItem("loggedInUsers", JSON.stringify(logged));
    userLogged = userLogin;
    ui.updateUser(userLogged);
    updateLogStatus();
    ui.renderRooms();
  }
}
function logoutUser() {
  sessionStorage.removeItem("loggedInUsers");
  userLogged = null;
  ui.updateUser(userLogged);
  updateLogStatus();
  ui.renderRooms();
  alert("You are logged out");
}

function updateLogStatus() {
  const status = document.getElementById("userStatus");
  const logoutBtn = document.querySelector(".logout");
  if (userLogged) {
    status.style.color = "green";
    logoutBtn.style.display = "inline-block";
  } else {
    status.style.color = "gray";
    status.textContent = "Not logged in";
    logoutBtn.style.display = "none";
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
window.logoutUser = logoutUser;

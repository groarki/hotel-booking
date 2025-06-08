import Hotel from "./modules/Hotel";
import { Room, PremiumRoom } from "./modules/Room";
import UI from "./modules/servises/UI";
import UserManager from "./modules/servises/userManager";

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

loadRoomsWithReviews();

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
  loadRoomsWithReviews();
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
  loadRoomsWithReviews();
}

function cancelBooking(number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.cancelBooking());
    room.bookedBy = null;

    hotel.saveToLocalStorage();

    loadRoomsWithReviews();
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
    loadRoomsWithReviews();
  }
}

function logoutUser() {
  sessionStorage.removeItem("loggedInUsers");
  userLogged = null;
  ui.updateUser(userLogged);
  updateLogStatus();
  loadRoomsWithReviews();
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

async function editReview(id) {
  const roomNumber = parseInt(
    window.prompt("Wprowadż numer pokoju dla recenzji")
  );

  if (isNaN(roomNumber) || roomNumber <= 0)
    return alert("Wprowadż istniejący numer pokoju");

  const email = window.prompt("Wprowadż email");
  const body = window.prompt("Zmień recenzje");

  if (!email || !body) alert("Musisz wpisać chociaż coś :(");

  try {
    const response = await fetch(`http://localhost:3000/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomNumber, email, body }),
    });
    if (response.ok) {
      alert("Recenzja została zmieniona!");

      loadRoomsWithReviews();

      const commentsDiv = document.querySelector(".commentsCont");
      if (commentsDiv) {
        location.reload();
      }
    } else {
      alert("Failed to update review");
    }
  } catch (error) {
    alert("Error while editing review:", error);
  }
}

async function deleteReview(id, roomNumber) {
  const confirmed = confirm("Napewno chcesz usunąć tę recenzje?");
  if (!confirmed) return;

  try {
    const response = await fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert(`Recenzja została usunięta z pokoju nr ${roomNumber}`);
      loadRoomsWithReviews();

      const commentsDiv = document.querySelector(".commentsCont");
      if (commentsDiv) {
        location.reload();
      }
    } else {
      alert("Failed to delete review");
    }
  } catch (error) {
    alert("Error while deleting review", error);
  }
}

async function loadRoomsWithReviews() {
  try {
    const response = await fetch("http://localhost:3000/reviews");
    if (response.ok) {
      const reviews = await response.json();
      ui.renderRooms(reviews);
    } else {
      ui.renderRooms([]);
    }
  } catch (error) {
    console.error("Error loading reviews:", error);
    ui.renderRooms([]);
  }
}

async function loadReviews(btn, number) {
  const roomDiv = btn.closest(".Room");
  const isComments = roomDiv.querySelector(".commentsCont");

  if (isComments) {
    isComments.remove();
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/reviews");
    const reviews = await response.json();

    const sample = reviews.filter((r) => r.roomNumber === number).slice(0, 3);

    const markup = `
      <div class="commentsCont">
        <h4>Reviews</h4>
        ${
          sample.length > 0
            ? sample
                .map(
                  ({ email, body, id }) =>
                    `<p><span class="rev-span">${email}:</span> ${body}</p>
                  <button onclick="editReview('${id}')">Edit</button>
                  <button onclick="deleteReview('${id}', '${number}')">Delete</button>`
                )
                .join("")
            : "<p>No reviews for this room yet.</p>"
        }
      </div>
    `;

    roomDiv.insertAdjacentHTML("beforeend", markup);
  } catch (error) {
    console.error("Error loading reviews:", error);
    roomDiv.insertAdjacentHTML("beforeend", `<p>Error loading reviews.</p>`);
  }
}

async function addReview(event) {
  event.preventDefault();

  const email = document.getElementById("reviewEmail").value.trim();
  const roomNumber = parseInt(
    document.getElementById("reviewRoom").value.trim()
  );
  const body = document.getElementById("reviewBody").value.trim();

  if (!email || !roomNumber || !body) {
    alert("All fields are required.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomNumber, email, body }),
    });
    if (response.ok) {
      alert("Review added!");
      loadRoomsWithReviews();
    }
  } catch (error) {
    console.error("Error adding review:", error);
    alert("Failed to add review.");
  }
}

export {
  bookRoom,
  cancelBooking,
  loadReviews,
  registerUser,
  loginUser,
  addReview,
};

window.bookRoom = bookRoom;
window.cancelBooking = cancelBooking;
window.registerUser = registerUser;
window.loadReviews = loadReviews;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.addReview = addReview;
window.editReview = editReview;
window.deleteReview = deleteReview;
window.loadRoomsWithReviews = loadRoomsWithReviews;

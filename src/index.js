const Hotel = require("./modules/Hotel");
const Room = require("./modules/Room");
const UI = require("./modules/UI");
const PremiumRoom = require("./modules/PremiumRoom");

const hotel = new Hotel("Aliance Hotel");
global.hotelInstance = hotel;

if (hotel.rooms.length === 0) {
  const room1 = new Room(1, "single");
  const room2 = new Room(2, "double");
  const room3 = new Room(3, "suite");
  const room4 = new PremiumRoom(4, "double", "Gym free access");
  const room5 = new PremiumRoom(5, "suite", "All Inclusive");
  const room6 = new PremiumRoom(6, "double", "Abonement to SPA");

  hotel.addRoom(room1);
  hotel.addRoom(room2);
  hotel.addRoom(room3);
  hotel.addRoom(room4);
  hotel.addRoom(room5);
  hotel.addRoom(room6);

  hotel.saveToLocalStorage();
} else {
  hotel.loadFromLocalStorage();
}

const ui = new UI(hotel);
ui.renderRooms();

global.bookRoom = function (number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.book());
    ui.renderRooms();
  }
};

global.cancelBooking = function (number) {
  const room = hotel.rooms.find((r) => r.number === number);
  if (room) {
    alert(room.cancelBooking());
    ui.renderRooms();
  }
};

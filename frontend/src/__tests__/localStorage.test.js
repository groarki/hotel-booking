import Hotel from "../modules/Hotel";
import { Room } from "../modules/Room";

beforeAll(() => {
  global.localStorage = {
    data: {},
    setItem(key, value) {
      this.data[key] = value;
    },
    getItem(key) {
      return this.data[key] || null;
    },
    removeItem(key) {
      delete this.data[key];
    },
    clear() {
      this.data = {};
    },
  };
});

test("saves booked rooms to localstorage", () => {
  const hotel = new Hotel("Colli Hotel");
  const room = new Room(1, "single", hotel);
  hotel.addRoom(room);
  room.book();
  hotel.saveToLocalStorage();

  const roomData = {
    number: room.number,
    type: room.type,
    isAvailable: room.isAvailable,
  };

  const savedData = JSON.parse(localStorage.getItem("Colli Hotel"));
  expect(savedData[0]).toMatchObject(roomData);
});

test("gets the saved data from localstorage", () => {
  const hotel = new Hotel("Colli Hotel");
  hotel.loadFromLocalStorage();
  const loadedRoom = {
    number: 1,
    type: "single",
    isAvailable: false,
  };
  const newRooms = hotel.rooms;
  expect(newRooms[0]).toMatchObject(loadedRoom);
});

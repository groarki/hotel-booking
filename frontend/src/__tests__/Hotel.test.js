import { Room } from "../modules/Room";
import Hotel from "../modules/Hotel";

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

test("method getavailable gets only available rooms", () => {
  const hotel = new Hotel("Test Hotel");
  const room = new Room(1, "single", hotel);
  const room1 = new Room(2, "single", hotel);
  hotel.addRoom(room);
  hotel.addRoom(room1);
  room.book();
  room1.book();
  const available = hotel.getAvailableRooms();
  expect(available.length).toBe(0);
});

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

test("booking a room sets isAvailable to false", () => {
  const hotel = new Hotel("Test Hotel");
  const room = new Room(1, "single", hotel);
  room.book();
  expect(room.isAvailable).toBe(false);
});

test("canceling booking sets isAvailable to true", () => {
  const hotel = new Hotel("Test Hotel");
  const room = new Room(1, "single", hotel);
  room.cancelBooking();
  expect(room.isAvailable).toBe(true);
});

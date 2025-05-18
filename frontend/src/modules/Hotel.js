import { Room, PremiumRoom } from "./Room";

class Hotel {
  constructor(name) {
    (this.rooms = []), (this.name = name);
  }

  addRoom(room) {
    this.rooms.push(room);
    this.saveToLocalStorage();
    return `Room ${room.number} has been added`;
  }

  getAvailableRooms() {
    return this.rooms.filter((room) => room.isAvailable);
  }

  saveToLocalStorage() {
    const roomsData = this.rooms.map((room) => {
      const roomData = {
        number: room.number,
        type: room.type,
        isAvailable: room.isAvailable,
        bookedBy: room.bookedBy,
      };

      if (room.premiumService) {
        roomData.premiumService = room.premiumService;
      }
      return roomData;
    });

    localStorage.setItem(this.name, JSON.stringify(roomsData));
  }

  loadFromLocalStorage() {
    const savedData = localStorage.getItem(this.name);

    if (savedData) {
      const roomsData = JSON.parse(savedData);

      this.rooms = [];

      roomsData.forEach((roomData) => {
        let room;

        if (roomData.premiumService) {
          room = new PremiumRoom(
            roomData.number,
            roomData.type,
            roomData.premiumService,
            this
          );
        } else {
          room = new Room(roomData.number, roomData.type, this);
        }

        room.isAvailable = roomData.isAvailable;
        room.bookedBy = roomData.bookedBy || null;

        this.rooms.push(room);
      });
    }
  }
}

export default Hotel;

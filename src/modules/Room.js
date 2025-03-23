class Room {
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.isAvailable = true;
  }
  book() {
    this.isAvailable = false;
    this.saveChanges();
    return `Room ${this.number} has been booked`;
  }
  cancelBooking() {
    this.isAvailable = true;
    this.saveChanges();
    return `Room ${this.number} is free`;
  }

  saveChanges() {
    global.hotelInstance.saveToLocalStorage();
  }
}

module.exports = Room;

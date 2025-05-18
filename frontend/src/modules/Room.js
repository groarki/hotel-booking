class Room {
  #cardNumber;

  constructor(number, type, hotel) {
    this.number = number;
    this.type = type;
    this.isAvailable = true;
    this.hotel = hotel;
    this.bookedBy;
  }
  book() {
    this.isAvailable = false;
    this.saveChanges();
  }
  cancelBooking() {
    this.isAvailable = true;
    this.saveChanges();
    return `Room ${this.number} is free`;
  }

  saveChanges() {
    this.hotel.saveToLocalStorage();
  }

  setCardNumber(number) {
    if (!/^\d{16}$/.test(number)) {
      alert("Card number must be 16 digits long");
      return;
    }

    this.#cardNumber = number;
  }
  getCardNumber() {
    if (!this.#cardNumber) return "Invalid card number";
    return "**** **** ****" + this.#cardNumber.slice(-4);
  }
}

class PremiumRoom extends Room {
  constructor(number, type, premiumService, hotel) {
    super(number, type, hotel);
    this.premiumService = premiumService;
  }

  book() {
    return super.book();
  }

  cancelBooking() {
    return super.cancelBooking();
  }
}
export { Room, PremiumRoom };

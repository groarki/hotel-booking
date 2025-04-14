class Room {
  #cardNumber;

  constructor(number, type, hotel) {
    this.number = number;
    this.type = type;
    this.isAvailable = true;
    this.hotel = hotel;
  }
  book(username) {
    this.setCardNumber(prompt("Enter your card: "));

    if (!this.#cardNumber) {
      return "Error: Booking canceled due to invalid card";
    }
    this.isAvailable = false;
    this.saveChanges();
    return `Room ${
      this.number
    } has been booked by ${username}\nCard Number: ${this.getCardNumber()} `;
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
    if (!number || number?.length < 16) {
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

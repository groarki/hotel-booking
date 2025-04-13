const Room = require("./Room");

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

module.exports = PremiumRoom;

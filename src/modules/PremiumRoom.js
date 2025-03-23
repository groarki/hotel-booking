const Room = require("./Room");

class PremiumRoom extends Room {
  constructor(number, type, premiumService) {
    super(number, type);
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

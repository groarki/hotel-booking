class UI {
  constructor(hotel, userLogged) {
    this.hotel = hotel;
    this.userLogged = userLogged;
  }
  updateUser(user) {
    this.userLogged = user;
  }
  renderRooms(reviews = []) {
    const container = document.getElementById("roomsContainer");
    container.innerHTML = "";

    this.hotel.rooms.forEach((room) => {
      const count = reviews.filter((r) => r.roomNumber === room.number).length;

      const isPremium = room.premiumService
        ? `<p><strong>Premium Service:</strong> ${room.premiumService}</p>`
        : "";
      const premiumClass = room.premiumService ? "premium-room" : "";
      const bookedBy = room.bookedBy
        ? `<p><strong>Booked by:</strong> ${room.bookedBy}</p>`
        : "";
      const roomDiv = document.createElement("div");
      roomDiv.className = `Room ${premiumClass} ${
        room.isAvailable ? "" : "booked"
      }`;
      roomDiv.innerHTML = `
        <h3>Room ${room.number} (${room.type})</h3>
        <p>Status: ${room.isAvailable ? "Available" : "Booked"}</p>
        ${isPremium}
        ${bookedBy}
        <p><strong>Reviews: ${count} </strong></p>
        <button onclick="bookRoom(${room.number})" ${
        room.isAvailable && this.userLogged ? "" : "disabled"
      }>Book</button>
        <button onclick="cancelBooking(${room.number})" ${
        !this.userLogged ||
        room.isAvailable ||
        room.bookedBy !== this.userLogged
          ? "disabled"
          : ""
      }>Cancel</button>
      <button onclick="loadReviews(this, ${room.number})" ${
        count <= 0 ? "disabled" : ""
      }>Load Reviews</button>`;

      container.appendChild(roomDiv);
    });
    this.hotel.saveToLocalStorage();
  }
}

export default UI;

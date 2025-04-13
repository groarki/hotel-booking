class HotelApi {
  static async loadReviews() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const comments = await res.json();
    const mixed = comments.sort(() => Math.random() - 0.5).slice(0, 3);
    return mixed;
  }
}

module.exports = HotelApi;

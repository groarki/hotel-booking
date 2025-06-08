import User from "../Users";

class UserManager {
  constructor() {}

  async register(username, password) {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = new User(username, password);
      }
    } catch (error) {}
    alert("Problem occured", error);
  }

  async login(username, password) {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      sessionStorage.setItem("LoggedUsers", JSON.stringify({ username }));
    } catch (error) {
      alert("Username or password is invalid, please try again");
    }
  }

  // saveUser() {
  //   const saveData = this.users.map((u) => u.toJSON());
  //   localStorage.setItem("users", JSON.stringify(saveData));
  // }

  // loadUser() {
  //   const savedUser = localStorage.getItem("users");
  //   if (savedUser) {
  //     const parsed = JSON.parse(savedUser);
  //     this.users = parsed.map((u) => new User(u.username, u.password));
  //   }
  // }
}

export default UserManager;

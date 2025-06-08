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
        alert("Registration successful");
        return new User(username, password);
      } else {
        const error = await response.json();
        alert(error.error || "Registration failed");
        return null;
      }
    } catch (error) {}
    alert("Problem occured", error);
    return null;
  }

  async login(username, password) {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        return { username };
      } else {
        const error = await response.json();
        alert(error.error || "Login failed");
        return null;
      }
    } catch (error) {
      alert("Username or password is invalid, please try again");
      return null;
    }
  }
}

export default UserManager;

import User from "../Users";

class UserManager {
  constructor() {
    this.users = [];
    this.loadUser();
  }

  register(username, password) {
    const exist = this.users.find((user) => user.username === username);
    if (exist) alert("This username is already taken");
    const user = new User(username, password);
    this.users.push(user);
    this.saveUser();
    return user;
  }

  login(username, password) {
    const user = this.users.find((u) => u.username === username);
    if (!user) {
      alert("User with this username is not found ;(");
      return;
    }
    if (!user.validatePassword(password)) {
      alert("Password is incorrect. Try again");
      return;
    }
    return user;
  }

  saveUser() {
    const saveData = this.users.map((u) => u.toJSON());
    localStorage.setItem("users", JSON.stringify(saveData));
  }

  loadUser() {
    const savedUser = localStorage.getItem("users");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      this.users = parsed.map((u) => new User(u.username, u.password));
    }
  }
}

export default UserManager;

class User {
  #password;
  constructor(username, password) {
    this.username = username;
    this.setPassword(password);
  }
  setPassword(password) {
    if (password.length < 6) {
      throw alert("Password must be minimum 6 characters long");
    }
    this.#password = password;
  }

  validatePassword(inputPassword) {
    return this.#password === inputPassword;
  }

  getPassword() {
    return this.#password;
  }

  toJSON() {
    return {
      username: this.username,
      password: this.#password,
    };
  }
}

export default User;

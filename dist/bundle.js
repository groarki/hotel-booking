/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Hotel = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\r\nconst Room = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\r\nconst UI = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\r\nconst PremiumRoom = __webpack_require__(/*! ./modules/PremiumRoom */ \"./src/modules/PremiumRoom.js\");\r\nconst User = __webpack_require__(/*! ./modules/Users */ \"./src/modules/Users.js\");\r\nconst UserManager = __webpack_require__(/*! ./modules/userManager */ \"./src/modules/userManager.js\");\r\nconst HotelApi = __webpack_require__(/*! ./modules/HotelApi */ \"./src/modules/HotelApi.js\");\r\n\r\nconst hotel = new Hotel(\"Aliance Hotel\");\r\nhotel.loadFromLocalStorage();\r\n\r\nconst userManager = new UserManager();\r\n\r\nif (hotel.rooms.length === 0) {\r\n  const room1 = new Room(1, \"single\", hotel);\r\n  const room2 = new Room(2, \"double\", hotel);\r\n  const room3 = new Room(3, \"suite\", hotel);\r\n  const room4 = new PremiumRoom(4, \"double\", \"Gym free access\", hotel);\r\n  const room5 = new PremiumRoom(5, \"suite\", \"All Inclusive\", hotel);\r\n  const room6 = new PremiumRoom(6, \"double\", \"Abonement to SPA\", hotel);\r\n\r\n  hotel.addRoom(room1);\r\n  hotel.addRoom(room2);\r\n  hotel.addRoom(room3);\r\n  hotel.addRoom(room4);\r\n  hotel.addRoom(room5);\r\n  hotel.addRoom(room6);\r\n\r\n  hotel.saveToLocalStorage();\r\n}\r\n\r\nconst ui = new UI(hotel);\r\nui.renderRooms();\r\n\r\nwindow.bookRoom = function (number) {\r\n  const room = hotel.rooms.find((r) => r.number === number);\r\n  const userLogin = document.getElementById(\"username\").value;\r\n  const userPass = document.getElementById(\"password\").value;\r\n  const logged = userManager.login(userLogin, userPass);\r\n  if (!logged) {\r\n    alert(\"Log in for booking!\");\r\n    return;\r\n  }\r\n  alert(room.book(userLogin));\r\n  ui.renderRooms();\r\n};\r\n\r\nwindow.cancelBooking = function (number) {\r\n  const room = hotel.rooms.find((r) => r.number === number);\r\n  if (room) {\r\n    alert(room.cancelBooking());\r\n    ui.renderRooms();\r\n  }\r\n};\r\n\r\nwindow.registerUser = function () {\r\n  const userLogin = document.getElementById(\"username\").value;\r\n  const userPass = document.getElementById(\"password\").value;\r\n  const registered = userManager.register(userLogin, userPass);\r\n  if (registered) {\r\n    document.getElementById(\"userStatus\").textContent =\r\n      \"Registration succeed! Log in please\";\r\n  }\r\n};\r\n\r\nwindow.loginUser = function () {\r\n  const userLogin = document.getElementById(\"username\").value;\r\n  const userPass = document.getElementById(\"password\").value;\r\n  const logged = userManager.login(userLogin, userPass);\r\n  if (logged) {\r\n    document.getElementById(\r\n      \"userStatus\"\r\n    ).textContent = `Logged as ${userLogin}`;\r\n  }\r\n};\r\n\r\nwindow.loadReviews = async function (btn) {\r\n  const roomDiv = btn.closest(\".Room\");\r\n  const isComments = roomDiv.querySelector(\".commentsCont\");\r\n\r\n  if (isComments) {\r\n    isComments.remove();\r\n    return;\r\n  }\r\n\r\n  const res = await HotelApi.loadReviews();\r\n  const threeComments = res.slice(0, 3);\r\n  const markup = `\r\n    <div class=\"commentsCont\">\r\n      <h4>Reviews</h4>\r\n      ${threeComments\r\n        .map(({ email, body }) => {\r\n          return `<p><span class=\"rev-span\">${email}:</span> ${body}</p>`;\r\n        })\r\n        .join(\"\")}\r\n    </div>\r\n  `;\r\n\r\n  roomDiv.insertAdjacentHTML(\"beforeend\", markup);\r\n};\r\n\r\nmodule.exports = { bookRoom, cancelBooking, loadReviews, registerUser };\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./Room */ \"./src/modules/Room.js\");\r\nconst PremiumRoom = __webpack_require__(/*! ./PremiumRoom */ \"./src/modules/PremiumRoom.js\");\r\n\r\nclass Hotel {\r\n  constructor(name) {\r\n    (this.rooms = []), (this.name = name);\r\n  }\r\n\r\n  addRoom(room) {\r\n    this.rooms.push(room);\r\n    this.saveToLocalStorage();\r\n    return `Room ${room.number} has been added`;\r\n  }\r\n\r\n  getAvailableRooms() {\r\n    return this.rooms.filter((room) => room.isAvailable);\r\n  }\r\n\r\n  saveToLocalStorage() {\r\n    const roomsData = this.rooms.map((room) => {\r\n      const roomData = {\r\n        number: room.number,\r\n        type: room.type,\r\n        isAvailable: room.isAvailable,\r\n      };\r\n\r\n      if (room.premiumService) {\r\n        roomData.premiumService = room.premiumService;\r\n      }\r\n      return roomData;\r\n    });\r\n\r\n    localStorage.setItem(this.name, JSON.stringify(roomsData));\r\n  }\r\n\r\n  loadFromLocalStorage() {\r\n    const savedData = localStorage.getItem(this.name);\r\n\r\n    if (savedData) {\r\n      const roomsData = JSON.parse(savedData);\r\n\r\n      this.rooms = [];\r\n\r\n      roomsData.forEach((roomData) => {\r\n        let room;\r\n\r\n        if (roomData.premiumService) {\r\n          room = new PremiumRoom(\r\n            roomData.number,\r\n            roomData.type,\r\n            roomData.premiumService,\r\n            this\r\n          );\r\n        } else {\r\n          room = new Room(roomData.number, roomData.type, this);\r\n        }\r\n\r\n        room.isAvailable = roomData.isAvailable;\r\n\r\n        this.rooms.push(room);\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = Hotel;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/HotelApi.js":
/*!*********************************!*\
  !*** ./src/modules/HotelApi.js ***!
  \*********************************/
/***/ ((module) => {

eval("class HotelApi {\r\n  static async loadReviews() {\r\n    const res = await fetch(\r\n      \"https://jsonplaceholder.typicode.com/posts/1/comments\"\r\n    );\r\n    const comments = await res.json();\r\n    const mixed = comments.sort(() => Math.random() - 0.5).slice(0, 3);\r\n    return mixed;\r\n  }\r\n}\r\n\r\nmodule.exports = HotelApi;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/HotelApi.js?");

/***/ }),

/***/ "./src/modules/PremiumRoom.js":
/*!************************************!*\
  !*** ./src/modules/PremiumRoom.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./Room */ \"./src/modules/Room.js\");\r\n\r\nclass PremiumRoom extends Room {\r\n  constructor(number, type, premiumService, hotel) {\r\n    super(number, type, hotel);\r\n    this.premiumService = premiumService;\r\n  }\r\n\r\n  book() {\r\n    return super.book();\r\n  }\r\n\r\n  cancelBooking() {\r\n    return super.cancelBooking();\r\n  }\r\n}\r\n\r\nmodule.exports = PremiumRoom;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/PremiumRoom.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Room {\r\n  #cardNumber;\r\n\r\n  constructor(number, type, hotel) {\r\n    this.number = number;\r\n    this.type = type;\r\n    this.isAvailable = true;\r\n    this.hotel = hotel;\r\n  }\r\n  book(username) {\r\n    this.setCardNumber(prompt(\"Enter your card: \"));\r\n\r\n    if (!this.#cardNumber) {\r\n      return \"Error: Booking canceled due to invalid card\";\r\n    }\r\n    this.isAvailable = false;\r\n    this.saveChanges();\r\n    return `Room ${\r\n      this.number\r\n    } has been booked by ${username}\\nCard Number: ${this.getCardNumber()} `;\r\n  }\r\n  cancelBooking() {\r\n    this.isAvailable = true;\r\n    this.saveChanges();\r\n    return `Room ${this.number} is free`;\r\n  }\r\n\r\n  saveChanges() {\r\n    this.hotel.saveToLocalStorage();\r\n  }\r\n\r\n  setCardNumber(number) {\r\n    if (!number || number?.length < 16) {\r\n      alert(\"Card number must be 16 digits long\");\r\n      return;\r\n    }\r\n\r\n    this.#cardNumber = number;\r\n  }\r\n  getCardNumber() {\r\n    if (!this.#cardNumber) return \"Invalid card number\";\r\n    return \"**** **** ****\" + this.#cardNumber.slice(-4);\r\n  }\r\n}\r\n\r\nmodule.exports = Room;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\r\n  bookRoom,\r\n  cancelBooking,\r\n  loadReviews,\r\n  registerUser,\r\n} = __webpack_require__(/*! ../index */ \"./src/index.js\");\r\n\r\nclass UI {\r\n  constructor(hotel) {\r\n    this.hotel = hotel;\r\n  }\r\n  renderRooms() {\r\n    const container = document.getElementById(\"roomsContainer\");\r\n    container.innerHTML = \"\";\r\n\r\n    this.hotel.rooms.forEach((room) => {\r\n      const isPremium = room.premiumService\r\n        ? `<p><strong>Premium Service:</strong> ${room.premiumService}</p>`\r\n        : \"\";\r\n      const premiumClass = room.premiumService ? \"premium-room\" : \"\";\r\n\r\n      const roomDiv = document.createElement(\"div\");\r\n      roomDiv.className = `Room ${premiumClass} ${\r\n        room.isAvailable ? \"\" : \"booked\"\r\n      }`;\r\n      roomDiv.innerHTML = `\r\n        <h3>Room ${room.number} (${room.type})</h3>\r\n        <p>Status: ${room.isAvailable ? \"Available\" : \"Booked\"}</p>\r\n        ${isPremium}\r\n        <button onclick=\"bookRoom(${room.number})\" ${\r\n        room.isAvailable ? \"\" : \"disabled\"\r\n      }>Book</button>\r\n        <button onclick=\"cancelBooking(${room.number})\" ${\r\n        room.isAvailable ? \"disabled\" : \"\"\r\n      }>Cancel</button>\r\n      <button onclick=\"loadReviews(this)\">Load Reviews</button>\r\n        `;\r\n      container.appendChild(roomDiv);\r\n    });\r\n  }\r\n}\r\n\r\nmodule.exports = UI;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/Users.js":
/*!******************************!*\
  !*** ./src/modules/Users.js ***!
  \******************************/
/***/ ((module) => {

eval("class User {\r\n  #password;\r\n  constructor(username, password) {\r\n    this.username = username;\r\n    this.setPassword(password);\r\n  }\r\n  setPassword(password) {\r\n    if (password.length < 6) {\r\n      throw new Error(\"Password must be minimum 6 characters long\");\r\n    }\r\n    this.#password = password;\r\n  }\r\n\r\n  validatePassword(inputPassword) {\r\n    return this.#password === inputPassword;\r\n  }\r\n\r\n  getPassword() {\r\n    return this.#password;\r\n  }\r\n\r\n  toJSON() {\r\n    return {\r\n      username: this.username,\r\n      password: this.#password,\r\n    };\r\n  }\r\n}\r\n\r\nmodule.exports = User;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/Users.js?");

/***/ }),

/***/ "./src/modules/userManager.js":
/*!************************************!*\
  !*** ./src/modules/userManager.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const User = __webpack_require__(/*! ./Users */ \"./src/modules/Users.js\");\r\n\r\nclass UserManager {\r\n  constructor() {\r\n    this.users = [];\r\n    this.loadUser();\r\n  }\r\n\r\n  register(username, password) {\r\n    const exist = this.users.find((user) => user.username === username);\r\n    if (exist) throw new Error(\"This username is already taken\");\r\n    const user = new User(username, password);\r\n    this.users.push(user);\r\n    this.saveUser();\r\n    return user;\r\n  }\r\n\r\n  login(username, password) {\r\n    const user = this.users.find((u) => u.username === username);\r\n    if (!user) {\r\n      return null;\r\n    }\r\n    if (!user.validatePassword(password)) {\r\n      alert(\"Password is incorrect. Try again\");\r\n      return;\r\n    }\r\n    return user;\r\n  }\r\n\r\n  saveUser() {\r\n    const saveData = this.users.map((u) => u.toJSON());\r\n    localStorage.setItem(\"users\", JSON.stringify(saveData));\r\n  }\r\n\r\n  loadUser() {\r\n    const savedUser = localStorage.getItem(\"users\");\r\n    if (savedUser) {\r\n      const parsed = JSON.parse(savedUser);\r\n      this.users = parsed.map((u) => new User(u.username, u.password));\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = UserManager;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/userManager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
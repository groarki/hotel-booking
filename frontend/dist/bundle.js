/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `h3 {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n}\n\n#roomsContainer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.Room {\n  border: 1px solid lightgrey;\n  border-radius: 16px;\n  padding: 36px;\n  margin: 12px;\n  width: 380px;\n  height: fit-content;\n  background-color: rgba(190, 190, 190, 0.2);\n  box-shadow: 0 0 5px rgba(51, 0, 102, 0.5);\n}\n.Room.premium-room {\n  border-color: rgb(255, 215, 0);\n  background-color: #fff6f1;\n  box-shadow: 0 0 10px rgba(187, 161, 79, 0.7);\n}\n.Room.booked {\n  background-color: rgb(228, 150, 150);\n  border: none;\n  box-shadow: 0 0 10px rgb(205, 59, 59);\n}\n\n.rev-span {\n  color: black;\n  font-weight: 600;\n  font-style: bold;\n}\n\n#userStatus {\n  color: green;\n}\n\n#reviewHead {\n  margin: 16px 0;\n}\n\n#reviewForm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#reviewEmail,\n#reviewRoom {\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 8px;\n  width: 180px;\n  height: 36px;\n  background-color: #e4e5e6;\n  border: none;\n}\n\n#reviewBody {\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 8px;\n  width: 180px;\n  background-color: #e4e5e6;\n  border: none;\n  resize: none;\n}\n\n#reviewBtn {\n  border: none;\n  padding: 8px;\n  width: 148px;\n  height: 36px;\n  border-radius: 8px;\n  color: #313130;\n  background-color: #BCDFD1;\n  cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hotel-booking/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hotel-booking/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hotel-booking/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hotel-booking/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hotel-booking/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hotel-booking/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hotel-booking/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hotel-booking/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hotel-booking/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addReview: () => (/* binding */ addReview),\n/* harmony export */   bookRoom: () => (/* binding */ bookRoom),\n/* harmony export */   cancelBooking: () => (/* binding */ cancelBooking),\n/* harmony export */   loadReviews: () => (/* binding */ loadReviews),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser)\n/* harmony export */ });\n/* harmony import */ var _modules_Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\n/* harmony import */ var _modules_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\n/* harmony import */ var _modules_servises_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/servises/UI */ \"./src/modules/servises/UI.js\");\n/* harmony import */ var _modules_servises_userManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/servises/userManager */ \"./src/modules/servises/userManager.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst hotel = new _modules_Hotel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Aliance Hotel\");\r\nconst userManager = new _modules_servises_userManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nhotel.loadFromLocalStorage();\r\n\r\nlet userLogged = null;\r\n\r\nconst savedUser = sessionStorage.getItem(\"loggedInUsers\");\r\nif (savedUser) {\r\n  const user = JSON.parse(savedUser);\r\n  userLogged = user.username;\r\n  document.getElementById(\"userStatus\").textContent = `Logged as ${userLogged}`;\r\n}\r\n\r\nconst ui = new _modules_servises_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"](hotel, userLogged);\r\n\r\nui.updateUser(userLogged);\r\nupdateLogStatus();\r\nui.renderRooms();\r\n\r\nif (hotel.rooms.length === 0) {\r\n  const room1 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__.Room(1, \"single\", hotel);\r\n  const room2 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__.Room(2, \"double\", hotel);\r\n  const room3 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__.Room(3, \"suite\", hotel);\r\n  const room4 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__.PremiumRoom(4, \"double\", \"Gym free access\", hotel);\r\n  const room5 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__.PremiumRoom(5, \"suite\", \"All Inclusive\", hotel);\r\n  const room6 = new _modules_Room__WEBPACK_IMPORTED_MODULE_1__.PremiumRoom(6, \"double\", \"Abonement to SPA\", hotel);\r\n\r\n  hotel.addRoom(room1);\r\n  hotel.addRoom(room2);\r\n  hotel.addRoom(room3);\r\n  hotel.addRoom(room4);\r\n  hotel.addRoom(room5);\r\n  hotel.addRoom(room6);\r\n\r\n  hotel.saveToLocalStorage();\r\n}\r\n\r\nfunction bookRoom(number) {\r\n  if (!userLogged) {\r\n    alert(\"Log in for booking!\");\r\n    return;\r\n  }\r\n\r\n  const room = hotel.rooms.find((r) => r.number === number);\r\n  room.book();\r\n  room.setCardNumber(prompt(\"Enter your card: \"));\r\n  room.bookedBy = userLogged;\r\n\r\n  hotel.saveToLocalStorage();\r\n\r\n  alert(\r\n    `Room ${room.number} has been booked by ${\r\n      room.bookedBy\r\n    }\\nCard Number: ${room.getCardNumber()}`\r\n  );\r\n  ui.renderRooms();\r\n}\r\n\r\nfunction cancelBooking(number) {\r\n  const room = hotel.rooms.find((r) => r.number === number);\r\n  if (room) {\r\n    alert(room.cancelBooking());\r\n    room.bookedBy = null;\r\n\r\n    hotel.saveToLocalStorage();\r\n\r\n    ui.renderRooms();\r\n  }\r\n}\r\n\r\nfunction registerUser() {\r\n  const userLogin = document.getElementById(\"username\").value;\r\n  const userPass = document.getElementById(\"password\").value;\r\n  const registered = userManager.register(userLogin, userPass);\r\n  if (registered) {\r\n    document.getElementById(\"userStatus\").textContent =\r\n      \"Registration succeed! Log in please\";\r\n  }\r\n}\r\n\r\nfunction loginUser() {\r\n  const userLogin = document.getElementById(\"username\").value.trim();\r\n  const userPass = document.getElementById(\"password\").value.trim();\r\n\r\n  const logged = userManager.login(userLogin, userPass);\r\n  if (logged) {\r\n    document.getElementById(\r\n      \"userStatus\"\r\n    ).textContent = `Logged as ${userLogin}`;\r\n    sessionStorage.setItem(\"loggedInUsers\", JSON.stringify(logged));\r\n    userLogged = userLogin;\r\n    ui.updateUser(userLogged);\r\n    updateLogStatus();\r\n    ui.renderRooms();\r\n  }\r\n}\r\n\r\nfunction logoutUser() {\r\n  sessionStorage.removeItem(\"loggedInUsers\");\r\n  userLogged = null;\r\n  ui.updateUser(userLogged);\r\n  updateLogStatus();\r\n  ui.renderRooms();\r\n  alert(\"You are logged out\");\r\n}\r\n\r\nfunction updateLogStatus() {\r\n  const status = document.getElementById(\"userStatus\");\r\n  const logoutBtn = document.querySelector(\".logout\");\r\n  if (userLogged) {\r\n    status.style.color = \"green\";\r\n    logoutBtn.style.display = \"inline-block\";\r\n  } else {\r\n    status.style.color = \"gray\";\r\n    status.textContent = \"Not logged in\";\r\n    logoutBtn.style.display = \"none\";\r\n  }\r\n}\r\n\r\nasync function editReview(id, btn) {\r\n  const roomNumber = parseInt(\r\n    window.prompt(\"Wprowadż numer pokoju dla recenji\")\r\n  );\r\n\r\n  if (isNaN(roomNumber) || roomNumber <= 0)\r\n    return window.alert(\"Wprowadż istniejący numer pokoju\");\r\n\r\n  const email = window.prompt(\"Wprowadż email\");\r\n  const body = window.prompt(\"Zmień recenzje\");\r\n\r\n  if (!email || !body) return window.alert(\"Musisz wpisać chociaż coś :(\");\r\n\r\n  try {\r\n    const response = await fetch(`http://localhost:3000/reviews/${id}`, {\r\n      method: \"PUT\",\r\n      headers: { \"Content-Type\": \"application/json\" },\r\n      body: JSON.stringify({ roomNumber, email, body }),\r\n    });\r\n    if (response.ok) {\r\n      window.alert(\"Recenjia została zmieniona!\");\r\n      loadReviews(btn, roomNumber);\r\n    }\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\nasync function loadReviews(btn, number) {\r\n  // тепер передаємо room як об'єкт\r\n  const roomDiv = btn.closest(\".Room\");\r\n  const isComments = roomDiv.querySelector(\".commentsCont\");\r\n\r\n  if (isComments) {\r\n    isComments.remove();\r\n    return;\r\n  }\r\n\r\n  try {\r\n    const response = await fetch(\"http://localhost:3000/reviews\");\r\n    const reviews = await response.json();\r\n\r\n    const sample = reviews.filter((r) => r.roomNumber === number).slice(0, 3);\r\n\r\n    const markup = `\r\n      <div class=\"commentsCont\">\r\n        <h4>Reviews</h4>\r\n        ${\r\n          sample.length > 0\r\n            ? sample\r\n                .map(\r\n                  ({ email, body, id }) =>\r\n                    `<p><span class=\"rev-span\">${email}:</span> ${body}</p>\r\n                  <button onclick=\"editReview('${id}, this')\">\r\n                  Edit\r\n                  </button>`\r\n                )\r\n                .join(\"\")\r\n            : \"<p>No reviews for this room yet.</p>\"\r\n        }\r\n      </div>\r\n    `;\r\n\r\n    roomDiv.insertAdjacentHTML(\"beforeend\", markup);\r\n  } catch (error) {\r\n    console.error(\"Error loading reviews:\", error);\r\n    roomDiv.insertAdjacentHTML(\"beforeend\", `<p>Error loading reviews.</p>`);\r\n  }\r\n}\r\n\r\nasync function addReview(event) {\r\n  event.preventDefault();\r\n\r\n  const email = document.getElementById(\"reviewEmail\").value.trim();\r\n  const roomNumber = parseInt(\r\n    document.getElementById(\"reviewRoom\").value.trim()\r\n  );\r\n  const body = document.getElementById(\"reviewBody\").value.trim();\r\n\r\n  if (!email || !roomNumber || !body) {\r\n    alert(\"All fields are required.\");\r\n    return;\r\n  }\r\n\r\n  try {\r\n    const response = await fetch(\"http://localhost:3000/reviews\", {\r\n      method: \"POST\",\r\n      headers: { \"Content-Type\": \"application/json\" },\r\n      body: JSON.stringify({ roomNumber, email, body }),\r\n    });\r\n    if (response.ok) {\r\n      alert(\"Review added!\");\r\n      loadReviews(event.target, roomNumber);\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error adding review:\", error);\r\n    alert(\"Failed to add review.\");\r\n  }\r\n}\r\n\r\n\r\n\r\nwindow.bookRoom = bookRoom;\r\nwindow.cancelBooking = cancelBooking;\r\nwindow.registerUser = registerUser;\r\nwindow.loadReviews = loadReviews;\r\nwindow.loginUser = loginUser;\r\nwindow.logoutUser = logoutUser;\r\nwindow.addReview = addReview;\r\nwindow.editReview = editReview;\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room */ \"./src/modules/Room.js\");\n\r\n\r\nclass Hotel {\r\n  constructor(name) {\r\n    (this.rooms = []), (this.name = name);\r\n  }\r\n\r\n  addRoom(room) {\r\n    this.rooms.push(room);\r\n    this.saveToLocalStorage();\r\n    return `Room ${room.number} has been added`;\r\n  }\r\n\r\n  getAvailableRooms() {\r\n    return this.rooms.filter((room) => room.isAvailable);\r\n  }\r\n\r\n  saveToLocalStorage() {\r\n    const roomsData = this.rooms.map((room) => {\r\n      const roomData = {\r\n        number: room.number,\r\n        type: room.type,\r\n        isAvailable: room.isAvailable,\r\n        bookedBy: room.bookedBy,\r\n      };\r\n\r\n      if (room.premiumService) {\r\n        roomData.premiumService = room.premiumService;\r\n      }\r\n      return roomData;\r\n    });\r\n\r\n    localStorage.setItem(this.name, JSON.stringify(roomsData));\r\n  }\r\n\r\n  loadFromLocalStorage() {\r\n    const savedData = localStorage.getItem(this.name);\r\n\r\n    if (savedData) {\r\n      const roomsData = JSON.parse(savedData);\r\n\r\n      this.rooms = [];\r\n\r\n      roomsData.forEach((roomData) => {\r\n        let room;\r\n\r\n        if (roomData.premiumService) {\r\n          room = new _Room__WEBPACK_IMPORTED_MODULE_0__.PremiumRoom(\r\n            roomData.number,\r\n            roomData.type,\r\n            roomData.premiumService,\r\n            this\r\n          );\r\n        } else {\r\n          room = new _Room__WEBPACK_IMPORTED_MODULE_0__.Room(roomData.number, roomData.type, this);\r\n        }\r\n\r\n        room.isAvailable = roomData.isAvailable;\r\n        room.bookedBy = roomData.bookedBy || null;\r\n\r\n        this.rooms.push(room);\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotel);\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PremiumRoom: () => (/* binding */ PremiumRoom),\n/* harmony export */   Room: () => (/* binding */ Room)\n/* harmony export */ });\nclass Room {\r\n  #cardNumber;\r\n\r\n  constructor(number, type, hotel) {\r\n    this.number = number;\r\n    this.type = type;\r\n    this.isAvailable = true;\r\n    this.hotel = hotel;\r\n    this.bookedBy;\r\n  }\r\n  book() {\r\n    this.isAvailable = false;\r\n    this.saveChanges();\r\n  }\r\n  cancelBooking() {\r\n    this.isAvailable = true;\r\n    this.saveChanges();\r\n    return `Room ${this.number} is free`;\r\n  }\r\n\r\n  saveChanges() {\r\n    this.hotel.saveToLocalStorage();\r\n  }\r\n\r\n  setCardNumber(number) {\r\n    if (!/^\\d{16}$/.test(number)) {\r\n      alert(\"Card number must be 16 digits long\");\r\n      return;\r\n    }\r\n\r\n    this.#cardNumber = number;\r\n  }\r\n  getCardNumber() {\r\n    if (!this.#cardNumber) return \"Invalid card number\";\r\n    return \"**** **** ****\" + this.#cardNumber.slice(-4);\r\n  }\r\n}\r\n\r\nclass PremiumRoom extends Room {\r\n  constructor(number, type, premiumService, hotel) {\r\n    super(number, type, hotel);\r\n    this.premiumService = premiumService;\r\n  }\r\n\r\n  book() {\r\n    return super.book();\r\n  }\r\n\r\n  cancelBooking() {\r\n    return super.cancelBooking();\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/Users.js":
/*!******************************!*\
  !*** ./src/modules/Users.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass User {\r\n  #password;\r\n  constructor(username, password) {\r\n    this.username = username;\r\n    this.setPassword(password);\r\n  }\r\n  setPassword(password) {\r\n    if (password.length < 6) {\r\n      throw alert(\"Password must be minimum 6 characters long\");\r\n    }\r\n    this.#password = password;\r\n  }\r\n\r\n  validatePassword(inputPassword) {\r\n    return this.#password === inputPassword;\r\n  }\r\n\r\n  getPassword() {\r\n    return this.#password;\r\n  }\r\n\r\n  toJSON() {\r\n    return {\r\n      username: this.username,\r\n      password: this.#password,\r\n    };\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/Users.js?");

/***/ }),

/***/ "./src/modules/servises/UI.js":
/*!************************************!*\
  !*** ./src/modules/servises/UI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass UI {\r\n  constructor(hotel, userLogged) {\r\n    this.hotel = hotel;\r\n    this.userLogged = userLogged;\r\n  }\r\n  updateUser(user) {\r\n    this.userLogged = user;\r\n  }\r\n  renderRooms() {\r\n    const container = document.getElementById(\"roomsContainer\");\r\n    container.innerHTML = \"\";\r\n\r\n    this.hotel.rooms.forEach((room) => {\r\n      const isPremium = room.premiumService\r\n        ? `<p><strong>Premium Service:</strong> ${room.premiumService}</p>`\r\n        : \"\";\r\n      const premiumClass = room.premiumService ? \"premium-room\" : \"\";\r\n      const bookedBy = room.bookedBy\r\n        ? `<p><strong>Booked by:</strong> ${room.bookedBy}</p>`\r\n        : \"\";\r\n      const roomDiv = document.createElement(\"div\");\r\n      roomDiv.className = `Room ${premiumClass} ${\r\n        room.isAvailable ? \"\" : \"booked\"\r\n      }`;\r\n      roomDiv.innerHTML = `\r\n        <h3>Room ${room.number} (${room.type})</h3>\r\n        <p>Status: ${room.isAvailable ? \"Available\" : \"Booked\"}</p>\r\n        ${isPremium}\r\n        ${bookedBy}\r\n        <button onclick=\"bookRoom(${room.number})\" ${\r\n        room.isAvailable && this.userLogged ? \"\" : \"disabled\"\r\n      }>Book</button>\r\n        <button onclick=\"cancelBooking(${room.number})\" ${\r\n        !this.userLogged ||\r\n        room.isAvailable ||\r\n        room.bookedBy !== this.userLogged\r\n          ? \"disabled\"\r\n          : \"\"\r\n      }>Cancel</button>\r\n      <button onclick=\"loadReviews(this, ${room.number})\">Load Reviews</button>\r\n        `;\r\n      container.appendChild(roomDiv);\r\n    });\r\n    this.hotel.saveToLocalStorage();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/servises/UI.js?");

/***/ }),

/***/ "./src/modules/servises/userManager.js":
/*!*********************************************!*\
  !*** ./src/modules/servises/userManager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Users */ \"./src/modules/Users.js\");\n\r\n\r\nclass UserManager {\r\n  constructor() {\r\n    this.users = [];\r\n    this.loadUser();\r\n  }\r\n\r\n  register(username, password) {\r\n    const exist = this.users.find((user) => user.username === username);\r\n    if (exist) alert(\"This username is already taken\");\r\n    const user = new _Users__WEBPACK_IMPORTED_MODULE_0__[\"default\"](username, password);\r\n    this.users.push(user);\r\n    this.saveUser();\r\n    return user;\r\n  }\r\n\r\n  login(username, password) {\r\n    const user = this.users.find((u) => u.username === username);\r\n    if (!user) {\r\n      alert(\"User with this username is not found ;(\");\r\n      return;\r\n    }\r\n    if (!user.validatePassword(password)) {\r\n      alert(\"Password is incorrect. Try again\");\r\n      return;\r\n    }\r\n    return user;\r\n  }\r\n\r\n  saveUser() {\r\n    const saveData = this.users.map((u) => u.toJSON());\r\n    localStorage.setItem(\"users\", JSON.stringify(saveData));\r\n  }\r\n\r\n  loadUser() {\r\n    const savedUser = localStorage.getItem(\"users\");\r\n    if (savedUser) {\r\n      const parsed = JSON.parse(savedUser);\r\n      this.users = parsed.map((u) => new _Users__WEBPACK_IMPORTED_MODULE_0__[\"default\"](u.username, u.password));\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserManager);\r\n\n\n//# sourceURL=webpack://hotel-booking/./src/modules/servises/userManager.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hotel-booking/./src/styles.scss?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
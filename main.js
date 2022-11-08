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

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction header() {\r\n    const element = document.createElement('div')\r\n    \r\n    const heading = document.createElement('h1')\r\n    heading.textContent = \"Feastaurant\"\r\n    element.appendChild(heading)\r\n\r\n    return element\r\n}\r\n\r\nfunction loadHeader() {\r\n    const content = document.getElementById(\"content\")\r\n    content.appendChild(header())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\r\n    const element = document.createElement('div')\r\n    const para = document.createElement('p')\r\n    para.textContent = \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero delectus laboriosam nihil vero doloremque temporibus est iusto odit nesciunt. Dolor est asperiores alias sunt assumenda. Veritatis officia ab error porro.\"\r\n    element.appendChild(para)\r\n    element.classList.add('home')\r\n\r\n    return element\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\nconst content = document.querySelector('#content')\r\nconst main = document.createElement('div')\r\ncontent.appendChild(main)\r\nmain.classList.add(\"main\")\r\n\r\nconst homeBtn = document.querySelector('#homeBtn')\r\nconst menuBtn = document.querySelector('#menuBtn')\r\nconst contactBtn = document.querySelector('#contactBtn')\r\n\r\nhomeBtn.addEventListener('click', ()=>{\r\n    while (main.firstChild) {\r\n        main.removeChild(main.lastChild);\r\n      }\r\n    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\r\n})\r\n\r\ncontactBtn.addEventListener('click', ()=>{\r\n    console.log(\"Contact\")\r\n})\r\n\r\nmenuBtn.addEventListener('click', ()=>{\r\n    while (main.firstChild) {\r\n        main.removeChild(main.lastChild);\r\n      }\r\n    main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu() {\r\n    const element = document.createElement('div')\r\n    const ul = document.createElement('ul')\r\n    const li1 = document.createElement('li')\r\n    const li2 = document.createElement('li')\r\n    const li3 = document.createElement('li')\r\n    const li4 = document.createElement('li')\r\n\r\n    li1.textContent = '🍗 Chicken Biriyani'\r\n    li2.textContent = '🌯 Burrito'\r\n    li3.textContent = '🍔 Burger'\r\n    li4.textContent = '🍰 Cake'\r\n    \r\n    ul.appendChild(li1)\r\n    ul.appendChild(li2)\r\n    ul.appendChild(li3)\r\n    ul.appendChild(li4)\r\n    \r\n    element.appendChild(ul)\r\n    element.classList.add('home')\r\n\r\n    return element\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    const element = document.createElement('div')\r\n    \r\n    const homeBtn = document.createElement('button')\r\n    const menuBtn = document.createElement('button')\r\n    const contactBtn = document.createElement('button')\r\n    \r\n    homeBtn.id=\"homeBtn\"\r\n    contactBtn.id=\"contactBtn\"\r\n    menuBtn.id=\"menuBtn\"\r\n\r\n    homeBtn.textContent = \"Home\"\r\n    menuBtn.textContent = \"Menu\"\r\n    contactBtn.textContent = \"Contact\"\r\n\r\n    element.appendChild(homeBtn)\r\n    element.appendChild(menuBtn)\r\n    element.appendChild(contactBtn)\r\n   \r\n    element.classList.add(\"tabs\")\r\n    return element\r\n}\r\n\r\nfunction loadTabs() {\r\n    const content = document.getElementById(\"content\")\r\n    content.appendChild(tabs())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTabs);\n\n//# sourceURL=webpack://restaurant-page/./src/tabs.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
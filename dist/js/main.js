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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get */ \"./modules/get.js\");\n\r\n\r\n(0,_modules_get__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/get.js":
/*!************************!*\
  !*** ./modules/get.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst getModule = () => {\r\n    \r\n    fetch('dbHeroes.json')\r\n        .then(response => response.json())\r\n        .then(result => {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.render)(result)\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getModule);\n\n//# sourceURL=webpack:///./modules/get.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (result) => {\r\n    let wrap = document.querySelector('.wrapper')\r\n    const moviesSelect = document.getElementById('movies')\r\n    let heroObj = []\r\n    let movies = []\r\n\r\n    const createEl = (element) => {\r\n        let div = document.createElement('div')\r\n        let img = document.createElement('img')\r\n        let wrapImg = document.createElement('div')\r\n        let wrapP = document.createElement('div')\r\n        let textP = document.createElement('p')\r\n\r\n        img.src = element.photo\r\n\r\n        for (let key in element) {\r\n            if (key != 'photo') {\r\n                let title = key.substring(0,1).toUpperCase() + key.substring(1)\r\n                textP.innerHTML += `<b>${title}:</b> ${element[key]} <br>`\r\n            }\r\n            if (key == 'movies') {\r\n                for (let i of element[key])\r\n                if (!movies.includes(i)) {\r\n                    movies.push(i)\r\n                }\r\n            }\r\n        }\r\n        \r\n        img.classList.add('hero__image')\r\n        div.classList.add('wrap')\r\n        wrapImg.classList.add('wrapImg')\r\n        wrapP.classList.add('wrapP')\r\n\r\n        wrapImg.append(img)\r\n        wrapP.append(textP)\r\n        div.append(wrapImg)\r\n        div.append(wrapP)\r\n\r\n        wrap.append(div)\r\n    }\r\n\r\n    result.forEach((element, index) => {\r\n        heroObj.push(element)\r\n        createEl(heroObj[index])\r\n    });\r\n\r\n    for (let i = 0; i < movies.length; i++) {\r\n        moviesSelect.options[moviesSelect.options.length] = new Option(movies[i], 'значение')\r\n    }\r\n\r\n    moviesSelect.addEventListener('change', () => {\r\n        wrap.innerHTML = ''\r\n        let next\r\n\r\n        if (moviesSelect.options[moviesSelect.selectedIndex].innerText.toString() == \"Выберите фильм\") {\r\n            heroObj.forEach(element => {\r\n                createEl(element)\r\n            });\r\n        } else {\r\n            heroObj.forEach(element => {\r\n                if(typeof element.movies != 'undefined') {\r\n                    next = false\r\n                    element.movies.forEach(element => {\r\n                        if (element == moviesSelect.options[moviesSelect.selectedIndex].innerText.toString()) { \r\n                            next = true\r\n                        }\r\n                    });\r\n                    if (next) {\r\n                        createEl(element)\r\n                    }\r\n                }\r\n            });\r\n        }\r\n    })\r\n\r\n    let open = false\r\n    wrap.addEventListener('click', (event) => {\r\n        \r\n        if (event.target.closest('.hero__image')) {\r\n            let img = document.querySelectorAll('.hero__image')\r\n            \r\n            if (open == false) {\r\n                img.forEach(item => {\r\n                    item.classList.remove('opened')\r\n                })\r\n                event.target.classList.add('opened')\r\n                open = true\r\n            } else {\r\n                if (event.target.classList.contains('opened')) {\r\n                    event.target.classList.remove('opened')\r\n                    open = false\r\n                }\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
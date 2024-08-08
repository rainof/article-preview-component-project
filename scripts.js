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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://article-preview-component-project/./src/styles.css?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_drawers_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/drawers.jpg */ \"./src/images/drawers.jpg\");\n/* harmony import */ var _images_avatar_michelle_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/avatar-michelle.jpg */ \"./src/images/avatar-michelle.jpg\");\n/* harmony import */ var _images_icon_share_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon-share.svg */ \"./src/images/icon-share.svg\");\n/* harmony import */ var _images_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icon-facebook.svg */ \"./src/images/icon-facebook.svg\");\n/* harmony import */ var _images_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icon-twitter.svg */ \"./src/images/icon-twitter.svg\");\n/* harmony import */ var _images_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon-pinterest.svg */ \"./src/images/icon-pinterest.svg\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const showButton = document.getElementById('share_button');\n    const hideMobileButton = document.getElementById('share_invert_button');\n    const hideDesktopButton = document.getElementById('share_invert_outer_button');\n    const toggleDiv = document.querySelector('.floating_share');\n\n    // Debugging logs\n    console.log('Show Button:', showButton);\n    console.log('Hide Button:', hideMobileButton);\n    console.log('Hide Button:', hideDesktopButton);\n    console.log('Toggle Div:', toggleDiv);\n\n    // Ensure the elements exist before attaching event listeners\n    if (showButton && hideMobileButton && hideDesktopButton && toggleDiv) {\n        showButton.addEventListener('click', () => {\n            if (toggleDiv.style.display === 'none' || toggleDiv.style.display === '') {\n                toggleDiv.style.display = 'block';\n            }\n        });\n\n        hideMobileButton.addEventListener('click', () => {\n            if (toggleDiv.style.display === 'block') {\n                toggleDiv.style.display = 'none';\n            }\n        });\n\n        hideDesktopButton.addEventListener('click', () => {\n            if (toggleDiv.style.display === 'block') {\n                toggleDiv.style.display = 'none';\n            }\n        });\n    }\n});\n\n\n//# sourceURL=webpack://article-preview-component-project/./src/scripts.js?");

/***/ }),

/***/ "./src/images/avatar-michelle.jpg":
/*!****************************************!*\
  !*** ./src/images/avatar-michelle.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/avatar-michelle.jpg\";\n\n//# sourceURL=webpack://article-preview-component-project/./src/images/avatar-michelle.jpg?");

/***/ }),

/***/ "./src/images/drawers.jpg":
/*!********************************!*\
  !*** ./src/images/drawers.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/drawers.jpg\";\n\n//# sourceURL=webpack://article-preview-component-project/./src/images/drawers.jpg?");

/***/ }),

/***/ "./src/images/icon-facebook.svg":
/*!**************************************!*\
  !*** ./src/images/icon-facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icon-facebook.svg\";\n\n//# sourceURL=webpack://article-preview-component-project/./src/images/icon-facebook.svg?");

/***/ }),

/***/ "./src/images/icon-pinterest.svg":
/*!***************************************!*\
  !*** ./src/images/icon-pinterest.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icon-pinterest.svg\";\n\n//# sourceURL=webpack://article-preview-component-project/./src/images/icon-pinterest.svg?");

/***/ }),

/***/ "./src/images/icon-share.svg":
/*!***********************************!*\
  !*** ./src/images/icon-share.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icon-share.svg\";\n\n//# sourceURL=webpack://article-preview-component-project/./src/images/icon-share.svg?");

/***/ }),

/***/ "./src/images/icon-twitter.svg":
/*!*************************************!*\
  !*** ./src/images/icon-twitter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icon-twitter.svg\";\n\n//# sourceURL=webpack://article-preview-component-project/./src/images/icon-twitter.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.js");
/******/ 	
/******/ })()
;
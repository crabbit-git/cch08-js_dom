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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Whisky = __webpack_require__(/*! ./models/whisky.js */ \"./src/models/whisky.js\");\nconst addWhisky = __webpack_require__(/*! ./helpers/add_whisky.js */ \"./src/helpers/add_whisky.js\");\n\n// When DOM has loaded everything, start waiting for buttons to be pressed:\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  // If there are no whiskies in the list, render a message acknowedging that:\n  const naeWhisky = () => {\n    if (document.querySelector('.list-container>li') === null) {\n    const naeWhiskies = document.createElement('p');\n    naeWhiskies.textContent = 'Nae whisky? Whit is this, the High Middle Ages?';\n    document.querySelector('.list-container').appendChild(naeWhiskies);\n    }\n  }\n\n  naeWhisky();\n\n  // When \"Clear list\" is clicked, empty list and restore \"nae whisky\" message:\n  document.querySelector('#delete-all').addEventListener('click', () => {\n    const list = document.querySelector('.list-container');\n    while (list.lastChild) {\n      list.removeChild(list.lastChild);\n    }\n    naeWhisky();\n  });\n\n  // When \"Submit\" button is pressed, remove the \"nae whisky\" message, add\n  // the submitted whisky to the list, and clear the form:\n  document.querySelector('form').addEventListener('submit', (event) => {\n    event.preventDefault();\n    const whisky = new Whisky(\n      event.target['name'].value,\n      event.target['abv'].value,\n      event.target['type'].value,\n      event.target['country'].value\n    );\n    const list = document.querySelector('.list-container');\n    const naeWhiskies = list.querySelector('p');\n    if (naeWhiskies) {\n      list.removeChild(naeWhiskies);\n    }\n    addWhisky(whisky);\n    event.target.reset();\n  });\n\n});\n\n\n//# sourceURL=webpack://cch08-js_dom/./src/app.js?");

/***/ }),

/***/ "./src/helpers/add_whisky.js":
/*!***********************************!*\
  !*** ./src/helpers/add_whisky.js ***!
  \***********************************/
/***/ ((module) => {

eval("const addWhisky = (whisky) => {\n  const listItem = document.createElement('li');\n  listItem.classList.add('whisky');\n  document.querySelector('.list-container').appendChild(listItem);\n  const itemProperties = document.createElement('ul');\n  listItem.appendChild(itemProperties);\n  const itemProperty1 = document.createElement('li');\n  itemProperty1.classList.add('whisky-name');\n  itemProperty1.textContent = whisky.name;\n  itemProperties.appendChild(itemProperty1);\n  const itemProperty2 = document.createElement('li');\n  itemProperty1.classList.add('whisky-abv');\n  itemProperty2.textContent = `${whisky.abv}% a.b.v.`;\n  itemProperties.appendChild(itemProperty2);\n  const itemProperty3 = document.createElement('li');\n  itemProperty3.classList.add('whisky-type');\n  itemProperty3.textContent = whisky.type;\n  itemProperties.appendChild(itemProperty3);\n  const itemProperty4 = document.createElement('li');\n  itemProperty4.classList.add('whisky-country');\n  itemProperty4.textContent = whisky.country;\n  itemProperties.appendChild(itemProperty4);\n}\n\nmodule.exports = addWhisky;\n\n\n//# sourceURL=webpack://cch08-js_dom/./src/helpers/add_whisky.js?");

/***/ }),

/***/ "./src/models/whisky.js":
/*!******************************!*\
  !*** ./src/models/whisky.js ***!
  \******************************/
/***/ ((module) => {

eval("const Whisky = function(name, abv, type, country) {\n  this.name = name;\n  this.abv = abv;\n  this.type = type;\n  this.country = country;\n}\n\nmodule.exports = Whisky;\n\n\n//# sourceURL=webpack://cch08-js_dom/./src/models/whisky.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
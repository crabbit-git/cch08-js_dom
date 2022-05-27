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

eval("const Whisky = __webpack_require__(/*! ./models/whisky.js */ \"./src/models/whisky.js\");\n\nconst generateListItem = (whisky) => {\n  const container = document.querySelector('.list-container');\n  const listItem = document.createElement('li');\n  container.appendChild(listItem);\n  const itemProperties = document.createElement('ul');\n  listItem.appendChild(itemProperties);\n  const itemProperty1 = document.createElement('li');\n  itemProperty1.classList.add('whisky-name');\n  itemProperty1.textContent = whisky.name;\n  itemProperties.appendChild(itemProperty1);\n  const itemProperty2 = document.createElement('li');\n  itemProperty1.classList.add('whisky-abv');\n  itemProperty2.textContent = `${whisky.abv}% a.b.v.`;\n  itemProperties.appendChild(itemProperty2);\n  const itemProperty3 = document.createElement('li');\n  itemProperty3.classList.add('whisky-type');\n  itemProperty3.textContent = whisky.type;\n  itemProperties.appendChild(itemProperty3);\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const whisky = new Whisky(\n      event.target['name'].value,\n      event.target['abv'].value,\n      event.target['type'].value\n    );\n    generateListItem(whisky);\n    event.target.reset();\n  });\n});\n\n// For no real reason other than experimentation, I originally had all of the\n// following code at the top of the file then called it, rather than writing\n// directly into index.html like a normal person. I got bored of it eventually.\n// const renderSkeleton = () => {\n//   const body = document.querySelector('body');\n//   const mainHeading = document.createElement('h1');\n//   mainHeading.textContent = 'Heading';\n//   body.appendChild(mainHeading);\n  \n//   const introSection = document.createElement('section');\n//   body.appendChild(introSection);\n//   introText = document.createElement('p');\n//   introText.classList.add('intro');\n//   introText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus cupiditate, et velit molestiae ipsa ipsam magnam, recusandae saepe mollitia aspernatur quam commodi aliquam maiores? Saepe atque provident qui eos temporibus ducimus, sequi adipisci aspernatur laudantium, tempora alias nulla quo obcaecati iste harum! Consequatur fuga animi aperiam minus, eos, rem similique impedit sed est temporibus veniam reiciendis quod, et quis doloremque quam a sint expedita dignissimos laboriosam sapiente! Eveniet ipsam suscipit exercitationem at non repellat dolore porro reprehenderit id veritatis earum quod, totam libero aliquam omnis. Exercitationem esse nam officia unde odio qui, blanditiis provident, recusandae vel libero, veniam iure!';\n//   introSection.appendChild(introText);\n  \n//   const listSection = document.createElement('section');\n//   body.appendChild(listSection);\n\n//   const listHeading = document.createElement('h2');\n//   listHeading.textContent = 'List heading';\n//   listSection.appendChild(listHeading);\n//   const listContent = document.createElement('ul');\n//   listContent.classList.add('list-container');\n//   listSection.appendChild(listContent);\n\n//   const formHeading = document.createElement('h2');\n//   formHeading.textContent = 'Add a list item';\n//   listSection.appendChild(formHeading);\n//   const form = document.createElement('form');\n//   listSection.appendChild(form);\n//   const formSection1 = document.createElement('div');\n//   form.appendChild(formSection1);\n//   const formField1Label = document.createElement('label');\n//   formField1Label.setAttribute('for', 'field1');\n//   formField1Label.textContent = 'Field 1:';\n//   formSection1.appendChild(formField1Label);\n//   const formField1Input = document.createElement('input');\n//   formField1Input.setAttribute('type', 'text');\n//   formSection1.appendChild(formField1Input);\n//   const formSection2 = document.createElement('div');\n//   form.appendChild(formSection2);\n//   const formField2Label = document.createElement('label');\n//   formField2Label.setAttribute('for', 'field2');\n//   formField2Label.textContent = 'Field 2:';\n//   formSection2.appendChild(formField2Label);\n//   const formField2Input = document.createElement('input');\n//   formField2Input.setAttribute('type', 'text');\n//   formSection2.appendChild(formField2Input);\n//   const formSection3 = document.createElement('div');\n//   form.appendChild(formSection3);\n//   const formField3Label = document.createElement('label');\n//   formField3Label.setAttribute('for', 'field3');\n//   formField3Label.textContent = 'Field 3:';\n//   formSection3.appendChild(formField3Label);\n//   const formField3Opt1 = document.createElement('input');\n//   formField3Opt1.setAttribute('type', 'radio');\n//   formField3Opt1.setAttribute('value', 'option1');\n//   formSection3.appendChild(formField3Opt1);\n//   const formField3Opt1Label = document.createElement('label');\n//   formField3Opt1Label.setAttribute('for', 'option1');\n//   formField3Opt1Label.textContent = 'Option 1';\n//   formField3Opt1.appendChild(formField3Opt1Label);\n// }\n\n\n//# sourceURL=webpack://cch08-js_dom/./src/app.js?");

/***/ }),

/***/ "./src/models/whisky.js":
/*!******************************!*\
  !*** ./src/models/whisky.js ***!
  \******************************/
/***/ ((module) => {

eval("const Whisky = function(name, abv, type) {\n  this.name = name;\n  this.abv = abv;\n  this.type = type;\n}\n\nmodule.exports = Whisky;\n\n\n//# sourceURL=webpack://cch08-js_dom/./src/models/whisky.js?");

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
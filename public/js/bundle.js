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
/***/ (() => {

eval("const renderSkeleton = () => {\n  const body = document.querySelector('body');\n  const mainHeading = document.createElement('h1');\n  mainHeading.textContent = 'Heading';\n  body.appendChild(mainHeading);\n  \n  const introSection = document.createElement('section');\n  body.appendChild(introSection);\n  introText = document.createElement('p');\n  introText.classList.add('intro');\n  introText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus cupiditate, et velit molestiae ipsa ipsam magnam, recusandae saepe mollitia aspernatur quam commodi aliquam maiores? Saepe atque provident qui eos temporibus ducimus, sequi adipisci aspernatur laudantium, tempora alias nulla quo obcaecati iste harum! Consequatur fuga animi aperiam minus, eos, rem similique impedit sed est temporibus veniam reiciendis quod, et quis doloremque quam a sint expedita dignissimos laboriosam sapiente! Eveniet ipsam suscipit exercitationem at non repellat dolore porro reprehenderit id veritatis earum quod, totam libero aliquam omnis. Exercitationem esse nam officia unde odio qui, blanditiis provident, recusandae vel libero, veniam iure!';\n  introSection.appendChild(introText);\n  \n  const listSection = document.createElement('section');\n  body.appendChild(listSection);\n  const subHeading = document.createElement('h2');\n  subHeading.textContent = 'Subheading';\n  listSection.appendChild(subHeading);\n  const listContent = document.createElement('ul');\n  listContent.classList.add('list-container');\n  listSection.appendChild(listContent);\n}\n\nconst generateListItem = () => {\n  const listContent = document.querySelector('.list-container');\n  const listItem = document.createElement('li');\n  listItem.textContent = 'This is a list item';\n  listContent.appendChild(listItem);\n  const itemProperties = document.createElement('ul');\n  listItem.appendChild(itemProperties);\n  const itemProperty1 = document.createElement('li');\n  itemProperty1.textContent = 'This is a property of a list item';\n  itemProperties.appendChild(itemProperty1);\n  const itemProperty2 = document.createElement('li');\n  itemProperty2.textContent = 'This is another property of a list item';\n  itemProperties.appendChild(itemProperty2);\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  renderSkeleton();\n  generateListItem();\n  generateListItem();\n  generateListItem();\n  generateListItem();\n  generateListItem();\n  generateListItem();\n});\n\n\n//# sourceURL=webpack://cch08-js_dom/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;
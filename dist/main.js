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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Images/home_img01.jpg */ \"./src/assets/Images/home_img01.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Images/home_img02.jpg */ \"./src/assets/Images/home_img02.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Images/home_img04.jpg */ \"./src/assets/Images/home_img04.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Images/home_img03.jpg */ \"./src/assets/Images/home_img03.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --cBackground: #192026;\\r\\n  --cSelectedMenuBackground: #222932;\\r\\n  --cBtnBorder: #43474d;\\r\\n  --cBtnText: #c6cdd8;\\r\\n  --fDancingScript: \\\"Dancing Script\\\", cursive;\\r\\n  --fPoppins: \\\"Poppins\\\", sans-serif;\\r\\n  --mMargin: 20px;\\r\\n}\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: var(--fPoppins);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\n.content {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: var(--cBackground);\\r\\n}\\r\\n\\r\\n.content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n/* NAV */\\r\\nnav,\\r\\n.nav-menus,\\r\\n.burger-icon-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 15px;\\r\\n}\\r\\nnav {\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  height: 10vh;\\r\\n}\\r\\nnav h1,\\r\\nnav ul,\\r\\n.burger-icon-container {\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.nav-menus {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nh1,\\r\\nli {\\r\\n  color: white;\\r\\n}\\r\\nh1 {\\r\\n  font-size: 30px;\\r\\n  font-family: var(--fDancingScript);\\r\\n}\\r\\n\\r\\n.burger-icon-container {\\r\\n  font-size: 40px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n@media screen and (min-width: 800px) {\\r\\n  nav {\\r\\n    width: 80%;\\r\\n  }\\r\\n  .nav-menus {\\r\\n    display: inherit;\\r\\n  }\\r\\n  .burger-icon-container {\\r\\n    display: none;\\r\\n  }\\r\\n  .nav-menu-home {\\r\\n    border-radius: 5px;\\r\\n    border-bottom-left-radius: 0;\\r\\n    border-bottom-right-radius: 0;\\r\\n    border-bottom: 1px solid var(--cSelectedMenuBackground);\\r\\n    background-color: var(--cSelectedMenuBackground);\\r\\n  }\\r\\n  nav ul {\\r\\n    height: 100%;\\r\\n  }\\r\\n  nav ul li {\\r\\n    padding: 15px 15px 0 15px;\\r\\n    height: 60%;\\r\\n    align-self: flex-end;\\r\\n  }\\r\\n}\\r\\n/* Mobile Nav */\\r\\n.mobile-nav-container,\\r\\n.name-and-icon,\\r\\n.mob-nav-menus,\\r\\n.close-icon-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n.mobile-nav-container,\\r\\n.mob-nav-menus {\\r\\n  flex-direction: column;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.mobile-nav-container {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  background-color: var(--cBackground);\\r\\n}\\r\\n.name-and-icon {\\r\\n  height: 10vh;\\r\\n  width: 100vw;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 5px solid var(--cSelectedMenuBackground);\\r\\n}\\r\\n.name-and-icon h1 {\\r\\n  margin-left: var(--mMargin);\\r\\n}\\r\\n.close-icon-container {\\r\\n  margin-right: var(--mMargin);\\r\\n  cursor: pointer;\\r\\n}\\r\\n.name-and-icon ion-icon {\\r\\n  font-size: 40px;\\r\\n}\\r\\n.mob-nav-menus {\\r\\n  flex-grow: 100;\\r\\n}\\r\\n.mob-nav-menus li {\\r\\n  font-size: 20px;\\r\\n}\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* BUTTONS */\\r\\n.btns {\\r\\n  width: 120px;\\r\\n  height: 40px;\\r\\n  background-color: var(--cSelectedMenuBackground);\\r\\n  text-decoration: none;\\r\\n  border: 2px solid var(--cBtnBorder);\\r\\n  border-radius: 3px;\\r\\n  color: var(--cBtnText);\\r\\n  font-weight: bold;\\r\\n  font-size: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* MAIN BODY */\\r\\n.pageContent {\\r\\n  flex: 100 1 auto;\\r\\n  width: 100%;\\r\\n  border-top: solid 5px var(--cSelectedMenuBackground);\\r\\n}\\r\\n\\r\\n/* HOME PAGE */\\r\\n.page-container {\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/* Home_img01: Photo by Valeria Boltneva from Pexels */\\r\\n.big-pic-1 {\\r\\n  width: 100%;\\r\\n  height: 90vh;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n  background-attachment: fixed;\\r\\n}\\r\\n\\r\\n/* Sections with text only (Section 1 + 4)*/\\r\\n.section-one,\\r\\n.section-four {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n\\r\\n  padding: var(--mMargin) 0;\\r\\n  background-color: var(--cSelectedMenuBackground);\\r\\n}\\r\\n.section-one p,\\r\\n.section-four p,\\r\\n.section-one button,\\r\\n.section-four button {\\r\\n  text-align: center;\\r\\n  margin: 0 var(--mMargin);\\r\\n}\\r\\n@media screen and (min-width: 800px) {\\r\\n  .section-one p {\\r\\n    max-width: 80%;\\r\\n  }\\r\\n}\\r\\n/* Section 1 */\\r\\n.section-one {\\r\\n  gap: var(--mMargin);\\r\\n}\\r\\n\\r\\n/* Section 4 */\\r\\n.section-four button {\\r\\n  margin: var(--mMargin) 0;\\r\\n}\\r\\n\\r\\n.section-four h2 {\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n/* Sections with text and image (Section 2 + 3)*/\\r\\n.section-two,\\r\\n.section-three {\\r\\n  width: 60vw;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: var(--mMargin);\\r\\n  padding: var(--mMargin) 0;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.section-two-text-container,\\r\\n.section-three-text-container {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.section-two-text-container h2,\\r\\n.section-three-text-container h2 {\\r\\n  font-family: var(--fDancingScript);\\r\\n  font-size: 35px;\\r\\n}\\r\\n\\r\\n.small-pic-1,\\r\\n.small-pic-2 {\\r\\n  height: 60vh;\\r\\n  width: 60vw;\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n}\\r\\n@media screen and (min-width: 800px) {\\r\\n  .section-two,\\r\\n  .section-three {\\r\\n    width: 80%;\\r\\n    flex-direction: row;\\r\\n  }\\r\\n  .small-pic-1,\\r\\n  .small-pic-2 {\\r\\n    height: 50vh;\\r\\n    min-width: 50%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Section 2 */\\r\\n/* Home_img02 (small-pic-1): Photo by Airam Datoon from Pexels*/\\r\\n.small-pic-1 {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 800px) {\\r\\n  .small-pic-1 {\\r\\n    margin-right: var(--mMargin);\\r\\n  }\\r\\n  .section-two-text-container h2,\\r\\n  .section-two-text-container p {\\r\\n    margin-left: var(--mMargin);\\r\\n  }\\r\\n}\\r\\n/* Section 3 */\\r\\n/* Home_img04 (small-pic-2): Photo by Ron Lach from Pexels*/\\r\\n.small-pic-2 {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 800px) {\\r\\n  .small-pic-2 {\\r\\n    margin-left: var(--mMargin);\\r\\n  }\\r\\n  .section-three-text-container h2,\\r\\n  .section-three-text-container p {\\r\\n    margin-right: var(--mMargin);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Home_img03: Photo by Rachel Claire from Pexels*/\\r\\n.big-pic-2 {\\r\\n  height: 80vh;\\r\\n  width: 100%;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n  background-attachment: fixed;\\r\\n  margin: var(--mMargin) 0;\\r\\n}\\r\\n\\r\\n/* table pic: Photo by cottonbro from Pexels \\r\\nwine and cheese: Photo by José Antonio Rivera Vallejo from Pexels\\r\\nmeet: Photo by Valeria Boltneva from Pexels\\r\\nfoto comida 2: Photo by Rachel Claire from Pexels\\r\\n\\r\\nfoto com colheres: Photo by Eiliv Aceron from Pexels*/\\r\\n\\r\\n/* FOOTER */\\r\\nfooter {\\r\\n  /* flex: 0 0 0; */\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 10px 0 0 0;\\r\\n  min-height: 50px;\\r\\n}\\r\\n@media screen and (min-width: 800px) {\\r\\n  footer {\\r\\n    height: 20px;\\r\\n    width: 80%;\\r\\n  }\\r\\n}\\r\\nfooter p {\\r\\n  margin-right: 7px;\\r\\n}\\r\\nfooter ion-icon {\\r\\n  font-size: 20px;\\r\\n  padding-left: 5px;\\r\\n}\\r\\nfooter p,\\r\\nfooter ion-icon {\\r\\n  color: white;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-website/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-website/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nlet footer = (function (){\r\n let theFooter = document.createElement('footer');\r\n let theYear = document.createElement('p');\r\n let theIcon = document.createElement('a');\r\n let theIonicon = document.createElement('ion-icon');\r\n\r\n theYear.innerText = \"2022 by \";\r\n theIcon.setAttribute(\"href\", \"https://github.com/bgtti/\");\r\n theIonicon.setAttribute(\"name\", \"logo-github\");\r\n\r\n theIcon.appendChild(theIonicon);\r\n theFooter.append(theYear, theIcon);\r\n\r\n return {\r\n  theFooter,\r\n  theYear,\r\n  theIcon,\r\n  theIonicon\r\n }\r\n})()\n\n//# sourceURL=webpack://restaurant-website/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomePage\": () => (/* binding */ HomePage)\n/* harmony export */ });\nlet HomePage = (function(){\r\n \r\n//the picture\r\nlet bigPic1 = document.createElement('div');\r\nbigPic1.classList.add('big-pic-1');\r\n\r\n//section one\r\nlet sectionOne = document.createElement('section');\r\nsectionOne.classList.add('section-one');\r\n\r\nlet sectionOneText1 = document.createElement('p');\r\nlet sectionOneText2 = document.createElement('p');\r\nlet sectionOneButton = document.createElement('button');\r\n\r\nsectionOneButton.classList.add('btns');\r\n\r\nsectionOneText1.innerText = \"Located in the heart of Geneva, our warm and relaxed surroundings offers the perfect ambiance for you to savor our unique cuisine.\";\r\nsectionOneText2.innerText = \"Discover the delights in our menus, carefully prepared with fresh produc selections of the highest quality!\";\r\nsectionOneButton.innerText = \"The Menu\";\r\n\r\nsectionOne.append(sectionOneText1,sectionOneText2,sectionOneButton);\r\n\r\n//section two\r\n\r\nlet sectionTwo = document.createElement('section');\r\nsectionTwo.classList.add('section-two');\r\n\r\nlet sectionTwoTextContainer = document.createElement('div');\r\nlet sectionTwoText1 = document.createElement('h2');\r\nlet sectionTwoText2 = document.createElement('p');\r\nlet sectionTwoText3 = document.createElement('p');\r\nlet sectionTwoText4 = document.createElement('p');\r\n\r\nsectionTwoTextContainer.classList.add('section-two-text-container')\r\n\r\nsectionTwoText1.innerText = \"Fresh ingredients, delicious meals\"\r\nsectionTwoText2.innerText = \"Our chef enjoys bringing the best into his kitchen. Reason why the fresh vegetables and fruits are hand picked from local producers.\"\r\nsectionTwoText3.innerText = \"You will delight yourself with our selection of regional cheeses and wines. Sustainability is important for us, and we take interest in the origin of the animal products we use, treating our bio suppliers as partners. \"\r\nsectionTwoText4.innerText = \"Creativity and respect for the environment are at the core of our creations. You will love tasting the result!\"\r\n\r\nlet sectionTwoPic = document.createElement('div');\r\nsectionTwoPic.classList.add('small-pic-1')\r\n\r\nsectionTwoTextContainer.append(sectionTwoText1, sectionTwoText2, sectionTwoText3, sectionTwoText4);\r\nsectionTwo.append(sectionTwoTextContainer, sectionTwoPic);\r\n\r\n//the second picture\r\nlet bigPic2 = document.createElement('div');\r\nbigPic2.classList.add('big-pic-2');\r\n\r\n//section three\r\n\r\nlet sectionThree = document.createElement('section');\r\nsectionThree.classList.add('section-three');\r\n\r\nlet sectionThreeTextContainer = document.createElement('div')\r\nsectionThreeTextContainer.classList.add('section-three-text-container');\r\nlet sectionThreeText1 = document.createElement('h2');\r\nlet sectionThreeText2 = document.createElement('p');\r\nlet sectionThreeText3 = document.createElement('p');\r\nlet sectionThreeText4 = document.createElement('p');\r\n\r\nsectionThreeText1.innerText = \"Exotic and unique culinary experience\"\r\nsectionThreeText2.innerText = \"Cooking is an art, our chef is an artist, and Le French Restaurant is the stage where the magic happens.\"\r\nsectionThreeText3.innerText = \"Every Friday we offer a Surprise Foodie Menu with vegetarian and non-vegetarian options. Emerge yourself in the world of tastes, and try out this unique experience!\"\r\nsectionThreeText4.innerText = \"Le French Restaurant is for friends, for families, for the young and the old - and especially for those who enjoy high quality food!\"\r\n\r\nlet sectionThreePic = document.createElement('div');\r\nsectionThreePic.classList.add('small-pic-2');\r\n\r\nsectionThreeTextContainer.append(sectionThreeText1, sectionThreeText2, sectionThreeText3, sectionThreeText4);\r\nsectionThree.append(sectionThreePic, sectionThreeTextContainer);\r\n\r\n//section four\r\nlet sectionFour = document.createElement('section');\r\nsectionFour.classList.add('section-four');\r\n\r\nlet sectionFourText1 = document.createElement('h2');\r\nlet sectionFourText2 = document.createElement('h2');\r\nlet sectionFourButton = document.createElement('button');\r\nlet sectionFourText3 = document.createElement('h2');\r\nlet sectionFourText4 = document.createElement('p');\r\n\r\nsectionFourButton.classList.add('btns');\r\n\r\nsectionFourText1.innerText = \"123 Sample Street\"\r\nsectionFourText2.innerText = \"Geneva, Switzerland\"\r\nsectionFourButton.innerText = \"Contact us\"\r\nsectionFourText3.innerText = \"Opening Hours\"\r\nsectionFourText4.innerText = \"Tue-Saturday 6pm - 12pm\"\r\n\r\nsectionFour.append(sectionFourText1,sectionFourText2,sectionFourButton,sectionFourText3,sectionFourText4)\r\n\r\n//all together\r\nlet homeDiv = document.createElement('div');\r\nhomeDiv.classList.add('home-container', 'page-container');\r\nhomeDiv.append(bigPic1, sectionOne, sectionTwo, bigPic2, sectionThree, sectionFour);\r\n\r\n\r\n// return\r\n\r\nreturn {\r\n bigPic1,\r\n\r\n sectionOne,\r\n sectionOneText1,\r\n sectionOneText2,\r\n sectionOneButton,\r\n\r\n sectionTwo,\r\n sectionTwoTextContainer,\r\n sectionTwoText1,\r\n sectionTwoText2,\r\n sectionTwoText3,\r\n sectionTwoText4,\r\n sectionTwoPic,\r\n\r\n bigPic2,\r\n\r\n sectionThree,\r\n sectionThreeTextContainer,\r\n sectionThreeText1,\r\n sectionThreeText2,\r\n sectionThreeText3,\r\n sectionThreeText4,\r\n sectionThreePic,\r\n\r\n sectionFour,\r\n sectionFourText1,\r\n sectionFourText2,\r\n sectionFourButton,\r\n sectionFourText3,\r\n sectionFourText4,\r\n\r\n homeDiv\r\n\r\n}\r\n\r\n})()\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-website/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\n\r\n\r\n\r\nlet theHTML = document.querySelector(\"#content\");\r\nlet theBody = document.createElement(\"div\");\r\ntheBody.classList.add(\"pageContent\");\r\n\r\ntheHTML.appendChild(_nav_js__WEBPACK_IMPORTED_MODULE_1__.navBar.theNav)\r\ntheHTML.appendChild(_nav_js__WEBPACK_IMPORTED_MODULE_1__.mobileNav.theMobileNavContainer)\r\ntheHTML.appendChild(theBody)\r\ntheHTML.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_2__.footer.theFooter)\r\n\r\ntheBody.append(_home_js__WEBPACK_IMPORTED_MODULE_3__.HomePage.homeDiv)\r\n\r\n\r\n//Event listeners\r\n_nav_js__WEBPACK_IMPORTED_MODULE_1__.mobileNav.closeIconContainer.addEventListener('click', ()=>{\r\n _nav_js__WEBPACK_IMPORTED_MODULE_1__.mobileNav.theMobileNavContainer.classList.add('hide');\r\n},false)\r\n\r\n_nav_js__WEBPACK_IMPORTED_MODULE_1__.navBar.burgerIconContainer.addEventListener('click', ()=>{\r\n _nav_js__WEBPACK_IMPORTED_MODULE_1__.mobileNav.theMobileNavContainer.classList.remove('hide');\r\n},false)\n\n//# sourceURL=webpack://restaurant-website/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar),\n/* harmony export */   \"mobileNav\": () => (/* binding */ mobileNav)\n/* harmony export */ });\nlet navBar = (function(){\r\n //creating elements:\r\n let theNav = document.createElement('nav');\r\n let theRestaurantName = document.createElement('h1');\r\n let theNavMenusUl = document.createElement('ul');\r\n let theNavMenusHome = document.createElement('li');\r\n let theNavMenusMenu = document.createElement('li');\r\n let theNavMenusContact = document.createElement('li');\r\n\r\n //adding class:\r\n theNavMenusUl.classList.add('nav-menus');\r\n theNavMenusHome.classList.add('nav-menu-home', 'navMenuHome');\r\n theNavMenusMenu.classList.add('nav-menu-menu', 'navMenuMenu');\r\n theNavMenusContact.classList.add('nav-menu-contact', 'navMenuContact');\r\n\r\n\r\n //element text:\r\n theRestaurantName.textContent = \"Le French Restaurant\";\r\n theNavMenusHome.textContent = \"Home\";\r\n theNavMenusMenu.textContent = \"Menu\";\r\n theNavMenusContact.textContent = \"Contact\";\r\n\r\n //burger icon\r\n let burgerIconContainer = document.createElement('div');\r\n let burgerIcon = document.createElement('ion-icon');\r\n burgerIconContainer.classList.add('burger-icon-container');\r\n burgerIcon.setAttribute('name', 'menu-outline');\r\n\r\n burgerIconContainer.append(burgerIcon);\r\n\r\n\r\n //appending elements:\r\n theNavMenusUl.append(theNavMenusHome, theNavMenusMenu, theNavMenusContact);\r\n\r\n theNav.append(theRestaurantName,theNavMenusUl, burgerIconContainer)\r\n\r\n return {\r\n  theNav,\r\n  theRestaurantName,\r\n  theNavMenusUl,\r\n  theNavMenusHome,\r\n  theNavMenusMenu,\r\n  theNavMenusContact,\r\n\r\n  burgerIconContainer,\r\n  burgerIcon\r\n }\r\n})()\r\n\r\nlet mobileNav = (function (){\r\nlet theMobileNavContainer = document.createElement('div');\r\ntheMobileNavContainer.classList.add('mobile-nav-container', 'hide');\r\n\r\n//close icon and restaurant name\r\n let nameAndIcon = document.createElement('div');\r\n nameAndIcon.classList.add('name-and-icon');\r\n let theRestaurantName = document.createElement('h1');\r\n theRestaurantName.textContent = \"Le French Restaurant\";\r\n\r\n let closeIconContainer = document.createElement('div');\r\n closeIconContainer.classList.add('close-icon-container')\r\n let closeNav = document.createElement('ion-icon');\r\n closeNav.setAttribute('name', 'close-outline');\r\n\r\n closeIconContainer.append(closeNav)\r\n\r\n nameAndIcon.append(theRestaurantName, closeIconContainer);\r\n\r\n//Page Links\r\nlet theNavMenusUl = document.createElement('ul');\r\n let theNavMenusHome = document.createElement('li');\r\n let theNavMenusMenu = document.createElement('li');\r\n let theNavMenusContact = document.createElement('li');\r\n\r\n theNavMenusUl.classList.add('mob-nav-menus');\r\n theNavMenusHome.classList.add('mob-nav-menu-home', 'navMenuHome');\r\n theNavMenusMenu.classList.add('mob-nav-menu-menu', 'navMenuMenu');\r\n theNavMenusContact.classList.add('mob-nav-menu-contact', 'navMenuContact');\r\n\r\n theNavMenusHome.textContent = \"Home\";\r\n theNavMenusMenu.textContent = \"Menu\";\r\n theNavMenusContact.textContent = \"Contact\";\r\n\r\n theNavMenusUl.append(theNavMenusHome, theNavMenusMenu, theNavMenusContact);\r\n\r\n //appending to container\r\n theMobileNavContainer.append(nameAndIcon,theNavMenusUl);\r\n\r\n return{\r\n  theMobileNavContainer,\r\n\r\n  nameAndIcon,\r\n  theRestaurantName,\r\n  closeIconContainer,\r\n  closeNav,\r\n\r\n  theNavMenusUl,\r\n  theNavMenusHome,\r\n  theNavMenusMenu,\r\n  theNavMenusContact,\r\n }\r\n\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://restaurant-website/./src/nav.js?");

/***/ }),

/***/ "./src/assets/Images/home_img01.jpg":
/*!******************************************!*\
  !*** ./src/assets/Images/home_img01.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8dac3c50b582952c9dc.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/Images/home_img01.jpg?");

/***/ }),

/***/ "./src/assets/Images/home_img02.jpg":
/*!******************************************!*\
  !*** ./src/assets/Images/home_img02.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36fee445aa6d15b65efc.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/Images/home_img02.jpg?");

/***/ }),

/***/ "./src/assets/Images/home_img03.jpg":
/*!******************************************!*\
  !*** ./src/assets/Images/home_img03.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c199a74e2879f684de8.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/Images/home_img03.jpg?");

/***/ }),

/***/ "./src/assets/Images/home_img04.jpg":
/*!******************************************!*\
  !*** ./src/assets/Images/home_img04.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ad82947cbb5851133c6.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/Images/home_img04.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
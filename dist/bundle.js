/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Api.js":
/*!********************!*\
  !*** ./src/Api.js ***!
  \********************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Api\", function() { return Api; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n\n\n\nconst Api = (function () {\n  const apiAttributes = {\n    API_KEY: 'de7f6f4e',\n    URL: `http://www.omdbapi.com/?`,\n  };\n  const filmObject = function (id, title, year) {\n    return {\n      id: id,\n      title: title,\n      year: year,\n    };\n  };\n  return {\n    getApiAttributes: function () {\n      return apiAttributes;\n    },\n    createFilmObject(id, title, year) {\n      return filmObject(id, title, year);\n    },\n    // To search s=SEARCH_QUERY&api_key=API_KEY\n    searchMovie: function (searchTitle) {\n      // Ui.clearContainer();\n      // Will be returned, this holds all of the objects in the array returned from the API's promise\n      let filmObjectArray = [];\n      const attributes = this.getApiAttributes();\n\n      // fetch('/src/batman.json')\n      fetch(`${attributes.URL}s=${searchTitle}&apikey=${attributes.API_KEY}`)\n        .then((data) => data.json())\n        .then((results) => {\n          const resultsArray = Array.from(results.Search);\n\n          resultsArray.forEach((result) => {\n            filmObjectArray.push(result);\n          });\n\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsToUi(filmObjectArray);\n\n          // To test the json locally\n          // fetch('/src/batman.json')\n        })\n        .catch((err) => console.log(err));\n    },\n    searchFilmById: function (imdbId) {\n      const attributes = this.getApiAttributes();\n\n      // FOR URL ONLY\n      // fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)\n\n      // For local data only\n      // fetch('/src/batmanBegins.json')\n      fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)\n        .then((data) => data.json())\n        .then((result) => {\n          // Ui.addResultsByIdToUi(result);\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsByIdToUi(result);\n        })\n        .catch((err) => console.log(err));\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Api.js?");

/***/ }),

/***/ "./src/AppCtrl.js":
/*!************************!*\
  !*** ./src/AppCtrl.js ***!
  \************************/
/*! exports provided: AppCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppCtrl\", function() { return AppCtrl; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ \"./src/Api.js\");\n\n\n\nconst AppCtrl = (function () {\n  return {\n    loadEventListenersOnInit: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n      const searchBar = document.querySelector(selectors.searchBar);\n      const searchBtn = document.querySelector(selectors.searchBtn);\n      const title = document.querySelector(selectors.title);\n\n      title.addEventListener('click', function () {\n        _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearContainer();\n      });\n\n      searchBtn.addEventListener('click', function () {\n        const searchValue = searchBar.value;\n        _Api__WEBPACK_IMPORTED_MODULE_1__[\"Api\"].searchMovie(searchValue);\n      });\n\n      searchBar.addEventListener('keypress', function (e) {\n        if (e.keyCode == 13) {\n          const searchValue = searchBar.value;\n          _Api__WEBPACK_IMPORTED_MODULE_1__[\"Api\"].searchMovie(searchValue);\n        }\n      });\n    },\n    loadResultsEventListeners: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n\n      document.querySelectorAll(selectors.searchResultItem).forEach((item) =>\n        item.addEventListener('click', function (e) {\n          console.log(e);\n          console.log(e.target.id);\n          _Api__WEBPACK_IMPORTED_MODULE_1__[\"Api\"].searchFilmById(e.target.id);\n        })\n      );\n    },\n\n    init: function () {\n      this.loadEventListenersOnInit();\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/AppCtrl.js?");

/***/ }),

/***/ "./src/Ui.js":
/*!*******************!*\
  !*** ./src/Ui.js ***!
  \*******************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ui\", function() { return Ui; });\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n\n\nconst Ui = (function () {\n  const UiSelectors = {\n    title: '.title',\n    searchBar: '.search-bar',\n    searchBtn: '.search-btn',\n    container: '.container',\n    searchResultsContainer: '.search-results-container',\n    searchResultItem: '.search-result-item',\n  };\n\n  return {\n    getUiSelectors: function () {\n      return UiSelectors;\n    },\n    changeContainerClass: function (name) {\n      if (name === 'search-results-container') {\n        document.querySelector(\n          this.getUiSelectors().searchResultsContainer\n        ).className = name;\n      }\n    },\n    addResultsToUi: function (resultArray) {\n      this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n      parentDiv.className = 'search-results-container';\n\n      let output = ``;\n\n      resultArray.forEach(function (result) {\n        output += `\n                <div class=\"search-result-item\" id=${result.imdbID}>\n                    <h3 class=\"result-title\">${result.Title} (${result.Year})</h3>\n                    <img class=\"result-poster\" src=${result.Poster} alt=${result.Title}/>\n                </div>`;\n      });\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n\n      _AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].loadResultsEventListeners();\n    },\n    addResultsByIdToUi: function (searchResultsObject) {\n      this.clearContainer();\n\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n\n      // Need to get\n      // Title, Year, Rating, release date , runtime, genre, director, writer, actors, plot, poster\n\n      parentDiv.className = 'result-by-id-container';\n      let output = '';\n\n      output += `\n      <div class=\"id-result\">\n        <h3 class=\"id-title\">${searchResultsObject.Title} (${searchResultsObject.Year})</h3>\n        <img src=\"${searchResultsObject.Poster}\" class=\"img-poster\" alt=\"${searchResultsObject.Title}\"/>\n        <p class=\"id-plot\">${searchResultsObject.Plot}</p>\n      </div>\n      `;\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n    },\n    clearContainer: function () {\n      const selectors = Ui.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n\n      container.innerHTML = '';\n    },\n    getAllSearchResults: function () {\n      const selectors = this.getUiSelectors();\n      return document.querySelectorAll(selectors.searchResultItem);\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ \"./src/Api.js\");\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n// Request URL\n// https://api-v3.igdb.com\n// App name\n// backlog-buddy's App\n// Key\n\n\n\n\n\n// let result = Api.searchMovie('batman');\n_AppCtrl__WEBPACK_IMPORTED_MODULE_2__[\"AppCtrl\"].init();\n\n// Api.searchFilmById('tt0372784');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
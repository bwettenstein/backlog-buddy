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

/***/ "./src/AppCtrl.js":
/*!************************!*\
  !*** ./src/AppCtrl.js ***!
  \************************/
/*! exports provided: AppCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppCtrl\", function() { return AppCtrl; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n/* harmony import */ var _Backlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backlog */ \"./src/Backlog.js\");\n/* harmony import */ var _StorageControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StorageControl */ \"./src/StorageControl.js\");\n\n\n\n\n\nconst AppCtrl = (function () {\n  return {\n    loadEventListenersOnInit: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n      const searchBar = document.querySelector(selectors.searchBar);\n      const searchBtn = document.querySelector(selectors.searchBtn);\n      const container = document.querySelector(selectors.container);\n      const title = document.querySelector(selectors.title);\n      const myBacklog = document.querySelector(selectors.myBacklog);\n\n      // Makes it so clicking on the title page clears the inner page container and populates the inner page container with home page content\n      title.addEventListener('click', function () {\n        _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearContainer();\n        _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].homePage();\n\n        // Each time home page is loaded, the search parameters held in the Omdb methods should be reset\n        _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].modifyCurrentPage(1);\n        _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].modifyPreviousSearchTitle('');\n      });\n\n      // Upon clicking the search button, the searched value will be stored and passed into the searchMovie function\n      searchBtn.addEventListener('click', function () {\n        const searchValue = searchBar.value;\n        _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(searchValue);\n      });\n\n      // Executes the same actions as the searchBtn event listener, except this listens for the user to press the enter key instead of the search button\n      searchBar.addEventListener('keypress', function (e) {\n        if (e.keyCode == 13) {\n          const searchValue = searchBar.value;\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(searchValue);\n        }\n      });\n\n      // Clicking the myBacklog button will clear the container, and populate it with items that have been added to the backlog\n      myBacklog.addEventListener('click', function () {\n        const backlog = _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].getCurrentBacklog();\n        _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertBacklogContainer();\n        backlog.forEach((item) => {\n          // Uncomment the below statement for debugging if necessary\n          // console.log(item, 'item');\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchFilmForBacklog(item);\n        });\n      });\n\n      // By far the biggest event listener, this relies on where in the container the user\n      // clicks on. Since the container is constantly changing state depending on what the user\n      // is doing (such as searching a film or checking their backlog) it made sense to just\n      // make the event listeners dependent on the 'target' the user is clicking.\n      container.addEventListener('click', function (e) {\n        let targetList;\n\n        targetList = e.target.parentNode.classList;\n        targetList.forEach((target) => {\n          // Uncomment the below code for debugging if necessary\n          // console.log(targetList, 'targetlist');\n\n          // Back button container often gets targeted depending on where the cursor clicks the icon,\n          // so just include it with the event listener\n          if (target === 'back-btn' || target === 'back-btn-container') {\n            const getPreviousElement = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getPreviousElement();\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsToUi(getPreviousElement);\n          } else if (target === 'add-btn' || target === 'add-btn-container') {\n            // call the add to backlog function here\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertButtonContainer('addBtnClick');\n\n            const itemId = document.querySelector(selectors.resultByIdContainer)\n              .id;\n            _StorageControl__WEBPACK_IMPORTED_MODULE_3__[\"StorageControl\"].storeItem(itemId);\n            // Uncomment the below code for debugging if necessary\n            // console.log(StorageControl.getItemsFromStorage(), 'item item item');\n          } else if (\n            target === 'remove-btn' ||\n            target === 'remove-btn-container'\n          ) {\n            // Clear the button container\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearButtonContainer();\n            // insert it again, but without the checkmark icon because if the remove icon is\n            // showing, that means the user has already clicked the checkmark to add it\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertButtonContainer('idResult');\n            const itemId = document.querySelector(selectors.resultByIdContainer)\n              .id;\n            _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].deleteItemFromBacklog(itemId);\n          }\n        });\n      });\n    },\n    // Upon clicking a search result, the id of the clicked result is passed into the searchFilmById method to get\n    // more details about the item\n    loadResultsEventListeners: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n\n      document.querySelectorAll(selectors.searchResultItem).forEach((item) =>\n        item.addEventListener('click', function (e) {\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchFilmById(e.target.id);\n        })\n      );\n    },\n    loadBacklogResultsEventListeners: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n      // Adds event listeners to each backlog item\n      document.querySelectorAll(selectors.backlogItem).forEach((item) =>\n        item.addEventListener('click', function (e) {\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchFilmById(e.target.id);\n        })\n      );\n      // Clears the entire backlog if the button is clicked\n      document\n        .querySelector(selectors.clearBacklogBtn)\n        .addEventListener('click', () => {\n          // Clears the backlog from localStorage\n          _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].clearBacklog();\n          // Clears the container\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearContainer();\n          // Repopulates the backlog container with the current backlog elements\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertBacklogContainer();\n        });\n    },\n    // Clicking the next page clears clears the container and populates it with search results on the next page\n    loadPaginationEventListeners: function (currentSearchQuery) {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n      // Current pagination is stored in the Omdb methods file for convenience, so this pulls from there\n      let currentPagination = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].getCurrentPage();\n\n      document.querySelector(selectors.prev).addEventListener('click', () => {\n        let page = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].getCurrentPage();\n        // If page isn't one, then there are previous pages. If it is one, there are none.\n        if (page > 1) {\n          // Passes in the new currentPage\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].modifyCurrentPage(currentPagination - 1);\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(currentSearchQuery);\n        }\n      });\n\n      document.querySelector(selectors.next).addEventListener('click', () => {\n        let page = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].getCurrentPage();\n        if (page >= 1) {\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].modifyCurrentPage(currentPagination + 1);\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(currentSearchQuery);\n        }\n      });\n    },\n    init: function () {\n      this.loadEventListenersOnInit();\n      _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].homePage();\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/AppCtrl.js?");

/***/ }),

/***/ "./src/Backlog.js":
/*!************************!*\
  !*** ./src/Backlog.js ***!
  \************************/
/*! exports provided: Backlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Backlog\", function() { return Backlog; });\n/* harmony import */ var _StorageControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageControl */ \"./src/StorageControl.js\");\n\n\n// The majority of the backlog functions are just pulling from StorageCtrl methods and executing them\n// I thought the code would be more readable if it was written this way. For me, I found it easier to\n// write out the storage methods as Backlog.METHOD instead of LocalStorage.METHOD, but this is a personal preference\nconst Backlog = (function () {\n  return {\n    getCurrentBacklog: function () {\n      const currentBacklog = _StorageControl__WEBPACK_IMPORTED_MODULE_0__[\"StorageControl\"].getItemsFromStorage();\n      return currentBacklog;\n    },\n    addToBacklog: function (imdbId) {\n      _StorageControl__WEBPACK_IMPORTED_MODULE_0__[\"StorageControl\"].storeItem(imdbId);\n    },\n    deleteItemFromBacklog: function (imdbId) {\n      _StorageControl__WEBPACK_IMPORTED_MODULE_0__[\"StorageControl\"].deleteItemFromStorage(imdbId);\n    },\n    clearBacklog: function () {\n      _StorageControl__WEBPACK_IMPORTED_MODULE_0__[\"StorageControl\"].clearLocalStorage();\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Backlog.js?");

/***/ }),

/***/ "./src/Omdb.js":
/*!*********************!*\
  !*** ./src/Omdb.js ***!
  \*********************/
/*! exports provided: Omdb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Omdb\", function() { return Omdb; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n\n\n\n// House info and methods for all the Used APIs\nconst Omdb = (function () {\n  const apiAttributes = {\n    API_KEY: 'de7f6f4e',\n    URL: `https://www.omdbapi.com/?`,\n  };\n  // currentPage by default will be 1\n  // It's used to keep track of the current pagination when searching the API\n  // For example, if currentPage is 1 and the user clicks \"next\", currentPage\n  // will increase to 2 and search the 2nd page of results in the API\n  let currentPage = 1;\n  // Used by the searchMovie method to check whether or not the current search query\n  // is the same as the previous one. If they differ, then reset currentPage to 1.\n  // If they're the same, keep currentPage\n  let previousSearchTitle = null;\n  return {\n    getApiAttributes: function () {\n      return apiAttributes;\n    },\n    searchMovie: function (searchTitle) {\n      // Will be returned, this holds all of the objects in the array returned from the API's promise\n      let filmObjectArray = [];\n      // If resultsTotal is greater than 10, insert pagination container\n      let resultsTotal;\n      const attributes = this.getApiAttributes();\n      let page = this.getCurrentPage();\n\n      // If the previousSearchTitle and current searchTitle differ, reset the pagination and reassign page\n      if (previousSearchTitle !== searchTitle || previousSearchTitle == null) {\n        this.modifyPreviousSearchTitle(searchTitle);\n        this.modifyCurrentPage(1);\n        page = this.getCurrentPage();\n      }\n\n      // Fetch batman.json to test the API methods on a local file\n      //fetch('/src/batman.json')\n\n      fetch(\n        `${attributes.URL}s=${searchTitle}&page=${page}&apikey=${attributes.API_KEY}`\n      )\n        .then((data) => data.json())\n        .then((results) => {\n          // console.log('reuslts', results);\n          // console.log('totresults', results.totalResults);\n          resultsTotal = results.totalResults;\n          const resultsArray = Array.from(results.Search);\n\n          resultsArray.forEach((result) => {\n            filmObjectArray.push(result);\n          });\n\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsToUi(filmObjectArray);\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].setPreviousElement(filmObjectArray);\n\n          if (resultsTotal > 10) {\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertPaginationContainer();\n            _AppCtrl__WEBPACK_IMPORTED_MODULE_1__[\"AppCtrl\"].loadPaginationEventListeners(searchTitle);\n          }\n        })\n        .catch((err) => {\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].giveFeedback();\n          console.log(err, 'searchMovie');\n        });\n    },\n    // Searching by ID yields much more detail about the selected item, when a user clicks\n    // on a search result,\n    searchFilmById: function (imdbId) {\n      const attributes = this.getApiAttributes();\n      // FOR URL ONLY\n      // fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)\n\n      // For local data only\n      // fetch('/src/batmanBegins.json')\n      fetch(\n        `${attributes.URL}i=${imdbId}&plot=full&apikey=${attributes.API_KEY}`\n      )\n        .then((data) => data.json())\n        .then((result) => {\n          console.log(result, 'result');\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsByIdToUi(result);\n        })\n        .catch((err) => {\n          console.log(err);\n        });\n    },\n    // The backlog array will only be populated with their imdbIds, so this function will search for their data using\n    // their imdbId and display it\n    searchFilmForBacklog: function (imdbId) {\n      const attributes = this.getApiAttributes();\n      fetch(\n        `${attributes.URL}i=${imdbId}&plot=full&apikey=${attributes.API_KEY}`\n      )\n        .then((data) => data.json())\n        .then((result) => {\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addBacklogToUi(result);\n        })\n        .catch((err) => console.log(err));\n    },\n    // This method basically checks if the item is fresh or not fresh on rotten tomatoes. According to rotten tomatoes, a score of 60% means that a film/tv show is fresh\n    determineIfFresh: function (rottenTomatoesRating) {\n      // Get rid of percent sign at end of value\n      rottenTomatoesRating = String(rottenTomatoesRating);\n      rottenTomatoesRating = rottenTomatoesRating.replace('%', '');\n\n      if (rottenTomatoesRating < 59) {\n        return false;\n      }\n      return true;\n    },\n    getCurrentPage: function () {\n      return currentPage;\n    },\n    modifyCurrentPage: function (newCurrentPage) {\n      currentPage = newCurrentPage;\n    },\n    getPreviousSearchTitle: function () {\n      return previousSearchTitle;\n    },\n    modifyPreviousSearchTitle: function (newSearchTitle) {\n      previousSearchTitle = newSearchTitle;\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Omdb.js?");

/***/ }),

/***/ "./src/StorageControl.js":
/*!*******************************!*\
  !*** ./src/StorageControl.js ***!
  \*******************************/
/*! exports provided: StorageControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StorageControl\", function() { return StorageControl; });\nconst StorageControl = (function () {\n  return {\n    storeItem: function (item) {\n      let items;\n\n      // If localStorage is empty, create an array and add the new item to it\n      if (localStorage.getItem('items') === null) {\n        items = [];\n\n        items.push(item);\n\n        localStorage.setItem('items', JSON.stringify(items));\n      } else {\n        // Get what's in local storage\n        items = JSON.parse(localStorage.getItem('items'));\n        items.push(item);\n\n        // Re sets localStorage\n        localStorage.setItem('items', JSON.stringify(items));\n      }\n    },\n    getItemsFromStorage: function () {\n      let items;\n      if (localStorage.getItem('items') === null) {\n        items = [];\n      } else {\n        items = JSON.parse(localStorage.getItem('items'));\n      }\n      return items;\n    },\n    deleteItemFromStorage: function (id) {\n      let items = JSON.parse(localStorage.getItem('items'));\n\n      items.forEach(function (item, index) {\n        if (id === item) {\n          items.splice(index, 1);\n        }\n      });\n      //Reset local storage\n      localStorage.setItem('items', JSON.stringify(items));\n    },\n    clearLocalStorage: function () {\n      localStorage.removeItem('items');\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/StorageControl.js?");

/***/ }),

/***/ "./src/Ui.js":
/*!*******************!*\
  !*** ./src/Ui.js ***!
  \*******************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ui\", function() { return Ui; });\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n/* harmony import */ var _Backlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backlog */ \"./src/Backlog.js\");\n\n\n\n\nconst Ui = (function () {\n  const UiSelectors = {\n    title: '.title',\n    myBacklog: '.my-backlog',\n    searchBar: '.search-bar',\n    searchBtn: '.search-btn',\n    backBtn: '.back-btn',\n    container: '.container',\n    trendingContainer: '.trending-container',\n    searchResultsContainer: '.search-results-container',\n    searchResultItem: '.search-result-item',\n    idDetails: '.id-details',\n    resultByIdContainer: '.result-by-id-container',\n    addBtnContainer: '.add-btn-container',\n    backBtnContainer: '.back-btn-container',\n    buttonContainer: '.button-container',\n    feedbackContainer: '.feedback-container',\n    checkmarkIconContainer: '.checkmark-icon-container',\n    backlogItem: '.backlog-item',\n    backlogContainer: '.backlog-container',\n    backlogItemContainer: '.backlog-item-container',\n    clearBacklogBtn: '.clear-backlog-btn',\n    feedbackContainer: '.feedback-container',\n    prev: '.prev',\n    next: '.next',\n  };\n  // Previous element is used when constructing the back button that's present when you click on a search result\n  // Previous element will hold the previous search query, so when the back button is selected\n  // the searchByTitle method will run using the previous search query to get the previous results\n  let previousElement;\n\n  return {\n    // By far the most used method in the app. Allows other methods to grab the Ui selectors which helps when\n    // taking data/manipulating DOM elements\n    getUiSelectors: function () {\n      return UiSelectors;\n    },\n    // Loaded every time the page is reloaded/if the site logo is clicked\n    homePage: function () {\n      // Gets rid of films or whatever data is showing on the screen\n      this.clearContainer();\n\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const homepageContainer = document.createElement('div');\n      homepageContainer.className = 'homepage-container';\n\n      const output = `\n      <div class=\"homepage-info-container\">\n        <h1 class=\"home-title\">Your backlog</h1>\n        <h3 class=\"home-info\">Keep track of what you want to watch</h1>\n      </div>\n      `;\n\n      homepageContainer.innerHTML = output;\n      container.append(homepageContainer);\n\n      const homepageFooterContainer = document.createElement('div');\n      homepageFooterContainer.className = 'homepage-footer-container';\n\n      const footerOutput = `\n      <div class=\"homepage-footer-text\">\n        <h2 class=\"homepage-footer-big-text\">No registration required</h2>\n        <p class=\"homepage-footer-normal-text\">Just search for a film or show and add it to your backlog</p>\n      </div>\n      <img class=\"homepage-footer-image\" src=\"/src/img/Hitchcock.jpg\" alt=\"Hitchcock.jpg\"/>\n      `;\n\n      homepageFooterContainer.innerHTML = footerOutput;\n      container.append(homepageFooterContainer);\n    },\n    // Grabs the data returned from searching for the film by title and appends it to the Ui\n    addResultsToUi: function (resultArray) {\n      this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n      parentDiv.className = 'search-results-container';\n\n      let output = ``;\n      resultArray.forEach((result) => {\n        output += `\n                <div class=\"search-result-item\" id=${result.imdbID}>\n                <div class=\"title-container\">\n                <h3 class=\"result-title\">${result.Title} (${result.Year})</h3>\n                </div>\n                    <img class=\"result-poster\" src=${result.Poster} alt=\"${result.Title}.jpg\"/>\n                </div>`;\n      });\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n      _AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].loadResultsEventListeners();\n    },\n    addResultsByIdToUi: function (searchResultsObject) {\n      this.clearContainer();\n\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n\n      // Need to get\n      // Title, Year, Rating, release date , runtime, genre, director, writer, actors, plot, poster\n\n      parentDiv.className = 'result-by-id-container';\n      parentDiv.id = `${searchResultsObject.imdbID}`;\n      let output = '';\n\n      const imdbRating = searchResultsObject.Ratings[0].Value;\n\n      let rottenTomatoesRating = '';\n      let rottenTomatoesIconPath = '';\n      let isFresh;\n\n      // Grab the rotten tomatoes attributes, check if there even is a score for it\n      // If there's only 1 element in the ratings array of searchResultsObject, that means the imdb rating is the only rating present.\n      // When this happens, tell the user that there is no availible rotten tomatoes score\n      if (searchResultsObject.Ratings.length > 1) {\n        rottenTomatoesRating = searchResultsObject.Ratings[1].Value;\n        isFresh = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].determineIfFresh(rottenTomatoesRating);\n        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);\n      } else {\n        rottenTomatoesRating = 'N/A';\n        isFresh = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].determineIfFresh('0');\n        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);\n      }\n\n      output += `\n      <div class=\"id-result\">\n        <img src=\"${searchResultsObject.Poster}\" class=\"img-poster\" alt=\"${searchResultsObject.Title}.jpg\"/>\n        <div class=\"id-details\">\n          <h2 class=\"{id-title}\">${searchResultsObject.Title}</h2>\n          <h3 class=\"id-year\">${searchResultsObject.Year}</h3>\n          <div class=\"id-runtime-rating\">\n            <h3 class=\"id-runtime\">${searchResultsObject.Runtime}</h3>\n            <h3 class=\"id-rating\">${searchResultsObject.Rated}</h3>\n          </div>\n          <div class=\"critical-rating\">\n            <div class=\"id-imdb\">\n                <img src=\"./src/img/320px-IMDB_Logo_2016.svg.png\" alt=\"imdb\" class=\"imdb-logo\"/>\n                <h3 class=\"imdb-rating\">\n                  ${imdbRating} \n                </h3>\n              </div>\n              <div class=\"id-rotten-tomatoes\">\n                <img src=${rottenTomatoesIconPath} class=\"rotten-icon\"/>\n                <h3 class=\"rotten-rating\">\n                  ${rottenTomatoesRating}\n                </h3>\n              </div>\n            </div>\n          <p class=\"id-plot\">${searchResultsObject.Plot}</p>\n          <div class=\"partial-cast\">\n            <h3 class=\"directed-by by\">Directed by \n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Director}\n              </span>\n            </h3>\n            <h3 class=\"written-by by\">Written By \n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Writer}\n              </span>\n            </h3>\n            <h3 class=\"genre by\"> Genre\n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Genre}\n              </span>\n            </h3>\n          </div>\n          </div> \n        </div>\n      </div>\n      `;\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n\n      this.insertButtonContainer('idResult');\n\n      // Check to see if item is already in backlog\n      const imdbId = searchResultsObject.imdbID;\n      const backlog = _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].getCurrentBacklog();\n      // If it's already in the backlog, clear the add button\n      if (backlog.indexOf(String(imdbId)) !== -1) {\n        this.insertButtonContainer('addBtnClick');\n      }\n    },\n    insertBacklogContainer: function () {\n      this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const backlog = _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].getCurrentBacklog();\n      const container = document.querySelector(selectors.container);\n      const backlogContainer = document.createElement('div');\n      backlogContainer.className = 'backlog-container';\n      let output = `\n      <div class=\"backlog-stats-container\">\n        <h1 class=\"my-backlog-title\">My Backlog</h1>\n        <div class=\"backlog-stats-flex\">\n          <p class=\"number-of-items\">${backlog.length} items</p>\n          <button class=\"clear-backlog-btn\" type=\"submit\">Clear backlog</button>\n        </div>\n      </div>\n      <div class=\"backlog-item-container\">\n      </div>\n      `;\n      backlogContainer.innerHTML = output;\n      container.append(backlogContainer);\n    },\n    addBacklogToUi: function (backlogItemInfo) {\n      const selectors = this.getUiSelectors();\n      let output;\n      const backlogItem = document.createElement('div');\n      backlogItem.id = backlogItemInfo.imdbID;\n\n      backlogItem.className = 'backlog-item';\n\n      const backlogItemContainer = document.querySelector(\n        selectors.backlogItemContainer\n      );\n\n      output = `\n      <div class=\"title-container\">\n        <h3 class=\"backlog-title\">${backlogItemInfo.Title} (${backlogItemInfo.Year})</h3>\n      </div>\n      <img class=\"backlog-poster\" src=${backlogItemInfo.Poster} alt=${backlogItemInfo.Title}.jpg\"/>\n      `;\n\n      backlogItem.innerHTML = output;\n      backlogItemContainer.append(backlogItem);\n\n      _AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].loadBacklogResultsEventListeners();\n    },\n    // Adds the back button for searching by id or Backlog\n    insertBackButton: function (buttonFor) {\n      let output;\n      if (buttonFor === 'idResult') {\n        const backBtnContainer = document.createElement('div');\n        backBtnContainer.className = 'back-btn-container';\n        output = `<i class=\"back-btn fas fa-arrow-circle-left\"></i>`;\n        backBtnContainer.innerHTML = output;\n        return backBtnContainer;\n      }\n    },\n    insertAddButton: function () {\n      const addButtonContainer = document.createElement('div');\n      addButtonContainer.className = 'add-btn-container';\n      const output = `<i class=\"add-btn fas fa-plus-circle\"></i>`;\n      addButtonContainer.innerHTML = output;\n      return addButtonContainer;\n    },\n    insertRemoveButton: function () {\n      const removeButtonContainer = document.createElement('div');\n      removeButtonContainer.className = 'remove-btn-container';\n      const output = `<i class=\"remove-btn fas fa-times-circle\"></i>`;\n      removeButtonContainer.innerHTML = output;\n      return removeButtonContainer;\n    },\n    // Depending on the parameter, the button container will appear in different areas and have different styling\n    // All of the methods to create and remove buttons will modify the button contianer\n    insertButtonContainer: function (containerFor) {\n      const selectors = this.getUiSelectors();\n      let backBtnContainer = this.insertBackButton('idResult');\n      let addBtnContainer = this.insertAddButton();\n      let resultByIdContainer = document.querySelector(\n        selectors.resultByIdContainer\n      );\n      let removeBtnContainer = this.insertRemoveButton();\n      let buttonContainer = document.createElement('div');\n      buttonContainer.className = 'button-container';\n      // If containerFor is idResult, that means the buttons should be added when the user clicks on a search result\n      // The button container for idResult will always have a back button, while the container for title-container won't\n      if (containerFor === 'idResult') {\n        // addRemoveBtnContainer will hold add and remove buttons so flex styling will be way easier\n        buttonContainer.append(backBtnContainer, addBtnContainer);\n        resultByIdContainer.insertAdjacentElement(\n          'beforebegin',\n          buttonContainer\n        );\n        // If the add button is clicked, remove it and replace it with the remove button\n      } else if (containerFor === 'addBtnClick') {\n        buttonContainer = document.querySelector(selectors.buttonContainer);\n        addBtnContainer = document.querySelector(selectors.addBtnContainer);\n        // deleting the button container\n        addBtnContainer.remove();\n        // Creating container for remove button\n        let checkmarkRemoveContainer = document.createElement('div');\n        checkmarkRemoveContainer.className = 'checkmark-remove-container';\n        checkmarkRemoveContainer.append(removeBtnContainer);\n        // Add the container to the button container\n        buttonContainer.append(checkmarkRemoveContainer);\n      }\n    },\n    insertPaginationContainer: function () {\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const paginationContainer = document.createElement('div');\n      paginationContainer.className = 'pagination-container';\n\n      const output = `\n      <h3 class=\"prev\">Prev</h3>\n      <h3 class=\"next\">Next</h3>\n      `;\n      paginationContainer.innerHTML = output;\n      container.insertAdjacentElement('beforeend', paginationContainer);\n    },\n    // Gives user feedback when they enter a search query that results in an error\n    giveFeedback: function () {\n      this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const feedbackContainer = document.createElement('div');\n      feedbackContainer.className = 'feedback-container';\n\n      feedbackContainer.innerHTML =\n        '<p class=\"feedback-text\">Error: Search query not found</p> <img class=\"feedback-image\" alt=\"crying.jpg\" src=\"/src/img/crying.jpg\">';\n\n      container.append(feedbackContainer);\n    },\n    // This method will be called almost every time a user searches for something and clicks on the returned search result\n    // Will also be called whenever the user accesses their backlog and the homepage\n    clearContainer: function () {\n      const selectors = Ui.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n\n      container.innerHTML = '';\n    },\n    clearButtonContainer: function () {\n      const selectors = Ui.getUiSelectors();\n      const buttonContainer = document.querySelector(selectors.buttonContainer);\n      buttonContainer.remove();\n    },\n    getAllSearchResults: function () {\n      const selectors = this.getUiSelectors();\n      return document.querySelectorAll(selectors.searchResultItem);\n    },\n    // Function to determine if film is 'fresh' or 'rotten' on rottenTomatoes\n    getRottenTomatoesIcon: function (isRotten) {\n      // Get rid of percent sign at end of value\n\n      // Holds path of icon\n      let iconPath;\n\n      if (isRotten) {\n        iconPath = './src/img/fresh.png';\n      } else {\n        iconPath = './src/img/rotten.png';\n      }\n\n      return iconPath;\n    },\n    getPreviousElement: function () {\n      return previousElement;\n    },\n    // Sets the previous element to the returned array that holds all of the search results\n    // So instead of re-calling the search method, we just re-call the populate Ui method\n    // so when the user clicks on the back button it'll show the results they were just\n    // looking at\n    setPreviousElement: function (filmObjectArray) {\n      previousElement = filmObjectArray;\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n\n\n_AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].init();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
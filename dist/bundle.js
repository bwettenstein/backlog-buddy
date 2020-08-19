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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppCtrl\", function() { return AppCtrl; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n/* harmony import */ var _Tmdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tmdb */ \"./src/Tmdb.js\");\n/* harmony import */ var _Backlog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Backlog */ \"./src/Backlog.js\");\n\n\n\n\n\nconst AppCtrl = (function () {\n  return {\n    loadEventListenersOnInit: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n      const searchBar = document.querySelector(selectors.searchBar);\n      const searchBtn = document.querySelector(selectors.searchBtn);\n      const backBtn = document.querySelector(selectors.backBtn);\n      const container = document.querySelector(selectors.container);\n      const title = document.querySelector(selectors.title);\n      const myBacklog = document.querySelector(selectors.myBacklog);\n      const backlog = _Backlog__WEBPACK_IMPORTED_MODULE_3__[\"Backlog\"].getCurrentBacklog();\n\n      title.addEventListener('click', function () {\n        _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearContainer();\n      });\n\n      searchBtn.addEventListener('click', function () {\n        const searchValue = searchBar.value;\n        _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(searchValue);\n      });\n\n      searchBar.addEventListener('keypress', function (e) {\n        if (e.keyCode == 13) {\n          const searchValue = searchBar.value;\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(searchValue);\n        }\n      });\n\n      myBacklog.addEventListener('click', function () {\n        _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertBacklogContainer();\n        backlog.forEach((item) => {\n          console.log(item, 'item');\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchFilmForBacklog(item);\n        });\n      });\n\n      container.addEventListener('click', function (e) {\n        let targetList;\n        targetList = e.target.parentNode.classList;\n        // console.log(targetList, 'targetlist');\n        targetList.forEach((target) => {\n          // Back button container often gets targeted depending on where the cursor clicks the icon,\n          // so just include it with the event listener\n          if (target === 'back-btn' || target === 'back-btn-container') {\n            const getPreviousElement = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getPreviousElement();\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsToUi(getPreviousElement);\n          } else if (target === 'add-btn' || target === 'add-btn-container') {\n            // call the add to backlog function here\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertButtonContainer('addBtnClick');\n            setTimeout(_Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearCheckmark, 3000);\n            const itemId = document.querySelector(selectors.resultByIdContainer)\n              .id;\n\n            _Backlog__WEBPACK_IMPORTED_MODULE_3__[\"Backlog\"].addToBacklog(itemId);\n          } else if (\n            target === 'remove-btn' ||\n            target === 'remove-btn-container'\n          ) {\n            // Clear the button container\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearButtonContainer();\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertButtonContainer('idResult');\n          }\n        });\n      });\n    },\n    loadResultsEventListeners: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n\n      document.querySelectorAll(selectors.searchResultItem).forEach((item) =>\n        item.addEventListener('click', function (e) {\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchFilmById(e.target.id);\n        })\n      );\n    },\n    init: function () {\n      this.loadEventListenersOnInit();\n      // Tmdb.getTrendingFilms();\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/AppCtrl.js?");

/***/ }),

/***/ "./src/Backlog.js":
/*!************************!*\
  !*** ./src/Backlog.js ***!
  \************************/
/*! exports provided: Backlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Backlog\", function() { return Backlog; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n\n\n\nconst Backlog = (function () {\n  let currentBacklog = [];\n  return {\n    getCurrentBacklog: function () {\n      return currentBacklog;\n    },\n    addToBacklog: function (imdbId) {\n      currentBacklog.push(imdbId);\n    },\n    deleteItemFromBacklog: function (imdbId) {\n      const backlog = this.getCurrentBacklog();\n      const indexToDelete = backlog.indexOf(imdbId);\n      backlog.splice(indexToDelete, 1);\n    },\n    clearBacklog: function () {\n      currentBacklog = [];\n    },\n    // Finds how long the backlog is in minutes\n    // calculateBacklogDuration:function(){\n    //   const backlog = this.getCurrentBacklog()\n    //   backlog.forEach(item=>{\n\n    //   })\n    // }\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Backlog.js?");

/***/ }),

/***/ "./src/Omdb.js":
/*!*********************!*\
  !*** ./src/Omdb.js ***!
  \*********************/
/*! exports provided: Omdb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Omdb\", function() { return Omdb; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n\n\n// House info and methods for all the Used APIs\nconst Omdb = (function () {\n  const apiAttributes = {\n    API_KEY: 'de7f6f4e',\n    URL: `http://www.omdbapi.com/?`,\n  };\n  const filmObject = function (id, title, year) {\n    return {\n      id: id,\n      title: title,\n      year: year,\n    };\n  };\n  return {\n    getApiAttributes: function () {\n      return apiAttributes;\n    },\n    searchMovie: function (searchTitle) {\n      // Ui.clearContainer();\n      // Will be returned, this holds all of the objects in the array returned from the API's promise\n      let filmObjectArray = [];\n      const attributes = this.getApiAttributes();\n\n      // fetch('/src/batman.json')\n      fetch(`${attributes.URL}s=${searchTitle}&apikey=${attributes.API_KEY}`)\n        .then((data) => data.json())\n        .then((results) => {\n          const resultsArray = Array.from(results.Search);\n\n          resultsArray.forEach((result) => {\n            filmObjectArray.push(result);\n          });\n\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsToUi(filmObjectArray);\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].setPreviousElement(filmObjectArray);\n\n          // To test the json locally\n          // fetch('/src/batman.json')\n        })\n        .catch((err) => console.log(err));\n    },\n    searchFilmById: function (imdbId) {\n      const attributes = this.getApiAttributes();\n\n      // FOR URL ONLY\n      // fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)\n\n      // For local data only\n      // fetch('/src/batmanBegins.json')\n      fetch(\n        `${attributes.URL}i=${imdbId}&plot=full&apikey=${attributes.API_KEY}`\n      )\n        .then((data) => data.json())\n        .then((result) => {\n          console.log(result);\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsByIdToUi(result);\n        })\n        .catch((err) => console.log(err));\n    },\n    // The backlog array will only be populated with their imdbIds, so this function will search for their data using\n    // their imdbId and display it\n    searchFilmForBacklog: function (imdbId) {\n      const attributes = this.getApiAttributes();\n      fetch(\n        `${attributes.URL}i=${imdbId}&plot=full&apikey=${attributes.API_KEY}`\n      )\n        .then((data) => data.json())\n        .then((result) => {\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addBacklogToUi(result);\n        })\n        .catch((err) => console.log(err));\n    },\n    determineIfFresh: function (rottenTomatoesRating) {\n      // Get rid of percent sign at end of value\n      rottenTomatoesRating = String(rottenTomatoesRating);\n      rottenTomatoesRating = rottenTomatoesRating.replace('%', '');\n\n      if (rottenTomatoesRating < 59) {\n        return false;\n      }\n      return true;\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Omdb.js?");

/***/ }),

/***/ "./src/Tmdb.js":
/*!*********************!*\
  !*** ./src/Tmdb.js ***!
  \*********************/
/*! exports provided: Tmdb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tmdb\", function() { return Tmdb; });\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n\n\n// Used to pull trending and popular films for the homepage/init state\nconst Tmdb = (function () {\n  const apiAttributes = {\n    // example api call\n    // https://api.themoviedb.org/3/movie/550?api_key=79198defc21befacb3a61066b831701a\n    API_KEY: '79198defc21befacb3a61066b831701a',\n    URL: 'https://api.themoviedb.org',\n    CORS_URL: 'https://cors-anywhere.herokuapp.com/',\n    // API_READ_ACCESS:\n    //   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTE5OGRlZmMyMWJlZmFjYjNhNjEwNjZiODMxNzAxYSIsInN1YiI6IjVmMzk2YjZiYzU4NDBkMDAzNTliYmQ5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zevqwsCOicGrfG9Lmt6egYshiPbBXg44vd-YYdVy_To',\n  };\n  return {\n    getAttributes: function () {\n      return apiAttributes;\n    },\n    // Get the titles of the trending films, add them to an array, search them using Ombi API\n    // getTrendingFilms: function () {\n    //   const attributes = this.getAttributes();\n    //   let arrayOfTitles = [];\n\n    //   fetch(\n    //     // `${apiAttributes.CORS_URL}${attributes.URL}/trending/movie/week?api_key=${attributes.API_KEY}`\n    //     `${attributes.CORS_URL}${attributes.URL}/3/trending/movie/week?api_key=${attributes.API_KEY}`\n    //   )\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       // Only want 12 films MAX\n    //       for (let x = 0; x < 12; x++) {\n    //         const title = data.results[x].title;\n    //         arrayOfTitles.push(title);\n    //       }\n    //       console.log(data.results, 'result');\n    //       Omdb.getTrendingPosterUrl(arrayOfTitles);\n    //       // send over the trending films\n    //     })\n    //     .catch((err) => console.log(err));\n    //   //   Omdb.searchTrendingMovie(arrayOfTitles);\n    // },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Tmdb.js?");

/***/ }),

/***/ "./src/Ui.js":
/*!*******************!*\
  !*** ./src/Ui.js ***!
  \*******************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ui\", function() { return Ui; });\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n/* harmony import */ var _Backlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backlog */ \"./src/Backlog.js\");\n\n\n\n\nconst Ui = (function () {\n  const UiSelectors = {\n    title: '.title',\n    myBacklog: '.my-backlog',\n    searchBar: '.search-bar',\n    searchBtn: '.search-btn',\n    backBtn: '.back-btn',\n    container: '.container',\n    trendingContainer: '.trending-container',\n    searchResultsContainer: '.search-results-container',\n    searchResultItem: '.search-result-item',\n    idDetails: '.id-details',\n    resultByIdContainer: '.result-by-id-container',\n    addBtnContainer: '.add-btn-container',\n    backBtnContainer: '.back-btn-container',\n    buttonContainer: '.button-container',\n    feedbackContainer: '.feedback-container',\n    checkmarkIconContainer: '.checkmark-icon-container',\n  };\n  let previousElement;\n\n  return {\n    getUiSelectors: function () {\n      return UiSelectors;\n    },\n    // Loaded every time the page is reloaded/if the site logo is clicked\n    homePage: function () {\n      // Gets rid of films or whatever data is showing on the screen\n      this.clearContainer();\n\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n      parentDiv.className = 'home-page-container';\n\n      // const output = ``\n    },\n    addResultsToUi: function (resultArray) {\n      this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n      parentDiv.className = 'search-results-container';\n\n      let output = ``;\n      resultArray.forEach((result) => {\n        output += `\n                <div class=\"search-result-item\" id=${result.imdbID}>\n                <div class=\"title-container\">\n                <h3 class=\"result-title\">${result.Title} (${result.Year})</h3>\n                </div>\n                    <img class=\"result-poster\" src=${result.Poster} alt=\"${result.Title}.jpg\"/>\n                </div>`;\n      });\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n      _AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].loadResultsEventListeners();\n    },\n    addResultsByIdToUi: function (searchResultsObject) {\n      this.clearContainer();\n\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n\n      // Need to get\n      // Title, Year, Rating, release date , runtime, genre, director, writer, actors, plot, poster\n\n      parentDiv.className = 'result-by-id-container';\n      parentDiv.id = `${searchResultsObject.imdbID}`;\n      let output = '';\n\n      const imdbRating = searchResultsObject.Ratings[0].Value;\n\n      let rottenTomatoesRating = '';\n      let rottenTomatoesIconPath = '';\n      let isFresh;\n\n      // Grab the rotten tomatoes attributes, check if there even is a score for it\n      // If there's only 1 element in the ratings array of searchResultsObject, that means the imdb rating is the only rating present.\n      // When this happens, tell the user that there is no availible rotten tomatoes score\n      if (searchResultsObject.Ratings.length > 1) {\n        rottenTomatoesRating = searchResultsObject.Ratings[1].Value;\n        isFresh = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].determineIfFresh(rottenTomatoesRating);\n        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);\n      } else {\n        rottenTomatoesRating = 'N/A';\n        isFresh = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].determineIfFresh('0');\n        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);\n      }\n      // const rottenTomatoesIconPath = this.determineIfFresh();\n\n      output += `\n      <div class=\"id-result\">\n        <img src=\"${searchResultsObject.Poster}\" class=\"img-poster\" alt=\"${searchResultsObject.Title}.jpg\"/>\n        <div class=\"id-details\">\n          <h2 class=\"{id-title}\">${searchResultsObject.Title}</h2>\n          <h3 class=\"id-year\">${searchResultsObject.Year}</h3>\n          <div class=\"id-runtime-rating\">\n            <h3 class=\"id-runtime\">${searchResultsObject.Runtime}</h3>\n            <h3 class=\"id-rating\">${searchResultsObject.Rated}</h3>\n          </div>\n          <div class=\"critical-rating\">\n            <div class=\"id-imdb\">\n                <img src=\"./src/img/320px-IMDB_Logo_2016.svg.png\" alt=\"imdb\" class=\"imdb-logo\"/>\n                <h3 class=\"imdb-rating\">\n                  ${imdbRating} \n                </h3>\n              </div>\n              <div class=\"id-rotten-tomatoes\">\n                <img src=${rottenTomatoesIconPath} class=\"rotten-icon\"/>\n                <h3 class=\"rotten-rating\">\n                  ${rottenTomatoesRating}\n                </h3>\n              </div>\n            </div>\n          <p class=\"id-plot\">${searchResultsObject.Plot}</p>\n          <div class=\"partial-cast\">\n            <h3 class=\"directed-by by\">Directed by \n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Director}\n              </span>\n            </h3>\n            <h3 class=\"written-by by\">Written By \n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Writer}\n              </span>\n            </h3>\n            <h3 class=\"genre by\"> Genre\n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Genre}\n              </span>\n            </h3>\n          </div>\n          </div> \n        </div>\n      </div>\n      `;\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n\n      this.insertButtonContainer('idResult');\n\n      // Check to see if item is already in backlog\n      const imdbId = searchResultsObject.imdbID;\n      const backlog = _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].getCurrentBacklog();\n      // If it's already in the backlog, clear the add button\n      if (backlog.indexOf(String(imdbId)) !== -1) {\n        this.insertButtonContainer('addBtnClick');\n      }\n    },\n    insertBacklogContainer: function () {\n      this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const backlog = _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].getCurrentBacklog();\n      const container = document.querySelector(selectors.container);\n      const backlogContainer = document.createElement('div');\n      backlogContainer.className = 'backlog-container';\n      let output = `\n      <div class=\"backlog-stats\">\n        <h1>My Backlog</h1>\n        <p class=\"number-of-items\">${backlog.length} items</p>\n        <p class=\"backlog-duration\"></p>\n      </div>\n      `;\n      backlogContainer.innerHTML = output;\n      container.append(backlogContainer);\n    },\n    addBacklogToUi: function (backlogItemInfo) {\n      // this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const backlog = _Backlog__WEBPACK_IMPORTED_MODULE_2__[\"Backlog\"].getCurrentBacklog();\n      const container = document.querySelector(selectors.container);\n      let output;\n      // const backlogContainer = document.createElement('div');\n      // backlogContainer.className = 'backlog-container';\n      const backlogItem = document.createElement('div');\n      backlogItem.className = 'backlog-item';\n\n      output = `\n      <div class=\"title-container\">\n        <h3 class=\"backlog-title\">${backlogItemInfo.Title} (${backlogItemInfo.Year})</h3>\n      </div>\n      <img class=\"backlog-poster\" src=${backlogItemInfo.Poster} alt=${backlogItemInfo.Title}.jpg\"/>\n      `;\n\n      backlogItem.innerHTML = output;\n      container.append(backlogItem);\n    },\n    // Adds the back button for searching by id or Backlog\n    insertBackButton: function (buttonFor) {\n      const selectors = this.getUiSelectors();\n      let output;\n      if (buttonFor === 'idResult') {\n        const resultByIdContainer = document.querySelector(\n          selectors.resultByIdContainer\n        );\n        const backBtnContainer = document.createElement('div');\n        backBtnContainer.className = 'back-btn-container';\n        // output = `\n        //   <i class=\"back-btn fas fa-arrow-left\"></i>\n        // `;\n        output = `<i class=\"back-btn fas fa-arrow-circle-left\"></i>`;\n        backBtnContainer.innerHTML = output;\n        return backBtnContainer;\n      }\n    },\n    insertAddButton: function () {\n      // let output;\n      const addButtonContainer = document.createElement('div');\n      addButtonContainer.className = 'add-btn-container';\n      // output = `<i class=\"add-btn fas fa-plus\"></i>`;\n      const output = `<i class=\"add-btn fas fa-plus-circle\"></i>`;\n      addButtonContainer.innerHTML = output;\n      return addButtonContainer;\n    },\n    insertRemoveButton: function () {\n      const removeButtonContainer = document.createElement('div');\n      removeButtonContainer.className = 'remove-btn-container';\n      const output = `<i class=\"remove-btn fas fa-times-circle\"></i>`;\n      removeButtonContainer.innerHTML = output;\n      return removeButtonContainer;\n    },\n    insertCheckmarkIcon: function () {\n      const checkmarkIconContainer = document.createElement('div');\n      checkmarkIconContainer.className = 'checkmark-icon-container';\n      const output = '<i class=\"checkmark-icon fas fa-check-circle\"></i>';\n      checkmarkIconContainer.innerHTML = output;\n      return checkmarkIconContainer;\n    },\n    insertButtonContainer: function (containerFor) {\n      const selectors = this.getUiSelectors();\n      let backBtnContainer = this.insertBackButton('idResult');\n      let addBtnContainer = this.insertAddButton();\n      let resultByIdContainer = document.querySelector(\n        selectors.resultByIdContainer\n      );\n      let removeBtnContainer = this.insertRemoveButton();\n      let checkmarkIcon = this.insertCheckmarkIcon();\n      let buttonContainer = document.createElement('div');\n      buttonContainer.className = 'button-container';\n      // If containerFor is idResult, that means the buttons should be added when the user clicks on a search result\n      // The button container for idResult will always have a back button, while the container for title-container won't\n      if (containerFor === 'idResult') {\n        // addRemoveBtnContainer will hold add and remove buttons so flex styling will be way easier\n        buttonContainer.append(backBtnContainer, addBtnContainer);\n        resultByIdContainer.insertAdjacentElement(\n          'beforebegin',\n          buttonContainer\n        );\n        // If the add button is clicked, remove it and replace it with the checkmark icon and remove button\n      } else if (containerFor === 'addBtnClick') {\n        buttonContainer = document.querySelector(selectors.buttonContainer);\n        addBtnContainer = document.querySelector(selectors.addBtnContainer);\n        // deleting the button container\n        addBtnContainer.remove();\n        // Creating container for remove button and checkmark icon\n        let checkmarkRemoveContainer = document.createElement('div');\n        checkmarkRemoveContainer.className = 'checkmark-remove-container';\n        checkmarkRemoveContainer.append(checkmarkIcon, removeBtnContainer);\n        // Add the container to the button container\n        buttonContainer.append(checkmarkRemoveContainer);\n      }\n      // If container is searchResult, that means the buttons should be added to the elements after they have been searched\n      else {\n        return;\n      }\n    },\n    // Gives user feedback when they add or remove something\n    // giveFeedback: function (action) {\n    //   const selectors = this.getUiSelectors();\n    //   const buttonContainer = document.querySelector(selectors.buttonContainer);\n    //   const feedbackContainer = document.createElement('div');\n    //   feedbackContainer.className = 'feedback-container';\n    //   const backBtnContainer = document.querySelector(\n    //     selectors.backBtnContainer\n    //   );\n    //   let output;\n    //   if (action === 'add') {\n    //     output = `<p class=\"feedback added-backlog\">Item added to backlog</p>`;\n    //   } else {\n    //     output = `<p class=\"feedback removed-backlog\">Item removed from backlog</p>`;\n    //   }\n    //   feedbackContainer.innerHTML = output;\n    //   backBtnContainer.insertAdjacentElement('afterend', feedbackContainer);\n    // },\n    // // ClearFeedback is called in a settime out after the add or remove button is clicked\n    // clearFeedback: function () {\n    //   const selectors = Ui.getUiSelectors();\n    //   const feedbackContainer = document.querySelector(\n    //     selectors.feedbackContainer\n    //   );\n    //   feedbackContainer.remove();\n    // },\n    // Settimeout will call this after the item is added to the backlog\n    clearCheckmark: function () {\n      const selectors = Ui.getUiSelectors();\n      const checkmarkIconContainer = document.querySelector(\n        selectors.checkmarkIconContainer\n      );\n      if (checkmarkIconContainer) {\n        checkmarkIconContainer.remove();\n      }\n    },\n    clearContainer: function () {\n      const selectors = Ui.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n\n      container.innerHTML = '';\n    },\n    clearButtonContainer: function () {\n      const selectors = Ui.getUiSelectors();\n      const buttonContainer = document.querySelector(selectors.buttonContainer);\n      buttonContainer.remove();\n    },\n    getAllSearchResults: function () {\n      const selectors = this.getUiSelectors();\n      return document.querySelectorAll(selectors.searchResultItem);\n    },\n    // Function to determine if film is 'fresh' or 'rotten' on rottenTomatoes\n    getRottenTomatoesIcon: function (isRotten) {\n      // Get rid of percent sign at end of value\n\n      // Holds path of icon\n      let iconPath;\n\n      if (isRotten) {\n        iconPath = './src/img/fresh.png';\n      } else {\n        iconPath = './src/img/rotten.png';\n      }\n\n      return iconPath;\n    },\n    getPreviousElement: function () {\n      return previousElement;\n    },\n    setPreviousElement: function (filmObjectArray) {\n      previousElement = filmObjectArray;\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n/* harmony import */ var _Tmdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tmdb */ \"./src/Tmdb.js\");\n// Request URL\n// https://api-v3.igdb.com\n// App name\n// backlog-buddy's App\n// Key\n\n\n\n\n\n\n_AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].init();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
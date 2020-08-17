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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppCtrl\", function() { return AppCtrl; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n/* harmony import */ var _Tmdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tmdb */ \"./src/Tmdb.js\");\n\n\n\n\nconst AppCtrl = (function () {\n  return {\n    loadEventListenersOnInit: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n      const searchBar = document.querySelector(selectors.searchBar);\n      const searchBtn = document.querySelector(selectors.searchBtn);\n      const backBtn = document.querySelector(selectors.backBtn);\n      const container = document.querySelector(selectors.container);\n      const title = document.querySelector(selectors.title);\n\n      title.addEventListener('click', function () {\n        _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearContainer();\n      });\n\n      searchBtn.addEventListener('click', function () {\n        const searchValue = searchBar.value;\n        _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(searchValue);\n      });\n\n      searchBar.addEventListener('keypress', function (e) {\n        if (e.keyCode == 13) {\n          const searchValue = searchBar.value;\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchMovie(searchValue);\n        }\n      });\n\n      container.addEventListener('click', function (e) {\n        console.log(e.target);\n        let targetList;\n        targetList = e.target.parentNode.classList;\n        targetList.forEach((target) => {\n          if (target === 'back-btn') {\n            const getPreviousElement = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getPreviousElement();\n            _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsToUi(getPreviousElement);\n          }\n        });\n      });\n    },\n    loadResultsEventListeners: function () {\n      const selectors = _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getUiSelectors();\n\n      document.querySelectorAll(selectors.searchResultItem).forEach((item) =>\n        item.addEventListener('click', function (e) {\n          console.log(e);\n          _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].searchFilmById(e.target.id);\n        })\n      );\n    },\n    init: function () {\n      this.loadEventListenersOnInit();\n      // Tmdb.getTrendingFilms();\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/AppCtrl.js?");

/***/ }),

/***/ "./src/Omdb.js":
/*!*********************!*\
  !*** ./src/Omdb.js ***!
  \*********************/
/*! exports provided: Omdb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Omdb\", function() { return Omdb; });\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n\n\n// House info and methods for all the Used APIs\nconst Omdb = (function () {\n  const apiAttributes = {\n    API_KEY: 'de7f6f4e',\n    URL: `http://www.omdbapi.com/?`,\n  };\n  const filmObject = function (id, title, year) {\n    return {\n      id: id,\n      title: title,\n      year: year,\n    };\n  };\n  return {\n    getApiAttributes: function () {\n      return apiAttributes;\n    },\n    searchMovie: function (searchTitle) {\n      // Ui.clearContainer();\n      // Will be returned, this holds all of the objects in the array returned from the API's promise\n      let filmObjectArray = [];\n      const attributes = this.getApiAttributes();\n\n      // fetch('/src/batman.json')\n      fetch(`${attributes.URL}s=${searchTitle}&apikey=${attributes.API_KEY}`)\n        .then((data) => data.json())\n        .then((results) => {\n          const resultsArray = Array.from(results.Search);\n\n          resultsArray.forEach((result) => {\n            filmObjectArray.push(result);\n          });\n\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsToUi(filmObjectArray);\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].setPreviousElement(filmObjectArray);\n\n          // To test the json locally\n          // fetch('/src/batman.json')\n        })\n        .catch((err) => console.log(err));\n    },\n    searchFilmById: function (imdbId) {\n      const attributes = this.getApiAttributes();\n\n      // FOR URL ONLY\n      // fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)\n\n      // For local data only\n      // fetch('/src/batmanBegins.json')\n      fetch(\n        `${attributes.URL}i=${imdbId}&plot=full&apikey=${attributes.API_KEY}`\n      )\n        .then((data) => data.json())\n        .then((result) => {\n          console.log(result);\n          _Ui__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addResultsByIdToUi(result);\n        })\n        .catch((err) => console.log(err));\n    },\n    determineIfFresh: function (rottenTomatoesRating) {\n      // Get rid of percent sign at end of value\n      rottenTomatoesRating = String(rottenTomatoesRating);\n      rottenTomatoesRating = rottenTomatoesRating.replace('%', '');\n\n      if (rottenTomatoesRating < 59) {\n        return false;\n      }\n      return true;\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Omdb.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ui\", function() { return Ui; });\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n\n\n\nconst Ui = (function () {\n  const UiSelectors = {\n    title: '.title',\n    searchBar: '.search-bar',\n    searchBtn: '.search-btn',\n    backBtn: '.back-btn',\n    container: '.container',\n    trendingContainer: '.trending-container',\n    searchResultsContainer: '.search-results-container',\n    searchResultItem: '.search-result-item',\n    idDetails: '.id-details',\n    resultByIdContainer: '.result-by-id-container',\n  };\n  let previousElement;\n\n  return {\n    getUiSelectors: function () {\n      return UiSelectors;\n    },\n    // Loaded every time the page is reloaded/if the site logo is clicked\n    homePage: function () {\n      // Gets rid of films or whatever data is showing on the screen\n      this.clearContainer();\n\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n      parentDiv.className = 'home-page-container';\n\n      // const output = ``\n    },\n    addResultsToUi: function (resultArray) {\n      this.clearContainer();\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n      parentDiv.className = 'search-results-container';\n\n      let output = ``;\n      resultArray.forEach((result) => {\n        output += `\n                <div class=\"search-result-item\" id=${result.imdbID}>\n                    <h3 class=\"result-title\">${result.Title} (${result.Year})</h3>\n                    <img class=\"result-poster\" src=${result.Poster} alt=\"${result.Title}.jpg\"/>\n                </div>`;\n      });\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n      _AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].loadResultsEventListeners();\n    },\n    addResultsByIdToUi: function (searchResultsObject) {\n      this.clearContainer();\n\n      const selectors = this.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n      const parentDiv = document.createElement('div');\n\n      // Need to get\n      // Title, Year, Rating, release date , runtime, genre, director, writer, actors, plot, poster\n\n      parentDiv.className = 'result-by-id-container';\n      let output = '';\n\n      const imdbId = searchResultsObject.Ratings[0].Value;\n      let rottenTomatoesRating = '';\n      let rottenTomatoesIconPath = '';\n      let isFresh;\n\n      // Grab the rotten tomatoes attributes, check if there even is a score for it\n      // If there's only 1 element in the ratings array of searchResultsObject, that means the imdb rating is the only rating present.\n      // When this happens, tell the user that there is no availible rotten tomatoes score\n      if (searchResultsObject.Ratings.length > 1) {\n        rottenTomatoesRating = searchResultsObject.Ratings[1].Value;\n        isFresh = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].determineIfFresh(rottenTomatoesRating);\n        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);\n      } else {\n        rottenTomatoesRating = 'N/A';\n        isFresh = _Omdb__WEBPACK_IMPORTED_MODULE_1__[\"Omdb\"].determineIfFresh('0');\n        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);\n      }\n      // const rottenTomatoesIconPath = this.determineIfFresh();\n\n      output += `\n      <div class=\"id-result\">\n        <img src=\"${searchResultsObject.Poster}\" class=\"img-poster\" alt=\"${searchResultsObject.Title}.jpg\"/>\n        <div class=\"id-details\">\n          <h2 class=\"{id-title}\">${searchResultsObject.Title}</h2>\n          <h3 class=\"id-year\">${searchResultsObject.Year}</h3>\n          <div class=\"id-runtime-rating\">\n            <h3 class=\"id-runtime\">${searchResultsObject.Runtime}</h3>\n            <h3 class=\"id-rating\">${searchResultsObject.Rated}</h3>\n          </div>\n          <div class=\"critical-rating\">\n            <div class=\"id-imdb\">\n                <img src=\"./src/img/320px-IMDB_Logo_2016.svg.png\" alt=\"imdb\" class=\"imdb-logo\"/>\n                <h3 class=\"imdb-rating\">\n                  ${imdbId} \n                </h3>\n              </div>\n              <div class=\"id-rotten-tomatoes\">\n                <img src=${rottenTomatoesIconPath} class=\"rotten-icon\"/>\n                <h3 class=\"rotten-rating\">\n                  ${rottenTomatoesRating}\n                </h3>\n              </div>\n            </div>\n          <p class=\"id-plot\">${searchResultsObject.Plot}</p>\n          <div class=\"partial-cast\">\n            <h3 class=\"directed-by by\">Directed by \n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Director}\n              </span>\n            </h3>\n            <h3 class=\"written-by by\">Written By \n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Writer}\n              </span>\n            </h3>\n            <h3 class=\"genre by\"> Genre\n              <span class=\"partial-cast-space\">\n                ${searchResultsObject.Genre}\n              </span>\n            </h3>\n          </div>\n          </div> \n        </div>\n      </div>\n      `;\n\n      parentDiv.innerHTML = output;\n      container.append(parentDiv);\n\n      this.insertBackButton('idResult');\n    },\n    // Adds the back button for searching by id or Backlog\n    insertBackButton: function (buttonFor) {\n      const selectors = this.getUiSelectors();\n      let output;\n      if (buttonFor === 'idResult') {\n        const resultByIdContainer = document.querySelector(\n          selectors.resultByIdContainer\n        );\n        const backBtnContainer = document.createElement('div');\n        backBtnContainer.className = 'back-btn-container';\n        output = `      \n          <i class=\"back-btn fas fa-arrow-left\"></i>\n        `;\n\n        backBtnContainer.innerHTML = output;\n        resultByIdContainer.insertAdjacentElement(\n          'beforebegin',\n          backBtnContainer\n        );\n      }\n    },\n    clearContainer: function () {\n      const selectors = Ui.getUiSelectors();\n      const container = document.querySelector(selectors.container);\n\n      container.innerHTML = '';\n    },\n    getAllSearchResults: function () {\n      const selectors = this.getUiSelectors();\n      return document.querySelectorAll(selectors.searchResultItem);\n    },\n    // Function to determine if film is 'fresh' or 'rotten' on rottenTomatoes\n    getRottenTomatoesIcon: function (isRotten) {\n      // Get rid of percent sign at end of value\n\n      // Holds path of icon\n      let iconPath;\n\n      if (isRotten) {\n        iconPath = './src/img/fresh.png';\n      } else {\n        iconPath = './src/img/rotten.png';\n      }\n\n      return iconPath;\n    },\n    getPreviousElement: function () {\n      return previousElement;\n    },\n    setPreviousElement: function (filmObjectArray) {\n      previousElement = filmObjectArray;\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCtrl */ \"./src/AppCtrl.js\");\n/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ui */ \"./src/Ui.js\");\n/* harmony import */ var _Omdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Omdb */ \"./src/Omdb.js\");\n/* harmony import */ var _Tmdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tmdb */ \"./src/Tmdb.js\");\n// Request URL\n// https://api-v3.igdb.com\n// App name\n// backlog-buddy's App\n// Key\n\n\n\n\n\n\n// let result = Api.searchMovie('batman');\n_AppCtrl__WEBPACK_IMPORTED_MODULE_0__[\"AppCtrl\"].init();\n\n// Api.searchFilmById('tt0372784');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
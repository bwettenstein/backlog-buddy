import { Ui } from './Ui';
import { AppCtrl } from './AppCtrl';

// House info and methods for all the Used APIs
const Omdb = (function () {
  const apiAttributes = {
    API_KEY: 'de7f6f4e',
    URL: `http://www.omdbapi.com/?`,
  };
  // currentPage by default will be 1
  // It's used to keep track of the current pagination when searching the API
  // For example, if currentPage is 1 and the user clicks "next", currentPage
  // will increase to 2 and search the 2nd page of results in the API
  let currentPage = 1;
  // Used by the searchMovie method to check whether or not the current search query
  // is the same as the previous one. If they differ, then reset currentPage to 1.
  // If they're the same, keep currentPage
  let previousSearchTitle;
  return {
    getApiAttributes: function () {
      return apiAttributes;
    },
    searchMovie: function (searchTitle) {
      // Will be returned, this holds all of the objects in the array returned from the API's promise
      let filmObjectArray = [];
      // If resultsTotal is greater than 10, insert pagination container
      let resultsTotal;
      const attributes = this.getApiAttributes();
      let page = this.getCurrentPage();

      this.modifyPreviousSearchTitle(searchTitle);

      if (previousSearchTitle !== searchTitle) {
        this.modifyCurrentPage(1);
        this.modifyPreviousSearchTitle(searchTitle);
      }

      // Fetch batman.json to test the API methods on a local file
      //fetch('/src/batman.json')

      fetch(
        `${attributes.URL}s=${searchTitle}&page=${page}&apikey=${attributes.API_KEY}`
      )
        .then((data) => data.json())
        .then((results) => {
          console.log('reuslts', results);
          // console.log('totresults', results.totalResults);
          resultsTotal = results.totalResults;
          const resultsArray = Array.from(results.Search);

          resultsArray.forEach((result) => {
            filmObjectArray.push(result);
          });

          Ui.addResultsToUi(filmObjectArray);
          Ui.setPreviousElement(filmObjectArray);

          if (resultsTotal > 10) {
            Ui.insertPaginationContainer();
            AppCtrl.loadPaginationEventListeners(searchTitle);
          }
        })
        .catch((err) => {
          Ui.giveFeedback();
          console.log(err, 'searchMovie');
        });
    },
    // Searching by ID yields much more detail about the selected item, when a user clicks
    // on a search result,
    searchFilmById: function (imdbId) {
      const attributes = this.getApiAttributes();
      // FOR URL ONLY
      // fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)

      // For local data only
      // fetch('/src/batmanBegins.json')
      fetch(
        `${attributes.URL}i=${imdbId}&plot=full&apikey=${attributes.API_KEY}`
      )
        .then((data) => data.json())
        .then((result) => {
          console.log(result, 'result');
          Ui.addResultsByIdToUi(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // The backlog array will only be populated with their imdbIds, so this function will search for their data using
    // their imdbId and display it
    searchFilmForBacklog: function (imdbId) {
      const attributes = this.getApiAttributes();
      fetch(
        `${attributes.URL}i=${imdbId}&plot=full&apikey=${attributes.API_KEY}`
      )
        .then((data) => data.json())
        .then((result) => {
          Ui.addBacklogToUi(result);
        })
        .catch((err) => console.log(err));
    },
    determineIfFresh: function (rottenTomatoesRating) {
      // Get rid of percent sign at end of value
      rottenTomatoesRating = String(rottenTomatoesRating);
      rottenTomatoesRating = rottenTomatoesRating.replace('%', '');

      if (rottenTomatoesRating < 59) {
        return false;
      }
      return true;
    },
    getCurrentPage: function () {
      return currentPage;
    },
    modifyCurrentPage: function (newCurrentPage) {
      currentPage = newCurrentPage;
    },
    getPreviousSearchTitle: function () {
      return previousSearchTitle;
    },
    modifyPreviousSearchTitle: function (newSearchTitle) {
      previousSearchTitle = newSearchTitle;
    },
  };
})();

export { Omdb };

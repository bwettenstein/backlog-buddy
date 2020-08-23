import { Ui } from './Ui';

// House info and methods for all the Used APIs
const Omdb = (function () {
  const apiAttributes = {
    API_KEY: 'de7f6f4e',
    URL: `http://www.omdbapi.com/?`,
  };
  const filmObject = function (id, title, year) {
    return {
      id: id,
      title: title,
      year: year,
    };
  };
  return {
    getApiAttributes: function () {
      return apiAttributes;
    },
    searchMovie: function (searchTitle) {
      // Ui.clearContainer();
      // Will be returned, this holds all of the objects in the array returned from the API's promise
      let filmObjectArray = [];
      const attributes = this.getApiAttributes();

      // fetch('/src/batman.json')
      fetch(`${attributes.URL}s=${searchTitle}&apikey=${attributes.API_KEY}`)
        .then((data) => data.json())
        .then((results) => {
          // console.log(results, 'DA RESULTS');
          const resultsArray = Array.from(results.Search);

          resultsArray.forEach((result) => {
            filmObjectArray.push(result);
          });

          Ui.addResultsToUi(filmObjectArray);
          Ui.setPreviousElement(filmObjectArray);

          // To test the json locally
          // fetch('/src/batman.json')
        })
        .catch((err) => {
          Ui.giveFeedback();
          console.log(err, 'searchMovie');
        });
    },
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
  };
})();

export { Omdb };

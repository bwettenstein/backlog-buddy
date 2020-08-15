import { Ui } from './Ui';
import { AppCtrl } from './AppCtrl';

const Api = (function () {
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
    createFilmObject(id, title, year) {
      return filmObject(id, title, year);
    },
    // To search s=SEARCH_QUERY&api_key=API_KEY
    searchMovie: function (searchTitle) {
      // Ui.clearContainer();
      // Will be returned, this holds all of the objects in the array returned from the API's promise
      let filmObjectArray = [];
      const attributes = this.getApiAttributes();

      // fetch('/src/batman.json')
      fetch(`${attributes.URL}s=${searchTitle}&apikey=${attributes.API_KEY}`)
        .then((data) => data.json())
        .then((results) => {
          const resultsArray = Array.from(results.Search);

          resultsArray.forEach((result) => {
            filmObjectArray.push(result);
          });

          Ui.addResultsToUi(filmObjectArray);

          // To test the json locally
          // fetch('/src/batman.json')
        })
        .catch((err) => console.log(err));
    },
    searchFilmById: function (imdbId) {
      const attributes = this.getApiAttributes();

      // FOR URL ONLY
      // fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)

      // For local data only
      // fetch('/src/batmanBegins.json')
      fetch(`${attributes.URL}i=${imdbId}&apikey=${attributes.API_KEY}`)
        .then((data) => data.json())
        .then((result) => {
          // Ui.addResultsByIdToUi(result);
          Ui.addResultsByIdToUi(result);
        })
        .catch((err) => console.log(err));
    },
  };
})();

export { Api };

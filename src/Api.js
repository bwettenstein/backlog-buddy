import { Ui } from './Ui';

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
      // Will be returned, this holds all of the objects in the array returned from the API's promise
      let filmObjectArray = [];

      fetch('/src/batman.json')
        .then((data) => data.json())
        .then((results) => {
          const resultsArray = Array.from(results.Search);

          resultsArray.forEach((result) => {
            filmObjectArray.push(result);
          });

          Ui.addResultsToUi(filmObjectArray);

          // resultsArray.forEach((data) => {
          //   // console.log(data.Title, data.Year);
          //   Ui.addResultsToUi(data.imdbID, data.Title, data.Year, data.Poster);
          //   const randoObject = {
          //     id: data.imdbID,
          //     title: data.Title,
          //     year: data.Year,
          //     poster: data.Poster,
          //   };
          // });

          // const id = JSON.stringify(results.searchMovie[x].imdbId);
          // const title = JSON.stringify(results.Search[x].Title);
          // const year = JSON.stringify(results.Search[x].Year);

          // newFilmObject = this.createFilmObject(id, title, year);
          // filmObjectArray.push(searchResults);

          // JUST FOR ACTUAL URLLLLLLL
          // fetch(`${attributes.URL}s=${searchTitle}&apikey=${attributes.API_KEY}`)
          //   .then((data) => data.json())
          //   .then((results) => {
          //     //   console.log(results, typeof results);

          //     for (let x = 0; x < results.Search.length; x++) {
          //       const searchResults = {
          //         id: JSON.stringify(results.Search[x].imdbID),
          //         title: JSON.stringify(results.Search[x].Title),
          //         year: JSON.stringify(results.Search[x].Year),
          //       };
          // const title = JSON.stringify(results.Search[x].Title);
          // const year = JSON.stringify(results.Search[x].Year);

          // newFilmObject = this.createFilmObject(id, title, year);
        })
        .catch((err) => console.log(err));
    },
  };
})();

export { Api };

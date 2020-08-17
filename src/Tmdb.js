import { Omdb } from './Omdb';

// Used to pull trending and popular films for the homepage/init state
const Tmdb = (function () {
  const apiAttributes = {
    // example api call
    // https://api.themoviedb.org/3/movie/550?api_key=79198defc21befacb3a61066b831701a
    API_KEY: '79198defc21befacb3a61066b831701a',
    URL: 'https://api.themoviedb.org',
    CORS_URL: 'https://cors-anywhere.herokuapp.com/',
    // API_READ_ACCESS:
    //   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTE5OGRlZmMyMWJlZmFjYjNhNjEwNjZiODMxNzAxYSIsInN1YiI6IjVmMzk2YjZiYzU4NDBkMDAzNTliYmQ5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zevqwsCOicGrfG9Lmt6egYshiPbBXg44vd-YYdVy_To',
  };
  return {
    getAttributes: function () {
      return apiAttributes;
    },
    // Get the titles of the trending films, add them to an array, search them using Ombi API
    // getTrendingFilms: function () {
    //   const attributes = this.getAttributes();
    //   let arrayOfTitles = [];

    //   fetch(
    //     // `${apiAttributes.CORS_URL}${attributes.URL}/trending/movie/week?api_key=${attributes.API_KEY}`
    //     `${attributes.CORS_URL}${attributes.URL}/3/trending/movie/week?api_key=${attributes.API_KEY}`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Only want 12 films MAX
    //       for (let x = 0; x < 12; x++) {
    //         const title = data.results[x].title;
    //         arrayOfTitles.push(title);
    //       }
    //       console.log(data.results, 'result');
    //       Omdb.getTrendingPosterUrl(arrayOfTitles);
    //       // send over the trending films
    //     })
    //     .catch((err) => console.log(err));
    //   //   Omdb.searchTrendingMovie(arrayOfTitles);
    // },
  };
})();

export { Tmdb };

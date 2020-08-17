import { AppCtrl } from './AppCtrl';
import { Omdb } from './Omdb';

const Ui = (function () {
  const UiSelectors = {
    title: '.title',
    searchBar: '.search-bar',
    searchBtn: '.search-btn',
    backBtn: '.back-btn',
    container: '.container',
    trendingContainer: '.trending-container',
    searchResultsContainer: '.search-results-container',
    searchResultItem: '.search-result-item',
    idDetails: '.id-details',
  };
  let previousElement;

  return {
    getUiSelectors: function () {
      return UiSelectors;
    },
    // Loaded every time the page is reloaded/if the site logo is clicked
    homePage: function () {
      // Gets rid of films or whatever data is showing on the screen
      this.clearContainer();

      const selectors = this.getUiSelectors();
      const container = document.querySelector(selectors.container);
      const parentDiv = document.createElement('div');
      parentDiv.className = 'home-page-container';

      // const output = ``
    },
    addResultsToUi: function (resultArray) {
      this.clearContainer();
      const selectors = this.getUiSelectors();
      const container = document.querySelector(selectors.container);
      const parentDiv = document.createElement('div');
      parentDiv.className = 'search-results-container';

      let output = ``;
      resultArray.forEach((result) => {
        output += `
                <div class="search-result-item" id=${result.imdbID}>
                    <h3 class="result-title">${result.Title} (${result.Year})</h3>
                    <img class="result-poster" src=${result.Poster} alt="${result.Title}.jpg"/>
                </div>`;
      });

      parentDiv.innerHTML = output;
      container.append(parentDiv);
      AppCtrl.loadResultsEventListeners();
    },
    addResultsByIdToUi: function (searchResultsObject) {
      this.clearContainer();

      const selectors = this.getUiSelectors();
      const container = document.querySelector(selectors.container);
      const parentDiv = document.createElement('div');

      // Need to get
      // Title, Year, Rating, release date , runtime, genre, director, writer, actors, plot, poster

      parentDiv.className = 'result-by-id-container';
      let output = '';

      const imdbId = searchResultsObject.Ratings[0].Value;
      let rottenTomatoesRating = '';
      let rottenTomatoesIconPath = '';
      let isFresh;

      // Grab the rotten tomatoes attributes, check if there even is a score for it
      // If there's only 1 element in the ratings array of searchResultsObject, that means the imdb rating is the only rating present.
      // When this happens, tell the user that there is no availible rotten tomatoes score
      if (searchResultsObject.Ratings.length > 1) {
        rottenTomatoesRating = searchResultsObject.Ratings[1].Value;
        isFresh = Omdb.determineIfFresh(rottenTomatoesRating);
        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);
      } else {
        rottenTomatoesRating = 'N/A';
        isFresh = Omdb.determineIfFresh('0');
        rottenTomatoesIconPath = this.getRottenTomatoesIcon(isFresh);
      }
      // const rottenTomatoesIconPath = this.determineIfFresh();

      output += `
      <div class="id-result">
        <img src="${searchResultsObject.Poster}" class="img-poster" alt="${searchResultsObject.Title}.jpg"/>
        <div class="id-details">
          <h2 class="{id-title}">${searchResultsObject.Title}</h2>
          <h3 class="id-year">${searchResultsObject.Year}</h3>
          <div class="id-runtime-rating">
            <h3 class="id-runtime">${searchResultsObject.Runtime}</h3>
            <h3 class="id-rating">${searchResultsObject.Rated}</h3>
          </div>
          <div class="critical-rating">
            <div class="id-imdb">
                <img src="./src/img/320px-IMDB_Logo_2016.svg.png" alt="imdb" class="imdb-logo"/>
                <h3 class="imdb-rating">
                  ${imdbId} 
                </h3>
              </div>
              <div class="id-rotten-tomatoes">
                <img src=${rottenTomatoesIconPath} class="rotten-icon"/>
                <h3 class="rotten-rating">
                  ${rottenTomatoesRating}
                </h3>
              </div>
            </div>
          <p class="id-plot">${searchResultsObject.Plot}</p>
          <div class="partial-cast">
            <h3 class="directed-by by">Directed by 
              <span class="partial-cast-space">
                ${searchResultsObject.Director}
              </span>
            </h3>
            <h3 class="written-by by">Written By 
              <span class="partial-cast-space">
                ${searchResultsObject.Writer}
              </span>
            </h3>
            <h3 class="genre by"> Genre
              <span class="partial-cast-space">
                ${searchResultsObject.Genre}
              </span>
            </h3>
          </div>
          </div> 
        </div>
      </div>
      `;

      parentDiv.innerHTML = output;
      container.append(parentDiv);

      // Insert the back button
      const backBtnContainer = document.createElement('div');
      backBtnContainer.className = 'back-btn-container';
      output = `      
      <i class="back-btn fas fa-arrow-left"></i>
      `;
      backBtnContainer.innerHTML = output;
      // Inserts the button before the id-result
      document
        .querySelector(selectors.container)
        .insertAdjacentElement('afterbegin', backBtnContainer);
    },
    clearContainer: function () {
      const selectors = Ui.getUiSelectors();
      const container = document.querySelector(selectors.container);

      container.innerHTML = '';
    },
    getAllSearchResults: function () {
      const selectors = this.getUiSelectors();
      return document.querySelectorAll(selectors.searchResultItem);
    },
    // Function to determine if film is 'fresh' or 'rotten' on rottenTomatoes
    getRottenTomatoesIcon: function (isRotten) {
      // Get rid of percent sign at end of value

      // Holds path of icon
      let iconPath;

      if (isRotten) {
        iconPath = './src/img/fresh.png';
      } else {
        iconPath = './src/img/rotten.png';
      }

      return iconPath;
    },
    getPreviousElement: function () {
      return previousElement;
    },
    setPreviousElement: function (filmObjectArray) {
      previousElement = filmObjectArray;
    },
  };
})();

export { Ui };

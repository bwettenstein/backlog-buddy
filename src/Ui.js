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
    resultByIdContainer: '.result-by-id-container',
    addBtnContainer: '.add-btn-container',
    buttonContainer: '.button-container',
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
      parentDiv.id = `${searchResultsObject.imdbID}`;
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

      // this.insertBackButton('idResult');
      this.insertButtonContainer('idResult');
    },
    // Adds the back button for searching by id or Backlog
    insertBackButton: function (buttonFor) {
      const selectors = this.getUiSelectors();
      let output;
      if (buttonFor === 'idResult') {
        const resultByIdContainer = document.querySelector(
          selectors.resultByIdContainer
        );
        const backBtnContainer = document.createElement('div');
        backBtnContainer.className = 'back-btn-container';
        // output = `
        //   <i class="back-btn fas fa-arrow-left"></i>
        // `;
        output = `<i class="back-btn fas fa-arrow-circle-left"></i>`;

        backBtnContainer.innerHTML = output;
        // resultByIdContainer.insertAdjacentElement(
        //   'beforebegin',
        //   backBtnContainer
        // );
        return backBtnContainer;
      }
    },
    insertAddButton: function () {
      // let output;
      const addButtonContainer = document.createElement('div');
      addButtonContainer.className = 'add-btn-container';
      // output = `<i class="add-btn fas fa-plus"></i>`;
      const output = `<i class="add-btn fas fa-plus-circle"></i>`;
      addButtonContainer.innerHTML = output;
      return addButtonContainer;
    },
    insertRemoveButton: function () {
      const removeButtonContainer = document.createElement('div');
      removeButtonContainer.className = 'remove-btn-container';
      const output = `<i class="remove-btn fas fa-times-circle"></i>`;
      removeButtonContainer.innerHTML = output;
      return removeButtonContainer;
    },
    insertCheckmarkIcon: function () {
      const checkmarkIconContainer = document.createElement('div');
      checkmarkIconContainer.className = 'checkmark-icon-container';
      const output = '<i class="checkmark-icon fas fa-check-circle"></i>';
      checkmarkIconContainer.innerHTML = output;
      return checkmarkIconContainer;
    },
    insertButtonContainer: function (containerFor) {
      let output;
      const selectors = this.getUiSelectors();
      let backBtnContainer = this.insertBackButton('idResult');
      let addBtnContainer = this.insertAddButton();
      let resultByIdContainer = document.querySelector(
        selectors.resultByIdContainer
      );
      let removeBtnContainer = this.insertRemoveButton();
      let checkmarkIcon = this.insertCheckmarkIcon();
      let buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
      // If containerFor is idResult, that means the buttons should be added when the user clicks on a search result
      // The button container for idResult will always have a back button, while the container for searchResult won't
      if (containerFor === 'idResult') {
        // addRemoveBtnContainer will hold add and remove buttons so flex styling will be way easier
        buttonContainer.append(backBtnContainer, addBtnContainer);
        resultByIdContainer.insertAdjacentElement(
          'beforebegin',
          buttonContainer
        );
        // If the add button is clicked, remove it and replace it with the checkmark icon and remove button
      } else if (containerFor === 'addBtnClick') {
        buttonContainer = document.querySelector(selectors.buttonContainer);
        addBtnContainer = document.querySelector(selectors.addBtnContainer);
        // deleting the button container
        addBtnContainer.remove();
        // buttonContainer.removeChild(addBtnContainer);
        console.log('called');
        // Creating container for remove button and checkmark icon
        let checkmarkRemoveContainer = document.createElement('div');
        checkmarkRemoveContainer.className = 'checkmark-remove-container';
        checkmarkRemoveContainer.append(checkmarkIcon, removeBtnContainer);
        // Add the container to the button container
        buttonContainer.append(checkmarkRemoveContainer);
      }
      // If container is searchResult, that means the buttons should be added to the elements after they have been searched
      else {
        return;
      }
    },
    clearContainer: function () {
      const selectors = Ui.getUiSelectors();
      const container = document.querySelector(selectors.container);

      container.innerHTML = '';
    },
    clearButtonContainer: function () {
      const selectors = Ui.getUiSelectors();
      const buttonContainer = document.querySelector(selectors.buttonContainer);
      buttonContainer.remove();
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

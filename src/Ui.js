import { AppCtrl } from './AppCtrl';
import { Omdb } from './Omdb';
import { Backlog } from './Backlog';

const Ui = (function () {
  const UiSelectors = {
    title: '.title',
    myBacklog: '.my-backlog',
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
    backBtnContainer: '.back-btn-container',
    buttonContainer: '.button-container',
    feedbackContainer: '.feedback-container',
    checkmarkIconContainer: '.checkmark-icon-container',
    backlogItem: '.backlog-item',
    backlogContainer: '.backlog-container',
    backlogItemContainer: '.backlog-item-container',
    clearBacklogBtn: '.clear-backlog-btn',
    feedbackContainer: '.feedback-container',
  };
  // Previous element is used when constructing the back button that's present when you click on a search result
  // Previous element will hold the previous search query, so when the back button is selected
  // the searchByTitle method will run using the previous search query to get the previous results
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
      const homepageContainer = document.createElement('div');
      homepageContainer.className = 'homepage-container';

      const output = `
      <div class="homepage-info-container">
        <h1 class="home-title">Your backlog</h1>
        <h3 class="home-info">Keep track of what you want to watch</h1>
      </div>
      `;

      homepageContainer.innerHTML = output;
      container.append(homepageContainer);

      const homepageFooterContainer = document.createElement('div');
      homepageFooterContainer.className = 'homepage-footer-container';

      const footerOutput = `
      <div class="homepage-footer-text">
        <h2 class="homepage-footer-big-text">No registration required</h2>
        <p class="homepage-footer-normal-text">Just search for a film or show and add it to your backlog</p>
      </div>
      <img class="homepage-footer-image" src="/src/img/Hitchcock.jpg" alt="Hitchcock.jpg"/>
      `;

      homepageFooterContainer.innerHTML = footerOutput;
      container.append(homepageFooterContainer);
    },
    // Grabs the data returned from searching for the film by title and appends it to the Ui
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
                <div class="title-container">
                <h3 class="result-title">${result.Title} (${result.Year})</h3>
                </div>
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

      const imdbRating = searchResultsObject.Ratings[0].Value;

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
                  ${imdbRating} 
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

      this.insertButtonContainer('idResult');

      // Check to see if item is already in backlog
      const imdbId = searchResultsObject.imdbID;
      const backlog = Backlog.getCurrentBacklog();
      // If it's already in the backlog, clear the add button
      if (backlog.indexOf(String(imdbId)) !== -1) {
        this.insertButtonContainer('addBtnClick');
      }
    },
    insertBacklogContainer: function () {
      this.clearContainer();
      const selectors = this.getUiSelectors();
      const backlog = Backlog.getCurrentBacklog();
      const container = document.querySelector(selectors.container);
      const backlogContainer = document.createElement('div');
      backlogContainer.className = 'backlog-container';
      let output = `
      <div class="backlog-stats-container">
        <h1 class="my-backlog-title">My Backlog</h1>
        <div class="backlog-stats-flex">
          <p class="number-of-items">${backlog.length} items</p>
          <button class="clear-backlog-btn" type="submit">Clear backlog</button>
        </div>
      </div>
      <div class="backlog-item-container">
      </div>
      `;
      backlogContainer.innerHTML = output;
      container.append(backlogContainer);
    },
    addBacklogToUi: function (backlogItemInfo) {
      const selectors = this.getUiSelectors();
      let output;
      const backlogItem = document.createElement('div');
      backlogItem.id = backlogItemInfo.imdbID;

      backlogItem.className = 'backlog-item';

      const backlogItemContainer = document.querySelector(
        selectors.backlogItemContainer
      );

      output = `
      <div class="title-container">
        <h3 class="backlog-title">${backlogItemInfo.Title} (${backlogItemInfo.Year})</h3>
      </div>
      <img class="backlog-poster" src=${backlogItemInfo.Poster} alt=${backlogItemInfo.Title}.jpg"/>
      `;

      backlogItem.innerHTML = output;
      backlogItemContainer.append(backlogItem);

      AppCtrl.loadBacklogResultsEventListeners();
    },
    // Adds the back button for searching by id or Backlog
    insertBackButton: function (buttonFor) {
      let output;
      if (buttonFor === 'idResult') {
        const backBtnContainer = document.createElement('div');
        backBtnContainer.className = 'back-btn-container';
        output = `<i class="back-btn fas fa-arrow-circle-left"></i>`;
        backBtnContainer.innerHTML = output;
        return backBtnContainer;
      }
    },
    insertAddButton: function () {
      const addButtonContainer = document.createElement('div');
      addButtonContainer.className = 'add-btn-container';
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
    // Depending on the parameter, the button container will appear in different areas and have different styling
    // All of the methods to create and remove buttons will modify the button contianer
    insertButtonContainer: function (containerFor) {
      const selectors = this.getUiSelectors();
      let backBtnContainer = this.insertBackButton('idResult');
      let addBtnContainer = this.insertAddButton();
      let resultByIdContainer = document.querySelector(
        selectors.resultByIdContainer
      );
      let removeBtnContainer = this.insertRemoveButton();
      let buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
      // If containerFor is idResult, that means the buttons should be added when the user clicks on a search result
      // The button container for idResult will always have a back button, while the container for title-container won't
      if (containerFor === 'idResult') {
        // addRemoveBtnContainer will hold add and remove buttons so flex styling will be way easier
        buttonContainer.append(backBtnContainer, addBtnContainer);
        resultByIdContainer.insertAdjacentElement(
          'beforebegin',
          buttonContainer
        );
        // If the add button is clicked, remove it and replace it with the remove button
      } else if (containerFor === 'addBtnClick') {
        buttonContainer = document.querySelector(selectors.buttonContainer);
        addBtnContainer = document.querySelector(selectors.addBtnContainer);
        // deleting the button container
        addBtnContainer.remove();
        // Creating container for remove button
        let checkmarkRemoveContainer = document.createElement('div');
        checkmarkRemoveContainer.className = 'checkmark-remove-container';
        checkmarkRemoveContainer.append(removeBtnContainer);
        // Add the container to the button container
        buttonContainer.append(checkmarkRemoveContainer);
      }
    },
    // Gives user feedback when they enter a search query that results in an error
    giveFeedback: function () {
      this.clearContainer();
      const selectors = this.getUiSelectors();
      const container = document.querySelector(selectors.container);
      const feedbackContainer = document.createElement('div');
      feedbackContainer.className = 'feedback-container';

      feedbackContainer.innerHTML =
        '<p class="feedback-text">Error: Search query not found</p> <img class="feedback-image" alt="crying.jpg" src="/src/img/crying.jpg">';

      container.append(feedbackContainer);
    },
    // This method will be called almost every time a user searches for something and clicks on the returned search result
    // Will also be called whenever the user accesses their backlog and the homepage
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
    // Sets the previous element to the returned array that holds all of the search results
    // So instead of re-calling the search method, we just re-call the populate Ui method
    // so when the user clicks on the back button it'll show the results they were just
    // looking at
    setPreviousElement: function (filmObjectArray) {
      previousElement = filmObjectArray;
    },
  };
})();

export { Ui };

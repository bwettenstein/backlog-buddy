import { AppCtrl } from './AppCtrl';

const Ui = (function () {
  const UiSelectors = {
    title: '.title',
    searchBar: '.search-bar',
    searchBtn: '.search-btn',
    container: '.container',
    searchResultsContainer: '.search-results-container',
    searchResultItem: '.search-result-item',
  };

  return {
    getUiSelectors: function () {
      return UiSelectors;
    },
    changeContainerClass: function (name) {
      if (name === 'search-results-container') {
        document.querySelector(
          this.getUiSelectors().searchResultsContainer
        ).className = name;
      }
    },
    addResultsToUi: function (resultArray) {
      this.clearContainer();
      const selectors = this.getUiSelectors();
      const container = document.querySelector(selectors.container);
      const parentDiv = document.createElement('div');
      parentDiv.className = 'search-results-container';

      let output = ``;

      resultArray.forEach(function (result) {
        output += `
                <div class="search-result-item" id=${result.imdbID}>
                    <h3 class="result-title">${result.Title} (${result.Year})</h3>
                    <img class="result-poster" src=${result.Poster} alt=${result.Title}/>
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

      output += `
      <div class="id-result">
        <h3 class="id-title">${searchResultsObject.Title} (${searchResultsObject.Year})</h3>
        <img src="${searchResultsObject.Poster}" class="img-poster" alt="${searchResultsObject.Title}"/>
        <p class="id-plot">${searchResultsObject.Plot}</p>
      </div>
      `;

      parentDiv.innerHTML = output;
      container.append(parentDiv);
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
  };
})();

export { Ui };

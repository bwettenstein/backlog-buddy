const Ui = (function () {
  const UiSelectors = {
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
    toggleClass: function () {},
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
                <div class="search-result-item" id=${result.imdbID}">
                    <h3 class="result-title">${result.Title} (${result.Year})</h3>
                    <img class="result-poster" src=${result.Poster} alt=${result.Title}/>
                </div>`;
      });

      parentDiv.innerHTML = output;
      container.append(parentDiv);
    },
    addResultsByIdToUi: function (searchResultsObject) {
      const selectors = this.getUiSelectors();
      const container = document.querySelector(selectors.container);
      const parentDiv = document.createElement('div');

      parentDiv.className = 'result-by-id-container';
      let output = '';

      output += `
      <div class="id-result">
        <h3 class="id-title">${searchResultsObject.Title} ${searchResultsObject.Year}</h3>
      </div>
      `;

      parentDiv.innerHTML = output;
      container.append(parentDiv);
    },
    clearContainer: function () {
      const selectors = Ui.getUiSelectors();
      const container = document.querySelector(selectors.container);

      container.innerHTML = '';

      // while (container.childElementCount > 0) {
      //   container.remove(container.lastChild);
      // }
    },
    getAllSearchResults: function () {
      const selectors = this.getUiSelectors();
      console.log(selectors.searchResultItem);
      console.log(document.querySelectorAll(selectors.searchResultItem));
      return document.querySelectorAll(selectors.searchResultItem);
    },
  };
})();

export { Ui };

const Ui = (function () {
  const UiSelectors = {
    searchBar: '.search-bar',
    searchBtn: '.search-btn',
    container: '.container',
    searchResultsContainer: '.search-results-container',
    searchResultsItem: '.search-result-item',
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
    // addResultsToUi: function (id, title, year, poster) {
    //   const selectors = this.getUiSelectors();
    //   const container = document.querySelector(selectors.container);
    //   let parentDiv = document.createElement('div');
    //   parentDiv.className = 'search-results-container';

    //   let output = ``;

    //   output += `
    //     <div class="search-result-item id=${id}">
    //         <h3 class="result-title">${title} ${year}</h3>
    //         <img class="result-poster" src=${poster} alt=${title}/>
    //     </div>`;

    //   parentDiv.innerHTML = output;
    //   container.append(parentDiv);
    // },
    addResultsToUi: function (resultArray) {
      const selectors = this.getUiSelectors();
      const container = document.querySelector(selectors.container);
      let parentDiv = document.createElement('div');
      parentDiv.className = 'search-results-container';

      console.log(resultArray);

      let output = ``;

      resultArray.forEach(function (result) {
        output += `
                <div class="search-result-item id=${result.Id}">
                    <h3 class="result-title">${result.Title} ${result.Year}</h3>
                    <img class="result-poster" src=${result.Poster} alt=${result.Title}/>
                </div>`;
      });

      parentDiv.innerHTML = output;
      container.append(parentDiv);
    },
  };
})();

export { Ui };

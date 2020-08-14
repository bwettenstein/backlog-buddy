import { Ui } from './Ui';
import { Api } from './Api';

const AppCtrl = (function () {
  return {
    loadEventListenersOnInit: function () {
      const selectors = Ui.getUiSelectors();
      const searchBar = document.querySelector(selectors.searchBar);
      const searchBtn = document.querySelector(selectors.searchBtn);

      searchBtn.addEventListener('click', function () {
        const searchValue = searchBar.value;
        Api.searchMovie(searchBar.value);
        console.log(searchValue);
      });
    },
    loadEventListenersToResults: function () {
      const selectors = Ui.getUiSelectors();

      const searchResultsItems = Ui.getAllSearchResults();

      const searchResultsArray = Array.from(searchResultsItems);

      // console.log(searchResultsArray);

      // searchResultsArray.forEach(function (result) {
      //   console.log('called');
      //   result.addEventListener('click', Api.searchFilmById(result.id));
      // });
    },

    init: function () {
      this.loadEventListenersOnInit();
    },
  };
})();

export { AppCtrl };

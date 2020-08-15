import { Ui } from './Ui';
import { Api } from './Api';

const AppCtrl = (function () {
  return {
    loadEventListenersOnInit: function () {
      const selectors = Ui.getUiSelectors();
      const searchBar = document.querySelector(selectors.searchBar);
      const searchBtn = document.querySelector(selectors.searchBtn);
      const title = document.querySelector(selectors.title);

      title.addEventListener('click', function () {
        Ui.clearContainer();
      });

      searchBtn.addEventListener('click', function () {
        const searchValue = searchBar.value;
        Api.searchMovie(searchValue);
      });

      searchBar.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
          const searchValue = searchBar.value;
          Api.searchMovie(searchValue);
        }
      });
    },
    loadResultsEventListeners: function () {
      const selectors = Ui.getUiSelectors();

      document.querySelectorAll(selectors.searchResultItem).forEach((item) =>
        item.addEventListener('click', function (e) {
          console.log(e);
          console.log(e.target.id);
          Api.searchFilmById(e.target.id);
        })
      );
    },

    init: function () {
      this.loadEventListenersOnInit();
    },
  };
})();

export { AppCtrl };

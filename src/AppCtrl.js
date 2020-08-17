import { Ui } from './Ui';
import { Ombdb, Omdb } from './Omdb';
import { Tmdb } from './Tmdb';

const AppCtrl = (function () {
  return {
    loadEventListenersOnInit: function () {
      const selectors = Ui.getUiSelectors();
      const searchBar = document.querySelector(selectors.searchBar);
      const searchBtn = document.querySelector(selectors.searchBtn);
      const backBtn = document.querySelector(selectors.backBtn);
      const container = document.querySelector(selectors.container);
      const title = document.querySelector(selectors.title);

      title.addEventListener('click', function () {
        Ui.clearContainer();
      });

      searchBtn.addEventListener('click', function () {
        const searchValue = searchBar.value;
        Omdb.searchMovie(searchValue);
      });

      searchBar.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
          const searchValue = searchBar.value;
          Omdb.searchMovie(searchValue);
        }
      });

      container.addEventListener('click', function (e) {
        let targetList;
        targetList = e.target.parentNode.classList;
        targetList.forEach((target) => {
          if (target === 'back-btn') {
            console.log('HSLSLSLSLSLS');
          }
          const getPreviousElement = Ui.getPreviousElement();
          Ui.addResultsToUi(getPreviousElement);
        });
      });
    },
    loadResultsEventListeners: function () {
      const selectors = Ui.getUiSelectors();

      document.querySelectorAll(selectors.searchResultItem).forEach((item) =>
        item.addEventListener('click', function (e) {
          console.log(e);
          // console.log(e.target.id);
          Omdb.searchFilmById(e.target.id);
        })
      );
    },
    init: function () {
      this.loadEventListenersOnInit();
      // Tmdb.getTrendingFilms();
    },
  };
})();

export { AppCtrl };

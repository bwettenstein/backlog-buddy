import { Ui } from './Ui';
import { Ombdb, Omdb } from './Omdb';
import { Tmdb } from './Tmdb';
import { Backlog } from './Backlog';
import { StorageControl } from './StorageControl';

const AppCtrl = (function () {
  return {
    loadEventListenersOnInit: function () {
      const selectors = Ui.getUiSelectors();
      const searchBar = document.querySelector(selectors.searchBar);
      const searchBtn = document.querySelector(selectors.searchBtn);
      const backBtn = document.querySelector(selectors.backBtn);
      const container = document.querySelector(selectors.container);
      const title = document.querySelector(selectors.title);
      const myBacklog = document.querySelector(selectors.myBacklog);

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

      myBacklog.addEventListener('click', function () {
        const backlog = Backlog.getCurrentBacklog();
        Ui.insertBacklogContainer();
        backlog.forEach((item) => {
          console.log(item, 'item');
          Omdb.searchFilmForBacklog(item);
        });
      });

      container.addEventListener('click', function (e) {
        let targetList;

        targetList = e.target.parentNode.classList;
        targetList.forEach((target) => {
          // Back button container often gets targeted depending on where the cursor clicks the icon,
          // so just include it with the event listener
          if (target === 'back-btn' || target === 'back-btn-container') {
            const getPreviousElement = Ui.getPreviousElement();
            Ui.addResultsToUi(getPreviousElement);
          } else if (target === 'add-btn' || target === 'add-btn-container') {
            // call the add to backlog function here
            Ui.insertButtonContainer('addBtnClick');
            setTimeout(Ui.clearCheckmark, 3000);

            const itemId = document.querySelector(selectors.resultByIdContainer)
              .id;
            StorageControl.storeItem(itemId);
            console.log(StorageControl.getItemsFromStorage(), 'item item item');
          } else if (
            target === 'remove-btn' ||
            target === 'remove-btn-container'
          ) {
            // Clear the button container
            Ui.clearButtonContainer();
            Ui.insertButtonContainer('idResult');
            const itemId = document.querySelector(selectors.resultByIdContainer)
              .id;
            Backlog.deleteItemFromBacklog(itemId);
          }
        });
      });
    },
    loadResultsEventListeners: function () {
      const selectors = Ui.getUiSelectors();

      document.querySelectorAll(selectors.searchResultItem).forEach((item) =>
        item.addEventListener('click', function (e) {
          Omdb.searchFilmById(e.target.id);
        })
      );
    },
    loadBacklogResultsEventListeners: function () {
      const selectors = Ui.getUiSelectors();
      // Adds event listeners to each backlog item
      document.querySelectorAll(selectors.backlogItem).forEach((item) =>
        item.addEventListener('click', function (e) {
          Omdb.searchFilmById(e.target.id);
        })
      );
      // Clears the entire backlog if the button is clicked
      document
        .querySelector(selectors.clearBacklogBtn)
        .addEventListener('click', () => {
          Backlog.clearBacklog();
          Ui.clearContainer();
          Ui.insertBacklogContainer();
        });
    },
    init: function () {
      this.loadEventListenersOnInit();
    },
  };
})();

export { AppCtrl };

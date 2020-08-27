import { Ui } from './Ui';
import { Omdb } from './Omdb';
import { Backlog } from './Backlog';
import { StorageControl } from './StorageControl';

const AppCtrl = (function () {
  return {
    loadEventListenersOnInit: function () {
      const selectors = Ui.getUiSelectors();
      const searchBar = document.querySelector(selectors.searchBar);
      const searchBtn = document.querySelector(selectors.searchBtn);
      const container = document.querySelector(selectors.container);
      const title = document.querySelector(selectors.title);
      const myBacklog = document.querySelector(selectors.myBacklog);

      title.addEventListener('click', function () {
        Ui.clearContainer();
        Ui.homePage();

        // Each time home page is loaded, the search parameters held in the Omdb methods should be reset
        Omdb.modifyCurrentPage(1);
        Omdb.modifyPreviousSearchTitle('');
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
          // console.log(item, 'item');
          Omdb.searchFilmForBacklog(item);
        });
      });

      container.addEventListener('click', function (e) {
        let targetList;

        targetList = e.target.parentNode.classList;
        targetList.forEach((target) => {
          // console.log(targetList, 'targetlist');
          // Back button container often gets targeted depending on where the cursor clicks the icon,
          // so just include it with the event listener
          if (target === 'back-btn' || target === 'back-btn-container') {
            const getPreviousElement = Ui.getPreviousElement();
            Ui.addResultsToUi(getPreviousElement);
          } else if (target === 'add-btn' || target === 'add-btn-container') {
            // call the add to backlog function here
            Ui.insertButtonContainer('addBtnClick');

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
            // insert it again, but without the checkmark icon
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
          // Clears the backlog from localStorage
          Backlog.clearBacklog();
          // Clears the container
          Ui.clearContainer();
          // Repopulates the backlog container with the current backlog elements
          Ui.insertBacklogContainer();
        });
    },
    loadPaginationEventListeners: function (currentSearchQuery) {
      const selectors = Ui.getUiSelectors();
      let currentPagination = Omdb.getCurrentPage();

      document.querySelector(selectors.prev).addEventListener('click', () => {
        let page = Omdb.getCurrentPage();
        if (page > 1) {
          Omdb.modifyCurrentPage(currentPagination - 1);
          Omdb.searchMovie(currentSearchQuery);
        }
      });

      document.querySelector(selectors.next).addEventListener('click', () => {
        let page = Omdb.getCurrentPage();
        if (page >= 1) {
          Omdb.modifyCurrentPage(currentPagination + 1);
          Omdb.searchMovie(currentSearchQuery);
        }
      });
    },
    init: function () {
      this.loadEventListenersOnInit();
      Ui.homePage();
    },
  };
})();

export { AppCtrl };

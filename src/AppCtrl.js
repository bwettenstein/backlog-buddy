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

      // Makes it so clicking on the title page clears the inner page container and populates the inner page container with home page content
      title.addEventListener('click', function () {
        Ui.clearContainer();
        Ui.homePage();

        // Each time home page is loaded, the search parameters held in the Omdb methods should be reset
        Omdb.modifyCurrentPage(1);
        Omdb.modifyPreviousSearchTitle('');
      });

      // Upon clicking the search button, the searched value will be stored and passed into the searchMovie function
      searchBtn.addEventListener('click', function () {
        const searchValue = searchBar.value;
        Omdb.searchMovie(searchValue);
      });

      // Executes the same actions as the searchBtn event listener, except this listens for the user to press the enter key instead of the search button
      searchBar.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
          const searchValue = searchBar.value;
          Omdb.searchMovie(searchValue);
        }
      });

      // Clicking the myBacklog button will clear the container, and populate it with items that have been added to the backlog
      myBacklog.addEventListener('click', function () {
        const backlog = Backlog.getCurrentBacklog();
        Ui.insertBacklogContainer();
        backlog.forEach((item) => {
          // Uncomment the below statement for debugging if necessary
          // console.log(item, 'item');
          Omdb.searchFilmForBacklog(item);
        });
      });

      // By far the biggest event listener, this relies on where in the container the user
      // clicks on. Since the container is constantly changing state depending on what the user
      // is doing (such as searching a film or checking their backlog) it made sense to just
      // make the event listeners dependent on the 'target' the user is clicking.
      container.addEventListener('click', function (e) {
        let targetList;

        targetList = e.target.parentNode.classList;
        targetList.forEach((target) => {
          // Uncomment the below code for debugging if necessary
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
            // Uncomment the below code for debugging if necessary
            // console.log(StorageControl.getItemsFromStorage(), 'item item item');
          } else if (
            target === 'remove-btn' ||
            target === 'remove-btn-container'
          ) {
            // Clear the button container
            Ui.clearButtonContainer();
            // insert it again, but without the checkmark icon because if the remove icon is
            // showing, that means the user has already clicked the checkmark to add it
            Ui.insertButtonContainer('idResult');
            const itemId = document.querySelector(selectors.resultByIdContainer)
              .id;
            Backlog.deleteItemFromBacklog(itemId);
          }
        });
      });
    },
    // Upon clicking a search result, the id of the clicked result is passed into the searchFilmById method to get
    // more details about the item
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
    // Clicking the next page clears clears the container and populates it with search results on the next page
    loadPaginationEventListeners: function (currentSearchQuery) {
      const selectors = Ui.getUiSelectors();
      // Current pagination is stored in the Omdb methods file for convenience, so this pulls from there
      let currentPagination = Omdb.getCurrentPage();

      document.querySelector(selectors.prev).addEventListener('click', () => {
        let page = Omdb.getCurrentPage();
        // If page isn't one, then there are previous pages. If it is one, there are none.
        if (page > 1) {
          // Passes in the new currentPage
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

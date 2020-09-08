import { StorageControl } from './StorageControl';

// The majority of the backlog functions are just pulling from StorageCtrl methods and executing them
// I thought the code would be more readable if it was written this way. For me, I found it easier to
// write out the storage methods as Backlog.METHOD instead of LocalStorage.METHOD, but this is a personal preference
const Backlog = (function () {
  return {
    getCurrentBacklog: function () {
      const currentBacklog = StorageControl.getItemsFromStorage();
      return currentBacklog;
    },
    addToBacklog: function (imdbId) {
      StorageControl.storeItem(imdbId);
    },
    deleteItemFromBacklog: function (imdbId) {
      StorageControl.deleteItemFromStorage(imdbId);
    },
    clearBacklog: function () {
      StorageControl.clearLocalStorage();
    },
  };
})();

export { Backlog };

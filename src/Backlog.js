import { Ui } from './Ui';
import { Omdb } from './Omdb';
import { StorageControl } from './StorageControl';

// const Backlog = (function () {
//   let currentBacklog = [];
//   return {
//     getCurrentBacklog: function () {
//       return currentBacklog;
//     },
//     addToBacklog: function (imdbId) {
//       currentBacklog.push(imdbId);
//     },
//     deleteItemFromBacklog: function (imdbId) {
//       const backlog = this.getCurrentBacklog();
//       const indexToDelete = backlog.indexOf(imdbId);
//       backlog.splice(indexToDelete, 1);
//     },
//     clearBacklog: function () {
//       currentBacklog = [];
//     },
//     // Finds how long the backlog is in minutes
//     // calculateBacklogDuration:function(){
//     //   const backlog = this.getCurrentBacklog()
//     //   backlog.forEach(item=>{

//     //   })
//     // }
//   };
// })();

const Backlog = (function () {
  // let currentBacklog = [];
  return {
    getCurrentBacklog: function () {
      const currentBacklog = StorageControl.getItemsFromStorage();
      return currentBacklog;
    },
    addToBacklog: function (imdbId) {
      StorageControl.storeItem(imdbId);
      // currentBacklog.push(imdbId);
    },
    deleteItemFromBacklog: function (imdbId) {
      StorageControl.deleteItemFromStorage(imdbId);
      // const backlog = this.getCurrentBacklog();
      // const indexToDelete = backlog.indexOf(imdbId);
      // backlog.splice(indexToDelete, 1);
    },
    clearBacklog: function () {
      StorageControl.clearLocalStorage();
    },
    // Finds how long the backlog is in minutes
    // calculateBacklogDuration:function(){
    //   const backlog = this.getCurrentBacklog()
    //   backlog.forEach(item=>{

    //   })
    // }
  };
})();

export { Backlog };

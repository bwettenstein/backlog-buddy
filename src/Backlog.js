import { Ui } from './Ui';
import { Omdb } from './Omdb';

const Backlog = (function () {
  let currentBacklog = [];
  return {
    getCurrentBacklog: function () {
      return currentBacklog;
    },
    addToBacklog: function (imdbId) {
      currentBacklog.push(imdbId);
    },
    deleteItemFromBacklog: function (imdbId) {
      const backlog = this.getCurrentBacklog();
      const indexToDelete = backlog.indexOf(imdbId);
      backlog.splice(indexToDelete, 1);
    },
    clearBacklog: function () {
      currentBacklog = [];
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

const StorageControl = (function () {
  return {
    storeItem: function (item) {
      let items;

      // If localStorage is empty, create an array and add the new item to it
      if (localStorage.getItem('items') === null) {
        items = [];

        items.push(item);

        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Get what's in local storage
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);

        // Re sets localStorage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function (item, index) {
        if (id === item) {
          items.splice(index, 1);
        }
      });
      //Reset local storage
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearLocalStorage: function () {
      localStorage.removeItem('items');
    },
  };
})();

export { StorageControl };

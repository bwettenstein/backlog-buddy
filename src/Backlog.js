const Backlog = (function () {
  const currentBacklog = {};
  return {
    getCurrentBacklog: function () {
      return currentBacklog;
    },
  };
})();

export { Backlog };

(function (root) {
  root.app = root.app || {};
  root.app.register = function (name, fn) {
    var value = fn(root.ng);
    value.overriddenName = name;
    root.app[name] = value;
  }
})(window);

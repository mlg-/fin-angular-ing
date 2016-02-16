(function(root) {

  var app = root.app || (root.app = {});
  app.services || (app.services = {})

  app.services.Books = ng.core
    .Class({
      constructor: [ng.http.Http, function(http) {
        this._http = http;
      }],

      getBooks: function() {
        return this._http
          .get('api/v1/books')
          .map(function(res) {
            return res.json();
          });
      }
    });

})(window);

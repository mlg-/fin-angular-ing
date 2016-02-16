(function(ng, app){
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent, [
        ng.http.HTTP_PROVIDERS,
        app.HeroService
    ]);
  });
})(this.ng, this.app);


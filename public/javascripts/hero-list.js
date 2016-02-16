app.register("HeroList", function(ng){
  return ng.core.
    Component({
      selector: 'hero-list',
      provders: [app.HeroService],
      templateUrl: 'javascripts/templates/hero-list.component.html'
    }).
  Class({
    constructor: [app.HeroService, function(heroes) { 
  });
});

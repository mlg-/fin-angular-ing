app.register("AppComponent", function(ng){
  return ng.core
    .Component({
      selector: 'my-app',
      provders: [app.HeroService],
      directives: [app.HeroFormComponent],
      templateUrl: 'javascripts/templates/app.component.html'
    })
    .Class({
      constructor: [ app.HeroService, function(heroService){
        this._heroService = heroService;
        this.heroes = ["test"];

        //this is Ugly.
        var that = this;
        this._heroService.getHeroes().then(function(data){
          that.heroes = data;
        })
      }],
      getHeroes: function(){
        var that =  this;
        this._heroService.getHeroes().then(function(data){
          console.log("got new heroes") 
          that.heroes = data;
        })
      },
      onUpdate: function(){
        console.log("updated")
        this.getHeroes();
      }
    });
});

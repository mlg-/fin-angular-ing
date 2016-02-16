app.register("HeroFormComponent", function(ng){
  return ng.core.
    Component({
      selector: 'hero-form',
      events: ['update'],
      templateUrl: 'javascripts/templates/hero-form.component.html'
    }).
  Class({
    constructor: [app.HeroService, function(heroService){
      this._heroService = heroService;
      this.update = new ng.core.EventEmitter();
      this.powers = ['Really Smart', 'Super Flexible',
      'Super Hot', 'Weather Changer'
      ];
      this.model = new app.Hero(18, 'Dr IQ', this.powers[0],
          'Chuck Overstreet');
      this.submitted = false;
    }],
    onSubmit: function() {
      this._heroService.submitHero(this.model);
      this.update.next();
    },
  });
});

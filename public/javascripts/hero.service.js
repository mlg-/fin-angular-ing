app.register ('HeroService', function (ng) {
  return ng.core.
    Class({
      constructor: [ng.http.Http, function (http) {
        this.http = http;
      }],
      submitHero: function(heroData){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var creds = JSON.stringify(heroData);

        //This is not typically how one would pass params, but this function would not work otherwise. Could not determine why!
        return this.http.post('heroes?data=' + creds).map(function (res) { return res.json();
        }).toPromise();
      },
      getHeroes: function () {
        return this.http.get('heroes.json').map(function (res) {
          return res.json();
          console.log("Get Heroes")
        }).toPromise();
      }
    });
});

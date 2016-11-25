var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/samus' ,{
      templateUrl: '/views/templates/samus.html',
      controller: 'samusController',
      controllerAs: 'samus'
    })
    .when('/frodo' ,{
      templateUrl: '/views/templates/frodo.html',
      controller: 'frodoController',
      controllerAs: 'frodo'
    })
    .when('/harry' ,{
      templateUrl: '/views/templates/harry.html',
      controller: 'harryController',
      controllerAs: 'harry'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('samusController', function() {
  console.log('samus controller running');
  var self = this;
  self.message = "Samus Aran";

});

app.controller('frodoController', function() {
  console.log('frodo controller running');
  var self = this;
  self.message = "Frodo Baggins";

});

app.controller('harryController', function() {
  console.log('harry controller running');
  var self = this;
  self.message = "Harry Potter";

});

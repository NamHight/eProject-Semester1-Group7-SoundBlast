// Angularjs
var app = angular.module("app", [
    'ngRoute',
]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl:"login.html"
    })
    .when("/signup",{
        templateUrl:"signup.html"
    })
  });



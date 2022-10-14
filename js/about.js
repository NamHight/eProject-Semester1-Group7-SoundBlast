var myApp = angular.module("myApp", [
    'ngRoute',
    'ngArtist',

]);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/about",{
        templateUrl:"about1.html"
    })
    .when("/sitemap",{
        templateUrl:"sitemap.html"
    })
});
angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html'
        })
        .otherwise({ redirectTo: '/' });
});

let CostumersModule = angular.module('CostumersModule', ['ngRoute']);

CostumersModule.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'CostumersController',
        templateUrl: '../app/views/costumers.html'
    })
    .otherwise( {
        redirectTo: '/'
    })
})
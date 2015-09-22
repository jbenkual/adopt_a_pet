'use strict';

window.app = angular.module('adopt', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state("home", {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  });

}]);

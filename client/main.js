'use strict';

window.app = angular.module('adopt', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state("home", {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  })
  .state("submit", {
    url: '/submit/:uid',
    templateUrl: 'views/submit.html',
    controller: 'submitCtrl'
  })
  .state("profile",{
    url: '/profile/:uid',
    templateUrl: 'views/profile.html',
    controller: 'profileCtrl'
  });

}]);

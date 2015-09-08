app = angular.module('retrospect',['angular-meteor', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('items', {
        url: '/items',
        templateUrl: 'client/items-list/items-list.ng.html',
        controller: 'ItemsListCtrl'
      });

    $urlRouterProvider.otherwise('/items');
  }
]);

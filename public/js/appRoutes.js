// public/js/appRoutes.js

angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  
  $routeProvider

    // home page
    .when('/',{
      templateUrl : 'views/home.html',
      controller  : 'MainController'
    })

    // accounts page that will use the AccountController
    .when('/account',{
      templateUrl:  'views/account.html',
      controller :  'AccountController'
    });

    $locationProvider.html5Mode(true);

  }]);

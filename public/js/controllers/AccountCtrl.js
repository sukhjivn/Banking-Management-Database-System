// public/js/controllers/AccountCtrl.js

angular.module('AccountCtrl',[])
  
  .controller('AccountController',function($scope, $http, Account){
    $scope.formData = {};
    $scope.name = "Nishank Mishra";
    Account.get()
      .then(function(value){
        $scope.account = value["data"];
      },
        function(error){
          console.log('Error : ' + error);
    });

    
    $scope.createAccount = function(){

      Account.create($scope.formData)
        .then(function(value){
          $scope.formData = {};  
          $scope.account = value["data"];
        },
          function(error){
            console.log('Error : ' + error);
          });
    };

    $scope.deleteAccount = function(id){

      Account.delete(id)
        .then(function(value){
          $scope.account = value["data"];
        },
          function(error){
            console.log(error);
            console.log('Error : ' + error);
        });
    };

});



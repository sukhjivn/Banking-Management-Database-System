// public/js/services/AccountService.js


angular.module('AccountService',[]).factory('Account',function($http){
  return {
    
    get : function(){
      return $http.get('/api/account');
    },

  
    create : function(accountData){
      return $http.post('/api/account',accountData);
    },

    delete : function(id){
      return $http.delete('/api/account/'+ id);
    }
  }
});


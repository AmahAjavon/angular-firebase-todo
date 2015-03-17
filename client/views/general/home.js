/* global Firebase:true */

'use strict';


angular.module('angular-prototype')

.controller('HomeCtrl', ['$scope', function($scope) {
 var firebaseObj = new Firebase('https://ang-fb-todo.firebaseio.com');

$scope.fblogin = function() {
firebaseObj.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
})
}

$scope.twilogin = function() {
  firebaseObj.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  })
  }

  $scope.goologin = function() {
    firebaseObj.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    })
    }

}]);











// angular.module('myApp.home', ['ngRoute','firebase'])
//
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/home', {
//     templateUrl: '/views/general/home.html',
//     controller: 'HomeCtrl'
//   });
// }])
//
// .controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
//  var firebaseObj = new Firebase('https://ang-fb-todo.firebaseio.com');
//     var loginObj = $firebaseAuth(firebaseObj);
//
//   $scope.user = {};
//   $scope.SignIn = function(e) {
//     e.preventDefault();
//     var username = $scope.user.email;
//     var password = $scope.user.password;
//     loginObj.$authWithPassword({
//             email: username,
//             password: password
//         })
//         .then(function(user) {
//             //Success callback
//             console.log('Authentication successful');
//   CommonProp.setUser(user.password.email);
//     $location.path('/todos');
//         }, function(error) {
//             //Failure callback
//             console.log('Authentication failure');
//         });
// }
// }])
// .service('CommonProp', function() {
//     var user = '';
//
//     return {
//         getUser: function() {
//             return user;
//         },
//         setUser: function(value) {
//             user = value;
//         }
//     };
// });

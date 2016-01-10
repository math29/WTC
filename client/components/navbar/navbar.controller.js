'use strict';

angular.module('wtcApp')
  .controller('NavbarCtrl', function ($scope, $location, $window, Auth) {
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    if(Auth.getCurrentUser().picture){
      $scope.url_pic = "/api/files/" + $scope.getCurrentUser().picture + "?_ts=" + new Date().getTime();
    }else{
      $scope.url_pic = "/assets/images/user.png"
    }

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

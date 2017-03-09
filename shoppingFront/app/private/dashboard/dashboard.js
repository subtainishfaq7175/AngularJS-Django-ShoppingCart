'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state,AuthenticationService,$rootScope) {

    $scope.$state = $state;
    $scope.logout = logout;

    function logout() {
      // reset login status
      AuthenticationService.Logout();
      $state.go('login');

    };


  });

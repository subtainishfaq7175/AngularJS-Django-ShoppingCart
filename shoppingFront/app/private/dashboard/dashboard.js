'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state,AuthenticationService,$rootScope,$mdSidenav) {

    $scope.$state = $state;
    $scope.logout = logout;

    function logout() {
      // reset login status
      AuthenticationService.Logout();
      $state.go('login');

    };

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }


  });

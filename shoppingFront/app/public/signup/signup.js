'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('SignupCtrl', function($scope, $location,AuthenticationService) {

    var vm = $scope;

    vm.login = login;
    vm.credentials=
    {
      name : undefined,
      password:undefined
    };


    initController();

    function initController() {
      // reset login status
      AuthenticationService.Logout();
    };





    function login() {
      vm.loading = true;
      AuthenticationService.SignUp(vm.credentials.name, vm.credentials.password, function (result)
      {
        debugger;
        if (result === true) {
          $location.path('/dashboard');
        } else {
          vm.error = 'Username or password is incorrect';
          vm.loading = false;
        }
      });
    };

  });

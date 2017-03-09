'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location,AuthenticationService,toastr,$rootScope) {

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
      $rootScope.scopeWorkingVariable = true;
      AuthenticationService.Login(vm.credentials.name, vm.credentials.password, function (result)
      {
        debugger;
        if (result === true) {
          toastr.success('Login Successful', 'Welcome!');
          $location.path('/dashboard');

        } else {
          vm.error = 'Username or password is incorrect';
          $rootScope.scopeWorkingVariable = false;
          toastr.error('Login Failure', vm.error);


        }
      });
    };

  });

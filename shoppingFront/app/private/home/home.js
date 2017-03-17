/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('HomeCtrl', function($scope, $state,simpleObj) {

    $scope.$state = $state;
    console.log(simpleObj);

  });

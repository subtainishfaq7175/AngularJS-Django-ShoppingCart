/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('DetailsCtrl', function($scope, $state,simpleObj) {

    $scope.$state = $state;
    $scope.details=simpleObj.data;
    console.log(simpleObj);

  });

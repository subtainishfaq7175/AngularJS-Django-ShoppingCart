/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('AddproductCtrl', function($scope, $state,productService) {

    $scope.$state = $state;
    $scope.model={};
    console.log("home");

    $scope.publishProduct=function ()
    {
      productService.postProduct($scope.model).then(function (response) {
        console.log(response);
      })
    }


  });

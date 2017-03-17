/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('AddproductCtrl', function($scope, $state,productService,$rootScope,toastr) {

    $scope.$state = $state;
    $scope.model={};
    console.log("home");

    $scope.publishProduct=function ()
    { $rootScope.scopeWorkingVariable = true;
      productService.postProduct($scope.model).then(function (response) {

        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        console.log(response);

        $state.go("home");
      });


    }


  });

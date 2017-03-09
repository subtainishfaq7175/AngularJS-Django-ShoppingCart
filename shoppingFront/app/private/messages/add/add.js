/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('MessageAddCtrl', function($scope, $state,messagesService,$rootScope,toastr) {

    $scope.$state = $state;
    $scope.model={};
    $scope.publishMessage=function ()
    {
      $rootScope.scopeWorkingVariable = true;

      messagesService.postMessage($scope.model).then(function (response)
      {

        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        console.log(response);
        debugger;

      })
    };



  });

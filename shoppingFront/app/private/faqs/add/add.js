/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('FaqsAddCtrl', function($scope, $state,faqsService,$rootScope,toastr) {

    $scope.$state = $state;
    $scope.model={};
    $scope.publishFaq=function ()
    {
      $rootScope.scopeWorkingVariable = true;

      faqsService.postFaq($scope.model).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
        toastr.success('Done','Operation Complete');
        else
        toastr.error('Error','Operation Was not complete');

        $state.go('faqs');
        console.log(response);
        debugger;
        $state.go("faqs");

      })
    };




  });

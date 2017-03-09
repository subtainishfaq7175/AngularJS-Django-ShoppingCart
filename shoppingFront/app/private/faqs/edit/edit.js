/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('FaqsEditCtrl', function($scope, $state,faqsService,simpleObj) {

    $scope.$state = $state;
    $scope.model=simpleObj.data;
    $scope.publishFaq=function ()
    {
      faqsService.updateFaq($scope.model).then(function (response)
      {

        console.log(response);
        $state.go("faqs");

      })
    };




  });

/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('FaqsCtrl', function($scope, $state, SeatEatsConstants,faqsService,$rootScope,toastr) {

    $scope.$state = $state;
    $scope.editFaq = function (ID) {
      console.log(ID);

      $state.go('faqsedit',{id:ID});
    };

    $scope.getCategory = function (ID) {
      switch (ID){
        case "g" :
          return "General";

        case "ga" :
          return "Games";
        case "w" :
          return "Walk Through";
        case "n" :
          return "News";
      }
    };
    $scope.deleteFaq = function (ID) {
      $rootScope.scopeWorkingVariable = true;

      faqsService.deleteFaqsById(ID).then(function (response)
    {
      $rootScope.scopeWorkingVariable = false;
      if(response.status=200)
        toastr.success('Done','Operation Complete');
      else
        toastr.error('Error','Operation Was not complete');
      $state.reload();
    });

    };
    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'faqs'
        }

      },
      sortable: false,
      pageable: false,
      columns: [{
        field: "title",
        title: "Question",
        width: "120px"
      },{
        field: "content",
        title: "Answer",
        width: "120px"
      },{
        field: "category",
        title: "Category",
        width: "120px"

      },{
        title: "Edit",
        width: "120px",
        template: '<a ng-click="editFaq(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Edit</a>'
      },{
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteFaq(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };


  });

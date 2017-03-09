/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('MessagesCtrl', function($scope, $state,messagesService,SeatEatsConstants,$rootScope,toastr) {

    $scope.$state = $state;
    $scope.deleteMessage = function (ID) {
      $rootScope.scopeWorkingVariable = true;
      messagesService.deleteMessageById(ID).then(function (response)
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
          read: SeatEatsConstants.AppUrlApi+"messages"
        }
      },
      columns: [{
        field: "name",
        title: "User name",
        width: "120px"
      },{
        field: "name",
        title: "username",
        width: "120px"
      },{
        field: "subject",
        title: "Subject",
        width: "120px"
      },{
        field: "content",
        title: "Content",
        width: "120px"
      },{
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteMessage(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };

  });

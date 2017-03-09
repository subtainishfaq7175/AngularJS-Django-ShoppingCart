/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('CommentsCtrl', function($scope, $state, SeatEatsConstants,commentsService,$rootScope) {

    $scope.$state = $state;

    $scope.deleteComment = function (ID) {
      $rootScope.scopeWorkingVariable = true;

      commentsService.deletsCommentsById(ID).then(function (response)
        {
          $rootScope.scopeWorkingVariable = false;

          $state.reload();
        });

      };

    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'commentsadmin'
        }


      },
      columns: [{
        field: "title",
        title: "Comment",
        width: "120px"
      },{
        field: "username",
        title: "User",
        width: "120px"
      },{
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteComment(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };
  });

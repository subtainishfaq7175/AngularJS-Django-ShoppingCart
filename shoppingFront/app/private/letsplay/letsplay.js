/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('LetsplayCtrl', function($scope, $state,SeatEatsConstants,letsplayService,toastr,$rootScope) {

    $scope.$state = $state;
    $scope.editLetsplay = function (ID)
    {

      $state.go('letsplayedit',{id:ID});
    };
    $scope.deleteLetsplay = function (ID)
    {
      $rootScope.scopeWorkingVariable = true;

      letsplayService.deleteLetsplayById(ID).then(function (response)
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
          read: SeatEatsConstants.AppUrlApi+'letsplays'
        },

        schema: {
          data: "docs",
          total: "total"
        }
        ,
        pageSize: 10,
        serverPaging: true,
        serverSorting: true
      },
      sortable: true,
      pageable: true,
      columns: [{
        field: "title",
        title: "title",
        width: "120px"
      },{
        title: "Edit",
        width: "120px",
        template: '<a ng-click="editLetsplay(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Edit</a>'
      },{
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteLetsplay(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };

  });

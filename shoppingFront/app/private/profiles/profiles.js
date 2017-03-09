/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('ProfilesCtrl', function($scope, $state, SeatEatsConstants,profilesService,$rootScope,toastr) {

    $scope.$state = $state;
    $scope.editProfile = function (ID) {
      console.log(ID);

      $state.go('profilesedit',{id:ID});
    };
    $scope.deleteProfile = function (ID) {
      console.log(ID);
      $rootScope.scopeWorkingVariable = true;

      profilesService.deletsProfilesById(ID).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        $state.reload();

      });

      $state.go('profiles',{id:ID});
    };
    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'users'
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
        field: "name",
        title: "User Name",
        width: "120px"
      },{
        title: "Edit",
        width: "120px",
        template: '<a ng-click="editProfile(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Edit</a>'
      }
      ,{
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteProfile(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };


  });

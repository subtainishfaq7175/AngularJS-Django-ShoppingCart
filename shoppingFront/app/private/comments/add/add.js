/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('MessagesAddCtrl', function($scope, $state) {

    $scope.$state = $state;
    $scope.html;
    $(document).ready(function() {
      $("#files").kendoUpload({
        async: {
          saveUrl: "save",
          removeUrl: "remove",
          autoUpload: true
        }
      });
    });

  });

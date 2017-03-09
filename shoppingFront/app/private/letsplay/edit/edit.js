/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('LetsplayEditCtrl', function($scope, $state,itemLetsplay,$sce,letsplayService) {
    console.log(itemLetsplay);

    $scope.$state = $state;
    $scope.itemLetsplay = itemLetsplay.data;
    $scope.content = $sce.trustAsHtml($scope.itemLetsplay.content);
    if(!angular.isDefined($scope.itemLetsplay.episodes))
      $scope.itemLetsplay["episodes"]=[];

$scope.UpldateLetsPlay=UpldateLetsPlay;

    function UpldateLetsPlay()
    {
      debugger;
      letsplayService.putLetsplay($scope.itemLetsplay).then(function (response)
      {

        debugger;
        console.log(response);
        $state.go("letsplay");

      })

    }

  });

/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('WalkthroughEditCtrl', function($scope, $state,itemWalkthrough,$sce,SeatEatsConstants,walkthroughService) {
    console.log(itemWalkthrough);

    $scope.$state = $state;
    debugger;
    $scope.itemWalkthrough = itemWalkthrough.data;
    $scope.UpldateWalkthrough = UpldateWalkthrough;
    $scope.content = $sce.trustAsHtml($scope.itemWalkthrough.content);
    if(!angular.isDefined($scope.itemWalkthrough.chapters))
      $scope.itemWalkthrough["chapters"]=[];
    $scope.isImageUploadingScreen = false;
    $scope.mainUploadOptionsScreen={
      async: {
        saveUrl: SeatEatsConstants.AppUrlApi+"letsplayimage",
        removeUrl: "http://my-app.localhost/remove",
        removeVerb: "DELETE",
        autoUpload: false

      },
      validation: {
        allowedExtensions: [".jpg",".png"]
      },
      multiple: true,
      showFileList: true,
      complete: onCompleteScreen,
      success: onSuccessScreen,
      select: onSelectScreen,
      cancel: onCancelScreen,
      remove: onRemoveScreen
    };
    function onCancelScreen(e) {
      // Array with information about the uploaded files
      var files = e.files;
      console.log(e);
      $scope.isImageUploadingScreen=false;

      // Process the Cancel event
    }
    function onCompleteScreen(e) {
      // The upload is now idle
      console.log(e);
      $scope.isImageUploadingScreen=false;

    }
    function onSuccessScreen(e)  {
      // Array with information about the uploaded files

      console.log(e.response.url);
      $scope.itemWalkthrough.chapters[parseInt(e.sender.element[0].id)].images.push({image_url: e.response.url});
      $scope.isImageUploadingScreen=false



    }
    function onSelectScreen(e) {

      $scope.isImageUploadingScreen=true;
    };
    function onRemoveScreen(e) {
      // Array with information about the removed files
      $scope.isImageUploadingScreen=false;
      // Process the Remove event
      // Optionally cancel the remove operation by calling
      // e.preventDefault()
    }

function UpldateWalkthrough()
{
  debugger;
  walkthroughService.putWalkthrough($scope.itemWalkthrough).then(function (response)
  {

    debugger;
    console.log(response);
    $state.go("walkthrough");

  })


}


  });

/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('NewsAddCtrl', function($scope, $state,newsService,$rootScope,toastr,SeatEatsConstants) {

    $scope.$state = $state;
    $scope.isImageUploading = false;
    $scope.isImageUploadingScreen = false;
    $scope.model={};
    $scope.model.tags=[];
    $scope.selectedTags=[];
    $scope.selectedLanguage;


    $scope.selectOptionsLanguage = {
      filter: "contains",
      placeholder: "Select Language...",
      dataTextField: "content",
      dataValueField: "content",
      valuePrimitive: true,
      autoBind: false,
      animation: {
        close: {
          effects: "zoom:out",
          duration: 500
        }
      },
      dataSource: {
        type: "json",
        serverFiltering: true,
        transport: {
          read: {
            url: SeatEatsConstants.AppUrlApi+"masterdata?type=language"
          }
        }
      }
    };

    $scope.selectOptionsTags = {
      filter: "contains",
      placeholder: "Select tags...",
      dataTextField: "content",
      dataValueField: "content",
      valuePrimitive: true,
      autoBind: false,
      animation: {
        close: {
          effects: "zoom:out",
          duration: 500
        }
      },
      dataSource: {
        type: "json",
        serverFiltering: true,
        transport: {
          read: {
            url: SeatEatsConstants.AppUrlApi+"masterdata?type=tags"
          }
        }
      }
    };
    $scope.mainUploadOptions={
      async: {
        saveUrl: SeatEatsConstants.AppUrlApi+"letsplayimage",
        removeUrl: "http://my-app.localhost/remove",
        removeVerb: "DELETE"
      },
      validation: {
        allowedExtensions: [".jpg",".png"]
      },
      multiple: false,
      showFileList: true,
      complete: onComplete,
      success: onSuccess,
      select: onSelect,
      cancel: onCancel,
      remove: onRemove




    };

    $scope.publishNews= publishNews;

    function publishNews() {


      $rootScope.scopeWorkingVariable = true;
      for(var i=0;i<$scope.selectedTags.length;i++)
      {
        $scope.model.tags.push({title: $scope.selectedTags[i]});
      }


        $scope.model.language= $scope.selectedLanguage;



      //if(!$scope.isImageUploading && !$scope.isImageUploadingScreen)
      newsService.postNews($scope.model).then(function (response) {

        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        debugger;
        console.log(response);
        $state.go("news");

      })

    }

    function onCancel(e) {
      // Array with information about the uploaded files
      var files = e.files;
      console.log(e);
      $scope.isImageUploading=false;

      // Process the Cancel event
    }
    function onComplete(e) {
      // The upload is now idle
      console.log(e);
      $scope.isImageUploading=false;

    }
    function onSuccess(e) {
      // Array with information about the uploaded files
      $scope.isImageUploading=true;
      $scope.model.image_url= e.response.url;

    }
    function onSelect(e) {

      $scope.isImageUploading=true;
    };
    function onRemove(e) {
      // Array with information about the removed files
      $scope.isImageUploading=false;
      // Process the Remove event
      // Optionally cancel the remove operation by calling
      // e.preventDefault()
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
    function onSuccessScreen(e) {
      // Array with information about the uploaded files

      $scope.model.screen_images.push({image_url: e.response.url});
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

  });

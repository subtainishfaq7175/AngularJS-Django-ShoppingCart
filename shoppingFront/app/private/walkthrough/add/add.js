/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('WalkthroughAddCtrl', function($scope, $state,walkthroughService,SeatEatsConstants) {

    $scope.$state = $state;
    $scope.isImageUploading = false;
    $scope.model={};
    $scope.model.tags=[];
    $scope.model.genre=[];
//    $scope.model.language;

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
    $scope.selectOptionsGenre = {
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
            url: SeatEatsConstants.AppUrlApi+"masterdata?type=genre"
          }
        }
      }
    };


    $scope.selectedTags = [];
    $scope.selectedGenre = [];
    $scope.selectedLanguage = [];

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

    $scope.publishWalkthrough=publishWalkthrough;

    function publishWalkthrough() {

      for(var i=0;i<$scope.selectedTags.length;i++)
      {
        $scope.model.tags.push({title: $scope.selectedTags[i]});
      }
      for(var i=0;i<$scope.selectedGenre.length;i++)
      {
        $scope.model.genre.push({title: $scope.selectedGenre[i]});
      }

        $scope.model.language=selectedLanguage;


      walkthroughService.postWalkthrough($scope.model).then(function (response) {

        debugger;
        console.log(response);
        $state.go("walkthrough");

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
    }


  });

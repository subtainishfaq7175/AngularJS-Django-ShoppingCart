/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('GamesEditCtrl', function($scope, $state,SeatEatsConstants,gamesService,$rootScope,toastr,simpleObj) {
    console.log(simpleObj);

    $scope.$state = $state;
    $scope.model={};
    $scope.model.tags=[];
    $scope.model.genre=[];
    $scope.model.languages=[];
    $scope.model.categories=[];
    $scope.model.screen_images=[];
    $scope.selectedTags = [];
    $scope.selectedGenre = [];
    $scope.selectedLanguage = [];
    $scope.selectedCategories = [];
    $scope.isImageUploading = false;
    $scope.isImageUploadingScreen = false;
    if(angular.isDefined(simpleObj))
    {
      $scope.model=simpleObj.data;
      for(var i=0;i<$scope.model.tags.length;i++)
      {
        $scope.selectedTags.push($scope.model.tags[i].title);
      }

      for(var i=0;i<$scope.model.languages.length;i++)
      {
        $scope.selectOptionsLanguage.push($scope.model.languages[i].title);
      }

      for(var i=0;i<$scope.model.genre.length;i++)
      {
        $scope.selectedGenre.push($scope.model.genre[i].title);
      }

      for(var i=0;i<$scope.model.categories.length;i++)
      {
        $scope.selectedCategories.push($scope.model.categories[i].title);
      }



    }



    $scope.selectOptionsLanguage = {
      filter: "contains",
      placeholder: "Select languages...",
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
            url: SeatEatsConstants.AppUrlApi+"masterdata?type=languages"
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
    $scope.selectOptionsCategories = {
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
            url: SeatEatsConstants.AppUrlApi+"masterdata?type=categories"
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
    $scope.mainUploadOptionsScreen={
      async: {
        saveUrl: SeatEatsConstants.AppUrlApi+"letsplayimage",
        removeUrl: "http://my-app.localhost/remove",
        removeVerb: "DELETE"
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
    $scope.publishGames= publishGames;

    function publishGames() {
      $scope.model.tags=[];
      $scope.model.genre=[];
      $scope.model.languages=[];
      $scope.model.categories=[];


      for(var i=0;i<$scope.selectedTags.length;i++)
      {
        $scope.model.tags.push({title: $scope.selectedTags[i]});
      }
      for(var i=0;i<$scope.selectedGenre.length;i++)
      {
        $scope.model.genre.push({title: $scope.selectedGenre[i]});
      }
      for(var i=0;i<$scope.selectedLanguage.length;i++)
      {
        $scope.model.languages.push({title: $scope.selectedLanguage[i]});
      }
      for(var i=0;i<$scope.selectedCategories.length;i++)
      {
        $scope.model.categories.push({title: $scope.selectedCategories[i]});
      }

      //if(!$scope.isImageUploading && !$scope.isImageUploadingScreen)
      gamesService.postGame($scope.model).then(function (response) {

        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        debugger;
        console.log(response);

        $state.go("games");
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

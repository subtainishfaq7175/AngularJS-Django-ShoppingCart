/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('MasterdataCtrl', function($scope, $state,masterdataService,link,categories,genre,language,tags,linktype,$rootScope,toastr)
  {

    $scope.$state = $state;
    $scope.model={};
    if(angular.isDefined(categories))
    $scope.model.categories=categories.data;
    else
      $scope.model.categories={};
    if(angular.isDefined(genre))
    $scope.model.genre=genre.data;
    else
      $scope.model.genre={};

    if(angular.isDefined(language))
    $scope.model.language=language.data;
    else
      $scope.model.language={};
    if(angular.isDefined(tags))
    $scope.model.tags=tags.data;
    else
      $scope.model.tags={};

    if(angular.isDefined(linktype))
    $scope.model.linktype=linktype.data;
    else
      $scope.model.linktype={};

    $scope.model.youtube={    title: undefined,     content:undefined,     secondary:undefined,     content_type:undefined };
    $scope.model.dailymotion={    title: undefined,     content:undefined,     secondary:undefined,     content_type:undefined };
    $scope.model.vimeo={    title: undefined,     content:undefined,     secondary:undefined,     content_type:undefined };
    $scope.model.clipfish={    title: undefined,     content:undefined,     secondary:undefined,     content_type:undefined };
    $scope.model.myvideo={    title: undefined,     content:undefined,     secondary:undefined,     content_type:undefined };
    $scope.model.twitch={    title: undefined,     content:undefined,     secondary:undefined,     content_type:undefined };
    $scope.model.sevenload={    title: undefined,     content:undefined,     secondary:undefined,     content_type:undefined };
    link=link.data;
    if(angular.isDefined(link))
    {
     for (var i=0;i<link.length ;i++)
     {

       switch (link[i].title)
       {
         case "youtube":
           $scope.model.youtube=link[i];
           break;
         case "vimeo":
           $scope.model.vimeo=link[i];
           break;

         case "dailymotion":
           $scope.model.dailymotion=link[i];

           break;
         case "myvideo":
           $scope.model.myvideo=link[i];
           break;
         case "clipfish":
           $scope.model.clipfish=link[i];
           break;

         case "twitch":
           $scope.model.twitch=link[i];
           break;

         case "sevenload":
           $scope.model.sevenload=link[i];
           break;

       }
     }
    }


    $scope.saveLink=saveLink;
    $scope.saveCategory=saveCategory;
    $scope.removeCategory=removeCategory;
    $scope.saveGenre=saveGenre;
    $scope.removeGenre=removeGenre;
    $scope.removeLanguage=removeCategory;
    $scope.saveLanguage=saveLanguage;
    $scope.removeTag=removeCategory;
    $scope.saveTag=saveTag;
    $scope.removeLinkType=removeCategory;
    $scope.saveLinkType=saveLinkType;

    function saveLanguage(index) {
      index.content_type="language";
      $rootScope.scopeWorkingVariable = true;

      masterdataService.postObj(index).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        index._id=response.data._id;
        console.log(response);
      });
    }
    function saveTag(index) {
      index.content_type="tags";
      $rootScope.scopeWorkingVariable = true;

      masterdataService.postObj(index).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        index._id=response.data._id;
        console.log(response);
      });
    }
    function saveLinkType(index) {
      index.content_type="linktype";
      $rootScope.scopeWorkingVariable = true;

      masterdataService.postObj(index).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        index._id=response.data._id;
        console.log(response);
      });
    }
    function saveCategory(index) {
      index.content_type="categories";
      $rootScope.scopeWorkingVariable = true;

      masterdataService.postObj(index).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        index._id=response.data._id;

        console.log(response);
      });
    }
    function removeCategory(id) {
      $rootScope.scopeWorkingVariable = true;

      masterdataService.deleteMasterdataById(id).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
      console.log(response);
      });
    }
    function saveGenre(index) {
      index.content_type="genre";
      $rootScope.scopeWorkingVariable = true;

      masterdataService.postObj(index).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
        index._id=response.data._id;
        console.log(response);
      });
    }
    function removeGenre(id) {
      $rootScope.scopeWorkingVariable = true;

      masterdataService.deleteMasterdataById(id).then(function (response)
      {
        $rootScope.scopeWorkingVariable = false;
        if(response.status=200)
          toastr.success('Done','Operation Complete');
        else
          toastr.error('Error','Operation Was not complete');
      console.log(response);
      });
    }
    function saveLink(index) {

switch (index)
{
  case 0:
    $rootScope.scopeWorkingVariable = true;

    $scope.model.youtube.title="youtube";
    $scope.model.youtube.content_type="link";

    masterdataService.postObj($scope.model.youtube).then(getResponse );
    break;
  case 1:
    $rootScope.scopeWorkingVariable = true;

    $scope.model.vimeo.title="vimeo";
    $scope.model.vimeo.content_type="link";
    masterdataService.postObj($scope.model.vimeo).then(getResponse );

    break;
  case 2:
    $scope.model.dailymotion.title="dailymotion";
    $scope.model.dailymotion.content_type="link";
    $rootScope.scopeWorkingVariable = true;

    masterdataService.postObj($scope.model.dailymotion).then(getResponse );

    break;
  case 3:
    $scope.model.myvideo.title="myvideo";
    $scope.model.myvideo.content_type="link";
    $rootScope.scopeWorkingVariable = true;

    masterdataService.postObj($scope.model.myvideo).then(getResponse );

    break;
  case 4:
    $scope.model.clipfish.title="clipfish";
    $scope.model.clipfish.content_type="link";
    $rootScope.scopeWorkingVariable = true;

    masterdataService.postObj($scope.model.clipfish).then(getResponse );

    break;

  case 5:
    $scope.model.twitch.title="twitch";
    $scope.model.twitch.content_type="link";
    $rootScope.scopeWorkingVariable = true;

    masterdataService.postObj($scope.model.twitch).then(getResponse );

    break;

  case 6:
    $scope.model.sevenload.title="sevenload";
    $scope.model.sevenload.content_type="link";
    $rootScope.scopeWorkingVariable = true;

    masterdataService.postObj($scope.model.sevenload).then(getResponse );


    break;

}
    }
    function getResponse () {
      $rootScope.scopeWorkingVariable = false;
      if(response.status=200)
        toastr.success('Done','Operation Complete');
      else
        toastr.error('Error','Operation Was not complete');
$state.reload();
    }

  });

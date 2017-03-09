/**
 * Created by subtainishfaq on 10/30/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('commentsService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var comments = {};
//deleteCommentsById
  comments.deletsCommentsById=function (id)
  {
    return $http.delete(SeatEatsConstants.AppUrlApi+'commentsadmin/'+ id);

  };

  return comments;

}]);

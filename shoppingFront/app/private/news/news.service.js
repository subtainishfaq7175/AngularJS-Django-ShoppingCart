/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('newsService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var news = {};

  news.getNewsList= function ()
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'news');
    return promise;
  };
  news.getNewsById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'news/'+ID);
    return promise;
  };

  news.deleteNewsById= function (ID)
  {

    var promise = $http.delete(SeatEatsConstants.AppUrlApi+'news/'+ID);
    return promise;
  }; news.postNews= function (obj)
  {
var promise;
    if(angular.isDefined(obj._id))
      promise = $http.put(SeatEatsConstants.AppUrlApi+'news/'+obj._id,obj);
      else
     promise = $http.post(SeatEatsConstants.AppUrlApi+'news/',obj);
    return promise;
  };



  return news;

}]);

/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('letsplayService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var letsplay = {};

  letsplay.getLetsplayById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplays/'+ID);
    return promise;
  };
  letsplay.putLetsplay= function (obj)
  {

    var promise = $http.put(SeatEatsConstants.AppUrlApi+'letsplays/'+obj._id,obj);
    return promise;
  };

  letsplay.deleteLetsplayById= function (ID)
  {

    var promise = $http.delete(SeatEatsConstants.AppUrlApi+'letsplays/'+ID);
    return promise;
  };



  letsplay.postLetsplay=function (obj)
  {
    return $http.post(SeatEatsConstants.AppUrlApi+'letsplays', obj)

  };
  return letsplay;

}]);

/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */


angular.module("yapp").factory('profilesService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var profiles = {};
  profiles.deletsProfilesById=function (id)
  {
    return $http.delete(SeatEatsConstants.AppUrlApi+'users/'+ id);

  };

  profiles.getProfileById=function (id)
  {
    return $http.get(SeatEatsConstants.AppUrlApi+'users/'+ id);

  };profiles.updateProfile=function (obj)
  {
    return $http.put(SeatEatsConstants.AppUrlApi+'users/'+ obj._id,obj);

  };

  return profiles;

}]);

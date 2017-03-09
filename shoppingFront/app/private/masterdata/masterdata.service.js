/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('masterdataService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var masterdata = {};

  masterdata.getMasterdataById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'masterdata/'+ID);
    return promise;
  };

  masterdata.getMasterdataByType= function (Type)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'masterdata?type='+Type);
    return promise;
  };

  masterdata.deleteMasterdataById= function (ID)
  {

    var promise = $http.delete(SeatEatsConstants.AppUrlApi+'masterdata/'+ID);
    return promise;
  };


  masterdata.postObj=function (obj)
  {
      if(angular.isDefined(obj._id))
      return $http.put(SeatEatsConstants.AppUrlApi+'masterdata/'+ obj._id, obj);

      return $http.post(SeatEatsConstants.AppUrlApi+'masterdata', obj);

  };




  return masterdata;

}]);

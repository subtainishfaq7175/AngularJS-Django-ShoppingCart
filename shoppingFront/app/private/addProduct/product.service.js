/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('productService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var companies = {};

  companies.getProductById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'products/'+ID);
    return promise;
  };

  companies.getProducts= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'products/');
    return promise;
  };
  companies.putLetsplay= function (obj)
  {

    var promise = $http.put(SeatEatsConstants.AppUrlApi+'products/'+obj._id,obj);
    return promise;
  };

  companies.deleteLetsplayById= function (ID)
  {

    var promise = $http.delete(SeatEatsConstants.AppUrlApi+'company/'+ID);
    return promise;
  };



  companies.postProduct=function (obj)
  {
    return $http.post(SeatEatsConstants.AppUrlApi+'products/', obj)

  };
  return companies;

}]);

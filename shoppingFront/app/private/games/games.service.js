/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('gamesService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var game = {};

  game.getNewsList= function ()
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'games');
    return promise;
  };
  game.getGameById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'games/'+ID);
    return promise;
  };

  game.deleteGameById= function (ID)
  {

    var promise = $http.delete(SeatEatsConstants.AppUrlApi+'games/'+ID);
    return promise;
  };


  game.postGame=function (obj)
  {
    if(angular.isDefined(obj._id))
      return $http.put(SeatEatsConstants.AppUrlApi+'games/'+obj._id, obj);
    else
      return $http.post(SeatEatsConstants.AppUrlApi+'games/', obj);


  };


  return game;

}]);

/**
 * Created by subtainishfaq on 10/30/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('messagesService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var faq = {};

faq.postMessage=function (obj)
{
 return $http.post(SeatEatsConstants.AppUrlApi+'messages', obj)

};


faq.updateMessage=function (obj)
{
 return $http.put(SeatEatsConstants.AppUrlApi+'messages/'+obj._id, obj)

};


faq.getMessageById=function (id)
{
 return $http.get(SeatEatsConstants.AppUrlApi+'messages/'+ id);

};
faq.deleteMessageById=function (id)
{
 return $http.delete(SeatEatsConstants.AppUrlApi+'messages/'+ id);

};


  return faq;

}]);

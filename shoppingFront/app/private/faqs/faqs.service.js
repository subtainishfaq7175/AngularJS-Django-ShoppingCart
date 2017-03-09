/**
 * Created by subtainishfaq on 10/30/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('faqsService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var faq = {};

faq.postFaq=function (obj)
{
 return $http.post(SeatEatsConstants.AppUrlApi+'faqs', obj)

};


faq.updateFaq=function (obj)
{
 return $http.put(SeatEatsConstants.AppUrlApi+'faqs/'+obj._id, obj)

};


faq.getFaqsById=function (id)
{
 return $http.get(SeatEatsConstants.AppUrlApi+'faqs/'+ id);

};
faq.deleteFaqsById=function (id)
{
 return $http.delete(SeatEatsConstants.AppUrlApi+'faqs/'+ id);

};


  return faq;

}]);

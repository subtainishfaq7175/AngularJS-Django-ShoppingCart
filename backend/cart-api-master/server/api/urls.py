from django.conf.urls import url,include

from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', 'api.views.home', name='home'),
     url(r'^api/v1/', include('api.cart_api.urls')),

    url(r'^admin/', include(admin.site.urls)),
]

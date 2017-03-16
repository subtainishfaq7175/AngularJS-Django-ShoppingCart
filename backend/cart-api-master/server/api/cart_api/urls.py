from django.conf.urls import  url, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
import views

router = routers.DefaultRouter()
router.register(r'audit', views.DetailedAccountViewSet,'audit')
router.register(r'account', views.AccountViewSet,'Account')
router.register(r'cart', views.CartViewSet,'Cart')
router.register(r'addresses', views.AddressViewSet,'Address')
router.register(r'products', views.ProductViewSet,'Producs')
router.register(r'orders', views.OrderViewSet,'Orders')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browseable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api-token-auth/', obtain_auth_token, name='auth'),

]


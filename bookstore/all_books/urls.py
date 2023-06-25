from django.urls import include,path
from rest_framework import routers
from .views import BookViewSet, add_to_cart, remove_from_cart, get_cart_items, update_cart_item , clear_cart

router = routers.DefaultRouter()
router.register(r'api/books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/clear-cart/', clear_cart, name='clear_cart'),
    path('api/add-to-cart/', add_to_cart, name='add_to_cart'),
    path('api/cart-items/<int:item_id>/', update_cart_item, name='update_cart_item'),
    path('api/remove-from-cart/<int:item_id>/', remove_from_cart, name='remove_from_cart'),
    path('api/cart-items/', get_cart_items, name='get_cart_items'),
]
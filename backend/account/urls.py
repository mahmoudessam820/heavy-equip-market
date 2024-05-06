from django.urls import path 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import api 


app_name = 'account'


urlpatterns = [
    path('me/', api.me, name='me'),
    path('signin/', api.signin, name='signin'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', api.logout, name='logout'),
]
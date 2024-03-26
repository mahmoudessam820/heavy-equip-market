from django.urls import path 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import api 


urlpatterns = [
    path('me/', api.me, name='me'),
    path('signin/', api.signin, name='signin'),
]
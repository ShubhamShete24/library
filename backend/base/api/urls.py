from django.urls import path
from .views import MyTokenObtainPairView, getRoutes, register

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

# URLS for authenticatoin
urlpatterns = [
    path('', getRoutes),
    path('register', register),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

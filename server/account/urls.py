from django.urls import path,include
from . import views as v
from rest_framework.authtoken import views

app_name="account"

urlpatterns = [
    path("",v.home_accounts,name='home2'),
    path("signupLogin/", v.signup_login, name='signup_login'),
    path("logout/", v.logout_views, name="logout"),
    path('djoser/', include('djoser.urls')),
    path('test/', v.MyView.as_view(), name='test_login'),
    path('tel/', v.tel, name='test_login'),

]
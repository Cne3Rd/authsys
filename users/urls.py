from django.urls import path
from . import views as v

urlpatterns = [
    path('signup/', v.signup, name='signup'),
    path('login/', v.signin, name='login'),
    path('logout/', v.byebye, name='logout'),
]


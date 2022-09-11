from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostList.as_view()),
    path('map/', views.map_main, name='map_main'),
    path('map_user/', views.map_user, name='map_user'),
]

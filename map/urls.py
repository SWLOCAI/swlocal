from . import views
from django.urls import path

urlpatterns = [
    path('', views.map_main, name='map_main'),
]
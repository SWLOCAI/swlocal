from django.shortcuts import render
from django.views.generic import ListView
from .models import Post
import json


class PostList(ListView):
    model = Post
    ordering = '-pk'


def map_main(request):
    pro = Post.objects.filter(group_id='group1')
    prodict = {}
    a = 0
    for i in pro:
        dic = {}
        dic['lat'] = float(i.latitude)
        dic['lon'] = float(i.longitude)
        prodict[a] = dic
        a = a + 1
        print(dic)

    proJson = json.dumps(prodict)
    return render(request, 'map_main.html', {'proJson': proJson})

def map_user(request):
    userinfo=Post.objects.all()
    info = {}
    a = 0
    for i in userinfo:
        dic = {}
        dic['lat'] = float(i.latitude)
        dic['lon'] = float(i.longitude)
        info[a] = dic
        a = a + 1
        print(dic)
        
    infoJson = json.dumps(info)
    return render(request, 'map_user.html', {'infoJson': infoJson})


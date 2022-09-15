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

    proJson = json.dumps(prodict)
    return render(request, 'map_main.html', {'proJson': proJson})

from django.shortcuts import render
from django.views.generic import ListView
from .models import Post


class PostList(ListView):
    model = Post
    ordering = '-pk'


def map_main(request):
    pro = Post.objects.filter(group_id = 'group1')
    return render(request, 'map_main.html', {'pro':pro})

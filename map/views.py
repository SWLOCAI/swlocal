from django.shortcuts import render

# Create your views here.
def map_main(request):
    return render(request, 'map_main.html')
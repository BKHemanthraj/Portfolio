from django.shortcuts import render

# Create your views here.
def views1(request):
    return render (request, "myapp/index.html")
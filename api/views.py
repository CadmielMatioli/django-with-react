from django.shortcuts import render
import requests


def index(request):
    return render(request, 'front-end/index.html')

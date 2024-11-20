from django.contrib import admin
from django.urls import path

def home_view(request):
    from django.http import HttpResponse
    return HttpResponse("<h1>Welcome to Pocket Money!</h1>")

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin panel URL
    path('', home_view, name='home'),  # Root URL points to a simple home view
]

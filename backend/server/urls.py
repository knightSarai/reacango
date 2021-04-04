from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from .views import not_react
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index.html")),
    path('not-react', not_react),
]

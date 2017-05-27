from django.views.i18n import JavaScriptCatalog
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
]

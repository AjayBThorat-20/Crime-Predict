from django.conf.urls import url
from TeamApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^teams$',views.teamApi),
    url(r'^teams/([0-9]+)$',views.teamApi),

    url(r'^Teams/Profile$', views.Saveteamphoto)
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
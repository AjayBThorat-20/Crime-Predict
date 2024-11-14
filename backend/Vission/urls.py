from django.conf.urls import url
from Vission import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
     # Vission Info
    url(r'^vission$',views.VissionApi),
    url(r'^vission/([0-9]+)$',views.VissionApi),


    # Vission Bg
    url(r'^vissionbg$',views.vissionbgApi),
    url(r'^vissionbg/([0-9]+)$',views.vissionbgApi),

    url(r'^vissionbg/VissBgfile$', views.Savevissbgphoto)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
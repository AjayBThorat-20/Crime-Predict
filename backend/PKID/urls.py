from django.conf.urls import url
from PKID import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # About PKID
    url(r'^about-pkid$',views.abtPKIDApi),
    url(r'^about-pkid/([0-9]+)$',views.abtPKIDApi),
    url(r'^about-pkid/AbtSaveFile$', views.AbtSaveFile),

    # Analysis PKID
    url(r'^analysis-pkid$',views.anPKIDApi),
    url(r'^analysis-pkid/([0-9]+)$',views.anPKIDApi),
    url(r'^analysis-pkid/AnSaveFile$', views.AnSaveFile ),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

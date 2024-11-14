from django.conf.urls import url
from DwST import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # About Dw ST
    url(r'^about-dw-st$',views.abtDwSTApi),
    url(r'^about-dw-st/([0-9]+)$',views.abtDwSTApi),
    url(r'^about-dw-st/AbtSaveFile$', views.AbtSaveFile),

    # Analysis DW ST

    url(r'^analysis-dw-st$',views.anDwSTApi),
    url(r'^analysis-dw-st/([0-9]+)$',views.anDwSTApi),
    url(r'^analysis-dw-st/AnSaveFile$', views.AnSaveFile),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

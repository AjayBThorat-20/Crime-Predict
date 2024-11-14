from django.conf.urls import url
from PaSLL import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # About Pa SLL

    url(r'^about-dw-ipc$',views.abtPaSLLApi),
    url(r'^about-dw-ipc/([0-9]+)$',views.abtPaSLLApi),
    url(r'^about-dw-ipc/AbtSaveFile$', views.AbtSaveFile),

    # Analysis Pa SLL
    url(r'^analysis-dw-ipc$',views.anPaSLLApi),
    url(r'^analysis-dw-ipc/([0-9]+)$',views.anPaSLLApi),
    url(r'^analysis-dw-ipc/AnSaveFile$', views.AnSaveFile),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

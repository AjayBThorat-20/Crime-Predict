from django.conf.urls import url
from PaIPC import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    # About PA IPC

    url(r'^about-pa-ipc$',views.abtPaIPCApi),
    url(r'^about-pa-ipc/([0-9]+)$',views.abtPaIPCApi),
    url(r'^about-pa-ipcc/AbtSaveFile$', views.AbtSaveFile),

    # Analysis PA IPC
    
    url(r'^analysis-pa-ipc$',views.anPaIPCApi),
    url(r'^analysis-pa-ipc/([0-9]+)$',views.anPaIPCApi),
    url(r'^analysis-pa-ipcc/AnSaveFile$',views.anPaIPCApi),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

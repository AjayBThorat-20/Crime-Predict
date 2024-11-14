from django.conf.urls import url
from DwIPC import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    # About Dw IPC

    url(r'^about-dw-ipc$',views.abtDwIPCApi),
    url(r'^about-dw-ipc/([0-9]+)$',views.abtDwIPCApi),
    url(r'^about-dw-ipc/AbtSaveFile$', views.AbtSaveFile),

    # Analysis DW IPC

    url(r'^analysis-dw-ipc$',views.anDwIPCApi),
    url(r'^analysis-dw-ipc/([0-9]+)$',views.anDwIPCApi),
    url(r'^analysis-dw-ipc/AnSaveFile$', views.AnSaveFile),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

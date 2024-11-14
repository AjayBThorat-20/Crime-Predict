from django.conf.urls import url
from DwW import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # About Dw W

    url(r'^about-dw-w$',views.abtDwWApi),
    url(r'^about-dw-w/([0-9]+)$',views.abtDwWApi),
    url(r'^about-dw-w/AbtSaveFile$', views.AbtSaveFile),

    # Analysis DW W

    url(r'^analysis-dw-w$',views.anDwWApi),
    url(r'^analysis-dw-w/([0-9]+)$',views.anDwWApi),
    url(r'^analysis-dw-w/AnSaveFile$', views.AnSaveFile),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

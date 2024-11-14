from django.conf.urls import url
from DwSC import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # About Dw SC

    url(r'^about-dw-sc$',views.abtDwSCApi),
    url(r'^about-dw-sc/([0-9]+)$',views.abtDwSCApi),
    url(r'^about-dw-sc/AbtSaveFile$', views.AbtSaveFile),
    
    # Analysis DW SC

    url(r'^analysis-dw-sc$',views.anDwSCApi),
    url(r'^analysis-dw-sc/([0-9]+)$',views.anDwSCApi),
    url(r'^analysis-dw-sc/AnSaveFile$', views.AnSaveFile),

  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

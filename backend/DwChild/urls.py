from django.conf.urls import url
from DwChild import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # About DW Child 
    url(r'^about-dw-childs$',views.abtDwChildsApi),
    url(r'^about-dw-childs/([0-9]+)$',views.abtDwChildsApi),
    url(r'^about-dw-childs/AbtSaveFile$',views.SaveAbtFile),


    # Analysis DW Child 
    url(r'^analysis-dw-childs$',views.anDwChildsApi),
    url(r'^analysis-dw-childs/([0-9]+)$',views.anDwChildsApi),
    url(r'^analysis-dw-childs/AnSaveFile$',views.SaveAnFile),

 
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


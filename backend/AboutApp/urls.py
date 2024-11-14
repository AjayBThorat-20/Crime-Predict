from django.conf.urls import url
from AboutApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # about Info
    url(r'^about$',views.aboutApi),
    url(r'^about/([0-9]+)$',views.aboutApi),


    # about Bg
    url(r'^aboutbg$',views.aboutbgApi),
    url(r'^aboutbg/([0-9]+)$',views.aboutbgApi),

    url(r'^aboutbg/AbtBgfile$', views.SaveAbtbgphoto)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.conf.urls import url
from PostApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^crimes$',views.crimesApi),
    url(r'^crimes/([0-9]+)$',views.crimesApi),

    url(r'^posts$',views.postsApi),
    url(r'^posts/([0-9]+)$',views.postsApi),

    url(r'^Posts/SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
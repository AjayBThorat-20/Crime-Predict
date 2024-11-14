from django.conf.urls import url
from AddCrimeCard import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^crimecards$',views.AddCrimeCardApi),
    url(r'^crimecards/([0-9]+)$',views.AddCrimeCardApi),

    #  url(r'^posts$',views.postsApi),
    # url(r'^posts/([0-9]+)$',views.postsApi),

    # url(r'^Posts/SaveFile$', views.SaveFile)
] 
# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
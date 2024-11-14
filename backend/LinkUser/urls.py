from django.conf.urls import url
from LinkUser import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    # LinkUser Contact Us

    url(r'^contactus$',views.linkuserApi),
    url(r'^contactus/([0-9]+)$',views.linkuserApi),


] 

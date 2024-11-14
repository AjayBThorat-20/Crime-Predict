from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf.urls import url,include

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    

    #about
    url(r'^', include('AboutApp.urls')),
    url(r'^', include('PostApp.urls')),
    url(r'^', include('TeamApp.urls')),
    url(r'^', include('AddCrimeCard.urls')),
    url(r'^', include('Vission.urls')),


    # Crimes Api
    url(r'^', include('DwChild.urls')),
    url(r'^', include('DwIPC.urls')),
    url(r'^', include('DwSC.urls')),
    url(r'^', include('DwST.urls')),
    url(r'^', include('DwW.urls')),
    url(r'^', include('PaIPC.urls')),
    url(r'^', include('PaSLL.urls')),
    url(r'^', include('PKID.urls')),
    url(r'^', include('LinkUser.urls')),

    
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

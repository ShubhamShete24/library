from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # Adding path for new app
    path('api/', include('base.api.urls')),
    path('books/', include('books.urls'))
]

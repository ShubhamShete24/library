from django.contrib import admin

# Register your models here.

# To add Book table im Django admin panel
from .models import Books
admin.site.register(Books)
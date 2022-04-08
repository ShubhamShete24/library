from django.contrib import admin

# Register your models here.

# To see User table in Django admin panel
from .models import User
admin.site.register(User)

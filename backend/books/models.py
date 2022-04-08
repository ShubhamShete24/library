from django.db import models


# Create your models here.
# Creating Book Model for Library to store info
class Books(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    qty = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

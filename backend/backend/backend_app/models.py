from django.db import models
from django.conf import settings
# Create your models here.
    
class Urls(models.Model): 
    title = models.CharField(max_length=256)
    longUrls = models.CharField(max_length=256)
    shortUrls = models.CharField(max_length=256)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.title

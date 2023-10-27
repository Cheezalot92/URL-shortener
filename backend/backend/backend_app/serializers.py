from .models import Urls
from rest_framework import serializers


class UrlsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Urls
        fields = ['title', 'longUrls', 'shortUrls', 'user']
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Urls
from .serializers import UrlsSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.


class UrlsViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]

    queryset = Urls.objects.all().order_by('-title')
    serializer_class = UrlsSerializer



class LogoutView(APIView):
    #  permission_classes = [IsAuthenticated]
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)



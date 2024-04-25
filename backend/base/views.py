from django.shortcuts import render
from django.http import JsonResponse
from base.creators import creators
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Add custom claims
        data['username'] = self.user.username
        data['email'] = user.user.email
        # ...

        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/creators/',
        'api/creators/create/',
        'api/creators/upload/',
        'api/creators/<id>/reviews',
        'api/creators/top/',
        'api/creators/<id>/',
        'api/creators/delete/<id>',
        'api/creators/<update>/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getCreators(request, pk):
    creator = None
    for i in creators:
        if i['_id'] == pk:
            creator = i
            break
    return Response(creator)





# Create your views here.

from django.shortcuts import render
from rest_framework import generics
from moments.models import Moments

from moments.serializers import Moment_seri

# Create your views here.
class Get_moment(generics.ListAPIView):
    serializer_class = Moment_seri
    
    def get_queryset(self):
        return Moments.objects.all()

class Post_moment(generics.CreateAPIView):
    serializer_class = Moment_seri
    queryset = Moments.objects.all()
    
class crud_moment(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Moment_seri
    queryset = Moments.objects.all()
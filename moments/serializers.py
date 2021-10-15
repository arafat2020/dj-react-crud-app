from rest_framework import serializers
from .models import Moments

class Moment_seri(serializers.ModelSerializer):
    class Meta:
        model = Moments
        fields = ['id','title','photo','description','created']
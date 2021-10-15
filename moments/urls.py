from django.urls import path
from .views import Get_moment, Post_moment, crud_moment

urlpatterns = [
    path('moments',Get_moment.as_view()),
    path('post_moment',Post_moment.as_view()),
    path('crud/<int:pk>',crud_moment.as_view()),
]
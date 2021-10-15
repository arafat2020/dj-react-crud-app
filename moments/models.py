from django.db import models

# Create your models here.
class Moments(models.Model):
    title = models.CharField(max_length=100,blank=False)
    photo = models.ImageField(upload_to='moments/media',blank=False)
    description = models.TextField(blank=False)
    created = models.DateTimeField(auto_now_add=True)
    
    class Meta():
        ordering = ['-created']
    
    # def delete(self, using=None, keep_parents=False):
    #     self.photo.storage.delete(self.photo.name)
    #     super().delete()
    

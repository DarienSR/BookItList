from django.db import models

class Book(models.Model):
  title = models.CharField(max_length=255)
  author = models.CharField(max_length=255)
  isbn = models.CharField(max_length=16)
  in_library = models.BooleanField(default=False)
  tbr = models.BooleanField(default=False)

  def __str__(self):
    return self.title
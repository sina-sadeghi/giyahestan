from django.db import models
from django.contrib.auth.models import User


class Plant(models.Model):
    title = models.CharField(max_length=40, unique=True, editable=True, null=False)
    slug = models.SlugField(unique=True, editable=False, null=False)
    des = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, editable=False)
    image = models.ImageField(default='default.png', blank=True)
    last_update = models.DateTimeField(auto_now_add=True, editable=False)


    def last_Update(self):
        return str(self.last_update.astimezone().date()) + " " + str(
            self.last_update.astimezone().time().replace(microsecond=0))


    def __str__(self):
        return self.title


    def cuter(self):
        s: str = self.des[:50] + " ..."
        return s
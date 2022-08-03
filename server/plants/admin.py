from django.contrib import admin
from .models import Plant

class PlantAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'des',Plant.last_Update,"author","slug")


admin.site.register(Plant,PlantAdmin)
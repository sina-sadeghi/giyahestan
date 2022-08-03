from django.contrib import admin
from .models import Account

class AccountAdmin(admin.ModelAdmin):
    list_display = ("id",'email','password','date_joined','is_staff')


admin.site.register(Account,AccountAdmin)

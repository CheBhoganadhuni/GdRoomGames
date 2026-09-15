from django.contrib import admin
from .models import Game, Player, Round, Trick, TrickCard, Event

admin.site.register(Game)
admin.site.register(Player)
admin.site.register(Round)
admin.site.register(Trick)
admin.site.register(TrickCard)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("event_type", "game_code", "username", "session_id", "created_at")
    list_filter = ("event_type",)
    search_fields = ("game_code", "username", "session_id")
    ordering = ("-created_at",)

"""
Full-database backup export — sends a complete JSON dump of all game and
auth data to Telegram, reusing the same bot already wired up for
per-game snapshot exports (see export.py).

Exists specifically to survive Render's free Postgres 30-day expiry: a
scheduled check-in triggers this via TriggerBackupExportView shortly before
expiry, so the data is safe in Telegram regardless of what happens to the
database itself.
"""
import io
import requests
from datetime import datetime
from django.conf import settings
from django.core.management import call_command


def trigger_full_backup_export() -> tuple[bool, str]:
    """Dump all game+auth data and send it to Telegram as a document.
    Returns (success, message) — never raises, always safe to call from a view.
    """
    token   = settings.TELEGRAM_BOT_TOKEN
    chat_id = settings.TELEGRAM_CHAT_ID
    if not token or not chat_id:
        return False, "Telegram not configured (TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID missing)."

    try:
        buf = io.StringIO()
        call_command("dumpdata", "game", "auth", indent=2, stdout=buf)
        content = buf.getvalue()
    except Exception as e:
        return False, f"dumpdata failed: {e}"

    stamp = datetime.now().strftime("%Y-%m-%d_%H%M")
    filename = f"openspades_full_backup_{stamp}.json"

    try:
        resp = requests.post(
            f"https://api.telegram.org/bot{token}/sendDocument",
            data={
                "chat_id": chat_id,
                # Plain text, no parse_mode — the timestamp's underscores
                # broke Telegram's Markdown entity parser (unpaired "_"
                # reads as an unterminated italics span), rejecting the
                # whole message. Not worth fighting Markdown escaping for
                # a caption that doesn't need formatting anyway.
                "caption": f"OpenSpades Full Backup\n{stamp}\nSize: {len(content) // 1024} KB",
            },
            files={"document": (filename, content.encode("utf-8"), "application/json")},
            timeout=30,
        )
        if resp.status_code != 200:
            return False, f"Telegram send failed: {resp.status_code} {resp.text[:200]}"
    except Exception as e:
        return False, f"Telegram send raised: {e}"

    return True, f"Backup sent: {filename} ({len(content)} bytes)"

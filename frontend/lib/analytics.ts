const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const SESSION_KEY = "os_session_id";

/**
 * A per-browser ID, independent of the username (which the user can change
 * or clear). This is what makes "did this browser come back tomorrow"
 * measurable — persists across visits, survives a username change.
 */
export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let id = localStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}

type EventType = "site_loaded" | "username_entered" | "lobby_reached" | "voice_enabled";

/**
 * Fire-and-forget — never blocks UI, never throws. Analytics failing
 * silently is always preferable to analytics breaking the game.
 */
export function track(eventType: EventType, opts: { username?: string; gameCode?: string; meta?: object } = {}) {
  try {
    fetch(`${BASE}/api/game/track/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_type: eventType,
        session_id: getSessionId(),
        username: opts.username || "",
        game_code: opts.gameCode || "",
        meta: opts.meta || {},
      }),
    }).catch(() => {});
  } catch {
    // localStorage/crypto unavailable (private mode edge cases, etc) — skip silently
  }
}

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

const entries = new Map<string, RateLimitEntry>();

/**
 * Basic local protection for a single process. Replace with a shared store
 * (for example Redis/KV) before deploying to multiple server instances.
 */
export function limitRequest(
  key: string,
  options: { limit: number; windowMs: number }
): RateLimitResult {
  const now = Date.now();

  for (const [entryKey, entry] of entries) {
    if (entry.resetAt <= now) {
      entries.delete(entryKey);
    }
  }

  const currentEntry = entries.get(key);

  if (!currentEntry) {
    entries.set(key, { count: 1, resetAt: now + options.windowMs });
    return { allowed: true };
  }

  if (currentEntry.count >= options.limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((currentEntry.resetAt - now) / 1000))
    };
  }

  currentEntry.count += 1;
  return { allowed: true };
}

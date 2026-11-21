export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[App error]", {
    message: error instanceof Error ? error.message : String(error),
    context,
    path: window.location.pathname,
  });
}
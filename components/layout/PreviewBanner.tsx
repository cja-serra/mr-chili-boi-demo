"use client";

export function PreviewBanner() {
  return (
    <div
      className="w-full py-2 px-4 text-center text-sm font-body"
      style={{
        background: "var(--brand-muted)",
        borderBottom: "1px solid var(--brand-border)",
        color: "var(--brand-text-muted)",
      }}
    >
      <span className="mr-1">🚧</span>
      This is a preview build. All content, prices, and features are
      placeholders.
    </div>
  );
}

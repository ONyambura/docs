export default function DiscordWidget() {
  return (
    <div
      style={{
        marginTop: "1.5rem",
        padding: "0.75rem",
        borderRadius: "12px",
        background: "var(--nextra-bg-soft)",
        border: "1px solid var(--nextra-border)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease"
      }}
      className="discord-widget-card"
    >
      <div
        style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
          opacity: 0.8
        }}
      >
        Join Our Discord
      </div>

      <iframe
        src="https://discord.com/widget?id=685925212142829779&theme=dark"
        width="100%"
        height="420"
        style={{
          border: "none",
          borderRadius: "8px",
          overflow: "hidden",
          transition: "transform 0.25s ease"
        }}
        className="discord-iframe"
        frameBorder="0"
        allowTransparency={true}
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    </div>
  );
}

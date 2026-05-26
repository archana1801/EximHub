const cards = [
  {
    id: "01",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.35)",
    glowSoft: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.4)",
    title: "Freight Options",
    desc: "Air, sea, and land freight solutions tailored to your cargo size, timeline, and destination — with full-load and consolidated shipping.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "02",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.35)",
    glowSoft: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.4)",
    title: "Customs Clearance",
    desc: "Expert documentation handling, tariff classification, and compliance management to clear customs in 190+ countries without delays.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
        <polyline points="9 11 10 12 12 10" />
      </svg>
    ),
  },
  {
    id: "03",
    color: "#22C55E",
    glow: "rgba(34,197,94,0.35)",
    glowSoft: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.4)",
    title: "Real-Time Tracking",
    desc: "Live shipment visibility from origin to delivery. GPS-enabled tracking with instant alerts and a dashboard accessible 24/7.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    id: "04",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.35)",
    glowSoft: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.4)",
    title: "Warehousing & Distribution",
    desc: "Strategically located warehouses with automated inventory control, pick-and-pack services, and last-mile delivery management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        <line x1="9" y1="16" x2="15" y2="16" />
      </svg>
    ),
  },
];

export default function Shipping() {
  return (
    <section style={S.section}>

      {/* floating particles */}
      {[...Array(22)].map((_, i) => (
        <div
          key={i}
          className="sh-particle"
          style={{
            ...S.particle,
            left: `${(i * 43 + 7) % 97}%`,
            top: `${(i * 61 + 11) % 93}%`,
            width: i % 4 === 0 ? "3px" : "2px",
            height: i % 4 === 0 ? "3px" : "2px",
            animationDelay: `${(i * 0.4) % 4}s`,
            animationDuration: `${3.2 + (i % 3) * 0.9}s`,
            background: i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#3B82F6" : "#22C55E",
            opacity: i % 4 === 0 ? 0.55 : 0.25,
          }}
        />
      ))}

      {/* radial glow orbs */}
      <div style={S.orbTopRight}   aria-hidden="true" />
      <div style={S.orbBottomLeft} aria-hidden="true" />
      <div style={S.orbCenter}     aria-hidden="true" />
      <div style={S.orbGreen}      aria-hidden="true" />

      {/* futuristic ring outlines */}
      <div style={S.ring1} aria-hidden="true" />
      <div style={S.ring2} aria-hidden="true" />
      <div style={S.ring3} aria-hidden="true" />

      <div style={S.container}>

        {/* badge */}
        <div style={S.badgeRow}>
          <span style={S.badge}>
            <span style={S.badgeDot} />
            Global Logistics Solutions
          </span>
        </div>

        {/* heading */}
        <div style={S.headingWrap}>
          <h2 style={S.heading}>
            Reliable{" "}
            <span style={S.headingGrad}>Global Shipping</span>
          </h2>
          <p style={S.subtext}>
            Seamless end-to-end logistics services to deliver your goods worldwide safely and promptly.
          </p>
        </div>

        {/* 2×2 card grid */}
        <div className="sh-grid">
          {cards.map((card) => (
            <div key={card.id} className="sh-card" style={S.card}>

              {/* hover shimmer */}
              <div
                className="sh-shimmer"
                style={{
                  ...S.shimmer,
                  background: `radial-gradient(ellipse at top left, ${card.glowSoft}, transparent 60%)`,
                }}
              />

              {/* top row: icon + number */}
              <div style={S.cardTop}>
                <div style={{
                  ...S.iconBox,
                  border: `1px solid ${card.border}`,
                  boxShadow: `0 0 18px ${card.glow}, 0 0 36px ${card.glowSoft}`,
                }}>
                  <span style={{ color: card.color, display: "flex" }}>{card.icon}</span>
                  <span style={{ ...S.iconCornerDot, background: card.color, boxShadow: `0 0 6px ${card.color}` }} />
                </div>

                <span style={{ ...S.num, color: card.color }}>{card.id}</span>
              </div>

              {/* text */}
              <div style={S.cardBody}>
                <h3 style={S.cardTitle}>{card.title}</h3>
                <p style={S.cardDesc}>{card.desc}</p>
              </div>

              {/* bottom glowing accent line */}
              <div
                className="sh-accent-line"
                style={{ ...S.accentLine, background: `linear-gradient(90deg, ${card.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sh-pulse {
          0%, 100% { opacity: 0.18; transform: scale(1) translateY(0); }
          50%       { opacity: 0.55; transform: scale(2) translateY(-5px); }
        }
        .sh-particle {
          position: absolute;
          border-radius: 50%;
          animation: sh-pulse ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }
        .sh-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          position: relative;
          z-index: 1;
        }
        .sh-card {
          transition: transform 0.38s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.38s ease,
                      border-color 0.38s ease;
        }
        .sh-shimmer {
          opacity: 0;
          transition: opacity 0.38s ease;
        }
        .sh-accent-line {
          transition: width 0.38s ease;
          width: 42%;
        }
        .sh-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 32px 72px rgba(0,0,0,0.55), 0 8px 28px rgba(6,182,212,0.15) !important;
          border-color: rgba(6,182,212,0.3) !important;
        }
        .sh-card:hover .sh-shimmer     { opacity: 1; }
        .sh-card:hover .sh-accent-line { width: 78%; }
        @media (max-width: 860px) {
          .sh-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 540px) {
          .sh-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #03152D 0%, #041F45 45%, #082B5B 75%, #03152D 100%)",
    padding: "116px 60px",
    overflow: "hidden",
  },

  particle: {
    position: "absolute",
    pointerEvents: "none",
  },

  orbTopRight: {
    position: "absolute",
    width: "640px", height: "640px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)",
    top: "-180px", right: "-180px",
    pointerEvents: "none",
  },
  orbBottomLeft: {
    position: "absolute",
    width: "520px", height: "520px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)",
    bottom: "-140px", left: "-140px",
    pointerEvents: "none",
  },
  orbCenter: {
    position: "absolute",
    width: "900px", height: "540px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 58%)",
    top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },
  orbGreen: {
    position: "absolute",
    width: "360px", height: "360px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 65%)",
    top: "25%", left: "8%",
    pointerEvents: "none",
  },

  ring1: {
    position: "absolute",
    width: "720px", height: "720px",
    borderRadius: "50%",
    border: "1px solid rgba(6,182,212,0.06)",
    top: "50%", right: "-280px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  ring2: {
    position: "absolute",
    width: "500px", height: "500px",
    borderRadius: "50%",
    border: "1px solid rgba(6,182,212,0.05)",
    top: "50%", right: "-160px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  ring3: {
    position: "absolute",
    width: "300px", height: "300px",
    borderRadius: "50%",
    border: "1px solid rgba(59,130,246,0.07)",
    top: "50%", right: "-50px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1160px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  badgeRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "26px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#06B6D4",
    textTransform: "uppercase",
    letterSpacing: "2.8px",
    padding: "8px 22px",
    background: "rgba(6,182,212,0.07)",
    border: "1px solid rgba(6,182,212,0.35)",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 28px rgba(6,182,212,0.18), 0 0 56px rgba(6,182,212,0.08)",
  },

  badgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#22C55E",
    boxShadow: "0 0 8px #22C55E, 0 0 16px #22C55E",
    flexShrink: 0,
  },

  headingWrap: {
    textAlign: "center",
    marginBottom: "70px",
  },

  heading: {
    fontSize: "clamp(32px, 4.2vw, 54px)",
    fontWeight: "800",
    color: "#E8F4FF",
    margin: "0 0 18px 0",
    letterSpacing: "-1px",
    lineHeight: "1.1",
    textShadow: "0 0 40px rgba(6,182,212,0.2), 0 0 80px rgba(6,182,212,0.08)",
  },

  headingGrad: {
    background: "linear-gradient(90deg, #06B6D4, #3B82F6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtext: {
    fontSize: "16px",
    color: "rgba(200,220,255,0.55)",
    lineHeight: "1.85",
    maxWidth: "530px",
    margin: "0 auto",
  },

  card: {
    position: "relative",
    background: "rgba(18,35,75,0.82)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "32px 28px 26px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    overflow: "hidden",
    cursor: "default",
    boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
  },

  shimmer: {
    position: "absolute",
    inset: 0,
    borderRadius: "22px",
    pointerEvents: "none",
    zIndex: 0,
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
  },

  iconBox: {
    position: "relative",
    width: "54px", height: "54px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(8px)",
  },

  iconCornerDot: {
    position: "absolute",
    top: "8px", right: "8px",
    width: "6px", height: "6px",
    borderRadius: "50%",
  },

  num: {
    fontSize: "38px",
    fontWeight: "800",
    letterSpacing: "-2px",
    lineHeight: 1,
    opacity: 0.1,
    userSelect: "none",
  },

  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative",
    zIndex: 1,
    flexGrow: 1,
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#E8F4FF",
    margin: "0",
    letterSpacing: "-0.1px",
    lineHeight: "1.3",
  },

  cardDesc: {
    fontSize: "13.5px",
    color: "rgba(180,210,255,0.52)",
    lineHeight: "1.75",
    margin: "0",
  },

  accentLine: {
    height: "2px",
    borderRadius: "2px",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 0 10px rgba(6,182,212,0.5)",
  },
};

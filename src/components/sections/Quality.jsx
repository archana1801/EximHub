const cards = [
  {
    id: "01",
    color: "#22C55E",
    glow: "rgba(34,197,94,0.25)",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Supplier Verification",
    desc: "Every supplier is thoroughly verified for quality, reliability, and compliance before onboarding.",
  },
  {
    id: "02",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.25)",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
      </svg>
    ),
    title: "Documentation Support",
    desc: "Complete assistance with export documentation, customs forms, and trade compliance paperwork.",
  },
  {
    id: "03",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.25)",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Compliance Assistance",
    desc: "Stay compliant with international trade regulations, import duties, and country-specific requirements.",
  },
  {
    id: "04",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.25)",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
      </svg>
    ),
    title: "Competitive Pricing",
    desc: "Access factory-direct pricing through our verified supplier network with complete transparency.",
  },
  {
    id: "05",
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.25)",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Shipping",
    desc: "End-to-end logistics management from origin port to your destination warehouse, on time.",
  },
  {
    id: "06",
    color: "#10B981",
    glow: "rgba(16,185,129,0.25)",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
    title: "End-to-End Assistance",
    desc: "Dedicated support team available throughout your import journey for smooth operations.",
  },
];

export default function Quality() {
  return (
    <section style={S.section}>

      {/* particles */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="q-particle"
          style={{
            ...S.particle,
            left: `${(i * 37 + 11) % 95}%`,
            top: `${(i * 53 + 7) % 90}%`,
            width: i % 3 === 0 ? "3px" : "2px",
            height: i % 3 === 0 ? "3px" : "2px",
            animationDelay: `${(i * 0.4) % 3}s`,
            opacity: i % 4 === 0 ? 0.5 : 0.25,
          }}
        />
      ))}

      {/* globe rings */}
      <div style={S.ring1} aria-hidden="true" />
      <div style={S.ring2} aria-hidden="true" />
      <div style={S.ring3} aria-hidden="true" />

      {/* glow orbs */}
      <div style={S.orb1}      aria-hidden="true" />
      <div style={S.orb2}      aria-hidden="true" />
      <div style={S.orb3}      aria-hidden="true" />
      <div style={S.orbCenter} aria-hidden="true" />

      <div style={S.container}>

        {/* badge */}
        <div style={S.badgeWrap}>
          <span style={S.badge}>
            <span style={S.badgeDot} />
            Why Importers Choose Us
          </span>
        </div>

        {/* heading */}
        <div style={S.headingWrap}>
          <h2 style={S.heading}>
            Why Importers{" "}
            <span style={S.headingGradient}>Choose Us</span>
          </h2>
          <p style={S.subtext}>
            End-to-end support, verified suppliers, and seamless global trade
            operations that you can rely on.
          </p>
        </div>

        {/* grid */}
        <div className="q-grid">
          {cards.map((card) => (
            <div key={card.id} className="q-card" style={S.card}>

              {/* card glow on hover (handled via CSS) */}
              <div
                className="q-card-glow"
                style={{ ...S.cardGlowLayer, background: `radial-gradient(ellipse at top left, ${card.glow}, transparent 70%)` }}
              />

              {/* top row */}
              <div style={S.cardTop}>

                {/* icon */}
                <div style={{ ...S.iconWrap, background: card.bg, border: `1px solid ${card.border}`, boxShadow: `0 0 24px ${card.glow}, 0 0 48px ${card.glow}` }}>
                  <div style={{ ...S.iconInner, color: card.color }}>
                    {card.icon}
                  </div>
                  {/* glow dot */}
                  <span style={{ ...S.glowDot, background: card.color, boxShadow: `0 0 8px ${card.color}` }} />
                </div>

                {/* number */}
                <span style={{ ...S.num, color: card.color }}>{card.id}</span>
              </div>

              {/* text */}
              <h3 style={S.cardTitle}>{card.title}</h3>
              <p style={S.cardDesc}>{card.desc}</p>

              {/* bottom accent line */}
              <div
                className="q-accent-line"
                style={{ ...S.accentLine, background: `linear-gradient(90deg, ${card.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes q-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.5;  transform: scale(1.6); }
        }
        .q-particle {
          position: absolute;
          border-radius: 50%;
          background: #22C55E;
          animation: q-pulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        .q-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          position: relative;
          z-index: 1;
        }

        .q-card {
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .q-card-glow {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .q-accent-line {
          transition: width 0.35s ease;
        }
        .q-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 60px rgba(0,0,0,0.55) !important;
          border-color: rgba(255,255,255,0.16) !important;
        }
        .q-card:hover .q-card-glow { opacity: 1; }
        .q-card:hover .q-accent-line { width: 80% !important; }
        .q-card:hover .q-icon-inner { filter: brightness(1.25); }

        @media (max-width: 900px) {
          .q-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .q-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #071E3E 0%, #0A2448 40%, #0F2B56 70%, #071E3E 100%)",
    padding: "110px 60px",
    overflow: "hidden",
  },

  particle: {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 0,
  },

  /* globe rings */
  ring1: {
    position: "absolute",
    width: "700px", height: "700px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.03)",
    top: "50%", right: "-200px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  ring2: {
    position: "absolute",
    width: "480px", height: "480px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.045)",
    top: "50%", right: "-90px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  ring3: {
    position: "absolute",
    width: "280px", height: "280px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.06)",
    top: "50%", right: "30px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },

  /* glow orbs — boosted opacity */
  orb1: {
    position: "absolute",
    width: "600px", height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(34,197,94,0.13) 0%, transparent 65%)",
    top: "-140px", left: "-140px",
    pointerEvents: "none",
  },
  orb2: {
    position: "absolute",
    width: "500px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 65%)",
    bottom: "-100px", right: "80px",
    pointerEvents: "none",
  },
  orb3: {
    position: "absolute",
    width: "380px", height: "380px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 65%)",
    top: "30%", left: "38%",
    pointerEvents: "none",
  },
  /* center lighter radial — brightens the middle of the section */
  orbCenter: {
    position: "absolute",
    width: "900px", height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(255,255,255,0.035) 0%, transparent 60%)",
    top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1160px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  badgeWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#22C55E",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    padding: "7px 20px",
    background: "rgba(34,197,94,0.09)",
    border: "1px solid rgba(34,197,94,0.45)",
    borderRadius: "30px",
    boxShadow: "0 0 28px rgba(34,197,94,0.22), 0 0 60px rgba(34,197,94,0.1)",
    backdropFilter: "blur(10px)",
  },

  badgeDot: {
    display: "inline-block",
    width: "6px", height: "6px",
    borderRadius: "50%",
    background: "#22C55E",
    boxShadow: "0 0 8px #22C55E",
  },

  headingWrap: {
    textAlign: "center",
    marginBottom: "64px",
  },

  heading: {
    fontSize: "clamp(30px, 4vw, 52px)",
    fontWeight: "800",
    color: "#fff",
    margin: "0 0 18px 0",
    letterSpacing: "-0.8px",
    lineHeight: "1.1",
    textShadow: "0 0 40px rgba(34,197,94,0.25), 0 0 80px rgba(34,197,94,0.1)",
  },

  headingGradient: {
    background: "linear-gradient(90deg, #22C55E, #06B6D4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtext: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.6)",
    lineHeight: "1.8",
    maxWidth: "540px",
    margin: "0 auto",
  },

  /* card */
  card: {
    position: "relative",
    background: "rgba(255,255,255,0.065)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "22px",
    padding: "30px 26px 26px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    overflow: "hidden",
    cursor: "default",
    boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
  },

  cardGlowLayer: {
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

  iconWrap: {
    position: "relative",
    width: "54px", height: "54px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  iconInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "filter 0.3s ease",
  },

  glowDot: {
    position: "absolute",
    top: "6px",
    right: "6px",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
  },

  num: {
    fontSize: "36px",
    fontWeight: "800",
    letterSpacing: "-2px",
    lineHeight: 1,
    opacity: 0.18,
    userSelect: "none",
  },

  cardTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "0",
    letterSpacing: "-0.1px",
    lineHeight: "1.3",
    position: "relative",
    zIndex: 1,
  },

  cardDesc: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.68)",
    lineHeight: "1.75",
    margin: "0",
    flexGrow: 1,
    position: "relative",
    zIndex: 1,
  },

  accentLine: {
    height: "2px",
    width: "40px",
    borderRadius: "2px",
    position: "relative",
    zIndex: 1,
  },
};

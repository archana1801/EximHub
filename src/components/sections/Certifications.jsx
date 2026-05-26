const certs = [
  {
    id: "01",
    color: "#19C37D",
    glow: "rgba(25,195,125,0.3)",
    bg: "rgba(25,195,125,0.1)",
    border: "rgba(25,195,125,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    name: "ISO 9001:2015",
    subtitle: "Certified Quality Management System meeting global manufacturing standards.",
    tag: "International Standard",
    tagColor: "#19C37D",
    tagBg: "rgba(25,195,125,0.1)",
  },
  {
    id: "02",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.3)",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    name: "APEDA Registered",
    subtitle: "Agricultural & Processed Food Products Export Development Authority certified.",
    tag: "Govt. Approved",
    tagColor: "#06B6D4",
    tagBg: "rgba(6,182,212,0.1)",
  },
  {
    id: "03",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.3)",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
    name: "DGFT Certified",
    subtitle: "Directorate General of Foreign Trade licensed for authorized export operations.",
    tag: "Export Authorized",
    tagColor: "#8B5CF6",
    tagBg: "rgba(139,92,246,0.1)",
  },
  {
    id: "04",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.3)",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    name: "Export License Approved",
    subtitle: "Government-issued export license authorizing global trade across 25+ countries.",
    tag: "Verified",
    tagColor: "#F59E0B",
    tagBg: "rgba(245,158,11,0.1)",
  },
  {
    id: "05",
    color: "#10B981",
    glow: "rgba(16,185,129,0.3)",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    name: "Quality Verified",
    subtitle: "Third-party pre-shipment quality inspection passed for all product categories.",
    tag: "Quality Assured",
    tagColor: "#10B981",
    tagBg: "rgba(16,185,129,0.1)",
  },
  {
    id: "06",
    color: "#43E7FF",
    glow: "rgba(67,231,255,0.3)",
    bg: "rgba(67,231,255,0.1)",
    border: "rgba(67,231,255,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    name: "International Trade Compliant",
    subtitle: "Fully compliant with WTO, Incoterms, and international import-export regulations.",
    tag: "Compliant",
    tagColor: "#0891b2",
    tagBg: "rgba(67,231,255,0.12)",
  },
];

export default function Certifications() {
  return (
    <section style={S.section}>

      {/* light particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="c-particle"
          style={{
            ...S.particle,
            left: `${(i * 41 + 9) % 96}%`,
            top: `${(i * 57 + 13) % 92}%`,
            width: i % 3 === 0 ? "4px" : "2px",
            height: i % 3 === 0 ? "4px" : "2px",
            animationDelay: `${(i * 0.45) % 3.5}s`,
            background: i % 2 === 0 ? "#19C37D" : "#43E7FF",
            opacity: i % 3 === 0 ? 0.4 : 0.2,
          }}
        />
      ))}

      {/* background glow orbs */}
      <div style={S.orbTopLeft}    aria-hidden="true" />
      <div style={S.orbBottomRight} aria-hidden="true" />
      <div style={S.orbCenter}     aria-hidden="true" />
      <div style={S.orbCyan}       aria-hidden="true" />

      {/* world map faint ring grid */}
      <div style={S.mapRing1} aria-hidden="true" />
      <div style={S.mapRing2} aria-hidden="true" />

      <div style={S.container}>

        {/* badge */}
        <div style={S.badgeRow}>
          <span style={S.badge}>
            <span style={S.badgeDot} />
            Trust &amp; Compliance
          </span>
        </div>

        {/* heading */}
        <div style={S.headingWrap}>
          <h2 style={S.heading}>
            Certified &amp;{" "}
            <span style={S.headingGradient}>Globally Compliant</span>
          </h2>
          <p style={S.subtext}>
            All products and suppliers meet international standards and export regulations.
          </p>
        </div>

        {/* cards */}
        <div className="c-grid">
          {certs.map((cert) => (
            <div key={cert.id} className="c-card" style={S.card}>

              {/* hover shimmer overlay */}
              <div
                className="c-shimmer"
                style={{ ...S.shimmer, background: `radial-gradient(ellipse at top left, ${cert.glow}, transparent 65%)` }}
              />

              {/* top row: icon + number */}
              <div style={S.cardTop}>
                <div style={{
                  ...S.iconBox,
                  background: cert.bg,
                  border: `1px solid ${cert.border}`,
                  boxShadow: `0 0 20px ${cert.glow}, 0 0 40px ${cert.glow}`,
                }}>
                  <span style={{ color: cert.color, display: "flex" }}>{cert.icon}</span>
                  <span style={{ ...S.iconDot, background: cert.color, boxShadow: `0 0 8px ${cert.color}` }} />
                </div>

                <span style={{ ...S.num, color: cert.color }}>{cert.id}</span>
              </div>

              {/* content */}
              <div style={S.cardBody}>
                <h3 style={S.certName}>{cert.name}</h3>
                <p style={S.certSub}>{cert.subtitle}</p>
              </div>

              {/* bottom tag */}
              <div style={{
                ...S.certTag,
                color: cert.tagColor,
                background: cert.tagBg,
                border: `1px solid ${cert.border}`,
                boxShadow: `0 0 12px ${cert.glow}`,
              }}>
                <span style={{ ...S.tagDot, background: cert.tagColor }} />
                {cert.tag}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={S.ctaRow}>
          <button style={S.ctaBtn} className="c-cta-btn">
            View All Certifications
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes c-float {
          0%, 100% { opacity: 0.15; transform: scale(1) translateY(0); }
          50%       { opacity: 0.45; transform: scale(1.8) translateY(-4px); }
        }
        .c-particle {
          position: absolute;
          border-radius: 50%;
          animation: c-float 3.5s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }
        .c-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          position: relative;
          z-index: 1;
        }
        .c-card {
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .c-shimmer {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .c-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 28px 64px rgba(7,27,52,0.14), 0 8px 24px rgba(25,195,125,0.08) !important;
          border-color: rgba(25,195,125,0.35) !important;
        }
        .c-card:hover .c-shimmer { opacity: 1; }
        .c-cta-btn:hover {
          background: linear-gradient(135deg, #15a86b, #19C37D) !important;
          box-shadow: 0 8px 32px rgba(25,195,125,0.4) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .c-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .c-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(150deg, #eef9ff 0%, #f4f8fb 35%, #f0fdf6 65%, #eef9ff 100%)",
    padding: "110px 60px",
    overflow: "hidden",
    /* crisp white separator from Quality section above */
    borderTop: "5px solid #ffffff",
  },

  particle: {
    position: "absolute",
    pointerEvents: "none",
  },

  /* glow orbs — light-mode soft tones */
  orbTopLeft: {
    position: "absolute",
    width: "600px", height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(25,195,125,0.09) 0%, transparent 65%)",
    top: "-160px", left: "-160px",
    pointerEvents: "none",
  },
  orbBottomRight: {
    position: "absolute",
    width: "500px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(67,231,255,0.1) 0%, transparent 65%)",
    bottom: "-120px", right: "-120px",
    pointerEvents: "none",
  },
  orbCenter: {
    position: "absolute",
    width: "800px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(25,195,125,0.06) 0%, transparent 60%)",
    top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },
  orbCyan: {
    position: "absolute",
    width: "380px", height: "380px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)",
    top: "20%", right: "5%",
    pointerEvents: "none",
  },

  /* faint ring grid — world map feel */
  mapRing1: {
    position: "absolute",
    width: "700px", height: "700px",
    borderRadius: "50%",
    border: "1px solid rgba(7,27,52,0.04)",
    top: "50%", left: "-200px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  mapRing2: {
    position: "absolute",
    width: "480px", height: "480px",
    borderRadius: "50%",
    border: "1px solid rgba(7,27,52,0.04)",
    top: "50%", left: "-90px",
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
    marginBottom: "24px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#19C37D",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    padding: "7px 20px",
    background: "rgba(25,195,125,0.07)",
    border: "1px solid rgba(25,195,125,0.35)",
    borderRadius: "30px",
    boxShadow: "0 0 24px rgba(25,195,125,0.15), 0 0 50px rgba(25,195,125,0.07)",
    backdropFilter: "blur(8px)",
  },

  badgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#19C37D",
    boxShadow: "0 0 8px #19C37D, 0 0 16px #19C37D",
  },

  headingWrap: {
    textAlign: "center",
    marginBottom: "64px",
  },

  heading: {
    fontSize: "clamp(30px, 4vw, 52px)",
    fontWeight: "800",
    color: "#071B34",
    margin: "0 0 18px 0",
    letterSpacing: "-0.8px",
    lineHeight: "1.1",
    textShadow: "0 2px 20px rgba(7,27,52,0.08)",
  },

  headingGradient: {
    background: "linear-gradient(90deg, #19C37D, #43E7FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtext: {
    fontSize: "16px",
    color: "rgba(7,27,52,0.55)",
    lineHeight: "1.8",
    maxWidth: "520px",
    margin: "0 auto",
  },

  /* card — light glassmorphism */
  card: {
    position: "relative",
    background: "rgba(255,255,255,0.72)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.55)",
    borderRadius: "22px",
    padding: "30px 26px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    overflow: "hidden",
    cursor: "default",
    boxShadow: "0 8px 40px rgba(7,27,52,0.08), 0 2px 8px rgba(7,27,52,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
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
    width: "52px", height: "52px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    backdropFilter: "blur(8px)",
  },

  iconDot: {
    position: "absolute",
    top: "7px", right: "7px",
    width: "7px", height: "7px",
    borderRadius: "50%",
  },

  num: {
    fontSize: "36px",
    fontWeight: "800",
    letterSpacing: "-2px",
    lineHeight: 1,
    opacity: 0.12,
    userSelect: "none",
  },

  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "relative",
    zIndex: 1,
    flexGrow: 1,
  },

  certName: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#071B34",
    margin: "0",
    letterSpacing: "-0.1px",
    lineHeight: "1.3",
  },

  certSub: {
    fontSize: "13px",
    color: "rgba(7,27,52,0.55)",
    lineHeight: "1.7",
    margin: "0",
  },

  certTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "10px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    padding: "5px 12px",
    borderRadius: "20px",
    width: "fit-content",
    position: "relative",
    zIndex: 1,
    backdropFilter: "blur(6px)",
  },

  tagDot: {
    display: "inline-block",
    width: "5px", height: "5px",
    borderRadius: "50%",
    flexShrink: 0,
  },

  ctaRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: "52px",
  },

  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "linear-gradient(135deg, #19C37D, #15d68a)",
    color: "#ffffff",
    border: "none",
    padding: "15px 38px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "0.2px",
    boxShadow: "0 6px 28px rgba(25,195,125,0.35), 0 2px 8px rgba(25,195,125,0.2)",
    transition: "all 0.3s ease",
  },
};

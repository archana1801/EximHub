const bullets = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    text: "Custom Packaging Solutions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    text: "Logo & Branding Support",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    text: "OEM / ODM Manufacturing",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    text: "Flexible MOQ Options",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    text: "End-to-End Product Development",
  },
];

const steps = [
  {
    num: "01",
    title: "Share Requirements",
    desc: "Tell us your product specs, quantity, and branding vision.",
    color: "#1FA971",
    iconBg: "rgba(31,169,113,0.1)",
  },
  {
    num: "02",
    title: "Product Development",
    desc: "Our team sources and develops samples matching your brief.",
    color: "#0891b2",
    iconBg: "rgba(8,145,178,0.1)",
  },
  {
    num: "03",
    title: "Branding & Packaging",
    desc: "Custom labels, logo placement, and premium packaging design.",
    color: "#7C3AED",
    iconBg: "rgba(124,58,237,0.1)",
  },
  {
    num: "04",
    title: "Production & Delivery",
    desc: "Quality-checked production run followed by worldwide delivery.",
    color: "#D97706",
    iconBg: "rgba(217,119,6,0.1)",
  },
];

export default function PrivateLabel() {
  return (
    <section style={S.section}>

      {/* subtle background blobs */}
      <div style={S.blobTopRight} aria-hidden="true" />
      <div style={S.blobBottomLeft} aria-hidden="true" />

      <div style={S.container}>

        {/* LEFT — heading, bullets, CTA */}
        <div style={S.left}>

          <span style={S.badge}>
            <span style={S.badgeDot} />
            OEM &amp; ODM Services
          </span>

          <h2 style={S.heading}>
            Private Label &amp;{" "}
            <span style={S.headingAccent}>Custom Sourcing</span>
          </h2>

          <p style={S.description}>
            Build your own brand with our end-to-end private labeling and sourcing solutions. From concept to shelf — we handle every step so you can focus on growing.
          </p>

          <ul style={S.bulletList}>
            {bullets.map((b, i) => (
              <li key={i} className="pl-bullet" style={S.bulletItem}>
                <span style={S.bulletIcon}>{b.icon}</span>
                <span style={S.bulletText}>{b.text}</span>
              </li>
            ))}
          </ul>

          <button className="pl-cta" style={S.cta}>
            Start Private Label Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* RIGHT — steps card */}
        <div style={S.right}>

          {/* card header */}
          <div style={S.cardHeader}>
            <div style={S.cardHeaderDot} />
            <div style={{ ...S.cardHeaderDot, background: "#FCD34D" }} />
            <div style={{ ...S.cardHeaderDot, background: "#6EE7B7" }} />
            <span style={S.cardHeaderTitle}>Your Private Label Journey</span>
          </div>

          {/* steps */}
          <div style={S.stepsWrap}>
            {steps.map((step, i) => (
              <div key={i} className="pl-step" style={S.stepRow}>

                {/* connector line */}
                {i < steps.length - 1 && (
                  <div style={{ ...S.connector, background: `linear-gradient(180deg, ${step.color}, ${steps[i + 1].color})` }} />
                )}

                <div style={{ ...S.stepNumBox, background: step.iconBg, border: `1.5px solid ${step.color}33`, color: step.color }}>
                  {step.num}
                </div>

                <div style={S.stepContent}>
                  <p style={{ ...S.stepTitle, color: step.color }}>{step.title}</p>
                  <p style={S.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* card footer tag */}
          <div style={S.cardFooter}>
            <span style={S.footerTag}>
              <span style={S.footerDot} />
              100% Brand Ownership Guaranteed
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .pl-bullet {
          transition: transform 0.25s ease;
        }
        .pl-bullet:hover {
          transform: translateX(5px);
        }
        .pl-step {
          transition: transform 0.28s ease;
        }
        .pl-step:hover {
          transform: translateX(4px);
        }
        .pl-cta {
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .pl-cta:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.38) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 860px) {
          .pl-layout { flex-direction: column !important; }
          .pl-left   { max-width: 100% !important; }
          .pl-right  { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #F0FAF5 0%, #F7FDF9 50%, #EBF8F3 100%)",
    padding: "110px 60px",
    overflow: "hidden",
  },

  blobTopRight: {
    position: "absolute",
    width: "480px", height: "480px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.08) 0%, transparent 65%)",
    top: "-120px", right: "-120px",
    pointerEvents: "none",
  },
  blobBottomLeft: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 65%)",
    bottom: "-100px", left: "-100px",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1160px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "72px",
    position: "relative",
    zIndex: 1,
  },

  /* ── LEFT ── */
  left: {
    flex: "1 1 0",
    minWidth: "0",
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#1FA971",
    textTransform: "uppercase",
    letterSpacing: "2.2px",
    padding: "7px 18px",
    background: "rgba(31,169,113,0.08)",
    border: "1px solid rgba(31,169,113,0.3)",
    borderRadius: "30px",
    marginBottom: "22px",
    alignSelf: "flex-start",
  },

  badgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#1FA971",
    boxShadow: "0 0 7px #1FA971",
    flexShrink: 0,
  },

  heading: {
    fontSize: "clamp(28px, 3.6vw, 46px)",
    fontWeight: "800",
    color: "#0A1F14",
    margin: "0 0 18px 0",
    letterSpacing: "-0.8px",
    lineHeight: "1.12",
  },

  headingAccent: {
    color: "#1FA971",
  },

  description: {
    fontSize: "15.5px",
    color: "rgba(10,31,20,0.6)",
    lineHeight: "1.8",
    margin: "0 0 34px 0",
    maxWidth: "480px",
  },

  bulletList: {
    listStyle: "none",
    margin: "0 0 42px 0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  bulletItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    cursor: "default",
  },

  bulletIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "38px", height: "38px",
    borderRadius: "10px",
    background: "rgba(31,169,113,0.1)",
    border: "1px solid rgba(31,169,113,0.22)",
    color: "#1FA971",
    flexShrink: 0,
  },

  bulletText: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#0A1F14",
    letterSpacing: "-0.1px",
  },

  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "#1FA971",
    color: "#ffffff",
    border: "none",
    padding: "15px 36px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "0.1px",
    alignSelf: "flex-start",
    boxShadow: "0 6px 24px rgba(31,169,113,0.3), 0 2px 6px rgba(31,169,113,0.15)",
  },

  /* ── RIGHT ── */
  right: {
    flex: "1 1 0",
    minWidth: "0",
    background: "#ffffff",
    borderRadius: "24px",
    border: "1px solid rgba(31,169,113,0.15)",
    boxShadow: "0 12px 48px rgba(10,31,20,0.08), 0 2px 8px rgba(10,31,20,0.04)",
    overflow: "hidden",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "16px 24px",
    background: "rgba(31,169,113,0.05)",
    borderBottom: "1px solid rgba(31,169,113,0.12)",
  },

  cardHeaderDot: {
    width: "11px", height: "11px",
    borderRadius: "50%",
    background: "#FC5F5A",
    flexShrink: 0,
  },

  cardHeaderTitle: {
    marginLeft: "6px",
    fontSize: "12px",
    fontWeight: "600",
    color: "rgba(10,31,20,0.45)",
    letterSpacing: "0.3px",
  },

  stepsWrap: {
    padding: "30px 28px",
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },

  stepRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    position: "relative",
    paddingBottom: "24px",
    cursor: "default",
  },

  connector: {
    position: "absolute",
    left: "19px",
    top: "44px",
    width: "2px",
    height: "calc(100% - 20px)",
    borderRadius: "2px",
    opacity: 0.25,
  },

  stepNumBox: {
    width: "40px", height: "40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "800",
    letterSpacing: "-0.5px",
    flexShrink: 0,
    position: "relative",
    zIndex: 1,
  },

  stepContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    paddingTop: "7px",
  },

  stepTitle: {
    fontSize: "14px",
    fontWeight: "700",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  stepDesc: {
    fontSize: "13px",
    color: "rgba(10,31,20,0.5)",
    lineHeight: "1.65",
    margin: "0",
  },

  cardFooter: {
    padding: "16px 28px",
    borderTop: "1px solid rgba(31,169,113,0.1)",
    background: "rgba(31,169,113,0.03)",
  },

  footerTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#1FA971",
  },

  footerDot: {
    display: "inline-block",
    width: "8px", height: "8px",
    borderRadius: "50%",
    background: "#1FA971",
    boxShadow: "0 0 6px #1FA971",
    flexShrink: 0,
  },
};

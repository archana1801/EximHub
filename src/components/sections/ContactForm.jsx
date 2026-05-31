import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <section style={S.section}>
      <div style={S.orbLeft}  aria-hidden="true" />
      <div style={S.orbRight} aria-hidden="true" />

      <div style={S.container}>

        {/* left: text */}
        <div style={S.left}>
          <h2 style={S.title}>
            Ready to Simplify Your<br />
            Import Journey?&nbsp;🚀
          </h2>
          <p style={S.subtitle}>
            Get in touch with our experts and grow your business globally.
          </p>
        </div>

        {/* center: button */}
        <div style={S.btnWrap}>
          <Link to="/contact" style={S.ctaBtn} className="cta-request-btn">
            Request Free
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* right: stats */}
        <div style={S.stats}>
          <div style={S.stat}>
            <span style={S.statNum}>300+</span>
            <span style={S.statLabel}>Happy Importers</span>
          </div>
          <div style={S.statDiv} />
          <div style={S.stat}>
            <span style={S.statNum}>50+</span>
            <span style={S.statLabel}>Countries Worldwide</span>
          </div>
        </div>

      </div>

      <style>{`
        .cta-request-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .cta-request-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.4) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 860px) {
          .cta-container { flex-direction: column !important; text-align: center; align-items: center !important; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #0B1F3A 0%, #0D2444 55%, #061529 100%)",
    padding: "60px 60px",
    overflow: "hidden",
  },

  orbLeft: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.08) 0%, transparent 65%)",
    top: "-100px", left: "-100px",
    pointerEvents: "none",
  },

  orbRight: {
    position: "absolute",
    width: "350px", height: "350px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    position: "relative",
    zIndex: 1,
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: "280px",
  },

  title: {
    fontSize: "clamp(20px, 2.5vw, 28px)",
    fontWeight: "800",
    color: "#E8F4FF",
    margin: "0 0 10px",
    letterSpacing: "-0.4px",
    lineHeight: "1.25",
  },

  subtitle: {
    fontSize: "14px",
    color: "rgba(200,220,255,0.5)",
    margin: "0",
    lineHeight: "1.6",
  },

  btnWrap: {
    flexShrink: 0,
  },

  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "#1FA971",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 32px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "700",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32)",
    whiteSpace: "nowrap",
  },

  stats: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    flexShrink: 0,
  },

  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },

  statNum: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: "-0.5px",
    lineHeight: "1",
  },

  statLabel: {
    fontSize: "12px",
    color: "rgba(200,220,255,0.45)",
    fontWeight: "500",
    textAlign: "center",
    whiteSpace: "nowrap",
  },

  statDiv: {
    width: "1px",
    height: "40px",
    background: "rgba(255,255,255,0.12)",
    flexShrink: 0,
  },
};

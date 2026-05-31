import { Link } from "react-router-dom";

const whyCards = [
  {
    color: "#1FA971",
    bg: "rgba(31,169,113,0.08)",
    border: "rgba(31,169,113,0.22)",
    title: "Reliable Suppliers",
    desc: "Every supplier in our network undergoes a strict vetting process — factory audits, compliance checks, and sample approvals before onboarding.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.22)",
    title: "Quality Assurance",
    desc: "Third-party pre-shipment inspections on every consignment ensure product specifications are met before goods leave the warehouse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
  },
  {
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.22)",
    title: "Global Reach",
    desc: "We serve importers across 40+ countries, with established logistics networks across Asia, Europe, the Middle East, and the Americas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    border: "rgba(217,119,6,0.22)",
    title: "End-to-End Support",
    desc: "From product discovery to customs clearance and last-mile delivery — we manage the entire supply chain so you can focus on your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const stats = [
  { num: "2018",  label: "Founded" },
  { num: "500+",  label: "Active Importers" },
  { num: "40+",   label: "Countries Served" },
  { num: "1200+", label: "Verified Suppliers" },
];

const values = [
  {
    title: "Transparency",
    desc: "Clear pricing, honest timelines, and no hidden fees — always.",
    color: "#1FA971",
  },
  {
    title: "Reliability",
    desc: "Consistent quality and on-time delivery you can build a business on.",
    color: "#0891b2",
  },
  {
    title: "Compliance",
    desc: "Every shipment meets the legal and regulatory requirements of its destination.",
    color: "#7C3AED",
  },
];

export default function About() {
  return (
    <main style={S.main}>

      {/* ── 1. HERO ── */}
      <section style={S.hero}>
        <div style={S.heroBlobLeft}  aria-hidden="true" />
        <div style={S.heroBlobRight} aria-hidden="true" />
        <div style={S.heroInner}>

          {/* LEFT — text */}
          <div style={S.heroLeft}>
            <span style={S.badge}>
              <span style={S.badgeDot} />
              Who We Are
            </span>
            <h1 style={S.heroTitle}>
              About <span style={S.heroAccent}>ImportWiz</span>
            </h1>
            <p style={S.heroSub}>
              Your trusted partner in global sourcing and export solutions — connecting importers with reliable suppliers since 2018.
            </p>
            <div style={S.crumbs}>
              <Link to="/" style={S.crumbLink}>Home</Link>
              <span style={S.crumbSep}>›</span>
              <span style={S.crumbActive}>About</span>
            </div>
          </div>

          {/* RIGHT — about image */}
          <div style={S.heroRight}>
            <img
              src="/images/categories/about.png"
              alt="About ImportWiz"
              style={S.heroImg}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

        </div>
      </section>

      {/* ── 2. COMPANY OVERVIEW ── */}
      <section style={S.overview}>
        <div style={S.container}>
          <div style={S.overviewGrid}>

            {/* left — text */}
            <div style={S.overviewLeft}>
              <p style={S.overviewLabel}>Our Story</p>
              <h2 style={S.overviewTitle}>
                Simplifying Global Trade,<br />
                <span style={S.overviewAccent}>One Shipment at a Time</span>
              </h2>
              <p style={S.overviewBody}>
                ImportWiz was founded with a single goal: make international sourcing accessible, transparent, and reliable for importers of every size. We bridge the gap between global buyers and verified manufacturers across India and South Asia.
              </p>
              <p style={S.overviewBody}>
                We manage the full procurement cycle — from supplier discovery and sample approval to quality inspection, documentation, and door-to-door logistics. Whether you're importing spices, textiles, industrial components, or consumer goods, our team handles the complexity so you don't have to.
              </p>
              <div style={S.overviewTags}>
                {["ISO Certified", "APEDA Registered", "DGFT Licensed", "Export Compliant"].map((t) => (
                  <span key={t} style={S.tag}>{t}</span>
                ))}
              </div>
            </div>

            {/* right — stats */}
            <div style={S.statsCard}>
              {stats.map((s, i) => (
                <div key={i} style={{ ...S.statItem, borderBottom: i < stats.length - 1 ? "1px solid rgba(13,27,42,0.07)" : "none" }}>
                  <span style={S.statNum}>{s.num}</span>
                  <span style={S.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ── */}
      <section style={S.whySection}>
        <div style={S.container}>
          <div style={S.sectionHead}>
            <h2 style={S.sectionTitle}>Why Clients Choose Us</h2>
            <p style={S.sectionSub}>
              Importers across 40+ countries rely on us for one reason — we deliver on our promises.
            </p>
          </div>
          <div className="ab-why-grid">
            {whyCards.map((c, i) => (
              <div key={i} className="ab-card" style={S.whyCard}>
                <div style={{ ...S.whyIconBox, background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
                  {c.icon}
                </div>
                <h3 style={{ ...S.whyTitle, color: c.color }}>{c.title}</h3>
                <p style={S.whyDesc}>{c.desc}</p>
                <div style={{ ...S.whyLine, background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MISSION + VALUES ── */}
      <section style={S.missionSection}>
        <div style={S.missionBlobLeft}  aria-hidden="true" />
        <div style={S.missionBlobRight} aria-hidden="true" />
        <div style={S.container}>
          <div style={S.missionGrid}>

            {/* mission statement */}
            <div style={S.missionLeft}>
              <span style={S.missionLabel}>Our Mission</span>
              <h2 style={S.missionTitle}>
                "To simplify global trade and provide reliable sourcing solutions to businesses worldwide."
              </h2>
              <p style={S.missionBody}>
                We believe every business, regardless of size, deserves access to quality global suppliers, fair pricing, and a logistics partner that takes accountability seriously.
              </p>
            </div>

            {/* values */}
            <div style={S.valuesCol}>
              {values.map((v, i) => (
                <div key={i} style={S.valueItem}>
                  <div style={{ ...S.valueDotLine, background: v.color }} />
                  <div>
                    <p style={{ ...S.valueTitle, color: v.color }}>{v.title}</p>
                    <p style={S.valueDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section style={S.ctaSection}>
        <div style={S.ctaBlobLeft}  aria-hidden="true" />
        <div style={S.ctaBlobRight} aria-hidden="true" />
        <div style={S.ctaInner}>
          <span style={S.ctaBadge}>
            <span style={S.ctaBadgeDot} />
            Get In Touch
          </span>
          <h2 style={S.ctaTitle}>
            Let's Build Your <span style={S.ctaAccent}>Supply Chain</span>
          </h2>
          <p style={S.ctaSub}>
            Tell us what you need. Our sourcing team will connect you with the right suppliers and handle the rest.
          </p>
          <div style={S.ctaBtns}>
            <Link to="/contact" style={S.ctaBtn} className="ab-cta-btn">
              Contact Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/certifications" style={S.outlineBtn} className="ab-outline-btn">
              View Certifications
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .ab-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .ab-card {
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease;
        }
        .ab-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 48px rgba(13,27,42,0.11), 0 4px 12px rgba(13,27,42,0.05) !important;
        }
        .ab-cta-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .ab-cta-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.4) !important;
          transform: translateY(-2px);
        }
        .ab-outline-btn {
          transition: background 0.22s ease, color 0.22s ease;
        }
        .ab-outline-btn:hover {
          background: rgba(255,255,255,0.1) !important;
          color: #ffffff !important;
        }
        @media (max-width: 1024px) {
          .ab-why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ab-why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}

const S = {
  main: { width: "100%" },

  /* ── HERO ── */
  hero: {
    position: "relative",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 55%, #F5F7FA 100%)",
    padding: "80px 60px 72px",
    overflow: "hidden",
    borderBottom: "1px solid rgba(13,27,42,0.07)",
  },
  heroBlobLeft: {
    position: "absolute",
    width: "480px", height: "480px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.08) 0%, transparent 65%)",
    top: "-140px", left: "-140px",
    pointerEvents: "none",
  },
  heroBlobRight: {
    position: "absolute",
    width: "380px", height: "380px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px",
    pointerEvents: "none",
  },
  heroInner: {
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0",
  },

  heroLeft: {
    flex: "0 0 540px",
    maxWidth: "540px",
    paddingRight: "20px",
    zIndex: 2,
  },

  heroRight: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "-40px",
  },

  heroImg: {
    width: "780px",
    height: "auto",
    maxHeight: "560px",
    objectFit: "contain",
    display: "block",
    maskImage: "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
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
    border: "1px solid rgba(31,169,113,0.28)",
    borderRadius: "30px",
    marginBottom: "24px",
  },
  badgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#1FA971",
    boxShadow: "0 0 7px #1FA971",
    flexShrink: 0,
  },
  heroTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0 0 18px 0",
    letterSpacing: "-1px",
    lineHeight: "1.1",
  },
  heroAccent: { color: "#1FA971" },
  heroSub: {
    fontSize: "16px",
    color: "rgba(13,27,42,0.55)",
    lineHeight: "1.8",
    maxWidth: "540px",
    margin: "0 0 28px 0",
  },
  crumbs: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
  },
  crumbLink: { color: "#1FA971", textDecoration: "none", fontWeight: "500" },
  crumbSep: { color: "rgba(13,27,42,0.3)", fontSize: "15px" },
  crumbActive: { color: "rgba(13,27,42,0.45)", fontWeight: "500" },

  /* ── SHARED ── */
  container: { maxWidth: "1160px", margin: "0 auto" },
  sectionHead: { textAlign: "center", marginBottom: "52px" },
  sectionTitle: {
    fontSize: "clamp(24px, 3vw, 38px)",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0 0 14px 0",
    letterSpacing: "-0.5px",
  },
  sectionSub: {
    fontSize: "15.5px",
    color: "rgba(13,27,42,0.52)",
    lineHeight: "1.8",
    maxWidth: "500px",
    margin: "0 auto",
  },

  /* ── OVERVIEW ── */
  overview: {
    padding: "96px 60px",
    background: "#ffffff",
  },
  overviewGrid: {
    display: "flex",
    alignItems: "flex-start",
    gap: "72px",
  },
  overviewLeft: {
    flex: "1 1 0",
    minWidth: "0",
  },
  overviewLabel: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#1FA971",
    textTransform: "uppercase",
    letterSpacing: "2px",
    margin: "0 0 16px 0",
  },
  overviewTitle: {
    fontSize: "clamp(24px, 3vw, 36px)",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0 0 22px 0",
    letterSpacing: "-0.5px",
    lineHeight: "1.2",
  },
  overviewAccent: { color: "#1FA971" },
  overviewBody: {
    fontSize: "15px",
    color: "rgba(13,27,42,0.58)",
    lineHeight: "1.85",
    margin: "0 0 16px 0",
  },
  overviewTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "28px",
  },
  tag: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#1FA971",
    background: "rgba(31,169,113,0.08)",
    border: "1px solid rgba(31,169,113,0.25)",
    padding: "5px 14px",
    borderRadius: "20px",
    letterSpacing: "0.2px",
  },
  statsCard: {
    flexShrink: 0,
    width: "280px",
    background: "#F8FAFB",
    border: "1px solid rgba(13,27,42,0.08)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(13,27,42,0.06)",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "24px 28px",
  },
  statNum: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#0D1B2A",
    letterSpacing: "-1px",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "13px",
    color: "rgba(13,27,42,0.45)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  /* ── WHY SECTION ── */
  whySection: {
    padding: "96px 60px",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 60%, #F8FAFB 100%)",
  },
  whyCard: {
    background: "#ffffff",
    border: "1px solid rgba(13,27,42,0.08)",
    borderRadius: "16px",
    padding: "28px 22px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    cursor: "default",
    boxShadow: "0 4px 20px rgba(13,27,42,0.06)",
    overflow: "hidden",
  },
  whyIconBox: {
    width: "50px", height: "50px",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  whyTitle: {
    fontSize: "15px",
    fontWeight: "700",
    margin: "0",
    letterSpacing: "-0.1px",
  },
  whyDesc: {
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.52)",
    lineHeight: "1.75",
    margin: "0",
    flexGrow: 1,
  },
  whyLine: {
    height: "2px",
    width: "38%",
    borderRadius: "2px",
  },

  /* ── MISSION ── */
  missionSection: {
    position: "relative",
    padding: "96px 60px",
    background: "#ffffff",
    overflow: "hidden",
  },
  missionBlobLeft: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.05) 0%, transparent 65%)",
    top: "-100px", left: "-100px",
    pointerEvents: "none",
  },
  missionBlobRight: {
    position: "absolute",
    width: "360px", height: "360px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px",
    pointerEvents: "none",
  },
  missionGrid: {
    display: "flex",
    alignItems: "flex-start",
    gap: "80px",
    position: "relative",
    zIndex: 1,
  },
  missionLeft: {
    flex: "1 1 0",
    minWidth: "0",
  },
  missionLabel: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#1FA971",
    textTransform: "uppercase",
    letterSpacing: "2px",
    margin: "0 0 20px 0",
  },
  missionTitle: {
    fontSize: "clamp(22px, 2.8vw, 32px)",
    fontWeight: "700",
    color: "#0D1B2A",
    margin: "0 0 20px 0",
    lineHeight: "1.45",
    letterSpacing: "-0.3px",
    fontStyle: "italic",
    borderLeft: "4px solid #1FA971",
    paddingLeft: "24px",
  },
  missionBody: {
    fontSize: "15px",
    color: "rgba(13,27,42,0.55)",
    lineHeight: "1.85",
    margin: "0",
    paddingLeft: "28px",
  },
  valuesCol: {
    flex: "0 0 360px",
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },
  valueItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    padding: "24px 0",
    borderBottom: "1px solid rgba(13,27,42,0.07)",
  },
  valueDotLine: {
    width: "4px",
    height: "44px",
    borderRadius: "4px",
    flexShrink: 0,
    marginTop: "2px",
  },
  valueTitle: {
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 0 5px 0",
    letterSpacing: "-0.1px",
  },
  valueDesc: {
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.52)",
    lineHeight: "1.65",
    margin: "0",
  },

  /* ── CTA ── */
  ctaSection: {
    position: "relative",
    background: "linear-gradient(160deg, #0B1F3A 0%, #0D2444 55%, #061529 100%)",
    padding: "96px 60px",
    overflow: "hidden",
    textAlign: "center",
  },
  ctaBlobLeft: {
    position: "absolute",
    width: "500px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.1) 0%, transparent 65%)",
    top: "-150px", left: "-150px",
    pointerEvents: "none",
  },
  ctaBlobRight: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)",
    bottom: "-100px", right: "-80px",
    pointerEvents: "none",
  },
  ctaInner: {
    maxWidth: "640px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ctaBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#1FA971",
    textTransform: "uppercase",
    letterSpacing: "2.2px",
    padding: "7px 18px",
    background: "rgba(31,169,113,0.1)",
    border: "1px solid rgba(31,169,113,0.3)",
    borderRadius: "30px",
    marginBottom: "24px",
  },
  ctaBadgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#22C55E",
    boxShadow: "0 0 8px #22C55E, 0 0 16px #22C55E",
    flexShrink: 0,
  },
  ctaTitle: {
    fontSize: "clamp(26px, 3.5vw, 42px)",
    fontWeight: "800",
    color: "#E8F4FF",
    margin: "0 0 18px 0",
    letterSpacing: "-0.8px",
    lineHeight: "1.15",
  },
  ctaAccent: {
    background: "linear-gradient(90deg, #1FA971, #06B6D4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  ctaSub: {
    fontSize: "15.5px",
    color: "rgba(200,220,255,0.55)",
    lineHeight: "1.8",
    margin: "0 0 40px 0",
    maxWidth: "460px",
  },
  ctaBtns: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "#1FA971",
    color: "#ffffff",
    textDecoration: "none",
    padding: "15px 36px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "700",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32)",
  },
  outlineBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(200,220,255,0.75)",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "15px 36px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "600",
  },
};

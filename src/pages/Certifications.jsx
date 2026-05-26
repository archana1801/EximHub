import { Link } from "react-router-dom";

const certCards = [
  {
    color: "#1FA971",
    glow: "rgba(31,169,113,0.12)",
    border: "rgba(31,169,113,0.25)",
    badge: "International Standard",
    badgeColor: "#1FA971",
    badgeBg: "rgba(31,169,113,0.08)",
    title: "ISO 9001:2015",
    desc: "Certified Quality Management System ensuring consistent product quality and process excellence across all operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    color: "#0891b2",
    glow: "rgba(8,145,178,0.12)",
    border: "rgba(8,145,178,0.25)",
    badge: "Govt. Approved",
    badgeColor: "#0891b2",
    badgeBg: "rgba(8,145,178,0.08)",
    title: "APEDA Registered",
    desc: "Agricultural & Processed Food Products Export Development Authority certified for agri-export operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
    badge: "Export Authorized",
    badgeColor: "#7C3AED",
    badgeBg: "rgba(124,58,237,0.08)",
    title: "DGFT Licensed",
    desc: "Directorate General of Foreign Trade licensed exporter authorized for cross-border trade under IEC regulations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    color: "#D97706",
    glow: "rgba(217,119,6,0.12)",
    border: "rgba(217,119,6,0.25)",
    badge: "Food Safety",
    badgeColor: "#D97706",
    badgeBg: "rgba(217,119,6,0.08)",
    title: "FSSAI Certified",
    desc: "Food Safety and Standards Authority of India certified for food product manufacturing and export compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    color: "#059669",
    glow: "rgba(5,150,105,0.12)",
    border: "rgba(5,150,105,0.25)",
    badge: "Verified",
    badgeColor: "#059669",
    badgeBg: "rgba(5,150,105,0.08)",
    title: "Export Compliance",
    desc: "Fully compliant with WTO guidelines, Incoterms 2020, and all bilateral trade agreements across 25+ countries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    color: "#2563EB",
    glow: "rgba(37,99,235,0.12)",
    border: "rgba(37,99,235,0.25)",
    badge: "Quality Assured",
    badgeColor: "#2563EB",
    badgeBg: "rgba(37,99,235,0.08)",
    title: "Quality Inspection",
    desc: "Third-party pre-shipment inspections conducted for every consignment to verify product specs before dispatch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
  },
];

const docItems = [
  {
    color: "#1FA971",
    title: "Export Documentation",
    desc: "Bill of Lading, Shipping Bill, Export Invoice, Packing List — all prepared accurately for every shipment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="14" y2="17" />
      </svg>
    ),
  },
  {
    color: "#0891b2",
    title: "Customs Clearance",
    desc: "End-to-end customs documentation including HS code classification, duty assessment, and clearance coordination.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    color: "#7C3AED",
    title: "Invoice & Packing List",
    desc: "Proforma and commercial invoices with detailed packing lists prepared to importing country specifications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    color: "#D97706",
    title: "Certificate of Origin",
    desc: "Official Certificate of Origin issued to confirm the country of manufacture for customs and duty benefit purposes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

const trustStats = [
  { num: "6+",   label: "Active Certifications" },
  { num: "25+",  label: "Countries Compliant" },
  { num: "100%", label: "Pre-Shipment Inspection" },
  { num: "ISO",  label: "9001:2015 Certified" },
];

export default function CertificationsPage() {
  return (
    <main style={S.main}>

      {/* ── 1. HERO ── */}
      <section style={S.hero}>
        <div style={S.heroBlobLeft}  aria-hidden="true" />
        <div style={S.heroBlobRight} aria-hidden="true" />
        <div style={S.heroInner}>
          <span style={S.heroBadge}>
            <span style={S.heroBadgeDot} />
            Compliance &amp; Standards
          </span>
          <h1 style={S.heroTitle}>
            Certifications &amp;{" "}
            <span style={S.heroTitleAccent}>Compliance</span>
          </h1>
          <p style={S.heroSub}>
            We adhere to international quality standards and export regulations to ensure reliable global trade.
          </p>
          <div style={S.heroCrumbs}>
            <Link to="/" style={S.crumbLink}>Home</Link>
            <span style={S.crumbSep}>›</span>
            <span style={S.crumbActive}>Certifications</span>
          </div>
        </div>
      </section>

      {/* ── 2. CERTIFICATIONS GRID ── */}
      <section style={S.section}>
        <div style={S.container}>
          <div style={S.sectionHead}>
            <h2 style={S.sectionTitle}>Our Certifications</h2>
            <p style={S.sectionSub}>
              Every certification reflects our commitment to quality, legality, and global trade standards.
            </p>
          </div>
          <div className="cp-cert-grid">
            {certCards.map((c, i) => (
              <div key={i} className="cp-card" style={S.certCard}>
                <div style={S.certCardTop}>
                  <div style={{
                    ...S.certIconBox,
                    background: c.glow,
                    border: `1px solid ${c.border}`,
                    color: c.color,
                  }}>
                    {c.icon}
                  </div>
                  <span style={{ ...S.certBadge, color: c.badgeColor, background: c.badgeBg, border: `1px solid ${c.border}` }}>
                    <span style={{ ...S.certBadgeDot, background: c.badgeColor }} />
                    {c.badge}
                  </span>
                </div>
                <h3 style={S.certTitle}>{c.title}</h3>
                <p style={S.certDesc}>{c.desc}</p>
                <div style={{ ...S.certAccentLine, background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DOCUMENTATION SUPPORT ── */}
      <section style={S.docSection}>
        <div style={S.container}>
          <div style={S.sectionHead}>
            <h2 style={S.sectionTitle}>Complete Documentation Support</h2>
            <p style={S.sectionSub}>
              We handle all paperwork so your shipments clear without delays or compliance issues.
            </p>
          </div>
          <div className="cp-doc-grid">
            {docItems.map((d, i) => (
              <div key={i} className="cp-doc-card" style={S.docCard}>
                <div style={{ ...S.docIconBox, background: `${d.color}14`, border: `1px solid ${d.color}33`, color: d.color }}>
                  {d.icon}
                </div>
                <div style={S.docText}>
                  <h3 style={S.docTitle}>{d.title}</h3>
                  <p style={S.docDesc}>{d.desc}</p>
                </div>
                <div style={S.docArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TRUST HIGHLIGHT BAR ── */}
      <section style={S.trustBar}>
        <div style={S.trustBarInner}>
          <div style={S.trustBarLeft}>
            <div style={S.trustBarIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p style={S.trustBarText}>
              Compliant with global export standards across{" "}
              <strong style={S.trustBarHighlight}>25+ countries</strong>
            </p>
          </div>
          <div style={S.trustStats}>
            {trustStats.map((t, i) => (
              <div key={i} style={S.trustStat}>
                <span style={S.trustStatNum}>{t.num}</span>
                <span style={S.trustStatLabel}>{t.label}</span>
                {i < trustStats.length - 1 && <span style={S.trustStatDiv} />}
              </div>
            ))}
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
            Get Started
          </span>
          <h2 style={S.ctaTitle}>
            Need Verified Suppliers with<br />
            <span style={S.ctaTitleAccent}>Proper Documentation?</span>
          </h2>
          <p style={S.ctaSub}>
            Our team connects you with certified exporters and handles all compliance paperwork end-to-end.
          </p>
          <div style={S.ctaBtns}>
            <Link to="/contact" style={S.ctaBtn} className="cp-cta-btn">
              Request Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/about" style={S.ctaOutlineBtn} className="cp-outline-btn">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .cp-cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        .cp-doc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .cp-card {
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease;
        }
        .cp-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 50px rgba(13,27,42,0.12), 0 4px 12px rgba(13,27,42,0.06) !important;
        }
        .cp-doc-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .cp-doc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(13,27,42,0.1) !important;
        }
        .cp-cta-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .cp-cta-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.4) !important;
          transform: translateY(-2px);
        }
        .cp-outline-btn {
          transition: background 0.22s ease, color 0.22s ease;
        }
        .cp-outline-btn:hover {
          background: rgba(13,27,42,0.06) !important;
          color: #0D1B2A !important;
        }
        @media (max-width: 960px) {
          .cp-cert-grid { grid-template-columns: repeat(2, 1fr); }
          .cp-doc-grid  { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .cp-cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}

const S = {
  main: {
    width: "100%",
  },

  /* ── HERO ── */
  hero: {
    position: "relative",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 50%, #F5F7FA 100%)",
    padding: "80px 60px 72px",
    overflow: "hidden",
    borderBottom: "1px solid rgba(13,27,42,0.07)",
  },

  heroBlobLeft: {
    position: "absolute",
    width: "500px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.08) 0%, transparent 65%)",
    top: "-150px", left: "-150px",
    pointerEvents: "none",
  },
  heroBlobRight: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 65%)",
    bottom: "-100px", right: "-80px",
    pointerEvents: "none",
  },

  heroInner: {
    maxWidth: "1160px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  heroBadge: {
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

  heroBadgeDot: {
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

  heroTitleAccent: {
    color: "#1FA971",
  },

  heroSub: {
    fontSize: "16px",
    color: "rgba(13,27,42,0.55)",
    lineHeight: "1.8",
    maxWidth: "560px",
    margin: "0 0 28px 0",
  },

  heroCrumbs: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
  },

  crumbLink: {
    color: "#1FA971",
    textDecoration: "none",
    fontWeight: "500",
  },

  crumbSep: {
    color: "rgba(13,27,42,0.3)",
    fontSize: "15px",
  },

  crumbActive: {
    color: "rgba(13,27,42,0.45)",
    fontWeight: "500",
  },

  /* ── SHARED ── */
  container: {
    maxWidth: "1160px",
    margin: "0 auto",
  },

  section: {
    padding: "88px 60px",
    background: "#ffffff",
  },

  sectionHead: {
    textAlign: "center",
    marginBottom: "52px",
  },

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
    maxWidth: "520px",
    margin: "0 auto",
  },

  /* ── CERT CARDS ── */
  certCard: {
    background: "#ffffff",
    border: "1px solid rgba(13,27,42,0.08)",
    borderRadius: "16px",
    padding: "28px 24px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    cursor: "default",
    boxShadow: "0 4px 20px rgba(13,27,42,0.06), 0 1px 4px rgba(13,27,42,0.03)",
    overflow: "hidden",
  },

  certCardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },

  certIconBox: {
    width: "50px", height: "50px",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  certBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "10px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    padding: "4px 10px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
  },

  certBadgeDot: {
    display: "inline-block",
    width: "5px", height: "5px",
    borderRadius: "50%",
    flexShrink: 0,
  },

  certTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#0D1B2A",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  certDesc: {
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.52)",
    lineHeight: "1.75",
    margin: "0",
    flexGrow: 1,
  },

  certAccentLine: {
    height: "2px",
    width: "40%",
    borderRadius: "2px",
    marginTop: "4px",
  },

  /* ── DOC SECTION ── */
  docSection: {
    padding: "88px 60px",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 60%, #F8FAFB 100%)",
  },

  docCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    background: "#ffffff",
    border: "1px solid rgba(13,27,42,0.08)",
    borderRadius: "14px",
    padding: "22px 20px",
    cursor: "default",
    boxShadow: "0 2px 14px rgba(13,27,42,0.05)",
  },

  docIconBox: {
    width: "46px", height: "46px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  docText: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    flexGrow: 1,
  },

  docTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#0D1B2A",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  docDesc: {
    fontSize: "13px",
    color: "rgba(13,27,42,0.5)",
    lineHeight: "1.7",
    margin: "0",
  },

  docArrow: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    marginTop: "2px",
    opacity: 0.6,
  },

  /* ── TRUST BAR ── */
  trustBar: {
    background: "#ffffff",
    borderTop: "1px solid rgba(13,27,42,0.07)",
    borderBottom: "1px solid rgba(13,27,42,0.07)",
    padding: "36px 60px",
  },

  trustBarInner: {
    maxWidth: "1160px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "32px",
    flexWrap: "wrap",
  },

  trustBarLeft: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  trustBarIcon: {
    width: "44px", height: "44px",
    borderRadius: "12px",
    background: "rgba(31,169,113,0.08)",
    border: "1px solid rgba(31,169,113,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  trustBarText: {
    fontSize: "15px",
    color: "rgba(13,27,42,0.65)",
    margin: "0",
    lineHeight: "1.5",
  },

  trustBarHighlight: {
    color: "#1FA971",
    fontWeight: "800",
  },

  trustStats: {
    display: "flex",
    alignItems: "center",
    gap: "0",
    flexWrap: "wrap",
  },

  trustStat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3px",
    padding: "0 28px",
    position: "relative",
  },

  trustStatNum: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#0D1B2A",
    letterSpacing: "-0.5px",
  },

  trustStatLabel: {
    fontSize: "11px",
    color: "rgba(13,27,42,0.45)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    textAlign: "center",
  },

  trustStatDiv: {
    position: "absolute",
    right: 0,
    top: "10%",
    height: "80%",
    width: "1px",
    background: "rgba(13,27,42,0.1)",
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
    maxWidth: "680px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0",
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

  ctaTitleAccent: {
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
    maxWidth: "480px",
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
    border: "none",
    padding: "15px 36px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "0.1px",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32)",
  },

  ctaOutlineBtn: {
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
    cursor: "pointer",
  },
};

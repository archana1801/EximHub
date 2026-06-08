import { Link } from "react-router-dom";

const certCards = [
  {
    id: "iso-9001",
    color: "#1FA971",
    badgeColor: "#1FA971",
    badgeBg: "rgba(31,169,113,0.1)",
    badge: "International Standard",
    title: "ISO 9001:2015",
    desc: "Certified Quality Management System ensuring consistent quality across all operations.",
    img: "/images/categories/iso1.png",
  },
  {
    id: "apeda",
    color: "#0891b2",
    badgeColor: "#0891b2",
    badgeBg: "rgba(8,145,178,0.1)",
    badge: "Govt. Approved",
    title: "APEDA Registered",
    desc: "Agricultural & Processed Food Products Export Development Authority certified for agri-export operations.",
    img: "/images/categories/apeda1.png",
  },
  {
    id: "fssai",
    color: "#D97706",
    badgeColor: "#D97706",
    badgeBg: "rgba(217,119,6,0.1)",
    badge: "Food Safety",
    title: "FSSAI Certified",
    desc: "Food Safety and Standards Authority of India certified for food product manufacturing and export compliance.",
    img: "/images/categories/fssai1.png",
  },
  {
    id: "dgft",
    color: "#7C3AED",
    badgeColor: "#7C3AED",
    badgeBg: "rgba(124,58,237,0.1)",
    badge: "Export Authorized",
    title: "DGFT Export License",
    desc: "Directorate General of Foreign Trade licensed exporter for cross-border trade under IEC regulations.",
    img: "/images/categories/dgft.jpg",
  },
  {
    id: "organic",
    color: "#059669",
    badgeColor: "#059669",
    badgeBg: "rgba(5,150,105,0.1)",
    badge: "Eco Certified",
    title: "Organic Certification",
    desc: "Certified organic produce verified to be free from synthetic chemicals, compliant with NPOP and NOP standards.",
    img: "/images/categories/organic1.png",
  },
  {
    id: "halal",
    color: "#2563EB",
    badgeColor: "#2563EB",
    badgeBg: "rgba(37,99,235,0.1)",
    badge: "Halal Verified",
    title: "Halal Certification",
    desc: "Halal certified products meeting Islamic dietary guidelines, enabling access to 1.8 billion Muslim consumers globally.",
    img: "/images/categories/halal1.png",
  },
];

const docItems = [
  {
    color: "#1FA971",
    title: "Export Documentation",
    desc: "Bill of Lading, Shipping Bill, Export Invoice, Packing List — all prepared accurately for every shipment.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="14" y2="17"/></svg>),
  },
  {
    color: "#0891b2",
    title: "Customs Clearance",
    desc: "End-to-end customs documentation including HS code classification, duty assessment, and clearance coordination.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>),
  },
  {
    color: "#7C3AED",
    title: "Invoice & Packing List",
    desc: "Proforma and commercial invoices with detailed packing lists prepared to importing country specifications.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>),
  },
  {
    color: "#D97706",
    title: "Certificate of Origin",
    desc: "Official Certificate of Origin issued to confirm the country of manufacture for customs and duty benefit purposes.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>),
  },
];

export default function CertificationsPage() {
  return (
    <main style={S.main}>

      {/* ── HERO ── */}
      <section style={S.hero} className="cp-hero">
        <div style={S.dotGrid} aria-hidden="true" />

        <div style={S.heroInner} className="cp-hero-inner">
          {/* LEFT */}
          <div style={S.heroLeft} className="cp-hero-left">
            <span style={S.heroBadge}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              Compliance &amp; Standards
            </span>

            <h1 style={S.heroTitle}>
              Certifications &amp;<br />
              <span style={S.heroTitleGreen}>Compliance</span>
            </h1>

            <p style={S.heroSub}>
              We adhere to international quality standards and export regulations to ensure reliable global trade.
            </p>

            <div style={S.heroCrumbs}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <Link to="/" style={S.crumbLink}>Home</Link>
              <span style={S.crumbSep}>›</span>
              <span style={S.crumbActive}>Certifications</span>
            </div>
          </div>

          {/* RIGHT — hero image */}
          <div style={S.heroRight} className="cp-hero-right">
            <img
              src="/images/categories/hero1.png"
              alt="Certifications"
              style={S.heroImg}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS GRID ── */}
      <section style={S.section} className="cp-section-pad">
        <div style={S.container} className="cp-container">
          <div style={S.sectionHead}>
            <h2 style={S.sectionTitle}>Our Certifications</h2>
            <p style={S.sectionSub}>
              Click any certification to learn what it means, why it matters, and how it helps us deliver trust.
            </p>
          </div>

          <div className="cp-cert-grid">
            {certCards.map((c) => (
              <div key={c.id} className="cp-card" style={S.certCard}>

                {/* left image */}
                <div style={S.certImgWrap}>
                  <img
                    src={c.img}
                    alt={c.title}
                    style={S.certImg}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>

                {/* right content */}
                <div style={S.certContent}>
                  <h3 style={S.certTitle}>{c.title}</h3>
                  <span style={{ ...S.certBadge, color: c.badgeColor, background: c.badgeBg, border: `1px solid ${c.badgeColor}30` }}>
                    {c.badge}
                  </span>
                  <p style={S.certDesc}>{c.desc}</p>
                </div>

                {/* colored left accent */}
                <div style={{ ...S.cardAccent, background: c.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION SUPPORT ── */}
      <section style={S.docSection} className="cp-doc-section-pad">
        <div style={S.container} className="cp-container">
          <div style={S.sectionHead}>
            <h2 style={S.sectionTitle}>Complete Documentation Support</h2>
            <p style={S.sectionSub}>
              We handle all paperwork so your shipments clear without delays or compliance issues.
            </p>
          </div>
          <div className="cp-doc-grid">
            {docItems.map((d, i) => (
              <div key={i} className="cp-doc-card" style={S.docCard}>
                <div style={{ ...S.docIconBox, background: `${d.color}12`, border: `1px solid ${d.color}25`, color: d.color }}>
                  {d.icon}
                </div>
                <div style={S.docText}>
                  <h3 style={S.docTitle}>{d.title}</h3>
                  <p style={S.docDesc}>{d.desc}</p>
                </div>
                <div style={{ ...S.docArrow, color: d.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={S.trustBar} className="cp-trust-bar-pad">
        <div style={S.trustBarInner}>
          <div style={S.trustBarLeft}>
            <div style={S.trustBarIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p style={S.trustBarText}>
              Compliant with global export standards across{" "}
              <strong style={{ color: "#1FA971" }}>25+ countries</strong>
            </p>
          </div>
          <div style={S.trustStats}>
            {[
              { num: "6+",   label: "Active Certifications" },
              { num: "25+",  label: "Countries Compliant" },
              { num: "100%", label: "Pre-Shipment Inspection" },
              { num: "ISO",  label: "9001:2015 Certified" },
            ].map((t, i, arr) => (
              <div key={i} style={S.trustStat}>
                <span style={S.trustStatNum}>{t.num}</span>
                <span style={S.trustStatLabel}>{t.label}</span>
                {i < arr.length - 1 && <span style={S.trustStatDiv} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={S.cta} className="cp-cta-pad">
        <div style={S.ctaBlobLeft} aria-hidden="true" />
        <div style={S.ctaBlobRight} aria-hidden="true" />
        <div style={S.ctaInner}>
          <span style={S.ctaBadge}><span style={S.ctaBadgeDot} />Get Started</span>
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
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
          gap: 20px;
        }
        .cp-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .cp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(11,31,58,0.12) !important;
        }
        .cp-card:hover img {
          transform: scale(1.06);
        }
        @media (max-width: 960px) { .cp-cert-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .cp-cert-grid { grid-template-columns: 1fr; } }
        .cp-doc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .cp-doc-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .cp-doc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(11,31,58,0.1) !important;
        }
        .cp-cta-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .cp-cta-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.4) !important;
          transform: translateY(-2px);
        }
        .cp-outline-btn { transition: background 0.22s ease; }
        .cp-outline-btn:hover { background: rgba(13,27,42,0.06) !important; }
        @media (max-width: 640px) { .cp-doc-grid { grid-template-columns: 1fr; } }

        @media (max-width: 768px) {
          .cp-hero { padding: 40px 20px !important; min-height: auto !important; }
          .cp-hero-inner { flex-direction: column !important; }
          .cp-hero-left { flex: none !important; max-width: 100% !important; padding-right: 0 !important; }
          .cp-hero-right { display: none !important; }
          .cp-container { padding: 0 20px !important; }
          .cp-section-pad { padding: 48px 20px !important; }
          .cp-doc-section-pad { padding: 48px 20px !important; }
          .cp-trust-bar-pad { padding: 24px 20px !important; }
          .cp-cta-pad { padding: 60px 20px !important; }
        }
        @media (max-width: 480px) {
          .cp-hero { padding: 32px 16px !important; }
          .cp-container { padding: 0 16px !important; }
          .cp-section-pad { padding: 40px 16px !important; }
          .cp-doc-section-pad { padding: 40px 16px !important; }
          .cp-cta-pad { padding: 48px 16px !important; }
        }
      `}</style>
    </main>
  );
}

const S = {
  main: { width: "100%", background: "#F7F9FC" },

  /* ── HERO ── */
  hero: {
    position: "relative",
    background: "linear-gradient(135deg, #ffffff 0%, #f0faf5 50%, #e8f4ff 100%)",
    padding: "60px 60px 60px",
    overflow: "hidden",
    borderBottom: "1px solid #E2EEF5",
    minHeight: "340px",
  },

  dotGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(circle, rgba(31,169,113,0.12) 1px, transparent 1px)",
    backgroundSize: "30px 30px",
    pointerEvents: "none",
    zIndex: 0,
  },

  heroInner: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0",
    position: "relative",
    zIndex: 1,
  },

  heroLeft: {
    flex: "0 0 520px",
    maxWidth: "520px",
    paddingRight: "20px",
    zIndex: 2,
  },

  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    fontSize: "12px",
    fontWeight: "700",
    color: "#1FA971",
    background: "rgba(31,169,113,0.08)",
    border: "1.5px solid rgba(31,169,113,0.3)",
    borderRadius: "30px",
    padding: "7px 16px",
    marginBottom: "20px",
  },

  heroTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0 0 16px",
    letterSpacing: "-1px",
    lineHeight: "1.1",
  },

  heroTitleGreen: { color: "#1FA971" },

  heroSub: {
    fontSize: "15.5px",
    color: "rgba(11,31,58,0.55)",
    lineHeight: "1.8",
    margin: "0 0 24px",
    maxWidth: "460px",
  },

  heroCrumbs: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
  },

  crumbLink: { color: "#1FA971", textDecoration: "none", fontWeight: "600" },
  crumbSep: { color: "rgba(11,31,58,0.3)" },
  crumbActive: { color: "rgba(11,31,58,0.45)", fontWeight: "500" },

  /* hero right collage */
  heroRight: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "-30px",
  },

  heroImg: {
    width: "720px",
    height: "auto",
    maxHeight: "500px",
    objectFit: "contain",
    display: "block",
    maskImage: "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
  },

  heroImgMain: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-3deg)",
    width: "200px",
    height: "200px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(11,31,58,0.18)",
    border: "3px solid #ffffff",
    zIndex: 2,
  },

  heroImgMainImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  heroImgFloat: {
    position: "absolute",
    width: "110px",
    height: "110px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(11,31,58,0.14)",
    border: "2px solid #ffffff",
    zIndex: 1,
  },

  heroImgFloatImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  heroShield: {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    background: "#ffffff",
    boxShadow: "0 8px 24px rgba(31,169,113,0.2)",
    border: "2px solid rgba(31,169,113,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },

  /* ── SECTION ── */
  section: {
    padding: "70px 60px",
    background: "#ffffff",
  },

  container: { maxWidth: "1200px", margin: "0 auto" },

  sectionHead: {
    textAlign: "center",
    marginBottom: "48px",
  },

  sectionTitle: {
    fontSize: "clamp(24px, 3vw, 36px)",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0 0 12px",
    letterSpacing: "-0.5px",
  },

  sectionSub: {
    fontSize: "15px",
    color: "rgba(11,31,58,0.5)",
    lineHeight: "1.7",
    margin: "0",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  /* ── CERT CARD (horizontal) ── */
  certCard: {
    position: "relative",
    background: "#ffffff",
    border: "1.5px solid #E8EDF2",
    borderRadius: "14px",
    padding: "20px 20px 20px 24px",
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    cursor: "default",
    boxShadow: "0 2px 12px rgba(11,31,58,0.06)",
    overflow: "hidden",
  },

  certImgWrap: {
    width: "90px",
    height: "90px",
    borderRadius: "10px",
    overflow: "hidden",
    flexShrink: 0,
    border: "1px solid #EAECF0",
    background: "#F8FAFB",
  },

  certImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },

  certContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  certTitle: {
    fontSize: "15px",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0",
    letterSpacing: "-0.2px",
  },

  certBadge: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "10px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    padding: "3px 10px",
    borderRadius: "20px",
    width: "fit-content",
  },

  certDesc: {
    fontSize: "12.5px",
    color: "rgba(11,31,58,0.52)",
    lineHeight: "1.65",
    margin: "0",
  },

  certViewMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "12px",
    fontWeight: "700",
    marginTop: "2px",
    cursor: "pointer",
  },

  /* left accent stripe */
  cardAccent: {
    position: "absolute",
    left: 0, top: 0, bottom: 0,
    width: "4px",
    borderRadius: "4px 0 0 4px",
  },

  /* ── DOC SECTION ── */
  docSection: {
    padding: "70px 60px",
    background: "linear-gradient(160deg, #f0faf5 0%, #ffffff 50%, #f0faf5 100%)",
  },

  docCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    background: "#ffffff",
    border: "1px solid rgba(11,31,58,0.08)",
    borderRadius: "14px",
    padding: "24px 20px",
    boxShadow: "0 2px 14px rgba(11,31,58,0.05)",
    position: "relative",
  },

  docIconBox: {
    width: "48px", height: "48px",
    borderRadius: "12px",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },

  docText: {
    display: "flex", flexDirection: "column", gap: "6px", flexGrow: 1,
  },

  docTitle: {
    fontSize: "15px", fontWeight: "700", color: "#0B1F3A",
    margin: "0", letterSpacing: "-0.1px",
  },

  docDesc: {
    fontSize: "13px", color: "rgba(11,31,58,0.5)", lineHeight: "1.7", margin: "0",
  },

  docArrow: {
    display: "flex", alignItems: "center", flexShrink: 0, marginTop: "2px", opacity: 0.7,
  },

  /* ── TRUST BAR ── */
  trustBar: {
    background: "#ffffff",
    borderTop: "1px solid rgba(11,31,58,0.07)",
    borderBottom: "1px solid rgba(11,31,58,0.07)",
    padding: "32px 60px",
  },

  trustBarInner: {
    maxWidth: "1200px", margin: "0 auto",
    display: "flex", alignItems: "center",
    justifyContent: "space-between", gap: "32px", flexWrap: "wrap",
  },

  trustBarLeft: {
    display: "flex", alignItems: "center", gap: "14px",
  },

  trustBarIcon: {
    width: "44px", height: "44px", borderRadius: "12px",
    background: "rgba(31,169,113,0.08)", border: "1px solid rgba(31,169,113,0.2)",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },

  trustBarText: {
    fontSize: "15px", color: "rgba(11,31,58,0.65)", margin: "0", lineHeight: "1.5",
  },

  trustStats: {
    display: "flex", alignItems: "center",
  },

  trustStat: {
    display: "flex", flexDirection: "column", alignItems: "center",
    gap: "3px", padding: "0 28px", position: "relative",
  },

  trustStatNum: {
    fontSize: "24px", fontWeight: "800", color: "#0B1F3A", letterSpacing: "-0.5px",
  },

  trustStatLabel: {
    fontSize: "11px", color: "rgba(11,31,58,0.4)", fontWeight: "600",
    textTransform: "uppercase", letterSpacing: "0.5px", textAlign: "center",
  },

  trustStatDiv: {
    position: "absolute", right: 0, top: "10%", height: "80%",
    width: "1px", background: "rgba(11,31,58,0.1)",
  },

  /* ── CTA ── */
  cta: {
    position: "relative",
    background: "linear-gradient(160deg, #0B1F3A 0%, #0D2444 55%, #061529 100%)",
    padding: "80px 60px", overflow: "hidden", textAlign: "center",
  },

  ctaBlobLeft: {
    position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.1) 0%, transparent 65%)",
    top: "-150px", left: "-150px", pointerEvents: "none",
  },

  ctaBlobRight: {
    position: "absolute", width: "400px", height: "400px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)",
    bottom: "-100px", right: "-80px", pointerEvents: "none",
  },

  ctaInner: {
    maxWidth: "680px", margin: "0 auto", position: "relative",
    zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center",
  },

  ctaBadge: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    fontSize: "11px", fontWeight: "700", color: "#1FA971",
    textTransform: "uppercase", letterSpacing: "2.2px",
    padding: "7px 18px", background: "rgba(31,169,113,0.1)",
    border: "1px solid rgba(31,169,113,0.3)", borderRadius: "30px", marginBottom: "24px",
  },

  ctaBadgeDot: {
    display: "inline-block", width: "7px", height: "7px", borderRadius: "50%",
    background: "#22C55E", boxShadow: "0 0 8px #22C55E, 0 0 16px #22C55E", flexShrink: 0,
  },

  ctaTitle: {
    fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: "800", color: "#E8F4FF",
    margin: "0 0 18px", letterSpacing: "-0.8px", lineHeight: "1.15",
  },

  ctaTitleAccent: {
    background: "linear-gradient(90deg, #1FA971, #06B6D4)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
  },

  ctaSub: {
    fontSize: "15.5px", color: "rgba(200,220,255,0.55)",
    lineHeight: "1.8", margin: "0 0 40px", maxWidth: "480px",
  },

  ctaBtns: {
    display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center",
  },

  ctaBtn: {
    display: "inline-flex", alignItems: "center", gap: "10px",
    background: "#1FA971", color: "#ffffff", textDecoration: "none",
    padding: "15px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: "700",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32)",
  },

  ctaOutlineBtn: {
    display: "inline-flex", alignItems: "center",
    background: "rgba(255,255,255,0.06)", color: "rgba(200,220,255,0.75)",
    textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)",
    padding: "15px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: "600",
  },
};

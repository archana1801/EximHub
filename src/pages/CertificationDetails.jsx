import { useParams, Link } from "react-router-dom";

const certDetails = {
  "iso-9001": {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    badge: "International Standard",
    color: "#1FA971",
    image: "/images/categories/iso.jpg",
    intro:
      "ISO 9001:2015 is the world's most recognized quality management standard, demonstrating our ability to consistently provide products and services that meet customer and regulatory requirements.",
    what:
      "ISO 9001:2015 defines criteria for a Quality Management System based on seven key principles — customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making, and relationship management. Every process from sourcing to delivery is documented and audited.",
    why:
      "This certification eliminates uncertainty for importers. It guarantees process consistency, defect reduction, and a culture of continuous improvement — verified annually by an independent third party.",
    issuedBy:
      "Bureau Veritas, TUV SUD, SGS, or other IAF-accredited certification bodies recognized by ISO (International Organization for Standardization).",
    benefits: [
      "Consistent product quality across every order batch",
      "Reduced defects through documented, audited processes",
      "Builds long-term buyer confidence and repeat trade",
      "Required by many international procurement policies",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },

  "apeda": {
    title: "APEDA Registered",
    subtitle: "Agricultural & Processed Food Products Export",
    badge: "Govt. Approved",
    color: "#0891b2",
    image: "/images/categories/apeda.jpg",
    intro:
      "APEDA registration is a mandatory government requirement for exporting agricultural and food products from India, issued under the Ministry of Commerce and Industry.",
    what:
      "APEDA regulates and promotes the export of scheduled agricultural products from India. Registration is mandatory for exporters dealing in fruits, vegetables, cereals, dairy, poultry, meat, and processed foods under the APEDA Act, 1985.",
    why:
      "Without APEDA registration, agricultural exports from India are legally prohibited. This registration assures importers that the supplier is officially recognized and complies with all export-quality requirements.",
    issuedBy:
      "APEDA — Agricultural & Processed Food Products Export Development Authority, Ministry of Commerce and Industry, Government of India.",
    benefits: [
      "Legally authorized to export agri-products from India",
      "Access to government export promotion and incentive schemes",
      "Assurance of product traceability and origin authenticity",
      "Preferred by international buyers sourcing from India",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },

  "fssai": {
    title: "FSSAI Certified",
    subtitle: "Food Safety & Standards Authority of India",
    badge: "Food Safety",
    color: "#D97706",
    image: "/images/categories/fssai.jpg",
    intro:
      "FSSAI certification ensures that every food product we handle meets India's food safety and quality standards, giving importers full confidence in hygiene, composition, and labeling compliance.",
    what:
      "The Food Safety and Standards Authority of India is the apex food regulatory body. FSSAI certification verifies compliance with the Food Safety and Standards Act, 2006, covering manufacturing, storage, packaging, and distribution practices.",
    why:
      "Food safety is non-negotiable in international trade. FSSAI certification tells buyers that products have been tested and cleared by a statutory authority — reducing liability risk and preventing shipment rejection at destination ports.",
    issuedBy:
      "FSSAI — Food Safety and Standards Authority of India, under the Ministry of Health & Family Welfare, Government of India.",
    benefits: [
      "Confirms compliance with Indian food safety laws",
      "Mandatory for all food product exports from India",
      "Reduces risk of rejection at destination customs",
      "Supports alignment with Codex Alimentarius standards",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },

  "dgft": {
    title: "DGFT Export License",
    subtitle: "Directorate General of Foreign Trade",
    badge: "Export Authorized",
    color: "#7C3AED",
    image: "/images/categories/dgft.jpg",
    intro:
      "The DGFT Import Export Code (IEC) is the primary authorization required for any entity to legally conduct international trade in India, issued by the Directorate General of Foreign Trade.",
    what:
      "The Import Export Code is a 10-digit unique identification number issued by DGFT under the Ministry of Commerce. No person or entity can legally export or import goods from India without a valid IEC. It is the gateway license for all foreign trade activity.",
    why:
      "Our DGFT license ensures that every shipment we handle is legally and officially authorized for cross-border movement — preventing legal complications and assuring buyers that all trade is documented and above board.",
    issuedBy:
      "DGFT — Directorate General of Foreign Trade, Ministry of Commerce and Industry, Government of India.",
    benefits: [
      "Legal authorization for all import-export transactions",
      "Required for all customs documentation and shipping bills",
      "Enables access to government export incentive schemes",
      "Proof of a legitimate, officially registered trading entity",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },

  "organic": {
    title: "Organic Certification",
    subtitle: "NPOP & NOP Certified Organic Produce",
    badge: "Eco Certified",
    color: "#059669",
    image: "/images/categories/organiccertification.jpg",
    intro:
      "Our Organic Certification verifies that produce is grown and processed without synthetic chemicals, pesticides, or GMOs — meeting both India's NPOP standards and USDA NOP equivalency for premium global markets.",
    what:
      "Organic certification verifies producers follow organic standards throughout the full supply chain — from soil and seed to harvest and processing. Our certification covers NPOP (National Programme for Organic Production) and is equivalent to NOP for US-bound exports.",
    why:
      "Demand for certified organic products is growing at 10%+ annually. Buyers in the EU, US, and Middle East seek verified organic produce. Certification enables premium pricing, broader market access, and consumer trust.",
    issuedBy:
      "APEDA-accredited bodies (ECOCERT, IMO, OneCert) under NPOP guidelines; recognized for equivalency with EU Organic Regulation and USDA NOP.",
    benefits: [
      "Access to premium organic market segments globally",
      "Commands 20–40% price premium over conventional produce",
      "Compliant with EU Organic Regulation and USDA NOP",
      "Meets growing demand from health-conscious importers",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.82A9.08 9.08 0 0 0 12 22c5.52 0 10-4.48 10-10C22 6 17 2 12 2c0 0 1.5 4 5 6z" />
        <path d="M12 22C12 22 12 16 8 12" />
      </svg>
    ),
  },

  "halal": {
    title: "Halal Certification",
    subtitle: "Islamic Dietary Compliance Verified",
    badge: "Halal Verified",
    color: "#2563EB",
    image: "/images/categories/halal.jpg",
    intro:
      "Our Halal Certification confirms that products are manufactured and handled in full compliance with Islamic dietary laws, opening access to 1.8 billion Muslim consumers across the Middle East, Southeast Asia, and beyond.",
    what:
      "Halal certification verifies that products are free from pork derivatives, alcohol, and non-halal slaughter methods. The certification covers ingredients, processing equipment, storage, and labeling across the entire production chain.",
    why:
      "The global halal food market exceeds $2.5 trillion. For exporters targeting UAE, Saudi Arabia, Malaysia, and Indonesia, Halal certification is not optional — it is a mandatory import requirement without which market entry is blocked.",
    issuedBy:
      "Recognized bodies such as HALAL India, Jamiat Ulama-i-Hind Halal Trust, or internationally accepted bodies recognized in the target market.",
    benefits: [
      "Mandatory for exports to GCC, Malaysia, and Indonesia",
      "Unlocks access to the $2.5 trillion global halal market",
      "Builds trust among Muslim consumer communities worldwide",
      "Often required alongside FSSAI for food export clearance",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    ),
  },
};

export default function CertificationDetails() {
  const { id } = useParams();
  const cert = certDetails[id];

  if (!cert) {
    return (
      <main style={S.notFoundPage}>
        <h2 style={S.notFoundTitle}>Certification not found</h2>
        <Link to="/certifications" style={S.notFoundLink}>← Back to Certifications</Link>
      </main>
    );
  }

  return (
    <main style={S.main}>

      {/* ── HERO ── */}
      <section style={S.hero} className="cd-hero">
        <div style={S.heroInner} className="cd-hero-inner">

          {/* Breadcrumb */}
          <nav style={S.breadcrumb}>
            <Link to="/" style={S.breadLink}>Home</Link>
            <span style={S.breadSep}>/</span>
            <Link to="/certifications" style={S.breadLink}>Certifications</Link>
            <span style={S.breadSep}>/</span>
            <span style={S.breadActive}>{cert.title}</span>
          </nav>

          {/* Badge + Icon */}
          <div style={S.heroBadgeRow}>
            <span style={{ ...S.heroBadge, color: cert.color, background: `${cert.color}12`, border: `1px solid ${cert.color}28` }}>
              <span style={{ ...S.heroBadgeDot, background: cert.color }} />
              {cert.badge}
            </span>
          </div>

          {/* Title */}
          <div style={S.heroTitleRow}>
            <div style={{ ...S.heroIconBox, background: `${cert.color}10`, border: `1px solid ${cert.color}20`, color: cert.color }}>
              {cert.icon}
            </div>
            <div>
              <h1 style={S.heroTitle}>{cert.title}</h1>
              <p style={S.heroSubtitle}>{cert.subtitle}</p>
            </div>
          </div>

          {/* Intro */}
          <p style={S.heroIntro}>{cert.intro}</p>
        </div>
      </section>

      {/* ── CONTENT (image + description) ── */}
      <section style={S.contentSection} className="cd-content-section">
        <div style={S.container} className="cd-container">
          <div className="cd-grid" style={S.contentGrid}>

            {/* Left — Image */}
            <div style={S.imageCol}>
              <div style={S.imageFrame}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={S.image}
                  onError={(e) => { e.target.src = "https://source.unsplash.com/800x600/?document"; }}
                />
              </div>
            </div>

            {/* Right — Description */}
            <div style={S.descCol}>

              <div style={S.descBlock}>
                <p style={{ ...S.descLabel, color: cert.color }}>What this means</p>
                <p style={S.descText}>{cert.what}</p>
              </div>

              <div style={S.divider} />

              <div style={S.descBlock}>
                <p style={{ ...S.descLabel, color: cert.color }}>Why it matters</p>
                <p style={S.descText}>{cert.why}</p>
              </div>

              <div style={S.divider} />

              <div style={S.descBlock}>
                <p style={{ ...S.descLabel, color: cert.color }}>Issued by</p>
                <p style={{ ...S.descText, fontStyle: "italic", color: "rgba(11,31,58,0.42)" }}>
                  {cert.issuedBy}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={S.benefitsSection} className="cd-benefits-section">
        <div style={S.container} className="cd-container">
          <div style={S.benefitsHead}>
            <p style={{ ...S.benefitsEyebrow, color: cert.color }}>Key Benefits</p>
            <h2 style={S.benefitsTitle}>Why This Matters for Your Business</h2>
          </div>
          <div style={S.benefitsList}>
            {cert.benefits.map((b, i) => (
              <div key={i} className="benefit-item" style={S.benefitItem}>
                <div style={{ ...S.benefitDot, background: `${cert.color}15`, border: `1px solid ${cert.color}25`, color: cert.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={S.benefitText}>{b}</p>
                {i < cert.benefits.length - 1 && <span style={S.benefitDiv} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={S.cta} className="cd-cta">
        <div style={S.ctaInner}>
          <p style={S.ctaEyebrow}>Ready to Import?</p>
          <h2 style={S.ctaTitle}>
            Start Sourcing with {cert.title}<br />Verified Suppliers
          </h2>
          <p style={S.ctaSub}>
            Every supplier in our network carries this certification. We manage documentation, compliance, and logistics — end to end.
          </p>
          <div style={S.ctaBtns}>
            <Link to="/contact" style={S.ctaBtn} className="cd-btn-primary">
              Request Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/certifications" style={S.ctaOutline} className="cd-btn-outline">
              ← All Certifications
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .cd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }

        .benefit-item {
          transition: background 0.2s ease;
        }
        .benefit-item:hover {
          background: #F0FAF5 !important;
        }

        .cd-btn-primary {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .cd-btn-primary:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.35) !important;
          transform: translateY(-2px);
        }

        .cd-btn-outline {
          transition: background 0.22s ease, color 0.22s ease;
        }
        .cd-btn-outline:hover {
          background: rgba(255,255,255,0.1) !important;
          color: #fff !important;
        }

        @media (max-width: 860px) {
          .cd-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .cd-hero { padding: 48px 20px 56px !important; }
          .cd-container { padding: 0 20px !important; max-width: 100% !important; }
          .cd-content-section { padding: 48px 20px !important; }
          .cd-benefits-section { padding: 48px 20px !important; }
          .cd-cta { padding: 64px 20px !important; }
        }
        @media (max-width: 480px) {
          .cd-hero { padding: 36px 16px 44px !important; }
          .cd-container { padding: 0 16px !important; }
          .cd-content-section { padding: 40px 16px !important; }
          .cd-benefits-section { padding: 40px 16px !important; }
          .cd-cta { padding: 52px 16px !important; }
        }
      `}</style>
    </main>
  );
}

const S = {
  main: {
    width: "100%",
    background: "#F7F9FC",
  },

  /* ── NOT FOUND ── */
  notFoundPage: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    background: "#F7F9FC",
    padding: "60px 24px",
  },
  notFoundTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0B1F3A",
    margin: 0,
  },
  notFoundLink: {
    color: "#1FA971",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600",
  },

  /* ── HERO ── */
  hero: {
    background: "#ffffff",
    padding: "80px 60px 88px",
    borderBottom: "1px solid #EAECEF",
  },

  heroInner: {
    maxWidth: "860px",
    margin: "0 auto",
  },

  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    marginBottom: "44px",
  },
  breadLink: {
    color: "#1FA971",
    textDecoration: "none",
    fontWeight: "500",
  },
  breadSep: {
    color: "rgba(11,31,58,0.2)",
  },
  breadActive: {
    color: "rgba(11,31,58,0.38)",
  },

  heroBadgeRow: {
    marginBottom: "28px",
  },

  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.8px",
    padding: "6px 16px",
    borderRadius: "30px",
  },
  heroBadgeDot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    flexShrink: 0,
  },

  heroTitleRow: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
    marginBottom: "22px",
  },

  heroIconBox: {
    width: "68px",
    height: "68px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  heroTitle: {
    fontSize: "clamp(30px, 4vw, 48px)",
    fontWeight: "800",
    color: "#0B1F3A",
    letterSpacing: "-1.2px",
    lineHeight: "1.08",
    margin: "0 0 6px",
  },

  heroSubtitle: {
    fontSize: "15px",
    fontWeight: "500",
    color: "rgba(11,31,58,0.4)",
    margin: 0,
    letterSpacing: "0.1px",
  },

  heroIntro: {
    fontSize: "16.5px",
    color: "rgba(11,31,58,0.55)",
    lineHeight: "1.85",
    margin: "0",
    maxWidth: "700px",
  },

  /* ── CONTENT ── */
  contentSection: {
    padding: "80px 60px",
  },

  container: {
    maxWidth: "1060px",
    margin: "0 auto",
  },

  contentGrid: {},

  imageCol: {},

  imageFrame: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 16px 56px rgba(11,31,58,0.1), 0 2px 8px rgba(11,31,58,0.06)",
    position: "sticky",
    top: "100px",
  },

  image: {
    width: "100%",
    height: "340px",
    objectFit: "cover",
    display: "block",
  },

  descCol: {
    display: "flex",
    flexDirection: "column",
  },

  descBlock: {
    padding: "28px 0",
  },

  descLabel: {
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.8px",
    margin: "0 0 12px",
  },

  descText: {
    fontSize: "15px",
    color: "rgba(11,31,58,0.6)",
    lineHeight: "1.88",
    margin: 0,
  },

  divider: {
    height: "1px",
    background: "#EAECEF",
  },

  /* ── BENEFITS ── */
  benefitsSection: {
    background: "#ffffff",
    padding: "80px 60px",
    borderTop: "1px solid #EAECEF",
    borderBottom: "1px solid #EAECEF",
  },

  benefitsHead: {
    marginBottom: "44px",
  },

  benefitsEyebrow: {
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    margin: "0 0 12px",
  },

  benefitsTitle: {
    fontSize: "clamp(22px, 2.8vw, 32px)",
    fontWeight: "800",
    color: "#0B1F3A",
    letterSpacing: "-0.5px",
    margin: 0,
  },

  benefitsList: {
    maxWidth: "700px",
  },

  benefitItem: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "20px 16px",
    borderRadius: "10px",
    position: "relative",
  },

  benefitDot: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  benefitText: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#0B1F3A",
    lineHeight: "1.6",
    margin: 0,
    flex: 1,
  },

  benefitDiv: {
    position: "absolute",
    bottom: 0,
    left: "68px",
    right: "16px",
    height: "1px",
    background: "#EAECEF",
  },

  /* ── CTA ── */
  cta: {
    background: "#0B1F3A",
    padding: "100px 60px",
    textAlign: "center",
  },

  ctaInner: {
    maxWidth: "580px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  ctaEyebrow: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#1FA971",
    margin: "0 0 20px",
  },

  ctaTitle: {
    fontSize: "clamp(24px, 3vw, 38px)",
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: "-0.6px",
    lineHeight: "1.18",
    margin: "0 0 18px",
  },

  ctaSub: {
    fontSize: "15.5px",
    color: "rgba(255,255,255,0.4)",
    lineHeight: "1.8",
    margin: "0 0 40px",
    maxWidth: "420px",
  },

  ctaBtns: {
    display: "flex",
    gap: "14px",
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
    padding: "14px 34px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "0.1px",
    boxShadow: "0 4px 20px rgba(31,169,113,0.3)",
  },

  ctaOutline: {
    display: "inline-flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.07)",
    color: "rgba(255,255,255,0.6)",
    textDecoration: "none",
    padding: "14px 34px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "600",
    border: "1px solid rgba(255,255,255,0.12)",
  },
};

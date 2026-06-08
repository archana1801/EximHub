import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Certifications", path: "/certifications" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Supplier Sourcing",
  "Private Label",
  "Logistics Support",
  "Documentation",
];

export default function Footer() {
  return (
    <footer style={S.footer}>

      {/* top accent line */}
      <div style={S.topAccent} aria-hidden="true" />

      <div style={S.container} className="ft-container">

        {/* grid of 4 columns */}
        <div className="ft-grid">

          {/* COL 1 — brand */}
          <div style={S.col}>
            <div style={S.logoRow}>
              <div style={S.logoMark}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span style={S.logoText}>ImportWiz</span>
            </div>
            <p style={S.brandDesc}>
              Global sourcing and export solutions for importers worldwide. Connecting buyers with verified suppliers.
            </p>
            <div style={S.socialRow}>
              {/* LinkedIn */}
              <a href="#" style={S.socialIcon} className="ft-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" style={S.socialIcon} className="ft-social" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:info@importwiz.com" style={S.socialIcon} className="ft-social" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* COL 2 — quick links */}
          <div style={S.col}>
            <p style={S.colHeading}>Quick Links</p>
            <ul style={S.linkList}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} style={S.link} className="ft-link">
                    <span style={S.linkArrow}>›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — services */}
          <div style={S.col}>
            <p style={S.colHeading}>Services</p>
            <ul style={S.linkList}>
              {services.map((s) => (
                <li key={s}>
                  <a href="#" style={S.link} className="ft-link">
                    <span style={S.linkArrow}>›</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — contact */}
          <div style={S.col}>
            <p style={S.colHeading}>Contact Us</p>
            <div style={S.contactList}>

              <div style={S.contactItem}>
                <span style={S.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:info@importwiz.shop" style={S.contactLink} className="ft-link">
                  info@importwiz.shop
                </a>
              </div>

              <div style={S.contactItem}>
                <span style={S.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span style={S.contactText}>
                  <strong style={{ color: "rgba(13,27,42,0.65)" }}>India:</strong> 26 A/1C, Shivkuti, Teliarganj, Prayagraj
                </span>
              </div>

              <div style={S.contactItem}>
                <span style={S.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span style={S.contactText}>
                  <strong style={{ color: "rgba(13,27,42,0.65)" }}>Tanzania:</strong> AMI Building, Samora/Mkwépu St., Dar es Salaam
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div style={S.bottomBar}>
          <div style={S.bottomDivider} />
          <div style={S.bottomRow}>
            <p style={S.copyright}>© 2026 ImportWiz. All rights reserved.</p>
            <div style={S.bottomLinks}>
              <a href="#" style={S.bottomLink} className="ft-link">Privacy Policy</a>
              <span style={S.bottomDot} />
              <a href="#" style={S.bottomLink} className="ft-link">Terms of Use</a>
              <span style={S.bottomDot} />
              <a href="#" style={S.bottomLink} className="ft-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ft-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
          gap: 48px;
        }
        .ft-link {
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .ft-link:hover {
          color: #1FA971 !important;
        }
        .ft-social {
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .ft-social:hover {
          color: #1FA971 !important;
          background: rgba(31,169,113,0.15) !important;
          border-color: rgba(31,169,113,0.35) !important;
        }
        @media (max-width: 960px) {
          .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .ft-container { padding: 0 32px !important; }
        }
        @media (max-width: 520px) {
          .ft-grid { grid-template-columns: 1fr; gap: 28px; }
          .ft-container { padding: 0 20px !important; }
        }
        @media (max-width: 380px) {
          .ft-container { padding: 0 16px !important; }
        }
      `}</style>
    </footer>
  );
}

const S = {
  footer: {
    position: "relative",
    background: "linear-gradient(180deg, #F5F7FA 0%, #EEF1F5 100%)",
    paddingTop: "72px",
    paddingBottom: "0",
    overflow: "hidden",
  },

  topAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, #1FA971 35%, #06B6D4 65%, transparent 100%)",
  },

  container: {
    maxWidth: "1160px",
    margin: "0 auto",
    padding: "0 60px",
  },

  col: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },

  /* brand column */
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
  },

  logoMark: {
    width: "36px", height: "36px",
    borderRadius: "10px",
    background: "rgba(31,169,113,0.12)",
    border: "1px solid rgba(31,169,113,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  logoText: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#0D1B2A",
    letterSpacing: "-0.4px",
  },

  brandDesc: {
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.5)",
    lineHeight: "1.75",
    margin: "0 0 24px 0",
    maxWidth: "260px",
  },

  socialRow: {
    display: "flex",
    gap: "10px",
  },

  socialIcon: {
    width: "34px", height: "34px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(13,27,42,0.06)",
    border: "1px solid rgba(13,27,42,0.1)",
    color: "rgba(13,27,42,0.45)",
    cursor: "pointer",
    textDecoration: "none",
  },

  /* link columns */
  colHeading: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#0D1B2A",
    textTransform: "uppercase",
    letterSpacing: "1.8px",
    margin: "0 0 20px 0",
  },

  linkList: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    gap: "11px",
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.5)",
    fontWeight: "500",
  },

  linkArrow: {
    fontSize: "16px",
    color: "rgba(31,169,113,0.5)",
    lineHeight: 1,
    fontWeight: "700",
  },

  /* contact column */
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },

  contactIcon: {
    color: "#1FA971",
    flexShrink: 0,
    marginTop: "1px",
    display: "flex",
  },

  contactLink: {
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.5)",
    fontWeight: "500",
  },

  contactText: {
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.5)",
    fontWeight: "500",
    lineHeight: "1.5",
  },

  /* bottom bar */
  bottomBar: {
    marginTop: "60px",
  },

  bottomDivider: {
    height: "1px",
    background: "rgba(13,27,42,0.1)",
  },

  bottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",
    flexWrap: "wrap",
    gap: "12px",
  },

  copyright: {
    fontSize: "13px",
    color: "rgba(13,27,42,0.35)",
    margin: "0",
    fontWeight: "500",
  },

  bottomLinks: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  bottomLink: {
    fontSize: "12.5px",
    color: "rgba(13,27,42,0.35)",
    fontWeight: "500",
  },

  bottomDot: {
    display: "inline-block",
    width: "3px", height: "3px",
    borderRadius: "50%",
    background: "rgba(13,27,42,0.2)",
  },
};

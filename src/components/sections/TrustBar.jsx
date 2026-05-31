const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "ISO Certified",
    subtitle: "ISO 9001:2015",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "APEDA Registered",
    subtitle: "Govt. of India",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "DGFT Compliant",
    subtitle: "Export Licensed",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Shipping",
    subtitle: "25+ Countries",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Secure Payments",
    subtitle: "SSL Encrypted",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "24/7 Support",
    subtitle: "Always Available",
  },
];

export default function TrustBar() {
  return (
    <section style={S.section}>
      {/* top accent line */}
      <div style={S.topAccent} />

      <div style={S.inner}>
        {/* label */}
        <p style={S.label}>Trusted &amp; Verified</p>

        {/* badges */}
        <div style={S.row}>
          {badges.map((b, i) => (
            <div key={i} style={S.item} className="trust-badge">
              {/* divider between items */}
              {i !== 0 && <div style={S.divider} />}

              <div style={S.iconWrap}>{b.icon}</div>

              <div style={S.textWrap}>
                <span style={S.title}>{b.title}</span>
                <span style={S.subtitle}>{b.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* hover + responsive styles */}
      <style>{`
        .trust-badge {
          transition: transform 0.2s ease, background 0.2s ease;
          border-radius: 10px;
          padding: 14px 20px;
          cursor: default;
        }
        .trust-badge:hover {
          transform: translateY(-3px);
          background: #f0faf5;
        }
        .trust-badge:hover .trust-icon {
          background: #1FA971;
          color: #fff;
        }
        @media (max-width: 768px) {
          .trust-row {
            flex-wrap: wrap !important;
            gap: 8px !important;
          }
          .trust-badge {
            flex: 0 0 calc(50% - 8px) !important;
            justify-content: flex-start !important;
          }
          .trust-divider {
            display: none !important;
          }
        }
        @media (max-width: 420px) {
          .trust-badge {
            flex: 0 0 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #EAECF0",
    position: "relative",
  },

  topAccent: {
    height: "3px",
    background: "linear-gradient(90deg, #0B1F3A 0%, #1FA971 50%, #0B1F3A 100%)",
  },

  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "28px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },

  label: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#9AA5B4",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    margin: "0 0 4px 0",
  },

  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "0",
    flexWrap: "nowrap",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flex: "1",
    justifyContent: "center",
    position: "relative",
  },

  divider: {
    position: "absolute",
    left: 0,
    top: "15%",
    height: "70%",
    width: "1px",
    background: "#E4E7EC",
  },

  iconWrap: {
    width: "46px",
    height: "46px",
    borderRadius: "10px",
    backgroundColor: "#EEF9F4",
    color: "#1FA971",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 0.2s, color 0.2s",
  },

  textWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  title: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#0B1F3A",
    whiteSpace: "nowrap",
    letterSpacing: "-0.1px",
  },

  subtitle: {
    fontSize: "11px",
    color: "#8A94A6",
    fontWeight: "500",
    whiteSpace: "nowrap",
    letterSpacing: "0.2px",
  },
};

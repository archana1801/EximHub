import { useState } from "react";

const perks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Verified Supplier Network",
    desc: "Access to 1,200+ pre-vetted manufacturers and exporters.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
    title: "End-to-End Documentation Support",
    desc: "Customs, compliance, and paperwork handled by our experts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden charges. Full cost breakdown before you commit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Fast Global Shipping",
    desc: "Express freight options to 90+ countries with real-time tracking.",
  },
];

const EMPTY = { product: "", quantity: "", country: "", requirements: "", email: "", whatsapp: "" };

export default function ContactForm() {
  const [form, setForm]         = useState(EMPTY);
  const [focused, setFocused]   = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (field) => ({
    ...S.input,
    borderColor: focused === field ? "#1FA971" : "rgba(255,255,255,0.12)",
    boxShadow: focused === field ? "0 0 0 3px rgba(31,169,113,0.18)" : "none",
    outline: "none",
  });

  return (
    <section style={S.section}>

      {/* background orbs */}
      <div style={S.orbTopLeft}    aria-hidden="true" />
      <div style={S.orbBottomRight} aria-hidden="true" />
      <div style={S.orbCenter}     aria-hidden="true" />

      <div style={S.container}>

        {/* LEFT */}
        <div style={S.left}>

          <span style={S.badge}>
            <span style={S.badgeDot} />
            Free Consultation
          </span>

          <h2 style={S.heading}>
            Request a Free<br />
            <span style={S.headingAccent}>Sourcing Consultation</span>
          </h2>

          <p style={S.desc}>
            Tell us your requirements and our team will connect with verified suppliers — no commitment needed.
          </p>

          <div style={S.perkList}>
            {perks.map((p, i) => (
              <div key={i} style={S.perkItem}>
                <div style={S.perkIcon}>{p.icon}</div>
                <div style={S.perkText}>
                  <p style={S.perkTitle}>{p.title}</p>
                  <p style={S.perkDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={S.trustRow}>
            <div style={S.trustItem}>
              <span style={S.trustNum}>500+</span>
              <span style={S.trustLabel}>Active Importers</span>
            </div>
            <div style={S.trustDivider} />
            <div style={S.trustItem}>
              <span style={S.trustNum}>40+</span>
              <span style={S.trustLabel}>Countries Served</span>
            </div>
            <div style={S.trustDivider} />
            <div style={S.trustItem}>
              <span style={S.trustNum}>24h</span>
              <span style={S.trustLabel}>Response Time</span>
            </div>
          </div>
        </div>

        {/* RIGHT — form card */}
        <div style={S.right}>
          {submitted ? (
            <div style={S.successBox}>
              <div style={S.successIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 style={S.successTitle}>Request Received!</h3>
              <p style={S.successText}>
                Our sourcing team will review your requirements and reach out within 24 hours.
              </p>
              <button style={S.resetBtn} className="cf-reset-btn" onClick={() => { setForm(EMPTY); setSubmitted(false); }}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form style={S.form} onSubmit={handleSubmit} noValidate>

              <div style={S.formHeader}>
                <p style={S.formTitle}>Sourcing Inquiry Form</p>
                <p style={S.formSubtitle}>We'll respond within 24 hours</p>
              </div>

              <div className="cf-grid-2">
                <div style={S.fieldGroup}>
                  <label style={S.label}>Product Needed <span style={S.required}>*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Organic Spices, Textiles"
                    style={inputStyle("product")}
                    value={form.product}
                    onChange={set("product")}
                    onFocus={() => setFocused("product")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div style={S.fieldGroup}>
                  <label style={S.label}>Quantity <span style={S.required}>*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. 500 kg, 2 containers"
                    style={inputStyle("quantity")}
                    value={form.quantity}
                    onChange={set("quantity")}
                    onFocus={() => setFocused("quantity")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              </div>

              <div style={S.fieldGroup}>
                <label style={S.label}>Destination Country <span style={S.required}>*</span></label>
                <input
                  type="text"
                  placeholder="e.g. USA, Germany, UAE"
                  style={inputStyle("country")}
                  value={form.country}
                  onChange={set("country")}
                  onFocus={() => setFocused("country")}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>

              <div style={S.fieldGroup}>
                <label style={S.label}>Import Requirements</label>
                <textarea
                  placeholder="Certifications needed, packaging preferences, delivery timeline..."
                  style={{ ...inputStyle("requirements"), ...S.textarea }}
                  value={form.requirements}
                  onChange={set("requirements")}
                  onFocus={() => setFocused("requirements")}
                  onBlur={() => setFocused(null)}
                  rows={3}
                />
              </div>

              <div className="cf-grid-2">
                <div style={S.fieldGroup}>
                  <label style={S.label}>Email Address <span style={S.required}>*</span></label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    style={inputStyle("email")}
                    value={form.email}
                    onChange={set("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div style={S.fieldGroup}>
                  <label style={S.label}>WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    style={inputStyle("whatsapp")}
                    value={form.whatsapp}
                    onChange={set("whatsapp")}
                    onFocus={() => setFocused("whatsapp")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <button type="submit" style={S.submitBtn} className="cf-submit-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Get Free Consultation
              </button>

              <p style={S.formNote}>
                No spam. No commitment. Just sourcing expertise.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .cf-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cf-submit-btn {
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .cf-submit-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 12px 36px rgba(31,169,113,0.42) !important;
          transform: translateY(-2px);
        }
        .cf-reset-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease;
        }
        .cf-reset-btn:hover {
          background: rgba(31,169,113,0.18) !important;
        }
        @media (max-width: 900px) {
          .cf-layout { flex-direction: column !important; }
          .cf-left   { max-width: 100% !important; }
          .cf-right  { width: 100% !important; }
        }
        @media (max-width: 520px) {
          .cf-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #0B1F3A 0%, #0D2444 50%, #061529 100%)",
    padding: "110px 60px",
    overflow: "hidden",
  },

  orbTopLeft: {
    position: "absolute",
    width: "560px", height: "560px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.08) 0%, transparent 65%)",
    top: "-160px", left: "-160px",
    pointerEvents: "none",
  },
  orbBottomRight: {
    position: "absolute",
    width: "480px", height: "480px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
    bottom: "-120px", right: "-120px",
    pointerEvents: "none",
  },
  orbCenter: {
    position: "absolute",
    width: "900px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(31,169,113,0.04) 0%, transparent 58%)",
    top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1160px",
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
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
    paddingTop: "8px",
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
    background: "rgba(31,169,113,0.1)",
    border: "1px solid rgba(31,169,113,0.3)",
    borderRadius: "30px",
    marginBottom: "24px",
    alignSelf: "flex-start",
  },

  badgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#22C55E",
    boxShadow: "0 0 8px #22C55E, 0 0 16px #22C55E",
    flexShrink: 0,
  },

  heading: {
    fontSize: "clamp(26px, 3.2vw, 42px)",
    fontWeight: "800",
    color: "#E8F4FF",
    margin: "0 0 18px 0",
    letterSpacing: "-0.8px",
    lineHeight: "1.15",
  },

  headingAccent: {
    background: "linear-gradient(90deg, #1FA971, #06B6D4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  desc: {
    fontSize: "15px",
    color: "rgba(200,220,255,0.55)",
    lineHeight: "1.8",
    margin: "0 0 36px 0",
  },

  perkList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "44px",
  },

  perkItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },

  perkIcon: {
    width: "40px", height: "40px",
    borderRadius: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(31,169,113,0.12)",
    border: "1px solid rgba(31,169,113,0.25)",
    color: "#1FA971",
    flexShrink: 0,
    marginTop: "1px",
  },

  perkText: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  perkTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#E8F4FF",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  perkDesc: {
    fontSize: "13px",
    color: "rgba(200,220,255,0.45)",
    margin: "0",
    lineHeight: "1.6",
  },

  trustRow: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    padding: "20px 24px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    backdropFilter: "blur(10px)",
  },

  trustItem: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    alignItems: "center",
    flex: 1,
  },

  trustNum: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#1FA971",
    letterSpacing: "-0.5px",
  },

  trustLabel: {
    fontSize: "11px",
    color: "rgba(200,220,255,0.45)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    textAlign: "center",
  },

  trustDivider: {
    width: "1px",
    height: "32px",
    background: "rgba(255,255,255,0.1)",
    flexShrink: 0,
  },

  /* ── RIGHT — form card ── */
  right: {
    flex: "1 1 0",
    minWidth: "0",
  },

  form: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "36px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    boxShadow: "0 24px 64px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)",
  },

  formHeader: {
    borderBottom: "1px solid rgba(13,27,42,0.08)",
    paddingBottom: "16px",
    marginBottom: "2px",
  },

  formTitle: {
    fontSize: "17px",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0 0 4px 0",
    letterSpacing: "-0.2px",
  },

  formSubtitle: {
    fontSize: "12.5px",
    color: "rgba(13,27,42,0.45)",
    margin: "0",
    fontWeight: "500",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#0D1B2A",
    letterSpacing: "-0.1px",
  },

  required: {
    color: "#1FA971",
    marginLeft: "2px",
  },

  input: {
    width: "100%",
    padding: "11px 14px",
    fontSize: "14px",
    color: "#0D1B2A",
    background: "#F8FAFB",
    border: "1.5px solid rgba(13,27,42,0.12)",
    borderRadius: "10px",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },

  textarea: {
    resize: "vertical",
    minHeight: "90px",
    lineHeight: "1.6",
  },

  submitBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
    background: "#1FA971",
    color: "#ffffff",
    border: "none",
    padding: "16px",
    borderRadius: "12px",
    fontSize: "15.5px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "0.1px",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32), 0 2px 6px rgba(31,169,113,0.18)",
    marginTop: "4px",
  },

  formNote: {
    textAlign: "center",
    fontSize: "12px",
    color: "rgba(13,27,42,0.38)",
    margin: "0",
  },

  /* success state */
  successBox: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "56px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "16px",
    boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
  },

  successIcon: {
    width: "72px", height: "72px",
    borderRadius: "50%",
    background: "rgba(31,169,113,0.1)",
    border: "2px solid rgba(31,169,113,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  successTitle: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0",
    letterSpacing: "-0.3px",
  },

  successText: {
    fontSize: "14.5px",
    color: "rgba(13,27,42,0.55)",
    lineHeight: "1.75",
    maxWidth: "320px",
    margin: "0",
  },

  resetBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(31,169,113,0.08)",
    color: "#1FA971",
    border: "1px solid rgba(31,169,113,0.25)",
    padding: "11px 28px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
  },
};

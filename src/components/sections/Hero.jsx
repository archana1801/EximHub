import { useState } from "react";

const S = {
  hero: {
    position: "relative",
    // Break out of #root's constrained width
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    boxSizing: "border-box",
    // Full viewport height — flex-grow:1 fills remaining space if navbar is above
    minHeight: "100vh",
    flexGrow: 1,
    backgroundImage:
      "linear-gradient(rgba(6, 22, 46, 0.78), rgba(6, 22, 46, 0.78)), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    padding: "60px 80px",
    textAlign: "left",
    overflow: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px",
  },

  /* ── LEFT ── */
  left: {
    flex: 1,
    minWidth: "0",
  },

  heading: {
    fontSize: "clamp(30px, 3.2vw, 50px)",
    lineHeight: "1.15",
    fontWeight: "800",
    color: "#fff",
    margin: "0 0 14px 0",
    letterSpacing: "-0.4px",
  },

  green: { color: "#22c55e" },

  subtext: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "rgba(255,255,255,0.78)",
    maxWidth: "480px",
    margin: "0 0 28px 0",
  },

  /* Stats — horizontal row with icon badges */
  statsRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px 32px",
    marginBottom: "32px",
    maxWidth: "420px",
  },

  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  statIconWrap: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "17px",
    flexShrink: 0,
  },

  statInfo: {
    display: "flex",
    flexDirection: "column",
  },

  statNum: {
    fontSize: "17px",
    fontWeight: "800",
    color: "#fff",
    lineHeight: "1.1",
  },

  statLbl: {
    fontSize: "11px",
    color: "rgba(255,255,255,0.55)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "500",
    marginTop: "1px",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#1FA971",
    color: "#fff",
    border: "none",
    padding: "12px 22px",
    fontSize: "14px",
    fontWeight: "700",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    letterSpacing: "0.1px",
  },

  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    border: "2px solid rgba(255,255,255,0.38)",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    letterSpacing: "0.1px",
  },

  /* ── RIGHT — white form card ── */
  right: {
    width: "430px",
    flexShrink: 0,
  },

  formCard: {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "30px 28px 26px",
    boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
  },

  formTitle: {
    fontSize: "20px",
    color: "#0B1F3A",
    fontWeight: "800",
    margin: "0 0 4px 0",
    textAlign: "left",
    letterSpacing: "-0.2px",
  },

  formSubtitle: {
    color: "#777",
    fontSize: "13px",
    margin: "0 0 18px 0",
    textAlign: "left",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #e2e2e2",
    background: "#fafafa",
    color: "#333",
    fontSize: "13px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },

  select: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #e2e2e2",
    background: "#fafafa",
    color: "#666",
    fontSize: "13px",
    outline: "none",
    boxSizing: "border-box",
    cursor: "pointer",
    fontFamily: "inherit",
  },

  submitBtn: {
    width: "100%",
    padding: "13px",
    background: "#1FA971",
    border: "none",
    borderRadius: "7px",
    color: "#fff",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    letterSpacing: "0.2px",
    fontFamily: "inherit",
  },

  orDivider: {
    textAlign: "center",
    color: "#bbb",
    fontSize: "12px",
    margin: "12px 0",
    position: "relative",
  },

  whatsappBtn: {
    width: "100%",
    padding: "10px",
    background: "transparent",
    border: "1px solid #e2e2e2",
    borderRadius: "7px",
    color: "#333",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "inherit",
  },
};

const stats = [
  { icon: "🌍", number: "25+",  label: "Countries Served" },
  { icon: "📦", number: "500+", label: "Products" },
  { icon: "✅", number: "100+", label: "Verified Suppliers" },
  { icon: "⏱️", number: "98%",  label: "On-Time Delivery" },
];

export default function Hero() {
  const [form, setForm] = useState({
    name: "", email: "", product: "", quantity: "", country: "", requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={S.hero}>
      <div style={S.container}>

        {/* ── LEFT ── */}
        <div style={S.left}>
          <h1 style={S.heading}>
            Simplifying Global Imports
            <br />
            <span style={S.green}>&amp; Product Sourcing</span>
          </h1>

          <p style={S.subtext}>
            Your trusted partner for sourcing quality products, ensuring
            compliance, and delivering globally with complete import assistance.
          </p>

          {/* Stats grid */}
          <div style={S.statsRow}>
            {stats.map((s, i) => (
              <div key={i} style={S.statItem}>
                <div style={S.statIconWrap}>{s.icon}</div>
                <div style={S.statInfo}>
                  <span style={S.statNum}>{s.number}</span>
                  <span style={S.statLbl}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={S.buttons}>
            <button style={S.primaryBtn}>
              Explore Products &nbsp;→
            </button>
            <button style={S.secondaryBtn}>
              Request Sourcing &nbsp;→
            </button>
          </div>
        </div>

        {/* ── RIGHT — white form card ── */}
        <div style={S.right}>
          <div style={S.formCard}>
            <h2 style={S.formTitle}>
              Get a <span style={S.green}>Free</span> Quote
            </h2>
            <p style={S.formSubtitle}>
              Share your requirements and we&apos;ll get back to you
            </p>

            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "28px 0",
                  color: "#1FA971",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                ✅ Thank you! We&apos;ll contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div style={S.formGrid}>
                  <input
                    style={S.input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    style={S.input}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Row 2 */}
                <div style={S.formGrid}>
                  <input
                    style={S.input}
                    type="text"
                    name="product"
                    placeholder="Product Required"
                    value={form.product}
                    onChange={handleChange}
                    required
                  />
                  <input
                    style={S.input}
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Row 3 */}
                <div style={S.formGrid}>
                  <select
                    style={S.select}
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Destination Country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>UAE</option>
                    <option>Singapore</option>
                    <option>Other</option>
                  </select>
                  <select
                    style={S.select}
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                  >
                    <option value="">Import Requirement</option>
                    <option>Full Container Load</option>
                    <option>Less than Container</option>
                    <option>Air Freight</option>
                    <option>Custom Sourcing</option>
                    <option>Private Label</option>
                  </select>
                </div>

                <button type="submit" style={S.submitBtn}>
                  Submit Inquiry &nbsp;→
                </button>
              </form>
            )}

            <div style={S.orDivider}>or</div>

            <button style={S.whatsappBtn}>
              <span style={{ fontSize: "18px" }}>💬</span>
              Chat on WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

const services = [
  {
    title: "Sea Freight",
    desc: "Cost-effective ocean freight solutions worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M2 20h20M6 20V8l6-4 6 4v12M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "Air Freight",
    desc: "Fast and reliable air cargo for urgent shipments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2v0A1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
  },
  {
    title: "Customs Support",
    desc: "Simplified customs clearance and compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <polyline points="9 11 10 12 12 10" />
      </svg>
    ),
  },
  {
    title: "FOB / CIF",
    desc: "Flexible trade terms as per your business needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Door Delivery",
    desc: "End-to-end delivery from supplier to your doorstep.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function Shipping() {
  return (
    <section style={S.section}>
      <div style={S.orbLeft}  aria-hidden="true" />
      <div style={S.orbRight} aria-hidden="true" />

      <div style={S.container}>

        {/* LEFT: title */}
        <div style={S.titleBlock}>
          <h2 style={S.title}>
            Global Shipping<br />
            <span style={S.titleGreen}>&amp; Logistics</span>
          </h2>
          <p style={S.subtitle}>End-to-end support for smooth international trade operations</p>
        </div>

        {/* MIDDLE: 5 service items */}
        <div style={S.servicesRow}>
          {services.map((s, i) => (
            <div key={i} className="sh-item" style={S.serviceItem}>
              <div style={S.serviceIcon}>{s.icon}</div>
              <h3 style={S.serviceTitle}>{s.title}</h3>
              <p style={S.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT: globe image */}
        <div style={S.imageBlock}>
          <img
            src="/images/categories/shipping.png"
            alt="Global shipping network"
            style={S.globeImg}
            className="sh-popup-img"
            loading="lazy"
            onError={(e) => { e.target.src = "https://picsum.photos/seed/logistics/400/280"; }}
          />
        </div>

      </div>

      <style>{`
        .sh-item {
          transition: transform 0.25s ease;
        }
        .sh-item:hover {
          transform: translateY(-4px);
        }
        .sh-popup-img:hover {
          transform: perspective(900px) rotateY(-4deg) rotateX(2deg) scale(1.12) !important;
          box-shadow: 0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(31,169,113,0.5), 30px 30px 80px rgba(0,0,0,0.5) !important;
        }
        @media (max-width: 1100px) {
          .sh-container { flex-wrap: wrap !important; }
          .sh-services  { grid-template-columns: repeat(3, 1fr) !important; }
          .sh-image     { display: none !important; }
        }
        @media (max-width: 640px) {
          .sh-services { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #03152D 0%, #041F45 50%, #03152D 100%)",
    padding: "60px 60px",
    overflow: "hidden",
  },

  orbLeft: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.07) 0%, transparent 65%)",
    top: "-100px", left: "-100px",
    pointerEvents: "none",
  },

  orbRight: {
    position: "absolute",
    width: "350px", height: "350px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.06) 0%, transparent 65%)",
    bottom: "-80px", right: "-60px",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "180px 1fr 280px",
    alignItems: "center",
    gap: "32px",
    position: "relative",
    zIndex: 1,
  },

  /* Left title block */
  titleBlock: {
    flexShrink: 0,
  },

  title: {
    fontSize: "clamp(18px, 2vw, 24px)",
    fontWeight: "800",
    color: "#E8F4FF",
    margin: "0 0 10px",
    letterSpacing: "-0.3px",
    lineHeight: "1.2",
  },

  titleGreen: {
    color: "#1FA971",
  },

  subtitle: {
    fontSize: "12px",
    color: "rgba(200,220,255,0.45)",
    lineHeight: "1.6",
    margin: "0",
  },

  /* Middle services */
  servicesRow: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "12px",
  },

  serviceItem: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "18px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "12px",
    cursor: "default",
  },

  serviceIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(31,169,113,0.12)",
    border: "1px solid rgba(31,169,113,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1FA971",
    flexShrink: 0,
  },

  serviceTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#E8F4FF",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  serviceDesc: {
    fontSize: "11.5px",
    color: "rgba(180,210,255,0.48)",
    lineHeight: "1.6",
    margin: "0",
  },

  /* Right image */
  imageBlock: {
    flexShrink: 0,
    perspective: "1000px",
  },

  globeImg: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    borderRadius: "16px",
    opacity: 1,
    display: "block",
    transform: "perspective(900px) rotateY(-8deg) rotateX(4deg) scale(1.08)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(31,169,113,0.3), 20px 20px 60px rgba(0,0,0,0.4), -4px -4px 20px rgba(31,169,113,0.15)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    filter: "drop-shadow(0 20px 40px rgba(31,169,113,0.25))",
  },
};

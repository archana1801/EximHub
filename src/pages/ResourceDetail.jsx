import { useParams, Link } from "react-router-dom";

const GUIDES = {
  "import-process-guide": {
    img: "/images/categories/import.jpg",
    color: "#1FA971",
    tag: "Getting Started",
    title: "Import Process Guide",
    subtitle: "A complete step-by-step walkthrough of the entire import cycle — from first inquiry to final delivery.",
    stats: [
      { value: "7", label: "Key Steps" },
      { value: "18–35", label: "Days (Sea Freight)" },
      { value: "40+", label: "Countries Covered" },
    ],
    sections: [
      {
        heading: "Step 1 — Define Your Product Requirements",
        body: "Start by clearly defining what you need: product specifications (dimensions, materials, grade), target price range, minimum order quantity (MOQ), and your destination country. The more specific you are, the faster suppliers can respond with accurate quotes. Include details like packaging type, labeling requirements, and any regulatory certifications needed in your market.",
      },
      {
        heading: "Step 2 — Supplier Research & Shortlisting",
        body: "Source potential suppliers through verified trade directories, trade fairs, and industry networks. Evaluate each supplier on: years in business, certifications (ISO, APEDA, FSSAI), factory capacity, export history, and communication responsiveness. Create a shortlist of 3–5 suppliers before moving forward.",
      },
      {
        heading: "Step 3 — Request for Quotation (RFQ)",
        body: "Send a detailed RFQ to your shortlisted suppliers. Include your product specs, required quantities, incoterm preference (FOB, CIF, EXW), and timeline. Compare quotes not just on price but also on payment terms, lead time, sample availability, and after-sales support.",
      },
      {
        heading: "Step 4 — Sample Evaluation",
        body: "Always request samples before placing a bulk order. Evaluate samples against your specifications — quality, finish, weight, dimensions, and packaging. Engage a third-party lab if compliance testing is required (e.g., FDA, CE marking). Only proceed to bulk production once samples are approved.",
      },
      {
        heading: "Step 5 — Order Confirmation & Production",
        body: "Once a supplier is selected, finalize the commercial terms with a Purchase Order (PO). Agree on payment terms (typically 30% advance, 70% before shipment), production timeline, and inspection dates. Monitor production milestones and maintain regular communication with your supplier.",
      },
      {
        heading: "Step 6 — Pre-Shipment Inspection",
        body: "Before goods leave the factory, arrange a pre-shipment inspection (PSI) through a third-party inspection agency. Inspectors verify quantity, quality, packaging, and labeling against your PO and product specifications. A passed inspection report significantly reduces the risk of receiving non-conforming goods.",
      },
      {
        heading: "Step 7 — Shipping, Customs & Delivery",
        body: "Choose your freight method (sea, air, or courier) based on volume, urgency, and budget. Work with a licensed freight forwarder to handle shipping documents — Bill of Lading, Export Invoice, Packing List, Certificate of Origin. Arrange customs clearance at destination and coordinate last-mile delivery to your warehouse.",
      },
    ],
  },

  "reliable-suppliers": {
    img: "/images/categories/reliablesupplier.jpg",
    color: "#0891b2",
    tag: "Supplier Sourcing",
    title: "How to Find Reliable Suppliers",
    subtitle: "A practical guide to evaluating, vetting, and building long-term relationships with trustworthy manufacturers.",
    stats: [
      { value: "1,200+", label: "Verified Suppliers" },
      { value: "100%", label: "Pre-Vetted" },
      { value: "14+", label: "Categories" },
    ],
    sections: [
      {
        heading: "Where to Find Suppliers",
        body: "Start with verified B2B platforms, trade fairs (Canton Fair, India International Trade Fair), industry associations, and export promotion councils like APEDA and FIEO. Personal referrals from other importers and freight forwarders are also highly reliable. Avoid relying solely on cold outreach from unknown contacts.",
      },
      {
        heading: "Certifications to Look For",
        body: "Check for relevant certifications based on your product category. For food products: FSSAI, APEDA, Halal, Organic, FSSC 22000. For manufacturing: ISO 9001:2015. For exports: IEC (Import Export Code), DGFT registration. Always ask for copies of certificates and verify their authenticity with the issuing authority.",
      },
      {
        heading: "Evaluating Factory Capacity",
        body: "Request information on annual production capacity, number of production lines, workforce size, and current order load. A supplier consistently running at 100% capacity may struggle with your order. Ask for photos or videos of the facility, or arrange a factory visit or audit if the order value justifies it.",
      },
      {
        heading: "Sample Quality & Communication",
        body: "A supplier's responsiveness and willingness to provide samples tells you a lot. Slow responses, reluctance to share references, or pushback on sample requests are red flags. Evaluate sample quality rigorously — it reflects what bulk production will look like. Note how quickly and accurately they address your feedback.",
      },
      {
        heading: "MOQ Flexibility & Payment Terms",
        body: "Understand the supplier's minimum order quantity and whether it aligns with your business model. Many suppliers in India are flexible for first-time importers. Standard payment terms are 30% advance with 70% balance before shipment or against documents. Avoid suppliers demanding 100% advance from unknown buyers.",
      },
      {
        heading: "Red Flags to Avoid",
        body: "Watch out for: prices far below market rate (quality compromise risk), inability to provide verifiable references, vague responses to compliance questions, requests to deal outside official channels, and lack of proper business registration. Always verify the supplier's legal entity through official registries before committing to large orders.",
      },
    ],
  },

  "export-documentation": {
    img: "/images/categories/exportdocumentation.jpg",
    color: "#7C3AED",
    tag: "Documentation",
    title: "Export Documentation Basics",
    subtitle: "A clear breakdown of every document you need for international trade — and why each one matters.",
    stats: [
      { value: "10+", label: "Key Documents" },
      { value: "100%", label: "Compliance Rate" },
      { value: "24hr", label: "Doc Preparation" },
    ],
    sections: [
      {
        heading: "Commercial Invoice",
        body: "The commercial invoice is the primary document in international trade. It details the seller, buyer, description of goods, quantity, unit price, total value, currency, payment terms, and incoterms. Customs authorities use it to assess duties and taxes. It must be accurate and consistent with all other shipping documents.",
      },
      {
        heading: "Packing List",
        body: "The packing list itemizes every package in the shipment — dimensions, weights (gross and net), number of cartons, and contents per carton. It helps customs inspectors verify the shipment and assists warehouse staff at the destination. Discrepancies between the packing list and actual goods can cause delays and penalties.",
      },
      {
        heading: "Bill of Lading (B/L)",
        body: "The Bill of Lading is issued by the shipping carrier and serves as a receipt of goods, a contract of carriage, and a document of title. For sea freight, it comes as an Original B/L (negotiable, used for payment) or a Sea Waybill (non-negotiable). Air freight uses an Air Waybill (AWB). Ensure the B/L details match your invoice exactly.",
      },
      {
        heading: "Certificate of Origin (COO)",
        body: "The COO certifies which country the goods were manufactured in. It is required by most importing countries for customs assessment and to claim preferential duty rates under trade agreements (e.g., FTA, GSP). In India, it is issued by Chambers of Commerce or APEDA for agricultural products.",
      },
      {
        heading: "Shipping Bill",
        body: "The Shipping Bill is the primary export document filed with Indian Customs through the ICEGATE portal. It authorizes the export of goods and is used to claim export incentives like Duty Drawback and RoDTEP. There are different types: Free Shipping Bill, Dutiable Shipping Bill, and Drawback Shipping Bill.",
      },
      {
        heading: "Other Common Documents",
        body: "Depending on the product and destination, you may also need: Phytosanitary Certificate (for plants/agro products), Health Certificate (for food products), Fumigation Certificate, Letter of Credit (LC) for payment security, Insurance Certificate, and country-specific import permits. Always check the destination country's import requirements before shipping.",
      },
    ],
  },

  "shipping-logistics": {
    img: "/images/categories/shippingandlogistic.jpg",
    color: "#D97706",
    tag: "Logistics",
    title: "Shipping & Logistics Guide",
    subtitle: "Compare freight options, understand Incoterms, and learn how to move goods efficiently across borders.",
    stats: [
      { value: "3", label: "Freight Modes" },
      { value: "18–35", label: "Days Sea Freight" },
      { value: "5–10", label: "Days Air Freight" },
    ],
    sections: [
      {
        heading: "Sea Freight",
        body: "Sea freight is the most cost-effective mode for large volumes. Full Container Load (FCL) gives you exclusive use of a 20ft or 40ft container — ideal for orders over 15 CBM. Less than Container Load (LCL) consolidates your cargo with other shippers — better for smaller volumes. Transit times from India to major ports: USA (18–25 days), Europe (20–28 days), UAE (7–12 days).",
      },
      {
        heading: "Air Freight",
        body: "Air freight is faster but significantly more expensive — typically 4–6x the cost of sea freight per kg. It is suited for high-value, low-weight goods, urgent orders, or perishable products. Transit times from India: USA (5–7 days), Europe (4–6 days), UAE (2–3 days). Air freight is charged on actual weight or volumetric weight, whichever is higher.",
      },
      {
        heading: "Courier / Express",
        body: "For small shipments, samples, or documents, courier services (DHL, FedEx, UPS) are the fastest option — typically 3–5 business days globally. Costs are high for larger packages but include door-to-door service and tracking. Customs clearance is usually handled by the courier, simplifying the process for the importer.",
      },
      {
        heading: "Understanding Incoterms",
        body: "Incoterms define the responsibilities of buyer and seller for cost, risk, and logistics. Common terms: EXW (buyer handles all logistics from factory), FOB (seller delivers to origin port, buyer handles freight and insurance), CIF (seller handles freight and insurance to destination port), DDP (seller handles everything including destination customs). Choose the right incoterm based on your logistics capability.",
      },
      {
        heading: "Freight Forwarders",
        body: "A freight forwarder acts as your logistics agent — booking cargo space, preparing shipping documents, arranging customs clearance, and coordinating delivery. Choose a forwarder with experience in your product category and destination. Get quotes from at least 3 forwarders and compare on price, transit time, and included services.",
      },
      {
        heading: "Cargo Insurance",
        body: "Always insure your cargo. Marine cargo insurance protects against loss or damage during transit. Coverage types: All Risk (broadest), Free from Particular Average (FPA), and With Average (WA). Insurance is typically 0.1–0.5% of the cargo value. It is especially important for fragile, perishable, or high-value goods.",
      },
    ],
  },

  "private-label": {
    img: "/images/categories/privatelabeling.jpg",
    color: "#059669",
    tag: "Branding",
    title: "Private Label Guide",
    subtitle: "Everything you need to launch your own brand — from customization to packaging to MOQ planning.",
    stats: [
      { value: "500+", label: "Customizable Products" },
      { value: "100+", label: "Verified Manufacturers" },
      { value: "30", label: "Days Avg. Lead Time" },
    ],
    sections: [
      {
        heading: "What is Private Labeling?",
        body: "Private labeling is the process of purchasing products from a manufacturer and selling them under your own brand name. The manufacturer produces the goods to your specifications while you control the branding, packaging, and marketing. It is widely used in food, cosmetics, nutraceuticals, textiles, and consumer goods.",
      },
      {
        heading: "Product Selection & Customization",
        body: "Start by identifying products with strong market demand and reasonable margins. Work with your manufacturer to customize: formulation or recipe, physical dimensions, materials, finish, and color. Request a detailed specification sheet and approve a Golden Sample before bulk production begins.",
      },
      {
        heading: "Brand & Packaging Design",
        body: "Your packaging is your brand's first impression. Work with a designer to create labels, inserts, and outer cartons that comply with your destination country's labeling laws (ingredient lists, nutritional info, barcodes, country of origin). Provide your manufacturer with print-ready artwork files in the correct format (AI, PDF, CMYK color profile).",
      },
      {
        heading: "MOQ Requirements",
        body: "Most manufacturers require a minimum order quantity (MOQ) for private label production — typically 500–5,000 units depending on the product category. Negotiate lower MOQs for first orders to test the market. Once you have market validation, scale up with larger orders to reduce per-unit cost.",
      },
      {
        heading: "Regulatory Compliance",
        body: "Ensure your private label product meets all regulatory requirements in your destination market. This includes product testing, ingredient approvals, safety data sheets, and compliance with standards like FDA (USA), BRC (Europe), or FSANZ (Australia). Non-compliance can result in customs rejection, fines, or product recalls.",
      },
      {
        heading: "Protecting Your Brand",
        body: "Register your trademark in your key markets before launching. Use Non-Disclosure Agreements (NDAs) and Exclusivity Agreements with your manufacturer to protect your formulations and designs. Build strong supplier relationships — long-term partnerships provide better pricing, priority production, and greater flexibility.",
      },
    ],
  },

  "customs-compliance": {
    img: "/images/categories/customer.jpg",
    color: "#2563EB",
    tag: "Compliance",
    title: "Customs & Compliance Handbook",
    subtitle: "Navigate customs duties, HS codes, and country-specific regulations for seamless international trade.",
    stats: [
      { value: "25+", label: "Countries" },
      { value: "100%", label: "Pre-Shipment Check" },
      { value: "0", label: "Compliance Failures" },
    ],
    sections: [
      {
        heading: "Understanding HS Codes",
        body: "The Harmonized System (HS) code is a 6–10 digit number used globally to classify traded goods. The first 6 digits are universal; additional digits are country-specific. The correct HS code determines import duty rates, applicable restrictions, and required permits. Misclassification can lead to delays, penalties, or seizure of goods. Always verify HS codes with a licensed customs broker.",
      },
      {
        heading: "Import Duties & Taxes",
        body: "Import duties are levied by the destination country on the customs value of goods (CIF or FOB depending on country). In addition to basic customs duty, you may also face: VAT/GST, countervailing duty (CVD), anti-dumping duty, and cess charges. Use your product's HS code and destination country tariff schedule to calculate the total landed cost before committing to an order.",
      },
      {
        heading: "Free Trade Agreements (FTAs)",
        body: "Many countries have bilateral or multilateral FTAs that reduce or eliminate import duties for qualifying goods. India has FTAs with ASEAN, UAE (CEPA), Mauritius, Japan, South Korea, and others. To claim FTA benefits, your goods must meet the Rules of Origin criteria and you must present a valid Certificate of Origin in the correct format.",
      },
      {
        heading: "Prohibited & Restricted Goods",
        body: "Every country maintains lists of prohibited goods (banned entirely) and restricted goods (allowed with permits or under conditions). Check the import policy of your destination country for your specific product. Common restrictions apply to: agricultural products (phytosanitary requirements), chemicals (REACH, TSCA compliance), electronics (CE, FCC marking), and food products (health certificates, ingredient approvals).",
      },
      {
        heading: "Customs Valuation",
        body: "Customs authorities use the Transaction Value method (the price actually paid or payable) as the primary basis for valuation. Ensure your commercial invoice accurately reflects the true transaction value — undervaluation is a customs offence with serious penalties. Related-party transactions are subject to additional scrutiny and must be declared.",
      },
      {
        heading: "Working with Customs Brokers",
        body: "A licensed customs broker (CHA in India) handles customs documentation, duty calculations, and clearance on your behalf. Choose a broker experienced with your product category and destination country. Provide them with all shipping documents promptly to avoid demurrage charges. A good broker can also advise on duty optimization strategies and advance rulings.",
      },
    ],
  },
};

export default function ResourceDetail() {
  const { id } = useParams();
  const guide = GUIDES[id];

  if (!guide) {
    return (
      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
        <h2 style={{ color: "#0B1F3A", fontSize: "24px", fontWeight: "700" }}>Guide not found</h2>
        <Link to="/resources" style={{ color: "#1FA971", fontWeight: "600", textDecoration: "none" }}>← Back to Resources</Link>
      </main>
    );
  }

  return (
    <main style={{ width: "100%" }}>

      {/* ── HERO ── */}
      <section className="rd-hero" style={{ background: '#0B1F3A', position: 'relative', overflow: 'hidden', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />
        <div className="rd-img-wrap" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '52%', zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0B1F3A 0%, rgba(11,31,58,0.55) 35%, transparent 70%)', zIndex: 1 }} />
          <img src={guide.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="rd-hero-content" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '560px', padding: '52px 0 40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', fontWeight: '700', color: guide.color, background: `${guide.color}18`, border: `1px solid ${guide.color}40`, borderRadius: '30px', padding: '6px 14px', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              {guide.tag}
            </span>
            <h1 style={{ fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '800', lineHeight: '1.18', margin: '0 0 14px', letterSpacing: '-0.3px', color: '#fff' }}>
              {guide.title}
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.62)', margin: '0 0 32px', lineHeight: '1.75', maxWidth: '420px' }}>
              {guide.subtitle}
            </p>
            <div className="rd-hero-stats" style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {guide.stats.map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: '800', color: guide.color, lineHeight: '1.1' }}>{s.value}</div>
                    <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.6px', marginTop: '1px' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #ececec', padding: '12px 60px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
          <Link to="/" style={{ color: '#1FA971', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <span style={{ color: 'rgba(11,31,58,0.3)' }}>›</span>
          <Link to="/resources" style={{ color: '#1FA971', textDecoration: 'none', fontWeight: '500' }}>Resources</Link>
          <span style={{ color: 'rgba(11,31,58,0.3)' }}>›</span>
          <span style={{ color: 'rgba(11,31,58,0.5)', fontWeight: '500' }}>{guide.title}</span>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <section style={{ background: '#F7F9FC', padding: '64px 60px 80px' }} className="rd-content-section">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {guide.sections.map((sec, i) => (
            <div key={i} className="rd-section-card" style={S.sectionCard}>
              <div style={{ ...S.sectionAccent, background: guide.color }} />
              <div style={S.sectionBody}>
                <h2 style={{ ...S.sectionHeading, color: guide.color }}>{sec.heading}</h2>
                <p style={S.sectionText}>{sec.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={S.cta} className="rd-cta">
        <div style={S.ctaBlobLeft} />
        <div style={S.ctaBlobRight} />
        <div style={S.ctaInner}>
          <span style={S.ctaBadge}><span style={S.ctaBadgeDot} />Need Help?</span>
          <h2 style={S.ctaTitle}>Ready to Start <span style={S.ctaAccent}>Importing?</span></h2>
          <p style={S.ctaSub}>Our team handles the entire process — from sourcing to delivery. Get a free consultation today.</p>
          <div style={S.ctaBtns}>
            <Link to="/contact" style={S.ctaBtn} className="rd-cta-btn">
              Contact Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/resources" style={S.outlineBtn} className="rd-outline-btn">
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .rd-section-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .rd-section-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(11,31,58,0.1) !important;
        }
        .rd-cta-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .rd-cta-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.4) !important;
          transform: translateY(-2px);
        }
        .rd-outline-btn {
          transition: background 0.22s ease, color 0.22s ease;
        }
        .rd-outline-btn:hover {
          background: rgba(255,255,255,0.1) !important;
          color: #fff !important;
        }
        @media (max-width: 768px) {
          .rd-img-wrap { display: none !important; }
          .rd-hero-content { padding: 0 20px !important; }
          .rd-hero-content > div { padding: 36px 0 28px !important; max-width: 100% !important; }
          .rd-hero-stats { gap: 16px !important; }
          .rd-content-section { padding: 48px 20px 60px !important; }
          .rd-cta { padding: 60px 20px !important; }
        }
        @media (max-width: 480px) {
          .rd-hero-content { padding: 0 16px !important; }
          .rd-content-section { padding: 36px 16px 48px !important; }
          .rd-cta { padding: 48px 16px !important; }
        }
      `}</style>
    </main>
  );
}

const S = {
  sectionCard: {
    background: "#ffffff",
    border: "1px solid rgba(11,31,58,0.08)",
    borderRadius: "14px",
    padding: "28px 28px 28px 32px",
    marginBottom: "20px",
    display: "flex",
    gap: "0",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(11,31,58,0.05)",
  },
  sectionAccent: {
    position: "absolute",
    left: 0, top: 0, bottom: 0,
    width: "4px",
    borderRadius: "4px 0 0 4px",
  },
  sectionBody: {
    flex: 1,
  },
  sectionHeading: {
    fontSize: "17px",
    fontWeight: "800",
    margin: "0 0 10px",
    letterSpacing: "-0.2px",
    lineHeight: "1.3",
  },
  sectionText: {
    fontSize: "14.5px",
    color: "rgba(11,31,58,0.62)",
    lineHeight: "1.85",
    margin: 0,
  },
  cta: {
    position: "relative",
    background: "linear-gradient(160deg, #0B1F3A 0%, #0D2444 55%, #061529 100%)",
    padding: "80px 60px",
    overflow: "hidden",
    textAlign: "center",
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
    maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 1,
    display: "flex", flexDirection: "column", alignItems: "center",
  },
  ctaBadge: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    fontSize: "11px", fontWeight: "700", color: "#1FA971",
    textTransform: "uppercase", letterSpacing: "2.2px",
    padding: "7px 18px", background: "rgba(31,169,113,0.1)",
    border: "1px solid rgba(31,169,113,0.3)", borderRadius: "30px", marginBottom: "22px",
  },
  ctaBadgeDot: {
    display: "inline-block", width: "7px", height: "7px", borderRadius: "50%",
    background: "#22C55E", boxShadow: "0 0 8px #22C55E, 0 0 16px #22C55E", flexShrink: 0,
  },
  ctaTitle: {
    fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: "800", color: "#E8F4FF",
    margin: "0 0 18px", letterSpacing: "-0.8px", lineHeight: "1.15",
  },
  ctaAccent: {
    background: "linear-gradient(90deg, #1FA971, #06B6D4)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
  },
  ctaSub: {
    fontSize: "15px", color: "rgba(200,220,255,0.55)", lineHeight: "1.8",
    margin: "0 0 36px", maxWidth: "440px",
  },
  ctaBtns: { display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" },
  ctaBtn: {
    display: "inline-flex", alignItems: "center", gap: "10px",
    background: "#1FA971", color: "#fff", textDecoration: "none",
    padding: "14px 32px", borderRadius: "50px", fontSize: "14px", fontWeight: "700",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32)",
  },
  outlineBtn: {
    display: "inline-flex", alignItems: "center",
    background: "rgba(255,255,255,0.06)", color: "rgba(200,220,255,0.75)",
    textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)",
    padding: "14px 32px", borderRadius: "50px", fontSize: "14px", fontWeight: "600",
  },
};

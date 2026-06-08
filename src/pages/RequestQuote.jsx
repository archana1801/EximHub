import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

// ── Static data ────────────────────────────────────────────────────────────
const PACKAGING_TYPES = [
  'Bulk Packaging',
  'Retail / Consumer Packaging',
  'Custom / Branded Packaging',
  'Vacuum Packaging',
  'Export / Corrugated Packaging',
  'Blister Packaging',
];

const CURRENCIES = [
  { label: 'USD ($)', symbol: '$' },
  { label: 'EUR (€)', symbol: '€' },
  { label: 'GBP (£)', symbol: '£' },
  { label: 'AED (د.إ)', symbol: 'AED' },
  { label: 'INR (₹)', symbol: '₹' },
  { label: 'SGD (S$)', symbol: 'S$' },
];

const UNITS = ['kg', 'MT (Metric Ton)', 'Piece', 'Box', 'Carton', 'Container (20ft)', 'Container (40ft)'];

const WHY_ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Best Prices',
    desc: 'Get the most competitive prices from verified suppliers.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: 'Customized Solutions',
    desc: 'We provide solutions tailored to your specific needs.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Trusted Suppliers',
    desc: 'Work only with verified and reliable exporters.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'On-Time Delivery',
    desc: 'Timely shipping and secure delivery worldwide.',
  },
];

// ── Shared input style ─────────────────────────────────────────────────────
const field = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: '8px',
  border: '1.5px solid #e5e7eb',
  background: '#fff',
  fontSize: '13.5px',
  color: '#333',
  outline: 'none',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};

const label = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#0B1F3A',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginBottom: '10px',
};

const required = { color: '#ef4444', marginLeft: '2px' };
const hint = { fontSize: '12px', color: '#9ca3af', marginTop: '6px' };

// ── Main page ──────────────────────────────────────────────────────────────
export default function RequestQuote() {
  const [searchParams] = useSearchParams();
  const pid = searchParams.get('product');
  const preselected = pid ? PRODUCTS.find(p => p.id === parseInt(pid, 10)) : null;

  const [form, setForm] = useState({
    product:        preselected?.name || '',
    specs:          '',
    packagingType:  '',
    productType:    'Regular',
    currency:       'USD ($)',
    targetRate:     '',
    unit:           '',
    additionalInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = `Quote Request – ${form.product}`;
    const body = [
      `Product: ${form.product}`,
      `Specifications: ${form.specs}`,
      `Packaging Type: ${form.packagingType}`,
      `Product Type: ${form.productType}`,
      `Target Rate: ${form.currency} ${form.targetRate || 'TBD'} per ${form.unit || 'unit'}`,
      `Additional Info: ${form.additionalInfo || 'N/A'}`,
    ].join('\n\n');

    window.location.href = `mailto:info@importwiz.shop?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f8fa' }}>
        <div style={{ textAlign: 'center', padding: '60px 32px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: '440px', width: '90%' }}>
          <div style={{ width: '64px', height: '64px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '28px' }}>✅</div>
          <h2 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: '800', color: '#0B1F3A' }}>Request Submitted!</h2>
          <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', margin: '0 0 24px' }}>
            Your quote request has been sent to <strong>info@importwiz.shop</strong>. Our sourcing experts will get back to you within 24 hours.
          </p>
          <Link to="/products" style={{ display: 'inline-block', background: '#1FA971', color: '#fff', padding: '11px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>
            Browse More Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh' }}>
      <style>{`
        .rq-input:focus { border-color: #1FA971 !important; box-shadow: 0 0 0 3px rgba(31,169,113,0.1); }
        .rq-type-card:hover { border-color: #1FA971 !important; }

        /* tablet: stack sidebar below form */
        @media (max-width: 960px) {
          .rq-body    { flex-direction: column !important; }
          .rq-sidebar { width: 100% !important; }
        }

        /* small tablet / large phone */
        @media (max-width: 640px) {
          .rq-header-inner { flex-direction: column !important; }
          .rq-header-img   { display: none !important; }
          .rq-body         { padding: 24px 16px 48px !important; }
          .rq-form-card    { padding: 24px 20px !important; }
          .rq-name-grid    { grid-template-columns: 1fr !important; }
          .rq-type-grid    { grid-template-columns: 1fr !important; }
          .rq-rate-row     { flex-wrap: wrap !important; }
          .rq-rate-currency{ width: 100% !important; }
          .rq-rate-unit    { width: 100% !important; }
          .rq-rate-per     { display: none !important; }
          .rq-header-inner { padding: 24px 16px !important; }
        }

        /* phone */
        @media (max-width: 420px) {
          .rq-why-items { gap: 14px !important; }
        }
      `}</style>

      {/* ── Page header ─────────────────────────────────────────── */}
      <div style={{ background: 'linear-gradient(135deg, #f0f9f5 0%, #e8f4ff 100%)', borderBottom: '1px solid #e5e7eb', overflow: 'hidden' }}>
        <div className="rq-header-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div style={{ flex: 1 }}>
            {/* Breadcrumb */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '18px', fontSize: '13px', color: '#9ca3af' }}>
              <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>
              <span>›</span>
              <Link to="/products" style={{ color: '#9ca3af', textDecoration: 'none' }}>Products</Link>
              <span>›</span>
              <span style={{ color: '#0B1F3A', fontWeight: '500' }}>Request Quote</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', color: '#0B1F3A', margin: '0 0 12px', lineHeight: '1.15' }}>
              Request a{' '}
              <span style={{ color: '#1FA971' }}>Quote</span>
            </h1>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0, lineHeight: '1.7', maxWidth: '460px' }}>
              Fill in your requirements and our sourcing experts will get back to you with the best possible quote.
            </p>
          </div>

          {/* Header illustration */}
          <div className="rq-header-img" style={{ flexShrink: 0, position: 'relative', width: '320px', height: '180px' }}>
            <img
              src="/images/categories/shipping2.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
            />
            <div style={{ position: 'absolute', inset: 0, borderRadius: '14px', background: 'linear-gradient(to right, rgba(240,249,245,0.5), transparent)' }} />
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────── */}
      <div className="rq-body" style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 32px 60px', display: 'flex', gap: '28px', alignItems: 'flex-start' }}>

        {/* ── Form card ─────────────────────────────────────────── */}
        <div className="rq-form-card" style={{ flex: 1, background: '#fff', borderRadius: '16px', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', padding: '36px 32px' }}>
          <form onSubmit={handleSubmit}>

            {/* 1. Product */}
            <div style={{ marginBottom: '28px' }}>
              <p style={label}>1. Choose a Product <span style={required}>*</span></p>
              <select
                className="rq-input"
                required
                value={form.product}
                onChange={set('product')}
                style={{ ...field, color: form.product ? '#333' : '#9ca3af' }}
              >
                <option value="">Select a product</option>
                {PRODUCTS.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
              <p style={hint}>Choose the product you are interested in.</p>
            </div>

            {/* 2. Specifications */}
            <div style={{ marginBottom: '28px' }}>
              <p style={label}>2. Desired Specifications <span style={required}>*</span></p>
              <div style={{ position: 'relative' }}>
                <textarea
                  className="rq-input"
                  required
                  maxLength={500}
                  rows={4}
                  placeholder="Write your required specifications (quality, size, grade, moisture, color, etc.)"
                  value={form.specs}
                  onChange={set('specs')}
                  style={{ ...field, resize: 'vertical', minHeight: '110px', paddingBottom: '28px' }}
                />
                <span style={{ position: 'absolute', bottom: '10px', right: '12px', fontSize: '11px', color: '#bbb' }}>
                  {form.specs.length}/500
                </span>
              </div>
            </div>

            {/* 3. Packaging Type */}
            <div style={{ marginBottom: '28px' }}>
              <p style={label}>3. Choose Packaging Type <span style={required}>*</span></p>
              <select
                className="rq-input"
                required
                value={form.packagingType}
                onChange={set('packagingType')}
                style={{ ...field, color: form.packagingType ? '#333' : '#9ca3af' }}
              >
                <option value="">Select packaging type</option>
                {PACKAGING_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <p style={hint}>Choose your preferred packaging type.</p>
            </div>

            {/* 4. Product Type */}
            <div style={{ marginBottom: '28px' }}>
              <p style={label}>4. Product Type <span style={required}>*</span></p>
              <div className="rq-type-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { value: 'Eco-Friendly', icon: '🌿', desc: 'Environmentally friendly packaging' },
                  { value: 'Regular',      icon: '📦', desc: 'Standard packaging' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    className="rq-type-card"
                    onClick={() => setForm(f => ({ ...f, productType: opt.value }))}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      padding: '16px', borderRadius: '10px', cursor: 'pointer',
                      border: form.productType === opt.value
                        ? '2px solid #1FA971'
                        : '1.5px solid #e5e7eb',
                      background: form.productType === opt.value ? '#f0fdf8' : '#fff',
                      textAlign: 'left', fontFamily: 'inherit',
                      transition: 'all 0.15s',
                    }}
                  >
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '50%', flexShrink: 0,
                      background: form.productType === opt.value ? '#dcfce7' : '#f3f4f6',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px', transition: 'background 0.15s',
                    }}>
                      {opt.icon}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: form.productType === opt.value ? '#1FA971' : '#0B1F3A' }}>
                        {opt.value}
                      </p>
                      <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#9ca3af' }}>{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Target Rate */}
            <div style={{ marginBottom: '28px' }}>
              <p style={label}>5. Target Rate (Per Unit) <span style={required}>*</span></p>
              <div className="rq-rate-row" style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <select
                  className="rq-input rq-rate-currency"
                  value={form.currency}
                  onChange={set('currency')}
                  style={{ ...field, width: '130px', flexShrink: 0 }}
                >
                  {CURRENCIES.map(c => <option key={c.label} value={c.label}>{c.label}</option>)}
                </select>
                <input
                  className="rq-input"
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter your target rate"
                  value={form.targetRate}
                  onChange={set('targetRate')}
                  style={{ ...field, flex: 1, minWidth: '120px' }}
                />
                <span className="rq-rate-per" style={{ fontSize: '13px', color: '#6b7280', flexShrink: 0, fontWeight: '500' }}>Per</span>
                <select
                  className="rq-input rq-rate-unit"
                  required
                  value={form.unit}
                  onChange={set('unit')}
                  style={{ ...field, width: '160px', flexShrink: 0, color: form.unit ? '#333' : '#9ca3af' }}
                >
                  <option value="">Select Unit</option>
                  {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <p style={hint}>Enter the price you are expecting for this product.</p>
            </div>

            {/* 6. Additional Info */}
            <div style={{ marginBottom: '32px' }}>
              <p style={{ ...label, marginBottom: '4px' }}>
                6. Additional Information
                <span style={{ fontSize: '12px', fontWeight: '400', color: '#9ca3af', marginLeft: '6px' }}>(Optional)</span>
              </p>
              <p style={{ ...hint, marginBottom: '10px', marginTop: 0 }}>Any special requirements, preferred incoterms, port of destination, etc.</p>
              <div style={{ position: 'relative' }}>
                <textarea
                  className="rq-input"
                  maxLength={500}
                  rows={3}
                  placeholder="Any other information you would like to share…"
                  value={form.additionalInfo}
                  onChange={set('additionalInfo')}
                  style={{ ...field, resize: 'vertical', minHeight: '90px', paddingBottom: '28px' }}
                />
                <span style={{ position: 'absolute', bottom: '10px', right: '12px', fontSize: '11px', color: '#bbb' }}>
                  {form.additionalInfo.length}/500
                </span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%', padding: '14px', borderRadius: '9px',
                background: '#1FA971', border: 'none', color: '#fff',
                fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                fontFamily: 'inherit', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '10px', letterSpacing: '0.2px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Submit Request
            </button>

            {/* Security note */}
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Your information is secure and will not be shared with third parties.
            </p>

          </form>
        </div>

        {/* ── Sidebar ────────────────────────────────────────────── */}
        <div className="rq-sidebar" style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Why request a quote */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', padding: '24px' }}>
            <h3 style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: '800', color: '#0B1F3A' }}>Why Request a Quote?</h3>
            <div style={{ width: '32px', height: '3px', background: '#1FA971', borderRadius: '2px', marginBottom: '20px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {WHY_ITEMS.map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    background: '#f0fdf8', border: '1px solid #bbf7d0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '13.5px', fontWeight: '700', color: '#0B1F3A' }}>{item.title}</p>
                    <p style={{ margin: 0, fontSize: '12.5px', color: '#6b7280', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Need Help */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', padding: '24px' }}>
            <h3 style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: '800', color: '#0B1F3A' }}>Need Help?</h3>
            <div style={{ width: '32px', height: '3px', background: '#1FA971', borderRadius: '2px', marginBottom: '18px' }} />
            <p style={{ margin: '0 0 18px', fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>
              Our sourcing experts are ready to assist you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Email */}
              <a
                href="mailto:info@importwiz.shop"
                style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', textDecoration: 'none' }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f0fdf8', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p style={{ margin: '0 0 2px', fontSize: '13.5px', fontWeight: '700', color: '#0B1F3A' }}>info@importwiz.shop</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

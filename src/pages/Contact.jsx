import { useState } from 'react';
import { Link } from 'react-router-dom';

// ── Styles defined up-front ────────────────────────────────────────────────
const S = {
  page:    { background: '#f7f8fa', minHeight: '100vh' },
  header:  { background: 'linear-gradient(135deg, #f0f9f5 0%, #e8f4ff 100%)', borderBottom: '1px solid #e5e7eb' },
  headerInner: { maxWidth: '1280px', margin: '0 auto', padding: '36px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' },
  h1:      { fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', color: '#0B1F3A', margin: '0 0 10px', lineHeight: '1.15' },
  sub:     { fontSize: '15px', color: '#6b7280', margin: 0, lineHeight: '1.7', maxWidth: '420px' },
  headerImg: { width: '280px', height: '160px', objectFit: 'cover', borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' },
  body:    { maxWidth: '1280px', margin: '0 auto', padding: '36px 32px 60px', display: 'flex', gap: '28px', alignItems: 'flex-start' },
  card:    { flex: 1, background: '#fff', borderRadius: '16px', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', padding: '36px 32px' },
  cardTitle: { fontSize: '18px', fontWeight: '800', color: '#0B1F3A', margin: '0 0 6px' },
  cardSub:   { fontSize: '13px', color: '#9ca3af', margin: '0 0 28px' },
  grid2:   { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' },
  label:   { display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' },
  input:   { width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #e5e7eb', background: '#fff', fontSize: '13.5px', color: '#333', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' },
  submitBtn: { width: '100%', padding: '13px', background: '#1FA971', border: 'none', borderRadius: '9px', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  sidebar: { width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' },
  infoCard: { background: '#fff', borderRadius: '12px', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: '14px' },
  iconBox: { width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0, background: '#f0fdf8', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  infoLabel: { fontSize: '11px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px' },
  noteBox: { background: '#f0fdf8', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '16px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' },
  successBox: { textAlign: 'center', padding: '48px 0' },
  successIcon: { width: '56px', height: '56px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' },
};

const req = { color: '#ef4444' };

// ── Component ──────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href =
      `mailto:info@importwiz.shop` +
      `?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div style={S.page}>
      <style>{`
        .ct-input:focus { border-color: #1FA971 !important; box-shadow: 0 0 0 3px rgba(31,169,113,0.1); }
        @media (max-width: 860px) { .ct-body { flex-direction: column !important; } .ct-sidebar { width: 100% !important; } }
        @media (max-width: 640px) {
          .ct-header-inner { padding: 24px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
          .ct-header-img { display: none !important; }
          .ct-body { padding: 24px 20px 48px !important; }
        }
        @media (max-width: 480px) {
          .ct-header-inner { padding: 20px 16px !important; }
          .ct-body { padding: 20px 16px 40px !important; }
          .ct-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <div style={S.header}>
        <div style={S.headerInner} className="ct-header-inner">
          <div>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px', fontSize: '13px', color: '#9ca3af' }}>
              <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>
              <span>›</span>
              <span style={{ color: '#0B1F3A', fontWeight: '500' }}>Contact Us</span>
            </nav>
            <h1 style={S.h1}>
              Get in <span style={{ color: '#1FA971' }}>Touch</span>
            </h1>
            <p style={S.sub}>Have a question or want to start sourcing? Send us a message and we'll get back to you.</p>
          </div>
          <img
            src="/images/categories/inquiry.jpg"
            alt=""
            style={S.headerImg}
            className="ct-header-img"
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Body */}
      <div className="ct-body" style={S.body}>

        {/* Form card */}
        <div style={S.card}>
          <h2 style={S.cardTitle}>Send us a Message</h2>
          <p style={S.cardSub}>We typically respond within 24 hours.</p>

          {submitted ? (
            <div style={S.successBox}>
              <div style={S.successIcon}>✅</div>
              <h3 style={{ margin: '0 0 8px', fontSize: '17px', fontWeight: '800', color: '#0B1F3A' }}>Message Sent!</h3>
              <p style={{ margin: '0 0 20px', color: '#6b7280', fontSize: '14px' }}>
                Your message has been sent to <strong>info@importwiz.shop</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ background: '#1FA971', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="ct-form-grid" style={S.grid2}>
                <div>
                  <label style={S.label}>Full Name <span style={req}>*</span></label>
                  <input className="ct-input" required style={S.input} placeholder="Your full name" value={form.name} onChange={set('name')} />
                </div>
                <div>
                  <label style={S.label}>Email Address <span style={req}>*</span></label>
                  <input className="ct-input" required type="email" style={S.input} placeholder="you@example.com" value={form.email} onChange={set('email')} />
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={S.label}>Subject <span style={req}>*</span></label>
                <input className="ct-input" required style={S.input} placeholder="What is this about?" value={form.subject} onChange={set('subject')} />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={S.label}>Message <span style={req}>*</span></label>
                <textarea
                  className="ct-input"
                  required
                  rows={5}
                  style={{ ...S.input, resize: 'vertical', minHeight: '130px' }}
                  placeholder="Write your message here…"
                  value={form.message}
                  onChange={set('message')}
                />
              </div>

              <button type="submit" style={S.submitBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="ct-sidebar" style={S.sidebar}>

          {/* Email */}
          <div style={S.infoCard}>
            <div style={S.iconBox}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p style={S.infoLabel}>Email</p>
              <a href="mailto:info@importwiz.shop" style={{ fontSize: '14px', fontWeight: '600', color: '#0B1F3A', textDecoration: 'none' }}>
                info@importwiz.shop
              </a>
            </div>
          </div>

          {/* Address */}
          <div style={S.infoCard}>
            <div style={{ ...S.iconBox, alignSelf: 'flex-start', marginTop: '2px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p style={S.infoLabel}>Address</p>
              <address style={{ fontStyle: 'normal', fontSize: '14px', color: '#374151', lineHeight: '1.75', fontWeight: '500' }}>
                <strong style={{ color: '#0B1F3A' }}>India:</strong><br />
                26 A/1C, Shivkuti, Teliarganj,<br />
                Prayagraj, India<br />
                <br />
                <strong style={{ color: '#0B1F3A' }}>Tanzania:</strong><br />
                AMI Building, Samora/Mkwépu St.,<br />
                Dar es Salaam
              </address>
            </div>
          </div>

          {/* Note */}
          <div style={S.noteBox}>
            <span style={{ fontSize: '18px', flexShrink: 0 }}>⏱</span>
            <p style={{ margin: 0, fontSize: '13px', color: '#166534', lineHeight: '1.6' }}>
              <strong>Quick response.</strong> We aim to reply to all enquiries within 24 hours on business days.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

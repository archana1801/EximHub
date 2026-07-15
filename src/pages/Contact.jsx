import { useState } from 'react';

const ACCESS_KEY = '5c8087d3-a4f1-4444-a116-2d0cc47f79d2';

// ── Styles ─────────────────────────────────────────────────────────────────
const S = {
  page:    { background: '#f7f8fa', minHeight: '100vh' },

  /* ── Hero ── */
  hero: { background: '#0B1F3A', position: 'relative', overflow: 'hidden' },
  heroContent: { maxWidth: '1280px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 1 },
  heroInner:   { maxWidth: '520px', padding: '52px 0 44px' },

  /* ── Body ── */
  body:    { maxWidth: '1280px', margin: '0 auto', padding: '36px 32px 60px', display: 'flex', gap: '28px', alignItems: 'flex-start' },
  card:    { flex: 1, background: '#fff', borderRadius: '16px', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', padding: '36px 32px' },
  cardTitle: { fontSize: '18px', fontWeight: '800', color: '#0B1F3A', margin: '0 0 6px' },
  cardSub:   { fontSize: '13px', color: '#9ca3af', margin: '0 0 28px' },
  grid2:   { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' },
  label:   { display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' },
  input:   { width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #e5e7eb', background: '#fff', fontSize: '13.5px', color: '#333', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' },
  submitBtn: { width: '100%', padding: '13px', background: '#1FA971', border: 'none', borderRadius: '9px', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.15s' },
  sidebar: { width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' },
  infoCard: { background: '#fff', borderRadius: '12px', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: '14px' },
  iconBox: { width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0, background: '#f0fdf8', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  infoLabel: { fontSize: '11px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px' },
  noteBox: { background: '#f0fdf8', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '16px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' },
  successBox: { textAlign: 'center', padding: '48px 0' },
  successIcon: { width: '56px', height: '56px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' },
};

const req = { color: '#ef4444' };

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

// ── Component ──────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm]           = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitError('');
    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject:    'New Contact Inquiry',
          from_name:  form.name,
          replyto:    form.email,
          'Full Name':    form.name,
          'Email':        form.email,
          'Subject':      form.subject,
          'Message':      form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setForm(INITIAL_FORM);
        setSubmitted(true);
      } else {
        setSubmitError(result.message || 'Submission failed. Please try again.');
      }
    } catch {
      setSubmitError('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={S.page}>
      <style>{`
        .ct-input:focus { border-color: #1FA971 !important; box-shadow: 0 0 0 3px rgba(31,169,113,0.1); }

        /* hero responsive */
        .ct-img-wrap { position: absolute; right: 0; top: 0; bottom: 0; width: 52%; z-index: 0; }
        @media (max-width: 768px) { .ct-img-wrap { display: none !important; } }
        @media (max-width: 640px) {
          .ct-hero-content { padding: 0 20px !important; }
          .ct-hero-inner   { padding: 36px 0 28px !important; }
        }
        @media (max-width: 480px) {
          .ct-hero-content { padding: 0 16px !important; }
        }

        /* body responsive */
        @media (max-width: 860px) { .ct-body { flex-direction: column !important; } .ct-sidebar { width: 100% !important; } }
        @media (max-width: 640px) {
          .ct-body { padding: 24px 20px 48px !important; }
        }
        @media (max-width: 480px) {
          .ct-body { padding: 20px 16px 40px !important; }
          .ct-form-grid { grid-template-columns: 1fr !important; }
        }

        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={S.hero}>
        {/* dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none', zIndex: 0 }} />

        {/* full-bleed image on the right */}
        <div className="ct-img-wrap">
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0B1F3A 0%, rgba(11,31,58,0.55) 35%, transparent 70%)', zIndex: 1 }} />
          <img
            src="/images/categories/inquiry.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => { e.target.parentElement.style.display = 'none'; }}
          />
        </div>

        {/* text content */}
        <div style={S.heroContent} className="ct-hero-content">
          <div style={S.heroInner} className="ct-hero-inner">
            <h1 style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: '800', color: '#fff', margin: '0 0 14px', lineHeight: '1.15', letterSpacing: '-0.3px' }}>
              Get in <span style={{ color: '#1FA971' }}>Touch</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.62)', margin: 0, lineHeight: '1.75', maxWidth: '400px' }}>
              Have a question or want to start sourcing? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <div className="ct-body" style={S.body}>

        {/* Form card */}
        <div style={S.card}>
          <h2 style={S.cardTitle}>Send us a Message</h2>
          <p style={S.cardSub}>We typically respond within 24 hours.</p>

          {submitted ? (
            <div style={S.successBox}>
              <div style={S.successIcon}>✅</div>
              <h3 style={{ margin: '0 0 10px', fontSize: '18px', fontWeight: '800', color: '#0B1F3A' }}>Message Received!</h3>
              <p style={{ margin: '0 0 24px', color: '#6b7280', fontSize: '14px', lineHeight: '1.7', maxWidth: '360px', marginLeft: 'auto', marginRight: 'auto' }}>
                Thank you for contacting ImportWiz. We have received your inquiry and will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ background: '#1FA971', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 28px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Send Another Message
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

              {/* Inline error */}
              {submitError && (
                <div style={{ marginBottom: '16px', padding: '12px 16px', background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}>
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p style={{ margin: 0, fontSize: '13px', color: '#b91c1c', lineHeight: '1.5' }}>{submitError}</p>
                </div>
              )}

              <button type="submit" disabled={isSending} style={{ ...S.submitBtn, background: isSending ? '#6b7280' : '#1FA971', cursor: isSending ? 'not-allowed' : 'pointer' }}>
                {isSending ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
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

          {/* Phone */}
          <div style={S.infoCard}>
            <div style={S.iconBox}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p style={S.infoLabel}>Phone</p>
              <a href="tel:+14175412670" style={{ fontSize: '14px', fontWeight: '600', color: '#0B1F3A', textDecoration: 'none' }}>
                +1 (417) 541-2670
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
                <strong style={{ color: '#0B1F3A' }}>Tanzania:</strong><br />
                AMI Building, Samora/Mkwépu St.,<br />
                Dar es Salaam
              </address>
            </div>
          </div>

          {/* Social */}
          <div style={S.infoCard}>
            <div style={{ flex: 1 }}>
              <p style={S.infoLabel}>Follow Us</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <a
                  href="https://www.facebook.com/share/1Cn8oXUuxh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '7px', background: '#1877f2', color: '#fff', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/importwizz?igsh=amhzdTNuaHo3bmF0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '7px', background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', color: '#fff', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
              </div>
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

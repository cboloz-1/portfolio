const ContactIcon = ({ type }) => {
  if (type === 'email') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
  if (type === 'linkedin') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (type === 'github') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

const contacts = [
  {
    type: 'email',
    label: 'Email',
    value: 'cdboloz1@gmail.com',
    display: 'cdboloz1@gmail.com',
    href: 'mailto:cdboloz1@gmail.com',
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/carsten-boloz',
    display: 'linkedin.com/in/carsten-boloz',
    href: 'https://www.linkedin.com/in/carsten-boloz/',
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'github.com/cboloz-1',
    display: 'github.com/cboloz-1',
    href: 'https://github.com/cboloz-1?tab=repositories',
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '120px 56px',
      borderTop: '1px solid var(--border)',
      position: 'relative',
    }}>

      {/* Section label */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        marginBottom: '64px',
        marginTop: '25px',
      }}>
        <span style={{
          fontSize: '11px', fontWeight: 700,
          color: 'var(--green)', letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-mono)',
        }}>
          04 / Contact
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}>

        {/* LEFT */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 800,
            color: 'var(--white)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Get in touch
          </h2>
          <p style={{
            fontSize: '15px', color: 'var(--text)',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.8,
            maxWidth: '400px',
          }}>
            I am always open to connecting with people in the infrastructure / IT space! 
            Whether you have a question or just want to connect, feel free to reach out.
          </p>
        </div>

        {/* RIGHT — contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {contacts.map(contact => (
            <a
              key={contact.type}
              href={contact.href}
              target={contact.type !== 'email' ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '24px 28px',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                background: 'var(--card)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--green)'
                e.currentTarget.style.background = 'rgba(0,200,150,0.03)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--card)'
              }}
            >
              <div style={{ color: 'var(--green)', flexShrink: 0 }}>
                <ContactIcon type={contact.type} />
              </div>
              <div>
                <div style={{
                  fontSize: '11px', fontWeight: 700,
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}>
                  {contact.label}
                </div>
                <div style={{
                  fontSize: '15px', fontWeight: 600,
                  color: 'var(--text2)',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {contact.display}
                </div>
              </div>

              {/* Arrow */}
              <div style={{
                marginLeft: 'auto',
                color: 'var(--muted)',
                fontSize: '18px',
              }}>
                →
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '120px',
        paddingTop: '40px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontSize: '13px', color: 'var(--muted)',
          fontFamily: 'var(--font-mono)',
        }}>
          © 2026 Carsten Boloz
        </span>
        <span style={{
          fontSize: '13px', color: 'var(--muted)',
          fontFamily: 'var(--font-mono)',
        }}>
          Built with React + Vite. Deployed on Netlify.
        </span>
      </div>

    </section>
  )
}
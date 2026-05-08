const IconGear = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)

const IconTrend = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)

const IconPerson = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const stats = [
  { value: '> 1yr', label: 'In IT' },
  { value: 'MA', label: 'Based In' },
]

const timeline = [
  {
    date: 'Jun 2025 - Present',
    title: 'Information Systems Specialist',
    org: 'Aptima, Inc.',
    location: 'Woburn, MA',
    current: true,
    education: false,
  },
  {
    date: 'Mar 2025 - May 2025',
    title: 'Cybersecurity Intern',
    org: 'MassCyberCenter / MA Technology Collaborative',
    location: 'Remote',
    current: false,
    education: false,
  },
  {
    date: 'Sep 2024 - May 2025',
    title: 'Student IT Consultant',
    org: 'Bridgewater State University',
    location: 'Bridgewater, MA',
    current: false,
    education: false,
  },
  {
    date: 'May 2025',
    title: 'B.S. Criminal Justice',
    org: 'Minor in Cybersecurity & Digital Forensics',
    location: 'Bridgewater State University',
    current: false,
    education: true,
  },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '120px 56px',
      position: 'relative',
      borderTop: '1px solid var(--border)',
    }}>

      {/* Section label */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        marginBottom: '64px',
      }}>
        <span style={{
          fontSize: '11px', fontWeight: 700,
          color: 'var(--green)', letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-mono)',
        }}>
          01 / About
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* Main grid */}
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
            marginBottom: '32px',
          }}>
            A little bit<br />about me.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              `I graduated from Bridgewater State University in May 2025 with a B.S. in Criminal Justice and a minor in Cybersecurity and Digital Forensics. I started my career at Aptima, Inc., a R&D government contractor in Massachusetts, as an Information Systems Specialist.`,
              `My day-to-day involves enterprise endpoint management using Jamf, supporting macOS environments across the organization, as well as provisioning and maintaining infrastructure on AWS GovCloud using Terraform, Ansible, and Docker.`,
              `Outside of work, I enjoy staying active through golf and running, as well as spending time with friends and family!`,
            ].map((p, i) => (
              <p key={i} style={{
                fontSize: '15px', lineHeight: 1.8,
                color: 'var(--text2)',
                fontFamily: 'var(--font-sans)',
              }}>
                {p}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '32px',
            marginTop: '48px',
            paddingTop: '48px',
            borderTop: '1px solid var(--border)',
          }}>
            {stats.map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontSize: '28px', fontWeight: 800,
                  color: 'var(--green)',
                  fontFamily: 'var(--font-sans)',
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '11px', color: 'var(--text)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — timeline */}
        <div style={{
          padding: '32px',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          background: 'var(--card)',
          height: '100%',
        }}>
          <div style={{
            fontSize: '11px', fontWeight: 700,
            color: 'var(--green)', letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
            marginBottom: '32px',
          }}>
            Experience & Education
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {timeline.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px',
                paddingBottom: i < timeline.length - 1 ? '32px' : '0',
              }}>

                {/* Dot + line */}
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', flexShrink: 0,
                  width: '16px',
                }}>
                  <div style={{
                    width: '14px', height: '14px',
                    borderRadius: '50%',
                    background: item.current ? 'var(--green)' : item.education ? 'var(--cyan)' : 'var(--border2)',
                    flexShrink: 0,
                    marginTop: '3px',
                    boxShadow: item.current ? '0 0 10px var(--green)' : 'none',
                  }} />
                  {i < timeline.length - 1 && (
                    <div style={{
                      width: '1px',
                      flex: 1,
                      background: 'var(--border)',
                      marginTop: '6px',
                      minHeight: '40px',
                    }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingBottom: '4px' }}>
                  <div style={{
                    fontSize: '10px', color: 'var(--muted)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}>
                    {item.date}
                  </div>
                  <div style={{
                    fontSize: '15px', fontWeight: 700,
                    color: item.current ? 'var(--white)' : 'var(--text2)',
                    fontFamily: 'var(--font-sans)',
                    marginBottom: '4px',
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: item.current ? 'var(--green)' : item.education ? 'var(--cyan)' : 'var(--text)',
                    fontFamily: 'var(--font-sans)',
                    marginBottom: '2px',
                  }}>
                    {item.org}
                  </div>
                  <div style={{
                    fontSize: '11px', color: 'var(--muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
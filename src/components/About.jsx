const IconGear = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)

const IconCloud = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
)

const IconTrend = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)

const stats = [
  { value: '> 1yr', label: 'In IT' },
  { value: 'BSU', label: 'Bridgewater State' },
  { value: 'MA', label: 'Based In' },
]

const values = [
  { icon: <IconGear />, title: 'Builder Mentality', desc: 'I learn by doing. Every concept I pick up gets turned into a real project.' },
  { icon: <IconCloud />, title: 'Background', desc: 'Started in endpoint management and have been expanding into cloud infrastructure, IaC, and automation on my own time.' },
  { icon: <IconTrend />, title: 'Always Improving', desc: 'Whether it is a new cert, a home lab, or a side project, I am always working toward something.' },
]

const currently = [
  'Building cloud infrastructure projects at home',
  'Deepening AWS knowledge beyond the SAA',
  'Terraform Associate on the near-term roadmap',
  'Staying active through soccer, golf, and running',
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
              `I graduated from Bridgewater State University and began my career as an Information Systems Specialist at a defense-focused technology contractor in Massachusetts. While my role initially centered on enterprise endpoint management using Jamf in macOS environments, I have increasingly taken on responsibilities related to cloud infrastructure, system provisioning, and access management.`,
              `Over the past year, I’ve focused on deepening my skill set in cloud and infrastructure engineering. I’ve gained hands-on experience with tools like Terraform, Ansible, Docker, and AWS, while strengthening my understanding of automation, networking, and identity systems.`,
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

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {values.map(v => (
            <div key={v.title} style={{
              padding: '28px',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              background: 'var(--card)',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                color: 'var(--green)',
                marginBottom: '12px',
                display: 'flex',
              }}>
                {v.icon}
              </div>
              <div style={{
                fontSize: '16px', fontWeight: 700,
                color: 'var(--white)',
                fontFamily: 'var(--font-sans)',
                marginBottom: '8px',
              }}>
                {v.title}
              </div>
              <div style={{
                fontSize: '14px', lineHeight: 1.7,
                color: 'var(--text)',
                fontFamily: 'var(--font-sans)',
              }}>
                {v.desc}
              </div>
            </div>
          ))}

          {/* Currently */}
          <div style={{
            padding: '28px',
            border: '1px solid rgba(0,200,150,0.2)',
            borderRadius: '12px',
            background: 'rgba(0,200,150,0.03)',
          }}>
            <div style={{
              fontSize: '11px', fontWeight: 700,
              color: 'var(--green)', letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: '16px',
            }}>
              Currently
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currently.map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                }}>
                  <div style={{
                    width: '4px', height: '4px',
                    borderRadius: '50%',
                    background: 'var(--green)',
                    marginTop: '8px',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: '14px', color: 'var(--text2)',
                    fontFamily: 'var(--font-sans)',
                    lineHeight: 1.6,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
const groups = [
  {
    label: 'Cloud & Infrastructure',
    skills: ['AWS GovCloud', 'AWS Commercial', 'AWS Networking', 'Terraform', 'Ansible', 'Docker', 'Docker Compose', 'NGINX']
  },
  {
    label: 'Identity & Access',
    skills: ['Keycloak', 'Okta', 'Entra ID', 'Active Directory']
  },
  {
    label: 'Endpoint Management',
    skills: ['Jamf Pro', 'Intune', 'macOS', 'Windows']
  },
  {
    label: 'Systems & Tools',
    skills: ['Linux', 'WSL', 'Bash', 'Git', 'Zabbix', 'AWS Console']
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '120px 56px',
      borderTop: '1px solid var(--border)',
      position: 'relative',
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
          02 / Skills
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(32px, 4vw, 52px)',
        fontWeight: 800,
        color: 'var(--white)',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '16px',
        textAlign: 'center',
      }}>
        Tools I work with.
      </h2>
      <p style={{
        fontSize: '15px', color: 'var(--text)',
        fontFamily: 'var(--font-sans)',
        maxWidth: '480px', lineHeight: 1.7,
        marginBottom: '56px',
        textAlign: 'center',
        margin: '0 auto 56px',
      }}>
        A breakdown of the technologies I use day-to-day and the ones
        I have been building with on my own time.
      </p>

      {/* Skills grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {groups.map(group => (
          <div key={group.label} style={{
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
              fontSize: '13px', fontWeight: 700,
              color: 'var(--cyan)',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.04em',
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border)',
            }}>
              {group.label}
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}>
              {group.skills.map(skill => (
                <span key={skill} style={{
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: '1px solid var(--border2)',
                  fontSize: '12px',
                  color: 'var(--text2)',
                  fontFamily: 'var(--font-sans)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--cyan)'
                    e.currentTarget.style.color = 'var(--cyan)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border2)'
                    e.currentTarget.style.color = 'var(--text2)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
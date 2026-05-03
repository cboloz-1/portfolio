const links = ['Home', 'About', 'Certifications', 'Skills', 'Projects', 'Contact']

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 56px',
      background: 'rgba(5,10,18,0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px', height: '32px',
          border: '1px solid var(--green)',
          borderRadius: '6px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: '10px', height: '10px',
            background: 'var(--green)',
            borderRadius: '2px',
          }} />
        </div>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--white)',
          letterSpacing: '0.02em',
        }}>
          Carsten Boloz
        </span>
      </div>

      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link}>
            <a
              href={'#' + link.toLowerCase()}
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text)',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--green)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}
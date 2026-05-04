import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact']

export default function Nav() {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      const scrollY = window.scrollY + 100
      sections.forEach(section => {
        if (!section) return
        if (section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
          setActive(section.id.charAt(0).toUpperCase() + section.id.slice(1))
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              onClick={() => setActive(link)}
              style={{
                fontSize: '13px',
                fontWeight: active === link ? 600 : 500,
                color: active === link ? 'var(--green)' : 'var(--text)',
                letterSpacing: '0.04em',
                fontFamily: 'var(--font-sans)',
                transition: 'color 0.2s',
                paddingBottom: '4px',
                borderBottom: active === link ? '1px solid var(--green)' : '1px solid transparent',
              }}
              onMouseEnter={e => {
                if (active !== link) e.target.style.color = 'var(--white)'
              }}
              onMouseLeave={e => {
                if (active !== link) e.target.style.color = 'var(--text)'
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}
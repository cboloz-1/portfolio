import { useState, useEffect } from 'react'
import awsSaa from '../assets/aws-saa.png'
import jamf from '../assets/jamf.png'
import isc2 from '../assets/isc2-cc.png'
import terraform from '../assets/terraform.png'
import headshot from '../assets/headshot.jpg'

const lines = [
  '> Establishing secure connection...',
  '> Authenticating credentials...',
  '> Loading portfolio...',
  '> Access granted.',
]

const certs = [
  { img: isc2, label: 'ISC2 CC', sub: 'Certified in Cybersecurity', done: true, darkBg: true },
  { img: jamf,   label: 'Jamf 100',      sub: 'Jamf Pro Associate',         done: true  },
  { img: awsSaa, label: 'AWS SAA',        sub: 'Solutions Architect',        done: true  },
  { img: terraform,   label: 'TF Associate',   sub: 'In Progress',                done: false },
]

export default function Hero() {
  const [displayed, setDisplayed] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (currentLine >= lines.length) { setDone(true); return }
    if (currentChar < lines[currentLine].length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] || '') + lines[currentLine][currentChar]
          return next
        })
        setCurrentChar(c => c + 1)
      }, 30)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 350)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '100px 56px 80px',
      position: 'relative',
      overflow: 'hidden',
      gap: '80px',
    }}>

      {/* Blueprint grid background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.025,
        backgroundImage: `
          linear-gradient(var(--cyan) 1px, transparent 1px),
          linear-gradient(90deg, var(--cyan) 1px, transparent 1px),
          linear-gradient(rgba(0,168,200,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,168,200,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        pointerEvents: 'none',
      }} />

      {/* Glow top left */}
      <div style={{
        position: 'absolute', top: '-200px', left: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,200,150,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Glow bottom right */}
      <div style={{
        position: 'absolute', bottom: '-200px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(20,85,164,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* LEFT — text content */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(42px, 5vw, 72px)',
          fontWeight: 900,
          color: 'var(--white)',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: '20px',
        }}>
          Carsten<br />Boloz
        </h1>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          marginBottom: '28px',
        }}>
          <span style={{
            fontSize: '14px', fontWeight: 500,
            color: 'var(--text2)',
            fontFamily: 'var(--font-sans)',
          }}>
            Information Systems Specialist
          </span>
          <span style={{ color: 'var(--green)', fontSize: '16px', fontWeight: 700 }}>
            →
          </span>
          <span style={{
            fontSize: '14px', fontWeight: 600,
            color: 'var(--green)',
            fontFamily: 'var(--font-sans)',
          }}>
            Cloud Engineer
          </span>
        </div>

        <p style={{
          fontSize: '15px',
          color: 'var(--text)',
          lineHeight: 1.7,
          maxWidth: '420px',
          marginBottom: '40px',
          fontFamily: 'var(--font-sans)',
        }}>
          Started my career in IT as an Information Systems Specialist managing
          enterprise endpoints with Jamf. Now focused on cloud infrastructure,
          provisioning environments with Terraform, automating configuration
          with Ansible, and deploying containerized workloads on AWS. Actively
          building toward a full-time cloud engineering role.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#projects" style={{
            padding: '12px 28px',
            background: 'var(--green)',
            color: 'var(--bg)',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 700,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.04em',
            transition: 'opacity 0.2s',
            cursor: 'pointer',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View Projects
          </a>
          <a href="#contact" style={{
            padding: '12px 28px',
            border: '1px solid var(--border2)',
            color: 'var(--text2)',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.04em',
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--green)'
              e.currentTarget.style.color = 'var(--green)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border2)'
              e.currentTarget.style.color = 'var(--text2)'
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT — headshot + terminal + certs */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>

{/* Headshot */}
        <div style={{
          width: '200px', height: '200px',
          borderRadius: '16px',
          border: '1px solid var(--border2)',
          alignSelf: 'flex-end',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <img
            src={headshot}
            alt="Carsten Boloz"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </div>

        {/* Terminal */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '10px 16px',
            borderBottom: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
              <div key={i} style={{
                width: '10px', height: '10px',
                borderRadius: '50%', background: c, opacity: 0.7,
              }} />
            ))}
            <span style={{
              marginLeft: '8px', fontSize: '11px',
              color: 'var(--text)', fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
            }}>
              ~/cb-portfolio
            </span>
          </div>
          <div style={{ padding: '20px', minHeight: '120px' }}>
            {displayed.map((line, i) => (
              <div key={i} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                lineHeight: '1.9',
                color: i === lines.length - 1 ? 'var(--green)' : 'var(--text)',
              }}>
                {line}
                {i === currentLine && !done && (
                  <span style={{
                    display: 'inline-block',
                    width: '7px', height: '13px',
                    background: 'var(--green)',
                    marginLeft: '2px',
                    animation: 'blink 1s step-end infinite',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cert badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}>
          {certs.map(cert => (
            <div key={cert.label} style={{
              padding: '16px 10px',
              border: `1px solid ${cert.done ? 'var(--border2)' : 'var(--border)'}`,
              borderRadius: '10px',
              background: 'var(--card)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              opacity: cert.done ? 1 : 0.5,
              position: 'relative',
            }}>
              {cert.img ? (
                <img
                  src={cert.img}
                  alt={cert.label}
                  style={{
                    width: '72px', height: '72px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    background: cert.darkBg ? '#ffffff' : 'transparent',
                    padding: cert.darkBg ? '6px' : '0',
                  }}
                />
              ) : (
                <img
                  src={terraform}
                  alt={cert.label}
                  style={{
                    width: '72px', height: '72px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    filter: 'grayscale(100%)',
                    opacity: 0.5,
                  }}
                />
              )}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '10px', fontWeight: 700,
                  color: cert.done ? 'var(--white)' : 'var(--text)',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.04em',
                }}>
                  {cert.label}
                </div>
                <div style={{
                  fontSize: '9px',
                  color: cert.done ? 'var(--green)' : 'var(--cyan)',
                  fontFamily: 'var(--font-mono)',
                  marginTop: '2px',
                  letterSpacing: '0.04em',
                }}>
                  {cert.done ? cert.sub : '[ in progress ]'}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
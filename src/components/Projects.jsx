const projects = [
  {
    title: 'Automated Cloud Infrastructure Pipeline',
    description: 'Provisioned a full AWS environment from scratch using Terraform and configured it automatically with Ansible. Deployed a containerized Flask application behind an NGINX reverse proxy on an Ubuntu EC2 instance. State managed remotely via S3 backend.',
    tags: ['Terraform', 'Ansible', 'AWS EC2', 'Docker', 'NGINX', 'Ubuntu', 'S3'],
    github: 'https://github.com/cboloz-1/infra-lab',
    live: null,
    status: 'complete',
  },
  {
    title: 'AWS Infrastructure Dashboard + CI/CD Pipeline',
    description: 'Built a GitHub Actions pipeline that scans Terraform with Checkov on every push, deploys infrastructure changes automatically, and sends email notifications via SNS on success or failure. Live Grafana dashboard connected to CloudWatch displays EC2 metrics and estimated AWS costs.',
    tags: ['GitHub Actions', 'Terraform', 'Checkov', 'Docker', 'Grafana', 'CloudWatch', 'AWS SNS'],
    github: 'https://github.com/cboloz-1/aws-dashboard',
    live: null,
    status: 'complete',
  },
  {
    title: 'Kubernetes Platform with GitOps',
    description: 'Self-hosted Kubernetes cluster on AWS EC2 using k3s. All workloads deployed via ArgoCD GitOps — every push to GitHub automatically deploys to the cluster. Automatic HTTPS via cert-manager and Let\'s Encrypt. Runs Grafana connected to both Prometheus and CloudWatch for full observability.',
    tags: ['Kubernetes', 'k3s', 'ArgoCD', 'Terraform', 'Grafana', 'Prometheus', 'cert-manager', 'Traefik'],
    github: 'https://github.com/cboloz-1/k8s-platform',
    live: null,
    status: 'complete',
  },
  {
    title: 'AWS Cost Intelligence & Security Scanner',
    description: 'Serverless Lambda function that runs weekly, scans AWS for idle resources and security misconfigurations, pulls cost data from Cost Explorer, and delivers a formatted HTML report via SES. Publishes custom metrics to CloudWatch for Grafana dashboard integration.',
    tags: ['AWS Lambda', 'Python', 'Terraform', 'AWS SES', 'CloudWatch', 'EventBridge', 'Cost Explorer'],
    github: 'https://github.com/cboloz-1/aws-cost-optimizer',
    live: null,
    status: 'complete',
  },
]

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: '120px 56px',
      borderTop: '1px solid var(--border)',
      position: 'relative',
    }}>

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
          03 / Projects
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
      }}>
        Things I have built.
      </h2>
      <p style={{
        fontSize: '15px', color: 'var(--text)',
        fontFamily: 'var(--font-sans)',
        maxWidth: '480px', lineHeight: 1.7,
        marginBottom: '56px',
      }}>
        Personal projects I have built outside of work to develop my
        cloud and infrastructure skills.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        maxWidth: '1400px',
      }}>
        {projects.map(project => (
          <div key={project.title} style={{
            padding: '32px',
            border: `1px solid ${project.status === 'wip' ? 'var(--border)' : 'var(--border2)'}`,
            borderRadius: '12px',
            background: 'var(--card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            opacity: project.status === 'wip' ? 0.5 : 1,
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => {
              if (project.status !== 'wip') e.currentTarget.style.borderColor = 'var(--green)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = project.status === 'wip' ? 'var(--border)' : 'var(--border2)'
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--white)',
              lineHeight: 1.3,
            }}>
              {project.title}
            </h3>

            <p style={{
              fontSize: '14px',
              color: 'var(--text)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.7,
              flex: 1,
            }}>
              {project.description}
            </p>

            {project.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                    fontSize: '11px',
                    color: 'var(--cyan)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    background: 'rgba(0,168,200,0.04)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {project.status === 'complete' && (
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px',
                    border: '1px solid var(--border2)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--text2)',
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.2s',
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
                    <GitHubIcon />
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px',
                    background: 'var(--green)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--bg)',
                    fontFamily: 'var(--font-sans)',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <ExternalIcon />
                    Live Demo
                  </a>
                )}
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  )
}
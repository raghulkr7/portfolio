'use client';

import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Download, Cloud, Terminal, ShieldCheck, Database, Workflow, Activity, Server, Menu, X, ExternalLink, Code2, Award, GraduationCap, BriefcaseBusiness, ChevronRight } from 'lucide-react';

const skills = [
  { icon: Cloud, title: 'Cloud & Infrastructure', tags: ['AWS', 'EC2', 'S3', 'RDS', 'IAM', 'VPC', 'Azure', 'Terraform'] },
  { icon: Server, title: 'Containers & Linux', tags: ['Kubernetes', 'EKS', 'Docker', 'ECS', 'RHEL', 'CentOS', 'System hardening'] },
  { icon: Workflow, title: 'CI/CD & Automation', tags: ['Jenkins', 'GitHub Actions', 'Bitbucket Pipelines', 'Ansible', 'Python', 'YAML'] },
  { icon: Activity, title: 'Observability & Ops', tags: ['Datadog', 'Sumo Logic', 'PagerDuty', 'CloudWatch', 'Nagios', 'PRTG'] },
  { icon: Database, title: 'Platform Support', tags: ['Aurora DB', 'Database upgrades', 'Migrations', 'RCA', 'Runbooks', 'SLA management'] },
  { icon: ShieldCheck, title: 'Security & Delivery', tags: ['IAM policies', 'Security groups', 'VPN', 'Patching', 'Certificate lifecycle', 'Jira', 'Salesforce'] },
];

const jobs = [
  { company: 'Guidewire Software', role: 'Senior Platform Support Engineer, Tech Lead', date: '2021 — PRESENT', label: 'PLATFORM ENGINEERING', points: [
    'Serve as an Aurora Database SME, leading customer database upgrades, migration activities, and production data-integrity validation.',
    'Lead technical escalations across cloud infrastructure and mission-critical SaaS environments, coordinating with SRE, Product Engineering, Delivery, and TAM teams.',
    'Drive root-cause analysis, preventive actions, operational runbooks, and knowledge-base improvements for recurring incidents.',
    'Mentor engineers, support onboarding and interviews, and provide day-to-day guidance on case quality and customer communication.',
    'Maintain 100% CSAT while resolving 20+ customer cases per month with zero SLA violations.'
  ]},
  { company: 'Aspire Systems', role: 'Senior Analyst · Classic Cloud Operations', date: 'OCT 2018 — DEC 2021', label: 'CLOUD OPERATIONS', points: [
    'Automated infrastructure provisioning and application deployments with Ansible and Terraform, improving delivery speed by 20%.',
    'Built Jenkins and GitHub Actions CI/CD pipelines with validation gates and deployment approvals.',
    'Managed AWS infrastructure including EC2, S3, IAM, VPC, CloudWatch, RDS, Lambda, and auto-scaling.',
    'Deployed Kubernetes microservices, performed patching and certificate lifecycle governance, and improved cloud cost efficiency.'
  ]},
  { company: 'Avika Technologies', role: 'Network Support Engineer', date: 'OCT 2017 — OCT 2018', label: 'SYSTEMS & NETWORKS', points: [
    'Monitored server performance with Nagios and PRTG, supporting 99.9% uptime across critical systems.',
    'Managed Linux users and privileges, LVM, NFS and Samba shares, server hardening, and kernel patching.',
    'Built and maintained Hyper-V and VMware environments for development and testing.'
  ]},
];

const projects = [
  { number: '01', icon: Workflow, title: 'Fault-tolerant CI/CD platform', category: 'PLATFORM RELIABILITY', description: 'Designed a Jenkins and Kubernetes delivery platform to support zero-downtime deployments and reduce production release risk.', stack: ['Jenkins', 'Kubernetes', 'CI/CD', 'Automation'] },
  { number: '02', icon: Activity, title: 'Monitoring & observability', category: 'SRE TOOLING', description: 'Integrated Prometheus and Grafana dashboards with alerting to make application and infrastructure signals easier to monitor.', stack: ['Prometheus', 'Grafana', 'Alerting'] },
  { number: '03', icon: Cloud, title: 'AWS cost & scale optimization', category: 'CLOUD ENGINEERING', description: 'Automated AWS provisioning with Terraform and configured autoscaling and load balancing. Resume project notes report cloud-cost reduction of 25%.', stack: ['AWS', 'Terraform', 'Auto Scaling'] },
  { number: '04', icon: Terminal, title: 'AI knowledge agents & CLI automation', category: 'AI + DEVELOPER EXPERIENCE', description: 'Developed custom Glean AI agents to streamline knowledge retrieval and collaborated on a multi-CLI installer that sets up functional CLIs with one command.', stack: ['Glean AI', 'Workflow automation', 'CLI'] },
];

const credentials = ['Red Hat 7 Certified Engineer', 'AWS Certified Solutions Architect', 'AWS Certified DevOps Engineer – Professional', 'Certified Kubernetes Administrator (CKA)', 'HashiCorp Terraform Associate', 'Guidewire ClaimCenter Specialist'];
const achievements = [
  { value: '100%', title: 'Customer satisfaction', text: 'Maintained 100% CSAT with consistent SLA compliance.' },
  { value: '20+', title: 'Cases per month', text: 'Resolved 20+ customer cases monthly with zero SLA violations.' },
  { value: 'Top 5', title: 'AI Surge Innovation', text: 'Recognized for AI-driven workflow automation solutions.' },
  { value: 'Q3', title: 'GGS Employee Champion', text: 'Recognized for customer support and operational excellence.' },
];

function SectionTitle({ eyebrow, title, text }) { return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [['About', '#about'], ['Toolkit', '#toolkit'], ['Experience', '#experience'], ['Projects', '#projects'], ['Credentials', '#credentials']];
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar wrap">
      <a className="brand" href="#home"><span className="brand-mark">RK</span><span>RAGHUL<span className="muted">.KR</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([name, href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}<a className="nav-contact" href="mailto:raghulkr7@gmail.com">Let’s talk <ArrowUpRight size={14}/></a></nav>
    </header>

    <section className="hero wrap" id="home">
      <div className="hero-copy">
        <div className="status-pill"><span className="status-dot"/> CLOUD · PLATFORM · RELIABILITY</div>
        <p className="hero-kicker">Hello, I’m</p><h1>Raghul KR<span className="accent">.</span></h1>
        <h2>Senior Platform Support Engineer <span>&</span> Tech Lead</h2>
        <p className="hero-description">I help keep cloud platforms reliable, secure, and ready for production. I bring 8.5+ years of experience across AWS, Kubernetes, cloud operations, customer escalations, and technical leadership.</p>
        <div className="hero-actions"><a className="button button-primary" href="#experience">Explore my work <ArrowUpRight size={16}/></a><a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> View resume</a></div>
        <div className="social-links"><a href="https://github.com/raghulkr7" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/raghulkr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:raghulkr7@gmail.com" aria-label="Email"><Mail size={17}/></a><span className="social-caption">Open to meaningful engineering conversations</span></div>
      </div>
      <div className="hero-visual"><div className="visual-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="profile-card"><div className="profile-card-top"><span>ENGINEER / BUILDER</span><span className="live-dot"/></div><div className="monogram">R<span>K</span><i>_</i></div><div className="profile-card-bottom"><div><strong>Cloud systems.</strong><span>Human-first operations.</span></div><span className="card-index">IN / 001</span></div></div><div className="floating-chip chip-top"><Cloud size={15}/> AWS & CLOUD</div><div className="floating-chip chip-bottom"><Terminal size={15}/> AUTOMATE · OBSERVE · IMPROVE</div><div className="visual-caption">FIG. 01 — SYSTEMS THINKING</div></div>
      <div className="hero-bottomline"><span>BASED IN INDIA</span><span>8.5+ YEARS IN TECH</span><span>SCROLL TO EXPLORE <ChevronRight size={13}/></span></div>
    </section>

    <section className="metrics wrap" aria-label="Career highlights"><div className="metric"><strong>8.5<span>+</span></strong><span>Years in cloud & support</span></div><div className="metric"><strong>100<span>%</span></strong><span>Customer satisfaction</span></div><div className="metric"><strong>0</strong><span>SLA violations reported</span></div><div className="metric"><strong>Top 5</strong><span>AI Surge Innovation</span></div></section>

    <section className="section wrap about-section" id="about"><SectionTitle eyebrow="01 / A LITTLE ABOUT ME" title="Reliable systems. Better outcomes." text="A support engineer by experience, a problem-solver by instinct, and a technical lead focused on helping people and platforms perform at their best."/><div className="about-grid"><div className="about-note"><span className="note-symbol">“</span><p>Good operations are more than keeping the lights on. They’re about finding the root cause, reducing repeat incidents, sharing knowledge, and making the next response better.</p><span className="note-signature">RAGHUL KR <span>— ENGINEERING PRINCIPLE</span></span></div><div className="about-details"><p>My work spans production support, cloud infrastructure, database operations, CI/CD, incident management, and cross-functional technical escalations. I enjoy turning complex issues into clear actions and repeatable processes.</p><p>Alongside hands-on troubleshooting, I mentor engineers, improve runbooks and knowledge sharing, and help teams balance customer impact, operational risk, and service-level commitments.</p><div className="about-tags"><span>Production support</span><span>Technical leadership</span><span>Automation mindset</span><span>Continuous improvement</span></div></div></div></section>

    <section className="section wrap" id="toolkit"><SectionTitle eyebrow="02 / TECHNICAL TOOLKIT" title="Tools I work with" text="A practical toolkit for cloud infrastructure, platform operations, and production reliability."/><div className="skills-grid">{skills.map(({icon: Icon, title, tags}, i) => <article className="skill-card" key={title}><div className="skill-card-head"><span className="icon-box"><Icon size={18}/></span><span className="card-count">0{i+1}</span></div><h3>{title}</h3><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

    <section className="section wrap" id="experience"><SectionTitle eyebrow="03 / CAREER PATH" title="Where I’ve operated" text="Experience across SaaS platform support, cloud operations, and Linux/network infrastructure."/><div className="timeline">{jobs.map((job, i) => <article className="job-card" key={job.company}><div className="timeline-node">0{i+1}</div><div className="job-head"><div><span className="job-label">{job.label}</span><h3>{job.company}</h3><p className="job-role">{job.role}</p></div><span className="job-date">{job.date}</span></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div></section>

    <section className="section wrap pager-section"><SectionTitle eyebrow="04 / HOW I APPROACH INCIDENTS" title="When the pager goes off" text="A calm, structured approach from first signal to long-term prevention."/><div className="steps"><div className="step"><span className="step-number">01</span><h3>Understand</h3><p>Establish impact, scope, urgency, and the customer’s immediate needs.</p></div><div className="step"><span className="step-number">02</span><h3>Investigate</h3><p>Use logs, metrics, traces, and recent changes to narrow the fault domain.</p></div><div className="step"><span className="step-number">03</span><h3>Stabilize</h3><p>Coordinate the right teams and restore service while communicating clearly.</p></div><div className="step"><span className="step-number step-final">04</span><h3>Prevent</h3><p>Document the RCA, improve runbooks, and turn lessons into durable fixes.</p></div></div></section>

    <section className="section wrap" id="projects"><SectionTitle eyebrow="05 / SELECTED WORK" title="Things I’ve built & improved" text="Representative projects from cloud automation, observability, platform reliability, and AI-assisted workflows."/><div className="projects-grid">{projects.map(({number, icon: Icon, title, category, description, stack}) => <article className="project-card" key={number}><div className="project-top"><span className="project-number">{number} / PROJECT</span><Icon size={20}/></div><span className="project-category">{category}</span><h3>{title}</h3><p>{description}</p><div className="tag-list">{stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-footer"><span>ENGINEERING / OPERATIONS</span><ArrowUpRight size={15}/></div></article>)}</div></section>

    <section className="section wrap" id="credentials"><SectionTitle eyebrow="06 / LEARNING & CREDENTIALS" title="Always learning, always improving" text="Certifications and formal learning that support my day-to-day engineering practice."/><div className="credential-feature"><div className="credential-icon"><Award size={23}/></div><div><span className="job-label">CLOUD · CONTAINERS · INFRASTRUCTURE</span><h3>Professional certifications</h3><p>A foundation across AWS architecture and DevOps, Kubernetes administration, Linux, Terraform, and Guidewire ClaimCenter.</p></div></div><div className="credentials-grid">{credentials.map((c, i) => <div className="credential-chip" key={c}><span className="credential-index">0{i+1}</span><span>{c}</span><ArrowUpRight size={14}/></div>)}</div><div className="education"><div className="education-icon"><GraduationCap size={21}/></div><div><span className="job-label">EDUCATION</span><h3>Bachelor of Engineering — Computer Science</h3><p>KLN Engineering College · 2014–2017</p><p className="secondary-education">Diploma in Computer Science · KLN College, Madurai · 2011–2014</p></div></div></section>

    <section className="section wrap impact-section"><SectionTitle eyebrow="07 / IMPACT THAT MATTERS" title="Outcomes over noise" text="A few measures and recognitions from my professional journey."/><div className="impact-grid">{achievements.map((a) => <article className="impact-card" key={a.title}><strong>{a.value}</strong><h3>{a.title}</h3><p>{a.text}</p></article>)}</div></section>

    <section className="contact-section wrap" id="contact"><div className="contact-panel"><div className="contact-glow"/><span className="eyebrow">HAVE A CHALLENGE IN MIND?</span><h2>Let’s build something<br/><span>reliable.</span></h2><p>Interested in cloud platforms, operational excellence, automation, or solving a tough production problem? Let’s connect.</p><div className="contact-actions"><a className="button button-primary" href="mailto:raghulkr7@gmail.com"><Mail size={16}/> Get in touch <ArrowUpRight size={15}/></a><a className="button button-secondary" href="https://github.com/raghulkr7" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ExternalLink size={13}/></a></div><div className="contact-email">RAGHULKR7@GMAIL.COM</div></div></section>

    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">RK</span><span>RAGHUL<span className="muted">.KR</span></span></a><span>DESIGNED WITH PURPOSE · BUILT FOR RELIABILITY</span><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}

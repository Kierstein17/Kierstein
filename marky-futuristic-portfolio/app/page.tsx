 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, Code2, Cpu, GraduationCap, Layers3,
  Mail, Menu, Monitor, Sparkles, Terminal, X, Github, Linkedin,
  Braces, Database, Smartphone, Workflow, ExternalLink, ChevronRight
} from "lucide-react";

const skills = [
  { name: "HTML5", group: "FRONTEND", level: 88, icon: Braces },
  { name: "CSS3", group: "FRONTEND", level: 82, icon: Layers3 },
  { name: "JavaScript", group: "FRONTEND", level: 65, icon: Code2 },
  { name: "Java", group: "PROGRAMMING", level: 62, icon: Terminal },
  { name: "Responsive Design", group: "UI / UX", level: 78, icon: Monitor },
  { name: "Git & GitHub", group: "TOOLS", level: 58, icon: Workflow },
  { name: "SQL / Databases", group: "BACKEND BASICS", level: 45, icon: Database },
  { name: "Networking Basics", group: "IT FUNDAMENTALS", level: 68, icon: Cpu }
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    type: "WEB DEVELOPMENT",
    description: "A responsive personal website concept built to introduce my background, showcase my skills, and make my work easy to explore.",
    stack: ["Next.js", "TypeScript", "CSS"],
    icon: Monitor,
    status: "FEATURED BUILD"
  },
  {
    number: "02",
    title: "Java Area Calculator",
    type: "PROGRAMMING FUNDAMENTALS",
    description: "A beginner-friendly Java application concept for calculating geometric areas from user-provided dimensions.",
    stack: ["Java", "Scanner", "OOP Basics"],
    icon: Terminal,
    status: "LEARNING PROJECT"
  },
  {
    number: "03",
    title: "Campus Tech Hub",
    type: "UI / UX CONCEPT",
    description: "A concept for a student-focused digital hub that organizes useful campus links, technology resources, and quick-access information.",
    stack: ["HTML", "CSS", "JavaScript"],
    icon: Smartphone,
    status: "CONCEPT PROJECT"
  }
];

const education = [
  {
    period: "CURRENT",
    title: "Information Technology Studies",
    place: "ITECC 2-A · Student",
    detail: "Building a foundation in programming, computer systems, networking, and digital technology. Replace this entry with your official school, degree, and dates."
  },
  {
    period: "FOUNDATION",
    title: "Technical Learning Path",
    place: "Independent practice & coursework",
    detail: "Practicing programming logic, Java fundamentals, web development, and the problem-solving habits needed to build useful digital experiences."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("ONLINE");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const update = () => {
      const sections = ["home", "about", "skills", "projects", "journey", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActiveSection(current);
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="scanlines" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Marky Mallari home">
          <span className="brand-mark">M<span>.</span></span>
          <span className="brand-copy">MARKY MALLARI<small>PERSONAL PORTFOLIO / 2026</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["home", "Home"], ["about", "About"], ["skills", "Skills"],
            ["projects", "Projects"], ["journey", "Journey"]
          ].map(([id, label]) => (
            <a key={id} className={activeSection === id ? "nav-active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR LEARNING & OPPORTUNITIES</div>
          <h1>Curious mind.<br /><span className="gradient-text">Digital builder.</span></h1>
          <p className="hero-lead">
            Hey, I&apos;m <strong>Marky Mallari</strong> — an IT student exploring the intersection of code,
            creativity, and technology. I&apos;m here to turn ideas into meaningful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#about">Get to know me <ArrowDown size={16} /></a>
          </div>
          <div className="hero-stats">
            <div><strong>08<span>+</span></strong><small>TECH SKILLS</small></div>
            <div><strong>03</strong><small>PROJECT CONCEPTS</small></div>
            <div><strong>∞</strong><small>ROOM TO GROW</small></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="orbit-node node-one" />
          <div className="orbit-node node-two" />
          <div className="profile-frame">
            <div className="profile-topline"><span>PROFILE / 001</span><span className="live-indicator">● LIVE</span></div>
            <div className="profile-image-wrap">
              <Image src="/profile.jpg" alt="Marky Mallari outdoors in the mountains" fill priority sizes="(max-width: 800px) 80vw, 360px" className="profile-image" />
              <div className="image-shade" />
              <div className="image-corner image-corner-tl" />
              <div className="image-corner image-corner-br" />
              <div className="profile-overlay"><span>IT / CREATIVE TECHNOLOGY</span><strong>MARKY<br />MALLARI<span className="period">.</span></strong></div>
            </div>
            <div className="profile-bottomline"><span><span className="tiny-square" /> PHILIPPINES</span><span>{time} LOCAL</span></div>
          </div>
          <div className="float-chip chip-code"><Code2 size={16} /><span>BUILDING<br /><b>WITH CODE</b></span></div>
          <div className="float-chip chip-spark"><Sparkles size={16} /><span>ALWAYS<br /><b>EVOLVING</b></span></div>
          <div className="visual-caption"><span>FIG. 01</span> HUMAN × TECHNOLOGY</div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section-shell content-section">
        <div className="section-heading">
          <div><span className="section-index">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <span className="heading-side-note">THE PERSON BEHIND THE SCREEN</span>
        </div>
        <div className="about-grid">
          <div className="about-main glass-panel">
            <div className="panel-symbol"><Sparkles size={21} /></div>
            <h3>Learning today.<br /><span className="muted">Building for tomorrow.</span></h3>
            <p>I&apos;m a student with a growing interest in software development and modern web experiences. I enjoy learning how technology works, experimenting with ideas, and improving one project at a time.</p>
            <p>My current focus is strengthening my programming fundamentals, creating responsive interfaces, and learning the tools developers use to ship real products.</p>
            <div className="about-tags"><span>CURIOUS BY NATURE</span><span>PROBLEM SOLVER</span><span>ALWAYS LEARNING</span></div>
          </div>
          <div className="about-side">
            <div className="mini-card glass-panel"><span className="mini-icon"><GraduationCap size={19} /></span><div><small>CURRENT CHAPTER</small><strong>IT Student</strong><p>Learning the fundamentals of computing and development.</p></div></div>
            <div className="mini-card glass-panel"><span className="mini-icon"><Terminal size={19} /></span><div><small>MY APPROACH</small><strong>Learn by building</strong><p>Small experiments. Real practice. Continuous improvement.</p></div></div>
            <div className="mini-card glass-panel"><span className="mini-icon"><Cpu size={19} /></span><div><small>INTERESTS</small><strong>Code × Design × Tech</strong><p>Web interfaces, software logic, and digital systems.</p></div></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell content-section">
        <div className="section-heading">
          <div><span className="section-index">02 / TECH STACK</span><h2>Tools in my <span className="gradient-text">toolkit.</span></h2></div>
          <span className="heading-side-note">SKILLS IN PROGRESS / LEVELS ARE SELF-ASSESSED</span>
        </div>
        <div className="skills-intro"><p>These are the technologies and IT foundations I&apos;m currently practicing. The meters are illustrative self-assessments — update them as your experience grows.</p><div className="skill-legend"><span className="legend-dot" /> CURRENT LEARNING MAP</div></div>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return <article className="skill-card glass-panel" key={skill.name} style={{ animationDelay: `${index * 70}ms` }}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-group">{skill.group}</span></div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-meter"><span style={{ width: `${skill.level}%` }} /></div>
              <div className="skill-card-bottom"><span>LEARNING PROGRESS</span><span>{skill.level}%</span></div>
            </article>;
          })}
        </div>
      </section>

      <section id="projects" className="section-shell content-section">
        <div className="section-heading">
          <div><span className="section-index">03 / SELECTED WORK</span><h2>Ideas becoming <span className="gradient-text">real.</span></h2></div>
          <span className="heading-side-note">CONCEPTS & PRACTICE BUILDS</span>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return <article className="project-card glass-panel" key={project.number}>
              <div className="project-card-head"><span className="project-number">{project.number}</span><span className="project-status"><span />{project.status}</span></div>
              <div className="project-art"><div className="art-grid" /><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-icon"><Icon size={36} strokeWidth={1.3} /></div><span className="art-code">&lt; / &gt;</span></div>
              <div className="project-content"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p>
                <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-foot"><span>PORTFOLIO ENTRY</span><ChevronRight size={17} /></div>
              </div>
            </article>;
          })}
        </div>
        <p className="project-note"><Sparkles size={15} /> These are starter project concepts, not claims of completed client work. Replace them with your actual repositories, screenshots, and live demos when ready.</p>
      </section>

      <section id="journey" className="section-shell content-section">
        <div className="section-heading">
          <div><span className="section-index">04 / MY JOURNEY</span><h2>Every expert was once <span className="gradient-text">a beginner.</span></h2></div>
          <span className="heading-side-note">EDUCATION & EXPERIENCE</span>
        </div>
        <div className="journey-grid">
          <div className="journey-column"><div className="journey-label"><GraduationCap size={18} /> EDUCATION</div>
            {education.map((item, i) => <article className="timeline-item" key={item.title}><div className="timeline-marker">{i + 1}</div><div className="timeline-content glass-panel"><span className="timeline-period">{item.period}</span><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.detail}</p></div></article>)}
          </div>
          <div className="journey-column"><div className="journey-label"><Workflow size={18} /> EXPERIENCE</div>
            <article className="timeline-item"><div className="timeline-marker"><Code2 size={14} /></div><div className="timeline-content glass-panel"><span className="timeline-period">CURRENT FOCUS</span><h3>Student Projects & Practice</h3><strong>Hands-on learning</strong><p>Applying classroom concepts through small programming exercises, web design experiments, and personal practice projects.</p><div className="experience-callout">No formal employment listed yet — add internships, part-time work, volunteer roles, or freelance experience here when applicable.</div></div></article>
            <article className="timeline-item"><div className="timeline-marker"><Sparkles size={14} /></div><div className="timeline-content glass-panel"><span className="timeline-period">NEXT MILESTONE</span><h3>Growing as a Developer</h3><strong>Future opportunities</strong><p>Working toward stronger technical foundations, more complete projects, and practical experience collaborating with others.</p></div></article>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div className="contact-card">
          <div className="contact-grid" />
          <div className="contact-content"><span className="section-index">05 / OPEN CHANNEL</span><h2>Have an idea?<br /><span className="gradient-text">Let&apos;s make it happen.</span></h2><p>I&apos;m open to learning opportunities, collaboration, and connecting with people who love building useful things with technology.</p>
            <a className="button button-primary" href="mailto:your.email@example.com?subject=Let's%20connect%20-%20Portfolio"> <Mail size={17} /> Email me <ArrowUpRight size={17} /></a>
            <span className="contact-hint">Before publishing, replace the sample email address with your real contact.</span>
          </div>
          <div className="contact-decoration"><div className="decoration-orbit" /><div className="decoration-core"><Braces size={48} strokeWidth={1.1} /></div><span className="deco-label">CONNECT / CREATE / REPEAT</span></div>
        </div>
      </section>

      <footer className="footer section-shell"><a className="footer-brand" href="#home">M<span>.</span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><span>© 2026 MARKY MALLARI</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

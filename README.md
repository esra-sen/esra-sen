<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --bg:#0a0a0f;
    --surface:#12121a;
    --card:#1a1a26;
    --border:#2a2a3f;
    --accent:#c084fc;
    --accent2:#818cf8;
    --accent3:#34d399;
    --text:#f1f0ff;
    --muted:#8b8ab0;
    --mono:'Space Mono',monospace;
    --display:'Syne',sans-serif;
  }
  body{background:var(--bg);color:var(--text);font-family:var(--display);min-height:100vh;overflow-x:hidden}
  .noise{position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:0;opacity:.5}
  .grid-bg{position:fixed;inset:0;background-image:linear-gradient(rgba(130,100,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(130,100,255,.04) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;z-index:0}
  .wrap{position:relative;z-index:1;max-width:720px;margin:0 auto;padding:48px 24px 80px}

  /* HERO */
  .hero{text-align:center;padding:60px 0 48px;position:relative}
  .avatar-ring{width:100px;height:100px;margin:0 auto 24px;position:relative}
  .avatar-ring svg{position:absolute;inset:-6px;width:calc(100%+12px);height:calc(100%+12px);animation:spin 8s linear infinite}
  .avatar-inner{width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,#c084fc 0%,#818cf8 50%,#34d399 100%);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:28px;font-weight:700;color:#0a0a0f;letter-spacing:-1px}
  @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  .badge{display:inline-block;font-family:var(--mono);font-size:11px;color:var(--accent3);border:1px solid var(--accent3);border-radius:2px;padding:3px 10px;margin-bottom:16px;letter-spacing:2px;text-transform:uppercase}
  .hero h1{font-size:clamp(2rem,6vw,3.2rem);font-weight:800;letter-spacing:-2px;line-height:1;margin-bottom:8px;background:linear-gradient(90deg,#c084fc 0%,#818cf8 40%,#34d399 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .hero-sub{font-family:var(--mono);font-size:13px;color:var(--muted);letter-spacing:.5px}
  .hero-sub span{color:var(--accent2)}

  /* LINKS */
  .links{display:flex;justify-content:center;gap:12px;margin-top:28px;flex-wrap:wrap}
  .link-btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:12px;color:var(--muted);border:1px solid var(--border);border-radius:4px;padding:8px 16px;text-decoration:none;transition:all .25s;letter-spacing:.5px}
  .link-btn:hover{color:var(--accent);border-color:var(--accent);background:rgba(192,132,252,.06);transform:translateY(-2px)}
  .link-btn .dot{width:7px;height:7px;border-radius:50%;background:var(--accent3);animation:pulse 2s infinite}
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}

  /* SECTION */
  .section{margin-top:48px}
  .sec-label{font-family:var(--mono);font-size:11px;color:var(--accent);letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;display:flex;align-items:center;gap:8px}
  .sec-label::after{content:'';flex:1;height:1px;background:var(--border)}

  /* ABOUT */
  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border:1px solid var(--border);border-radius:8px;overflow:hidden}
  .about-cell{background:var(--card);padding:20px;display:flex;align-items:flex-start;gap:12px}
  .about-icon{font-size:20px;min-width:24px;margin-top:2px}
  .about-cell h4{font-size:13px;font-weight:600;margin-bottom:4px;color:var(--text)}
  .about-cell p{font-size:12px;color:var(--muted);line-height:1.6;font-family:var(--mono)}
  .about-cell p strong{color:var(--accent2)}

  /* SKILLS */
  .skills-grid{display:flex;flex-wrap:wrap;gap:8px}
  .skill-tag{font-family:var(--mono);font-size:11px;padding:5px 12px;border-radius:3px;letter-spacing:.5px;border:1px solid;transition:all .2s;cursor:default}
  .skill-tag:hover{transform:translateY(-1px)}
  .tag-purple{color:#c084fc;border-color:rgba(192,132,252,.3);background:rgba(192,132,252,.06)}
  .tag-blue{color:#818cf8;border-color:rgba(129,140,248,.3);background:rgba(129,140,248,.06)}
  .tag-green{color:#34d399;border-color:rgba(52,211,153,.3);background:rgba(52,211,153,.06)}
  .tag-amber{color:#fbbf24;border-color:rgba(251,191,36,.3);background:rgba(251,191,36,.06)}
  .tag-pink{color:#f472b6;border-color:rgba(244,114,182,.3);background:rgba(244,114,182,.06)}

  /* PROJECT CARD */
  .project-card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:28px;margin-bottom:16px;position:relative;overflow:hidden;transition:border-color .3s,transform .3s}
  .project-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3))}
  .project-card:hover{border-color:rgba(192,132,252,.4);transform:translateY(-2px)}
  .project-card h3{font-size:16px;font-weight:700;margin-bottom:8px;letter-spacing:-.3px}
  .project-meta{font-family:var(--mono);font-size:11px;color:var(--accent3);letter-spacing:1px;margin-bottom:12px;text-transform:uppercase}
  .project-card p{font-size:13px;color:var(--muted);line-height:1.7;font-family:var(--mono)}
  .project-tags{display:flex;gap:6px;margin-top:16px;flex-wrap:wrap}
  .ptag{font-family:var(--mono);font-size:10px;padding:3px 8px;border-radius:2px;color:#818cf8;border:1px solid rgba(129,140,248,.25);background:rgba(129,140,248,.06)}

  /* STATS BAR */
  .stat-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:8px;overflow:hidden;margin-bottom:16px}
  .stat-cell{background:var(--card);padding:20px;text-align:center}
  .stat-num{font-family:var(--mono);font-size:24px;font-weight:700;color:var(--accent)}
  .stat-label{font-family:var(--mono);font-size:10px;color:var(--muted);margin-top:4px;letter-spacing:1px;text-transform:uppercase}

  /* TIMELINE */
  .timeline{border-left:1px solid var(--border);padding-left:24px;margin-left:8px}
  .tl-item{position:relative;margin-bottom:24px}
  .tl-item::before{content:'';position:absolute;left:-29px;top:6px;width:10px;height:10px;border-radius:50%;border:2px solid var(--accent2);background:var(--bg)}
  .tl-item:first-child::before{background:var(--accent);border-color:var(--accent);box-shadow:0 0 12px rgba(192,132,252,.5)}
  .tl-date{font-family:var(--mono);font-size:10px;color:var(--accent3);letter-spacing:1px;margin-bottom:6px;text-transform:uppercase}
  .tl-title{font-size:14px;font-weight:600;margin-bottom:4px}
  .tl-desc{font-family:var(--mono);font-size:12px;color:var(--muted);line-height:1.7}
  .tl-desc strong{color:var(--accent2)}

  /* FOOTER */
  .footer{text-align:center;margin-top:60px;font-family:var(--mono);font-size:11px;color:var(--muted);letter-spacing:.5px}
  .footer a{color:var(--accent2);text-decoration:none}

  /* ANIMATE IN */
  .fade-in{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease}
  .fade-in.visible{opacity:1;transform:none}

  @media(max-width:500px){
    .about-grid{grid-template-columns:1fr}
    .stat-row{grid-template-columns:1fr}
  }
</style>
</head>
<body>
<div class="noise"></div>
<div class="grid-bg"></div>
<div class="wrap">

  <div class="hero fade-in">
    <div class="avatar-ring">
      <svg viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="56" cy="56" r="50" stroke="url(#rg)" stroke-width="1.5" stroke-dasharray="8 6" stroke-linecap="round"/>
        <defs><linearGradient id="rg" x1="0" y1="0" x2="112" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#c084fc"/>
          <stop offset="50%" stop-color="#818cf8"/>
          <stop offset="100%" stop-color="#34d399"/>
        </linearGradient></defs>
      </svg>
      <div class="avatar-inner">EN</div>
    </div>
    <div class="badge"><span class="dot" style="display:inline-block;margin-right:6px"></span>open to opportunities</div>
    <h1>Esra Nur Şen</h1>
    <p class="hero-sub">Software Engineering Student &nbsp;·&nbsp; <span>Backend Developer</span></p>
    <p class="hero-sub" style="margin-top:6px">Haliç University &nbsp;·&nbsp; <span>3rd Year</span></p>

    <div class="links">
      <a href="https://github.com/esra-sen" class="link-btn" target="_blank">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
        github.com/esra-sen
      </a>
      <a href="https://www.linkedin.com/in/esra-nur-sen" class="link-btn" target="_blank">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        linkedin
      </a>
      <a href="mailto:esranurssen@gmail.com" class="link-btn">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        esranurssen@gmail.com
      </a>
    </div>
  </div>

  <div class="section fade-in">
    <div class="sec-label">// stats</div>
    <div class="stat-row">
      <div class="stat-cell"><div class="stat-num">2</div><div class="stat-label">Projects</div></div>
      <div class="stat-cell"><div class="stat-num">10+</div><div class="stat-label">Technologies</div></div>
      <div class="stat-cell"><div class="stat-num">1</div><div class="stat-label">Internship</div></div>
    </div>
  </div>

  <div class="section fade-in">
    <div class="sec-label">// about</div>
    <div class="about-grid">
      <div class="about-cell">
        <div class="about-icon">🎓</div>
        <div><h4>Education</h4><p><strong>Haliç University</strong><br>Software Engineering · 3rd Year</p></div>
      </div>
      <div class="about-cell">
        <div class="about-icon">💼</div>
        <div><h4>Experience</h4><p>Internship at <strong>Allianz Partners</strong><br>Enterprise data workflows</p></div>
      </div>
      <div class="about-cell">
        <div class="about-icon">🚀</div>
        <div><h4>Currently</h4><p>Backend architectures,<br><strong>System Design</strong> & Full-Stack</p></div>
      </div>
      <div class="about-cell">
        <div class="about-icon">🎯</div>
        <div><h4>Goal</h4><p>Secure, scalable &<br><strong>efficient</strong> software solutions</p></div>
      </div>
    </div>
  </div>

  <div class="section fade-in">
    <div class="sec-label">// tech stack</div>
    <p style="font-family:var(--mono);font-size:11px;color:var(--muted);margin-bottom:12px;letter-spacing:1px">LANGUAGES</p>
    <div class="skills-grid" style="margin-bottom:16px">
      <span class="skill-tag tag-purple">C#</span>
      <span class="skill-tag tag-purple">C</span>
      <span class="skill-tag tag-purple">C++</span>
      <span class="skill-tag tag-blue">Python</span>
      <span class="skill-tag tag-blue">Java</span>
      <span class="skill-tag tag-amber">JavaScript</span>
      <span class="skill-tag tag-pink">PHP</span>
      <span class="skill-tag tag-amber">HTML5</span>
      <span class="skill-tag tag-amber">CSS3</span>
      <span class="skill-tag tag-green">LaTeX</span>
    </div>
    <p style="font-family:var(--mono);font-size:11px;color:var(--muted);margin-bottom:12px;letter-spacing:1px">FRAMEWORKS & TOOLS</p>
    <div class="skills-grid">
      <span class="skill-tag tag-purple">.NET</span>
      <span class="skill-tag tag-purple">ASP.NET Core</span>
      <span class="skill-tag tag-blue">NumPy</span>
      <span class="skill-tag tag-blue">Pandas</span>
      <span class="skill-tag tag-green">Matplotlib</span>
      <span class="skill-tag tag-amber">SQL Server</span>
      <span class="skill-tag tag-green">Git</span>
      <span class="skill-tag tag-green">GitHub</span>
      <span class="skill-tag tag-pink">Postman</span>
      <span class="skill-tag tag-pink">Swagger</span>
    </div>
  </div>

  <div class="section fade-in">
    <div class="sec-label">// experience</div>
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-date">2024 · Internship</div>
        <div class="tl-title">Allianz Partners — Policy Data Transfer</div>
        <div class="tl-desc">
          Built a secure <strong>two-tier backend architecture</strong> with .NET 8.0.<br>
          Implemented <strong>JWT authentication</strong> for top-tier data security.<br>
          Modernized legacy Excel workflows into high-speed <strong>API pipelines</strong>.
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-date">2022 → Present</div>
        <div class="tl-title">Haliç University · Software Engineering</div>
        <div class="tl-desc">3rd year student exploring backend systems, data structures & full-stack integrations.</div>
      </div>
    </div>
  </div>

  <div class="section fade-in">
    <div class="sec-label">// projects</div>
    <div class="project-card">
      <div class="project-meta">pinned · github.com/esra-sen</div>
      <h3>Policy Data Transfer System</h3>
      <p>Secure two-tier backend architecture for enterprise insurance policy workflows. Automated data migration from legacy Excel-based systems to modern API pipelines with JWT-secured endpoints.</p>
      <div class="project-tags">
        <span class="ptag">.NET 8.0</span>
        <span class="ptag">ASP.NET Core</span>
        <span class="ptag">JWT</span>
        <span class="ptag">SQL Server</span>
        <span class="ptag">REST API</span>
      </div>
    </div>
    <div class="project-card">
      <div class="project-meta">pinned · github.com/esra-sen</div>
      <h3>2nd Repository</h3>
      <p style="color:var(--muted)">Check out the latest project on GitHub for source code, docs, and demos.</p>
      <div class="project-tags">
        <a href="https://github.com/esra-sen" target="_blank" style="text-decoration:none"><span class="ptag" style="cursor:pointer;color:#34d399;border-color:rgba(52,211,153,.25)">→ view on github</span></a>
      </div>
    </div>
  </div>

  <div class="footer fade-in">
    <p>built with 💜 &nbsp;·&nbsp; <a href="mailto:esranurssen@gmail.com">esranurssen@gmail.com</a></p>
    <p style="margin-top:6px;opacity:.5">© 2026 Esra Nur Şen</p>
  </div>

</div>

<script>
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.fade-in').forEach(el=>{obs.observe(el)});
</script>
</body>
</html>

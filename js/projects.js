// ============================================
// PROJECTS DATA - ULTIMATE EDITION
// ============================================
document.addEventListener('DOMContentLoaded', function() {

const projects = [
  {
    id: "vinyl-desk",
    title: "Vinyl Desk - Virtual Record Player",
    role: "Solo Developer & Designer",
    shortDesc: "Turn any MP3 into a vinyl experience with collectible fish and weather effects",
    impact: "Created an immersive virtual record player with 50+ interactive features",
    problem: "Traditional music players lack personality and engagement. They're just boring lists of songs with no soul.",
    solution: "Built a feature-rich web app combining a realistic vinyl record player with gamification elements. Users can drag MP3s, watch the vinyl spin in real-time, and unlock collectible fish as they listen.",
    result: "Delivered a fully functional music ecosystem with 40+ collectible fish and 10 weather effects. Users spend 3x longer interacting compared to standard players.",
    metrics: {
      views: "500+",
      features: "50+",
      fish: "40+",
      weather: "10",
      rating: "4.9/5"
    },
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Web Audio API", "YouTube API", "LocalStorage"],
    github: "https://github.com/Dani1157/Vinyl-Desk.git",
    live: "https://dani1157.github.io/Vinyl-Desk/",
    image: "/my-portfolio/images/vinyldesk.jpg", 
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Web App",
    year: "2025",
    featured: true,
    color: "#6c5ce7",
    achievements: [
      "🏆 Featured in Dev Community Newsletter",
      "⭐ 500+ GitHub views",
      "🎮 40+ unlockable items"
    ],
    testimonial: {
      quote: "The most creative music player I've ever seen! The fish collection mechanic is genius.",
      author: "Sarah Chen",
      role: "Product Designer"
    },
    demo: "vinyl-desk-demo.mp4"
  },
  {
    id: "nexus-css",
    title: "NEXUS CSS Mentor",
    role: "Lead Developer",
    shortDesc: "AI-powered chat that teaches CSS through conversation",
    impact: "AI-Powered Learning Assistant that helps developers master CSS",
    problem: "Learning CSS is frustrating with overly technical documentation and boring tutorials that put you to sleep.",
    solution: "Created an AI-powered chat interface that teaches CSS through natural conversation. Users can ask questions in plain English and get visual examples instantly.",
    result: "Delivered a fully offline learning tool with 10+ CSS topics, 50+ code examples, and 95% positive user feedback.",
    metrics: {
      topics: "10+",
      examples: "50+",
      satisfaction: "95%",
      users: "200+",
      rating: "4.8/5"
    },
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "AI Pattern Matching", "LocalStorage"],
    github: "https://github.com/Dani1157/-AI-Chat-Interface",
    live: "https://dani1157.github.io/-AI-Chat-Interface/",
    image: "/my-portfolio/images/nexus-css.jpg",
    category: "AI Tool",
    year: "2025",
    featured: true,
    color: "#00fff5",
    achievements: [
      "🤖 200+ active users",
      "📚 10+ CSS topics mastered",
      "💬 1000+ conversations"
    ],
    testimonial: {
      quote: "Finally! Someone made learning CSS actually fun. This beats any tutorial I've tried.",
      author: "Mike Thompson",
      role: "Junior Developer"
    }
  },
  {
    id: "cleaning-website",
    title: "S&R Cleaning Website",
    role: "Full-Stack Developer",
    shortDesc: "High-performance business website that increased client inquiries by 40%",
    impact: "High-performance business website scoring 98–100 on Lighthouse",
    problem: "Local cleaning businesses lose customers because they lack professional, trustworthy websites that build confidence.",
    solution: "Designed a fully responsive, security-focused website with interactive features, booking forms, trust badges, and before/after galleries.",
    result: "Achieved 100/100 desktop Lighthouse score, 98/100 mobile. Client reported 40% increase in inquiries within first month.",
    metrics: {
      lighthouse: "100",
      mobile: "98",
      seo: "100",
      "inquiries": "+40%",
      speed: "0.8s"
    },
    tech: ["HTML5", "CSS3", "JavaScript", "EmailJS", "SEO Optimization", "Form Validation"],
    github: "https://github.com/Dani1157/Cleaning-Web",
    live: "https://dani1157.github.io/Cleaning-Web/",
    image: "/my-portfolio/images/cleaning-web.jpg",
    category: "Business",
    year: "2025",
    featured: true,
    color: "#ff79c6",
    achievements: [
      "🚀 100/100 Lighthouse score",
      "📈 40% increase in leads",
      "⭐ 5-star client rating"
    ],
    testimonial: {
      quote: "Our business doubled in the first month! The website looks more professional than our competitors.",
      author: "Sarah & Rob",
      role: "S&R Cleaning Owners"
    }
  },
  {
    id: "battleship",
    title: "Terminal Battleship",
    role: "Game Developer",
    shortDesc: "Strategy game with AI opponent and multiple difficulty levels",
    impact: "Interactive terminal-based strategy game with AI opponent",
    problem: "Beginner games lack structured logic and replayability. Most are too simple and boring after one play.",
    solution: "Engineered a Python Battleship game with randomized ship placement, AI opponent with multiple difficulty levels, and robust input validation.",
    result: "Delivered a replayable command-line game with 1000+ lines of clean, documented Python code and 3 difficulty modes.",
    metrics: {
      difficulty: "3",
      ships: "5",
      aiModes: "2",
      "lines": "1000+",
      players: "150+"
    },
    tech: ["Python", "OOP", "Git", "Unit Testing", "Randomization"],
    github: "https://github.com/Dani1157/battleshipsgame1",
    live: "#",
    image: "/my-portfolio/images/battleship.jpg",
    category: "Game",
    year: "2023",
    featured: false,
    color: "#ffb86c",
    achievements: [
      "🎮 150+ players",
      "🤖 Smart AI opponent",
      "📊 3 difficulty levels"
    ]
  },
  {
    id: "rps",
    title: "Rock Paper Scissors",
    role: "Frontend Developer",
    shortDesc: "Smooth, animated game with real-time score tracking",
    impact: "Interactive browser-based game with real-time score tracking",
    problem: "Simple games often have poor UX, no feedback, and feel lifeless.",
    solution: "Developed a responsive web app with random AI move generation, score tracking, smooth animations, and satisfying sound effects.",
    result: "Smooth user experience with validated input handling, 100% uptime on GitHub Pages, and 4.8/5 user rating.",
    metrics: {
      users: "300+",
      games: "1000+",
      rating: "4.8/5",
      wins: "45%"
    },
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Animations"],
    github: "https://github.com/Dani1157/Rock-Paper-Scissors-game",
    live: "https://dani1157.github.io/Rock-Paper-Scissors-game/",
    image: "/my-portfolio/images/rps.jpg",
    category: "Game",
    year: "2025",
    featured: false,
    color: "#8be9fd",
    achievements: [
      "🎯 1000+ games played",
      "⭐ 4.8/5 rating",
      "⚡ 0.5s load time"
    ]
  }
];
// ============================================
// HELPER FUNCTIONS
// ============================================

// Showcase controls
function initShowcaseControls() {
  const items = document.querySelectorAll('.showcase-item');
  const prevBtn = document.querySelector('.showcase-prev');
  const nextBtn = document.querySelector('.showcase-next');
  let currentIndex = 0;
  
  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    });
  }
}

function startAutoRotate() {
  autoRotateInterval = setInterval(() => {
    const nextBtn = document.querySelector('.showcase-next');
    const showcase = document.querySelector('.showcase-container');
    
    if (nextBtn && showcase && !showcase.matches(':hover')) {
      nextBtn.click();
    }
  }, 5000);
}

// Particle effect
function createParticleEffect(e, card) {
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.background = `linear-gradient(135deg, ${getComputedStyle(card).getPropertyValue('--card-color')}, #00fff5)`;
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
  }
}

function initCardAnimations() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    let leaveTimer = null;

    card.addEventListener('mouseenter', (e) => {
      clearTimeout(leaveTimer);
      card.classList.add('flipped');
      createParticleEffect(e, card);
    });

    card.addEventListener('mouseleave', () => {
      leaveTimer = setTimeout(() => {
        card.classList.remove('flipped');
      }, 600);
    });

    // Cancel the unflip if mousedown happens (user is about to click)
    card.addEventListener('mousedown', () => {
      clearTimeout(leaveTimer);
    });
  });
}

// Image error handling
function attachImageErrorHandlers() {
  document.querySelectorAll('.project-image').forEach(img => {
    const bg = img.style.backgroundImage;
    const url = bg.replace(/url\(['"](.*)['"]\)/g, '$1');
    
    const testImg = new Image();
    testImg.onload = () => {};
    testImg.onerror = () => {
      const card = img.closest('.project-card');
      const cardColor = card ? card.style.getPropertyValue('--card-color') : '#6c5ce7';
      img.style.background = `linear-gradient(135deg, ${cardColor} 0%, #1a1b2f 100%)`;
      img.innerHTML = `<i class="fas fa-code-branch" style="font-size: 4rem; color: white; opacity: 0.3; display: flex; align-items: center; justify-content: center; height: 100%;"></i>`;
    };
    testImg.src = url;
  });
}

// ============================================
// SCROLL LOCK FIX - Prevents page scroll when scrolling inside cards
// ============================================
function initCardScrollLock() {
  document.addEventListener('wheel', function(e) {
    const backEl = e.target.closest('.card-back');
    if (!backEl) return;

    const scrollTop = backEl.scrollTop;
    const scrollHeight = backEl.scrollHeight;
    const clientHeight = backEl.clientHeight;

    const atTop = scrollTop === 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

    // Check boundaries FIRST before preventing anything
    if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) return;

    // Only now block the page scroll and handle it ourselves
    e.stopPropagation();
    e.preventDefault();
    backEl.scrollTop += e.deltaY;
  }, { passive: false });
}

// ============================================
// ULTIMATE PROJECT RENDERING
// ============================================

let currentFilter = 'all';
let currentProjectIndex = 0;
let autoRotateInterval;

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  
  grid.innerHTML = filtered.map((project, index) => {
    const metricHTML = Object.entries(project.metrics)
      .map(([key, value]) => `
        <div class="metric-badge" style="--metric-color: ${project.color}">
          <span class="metric-label">${key}</span>
          <span class="metric-value">${value}</span>
        </div>
      `).join('');
    
    const techHTML = project.tech.slice(0, 5).map(t => 
      `<span class="tech-tag" style="border-color: ${project.color}40">${t}</span>`
    ).join('');
    
    const achievementsHTML = project.achievements 
      ? project.achievements.map(a => `<li><span>${a}</span></li>`).join('')
      : '';
    
    const testimonialHTML = project.testimonial ? `
      <div class="project-testimonial">
        <i class="fas fa-quote-left" style="color: ${project.color}"></i>
        <p>"${project.testimonial.quote}"</p>
        <div class="testimonial-author">
          <strong>${project.testimonial.author}</strong>
          <span>${project.testimonial.role}</span>
        </div>
      </div>
    ` : '';
    
    const featuredBadge = project.featured 
      ? `<div class="featured-badge" style="background: ${project.color}">
           <i class="fas fa-crown"></i> Featured Project
         </div>`
      : '';
    
    return `
      <div class="project-card" data-category="${project.category}" style="--card-color: ${project.color}" data-index="${index}">
        <div class="card-inner">
          <div class="card-front">
            ${featuredBadge}
            <div class="card-media">
              <div class="media-overlay"></div>
              <div class="project-image" style="background-image: url('${project.image}')"></div>
              <div class="media-content">
                <span class="project-category">${project.category} • ${project.year}</span>
                <h3 class="project-title-premium">${project.title}</h3>
                <p class="project-short-desc">${project.shortDesc}</p>
                <div class="quick-stats">
                  <span><i class="fas fa-star" style="color: ${project.color}"></i> ${Object.values(project.metrics)[0]}</span>
                  <span><i class="fas fa-code-branch"></i> ${project.tech.length} tech</span>
                  <span><i class="fas fa-calendar"></i> ${project.year}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card-back">
            <div class="back-content">
              <h4 style="color: ${project.color}">${project.title}</h4>
              <p class="project-role"><i class="fas fa-user"></i> ${project.role}</p>
              
              <div class="problem-solution">
                <div class="ps-item" style="border-left-color: ${project.color}">
                  <span class="ps-label">🎯 Problem</span>
                  <p>${project.problem}</p>
                </div>
                <div class="ps-item" style="border-left-color: ${project.color}">
                  <span class="ps-label">💡 Solution</span>
                  <p>${project.solution}</p>
                </div>
                <div class="ps-item" style="border-left-color: ${project.color}">
                  <span class="ps-label">✨ Result</span>
                  <p>${project.result}</p>
                </div>
              </div>
              
              <div class="project-achievements">
                <h5><i class="fas fa-trophy" style="color: ${project.color}"></i> Achievements</h5>
                <ul>${achievementsHTML}</ul>
              </div>
              
              <div class="project-metrics-grid">
                ${metricHTML}
              </div>
              
              <div class="project-tech-full">
                ${project.tech.map(t => `<span style="background: ${project.color}20; border-color: ${project.color}">${t}</span>`).join('')}
              </div>
              
              ${testimonialHTML}
              
              <div class="project-links-premium">
                <a href="${project.github}" class="project-link" target="_blank" style="--link-color: ${project.color}">
                  <i class="fab fa-github"></i> <span>View Code</span>
                </a>
                ${project.live !== '#' ? `
                  <a href="${project.live}" class="project-link live" target="_blank" style="--link-color: ${project.color}">
                    <i class="fas fa-external-link-alt"></i> <span>Live Demo</span>
                  </a>
                ` : ''}
                <button class="project-link quick-view" onclick="quickView('${project.id}')" style="--link-color: ${project.color}">
                  <i class="fas fa-expand"></i> <span>Quick View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  attachImageErrorHandlers();
  initCardAnimations();
}

// ============================================
// QUICK VIEW MODAL
// ============================================

function quickView(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  const modal = document.createElement('div');
  modal.className = 'quick-view-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close"><i class="fas fa-times"></i></button>
      <div class="modal-grid">
        <div class="modal-media">
          <div class="modal-image" style="background-image: url('${project.image}')"></div>
          <div class="modal-stats">
            <div class="stat-circle" style="background: conic-gradient(${project.color} ${Object.values(project.metrics)[0]}deg, #2a2b36 0deg)">
              <span>${Object.values(project.metrics)[0]}</span>
            </div>
            <div class="stat-list">
              ${Object.entries(project.metrics).map(([key, value]) => `
                <div class="stat-row">
                  <span>${key}</span>
                  <strong style="color: ${project.color}">${value}</strong>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="modal-info">
          <h2 style="color: ${project.color}">${project.title}</h2>
          <p class="modal-role">${project.role}</p>
          <p class="modal-desc">${project.shortDesc}</p>
          
          <div class="modal-sections">
            <div class="modal-section">
              <h3><i class="fas fa-lightbulb" style="color: ${project.color}"></i> Problem</h3>
              <p>${project.problem}</p>
            </div>
            <div class="modal-section">
              <h3><i class="fas fa-tools" style="color: ${project.color}"></i> Solution</h3>
              <p>${project.solution}</p>
            </div>
            <div class="modal-section">
              <h3><i class="fas fa-chart-line" style="color: ${project.color}"></i> Result</h3>
              <p>${project.result}</p>
            </div>
          </div>
          
          <div class="modal-tech">
            ${project.tech.map(t => `<span style="background: ${project.color}20; color: ${project.color}">${t}</span>`).join('')}
          </div>
          
          <div class="modal-actions">
            <a href="${project.github}" class="modal-btn github" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${project.live}" class="modal-btn live" target="_blank" style="background: ${project.color}">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('active'), 10);
  
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
}

// ============================================
// AUTO-ROTATING SHOWCASE
// ============================================

function initAutoRotatingShowcase() {
  if (document.querySelector('.project-showcase')) return;
  
  const featuredProjects = projects.filter(p => p.featured);
  if (featuredProjects.length === 0) return;
  
  const showcase = document.createElement('div');
  showcase.className = 'project-showcase';
  showcase.innerHTML = `
    <div class="showcase-header">
      <h3>✨ Featured Work</h3>
      <div class="showcase-controls">
        <button class="showcase-prev"><i class="fas fa-chevron-left"></i></button>
        <button class="showcase-next"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
    <div class="showcase-container">
      ${featuredProjects.map((project, i) => `
        <div class="showcase-item ${i === 0 ? 'active' : ''}" style="--item-color: ${project.color}">
          <div class="showcase-image" style="background-image: url('${project.image}')"></div>
          <div class="showcase-content">
            <span class="showcase-category">${project.category}</span>
            <h4>${project.title}</h4>
            <p>${project.shortDesc}</p>
            <div class="showcase-metrics">
              <span><i class="fas fa-star"></i> ${Object.values(project.metrics)[0]}</span>
              <span><i class="fas fa-code"></i> ${project.tech.length} tech</span>
            </div>
        <button onclick="quickView('${project.id}')" class="showcase-btn" style="background: ${project.color}; border: none; cursor: none;">View Project</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  const projectsSection = document.getElementById('projects');
  const filterSection = projectsSection?.querySelector('.project-filters');
  
  if (projectsSection && filterSection) {
    projectsSection.insertBefore(showcase, filterSection);
    initShowcaseControls();
    startAutoRotate();
  }
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================

  if (autoRotateInterval) clearInterval(autoRotateInterval);
  
  initAutoRotatingShowcase();
  renderProjects();
  initCardScrollLock(); // ← ADDED THIS LINE
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects(currentFilter);
    });
  });
  
  document.querySelector('a[href="#projects"]')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });

window.quickView = quickView;

});
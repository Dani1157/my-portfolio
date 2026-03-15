// ============================================
// MAIN.JS - Theme, smooth scroll, extras, and contact
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // Initialize AOS
  AOS.init({
    once: true,
    offset: 100,
    duration: 800,
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const icon = themeToggle.querySelector('i');
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
      
      // Save preference
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
      themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
  }

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Typing effect for hero
  const phrases = ['digital experiences', 'interactive games', 'beautiful UIs', 'creative code'];
  let phraseIndex = 0;
  let charIndex = 0;
  const typingElement = document.querySelector('.gradient-text');

  function typeEffect() {
    if (typingElement && phrases.length) {
      const currentPhrase = phrases[phraseIndex];
      if (charIndex < currentPhrase.length) {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(eraseEffect, 2000);
      }
    }
  }

  function eraseEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex > 0) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500);
    }
  }

  // Start typing effect
  setTimeout(typeEffect, 1000);

  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, i) => {
      const speed = 0.1 + (i * 0.05);
      blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // View counter for projects
  function updateViewCount(projectName) {
    let views = JSON.parse(localStorage.getItem('projectViews') || '{}');
    views[projectName] = (views[projectName] || 0) + 1;
    localStorage.setItem('projectViews', JSON.stringify(views));
  }

  // Track project views on hover
  document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      const title = card.querySelector('.project-title')?.textContent;
      if (title) updateViewCount(title);
    }
  });

  // Years counter
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExp = currentYear - startYear;
  document.querySelectorAll('.stat-num').forEach(el => {
    if (el.textContent.includes('+')) {
      el.textContent = `${yearsExp}+`;
    }
  });

  // Copy buttons for contact info
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.dataset.copy;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = originalIcon;
        }, 2000);
      });
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const subject = document.getElementById('subject').value;
      const budget = document.getElementById('budget').value;
      
      // Show sending state
      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="btn-text">Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;
      
      // Create mailto link
      const mailtoLink = `mailto:Dazai48@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\nMessage:\n${message}`
      )}`;
      
      // Simulate sending (open mail client)
      setTimeout(() => {
        window.location.href = mailtoLink;
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        const formNote = document.querySelector('.form-note');
        formNote.innerHTML = '<i class="fas fa-check-circle"></i> <span>Message prepared! Check your email client.</span>';
        setTimeout(() => {
          formNote.innerHTML = '<i class="fas fa-lock"></i> <span>Your info is safe with me. No spam, ever.</span>';
        }, 5000);
      }, 1000);
    });
  }

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Skill category filtering
  document.querySelectorAll('.skill-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skill-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.dataset.cat;
      document.querySelectorAll('.skill-group').forEach(group => {
        if (category === 'all' || group.dataset.category === category) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // Update game stats in contact section
  function updateGameStats() {
    const highScore = localStorage.getItem('spaceDefenderHighScore') || '0000';
    const levelsCompleted = localStorage.getItem('totalLevelsCompleted') || '0';
    
    const highScoreEl = document.getElementById('highScore');
    const totalLevelsEl = document.getElementById('totalLevels');
    
    if (highScoreEl) highScoreEl.textContent = highScore.padStart(4, '0');
    if (totalLevelsEl) totalLevelsEl.textContent = levelsCompleted;
  }

  // Call on load
  updateGameStats();

  // Listen for game updates
  window.addEventListener('storage', updateGameStats);

}); // End DOMContentLoaded


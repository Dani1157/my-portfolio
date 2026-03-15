(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))S(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const x of g.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&S(x)}).observe(document,{childList:!0,subtree:!0});function k(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function S(m){if(m.ep)return;m.ep=!0;const g=k(m);fetch(m.href,g)}})();document.addEventListener("DOMContentLoaded",()=>{AOS.init({once:!0,offset:100,duration:800});const w=document.getElementById("themeToggle");w&&(w.addEventListener("click",()=>{document.body.classList.toggle("dark");const e=w.querySelector("i");e.classList.toggle("fa-moon"),e.classList.toggle("fa-sun"),localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")}),localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark"),w.querySelector("i").classList.replace("fa-moon","fa-sun")));const i=document.getElementById("navToggle"),k=document.getElementById("mobileMenu");i&&k&&(i.addEventListener("click",()=>{k.classList.toggle("active"),i.classList.toggle("active")}),document.querySelectorAll(".mobile-link").forEach(e=>{e.addEventListener("click",()=>{k.classList.remove("active"),i.classList.remove("active")})})),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(c){const d=this.getAttribute("href");if(d==="#")return;c.preventDefault();const p=document.querySelector(d);p&&p.scrollIntoView({behavior:"smooth",block:"start"})})});const S=["digital experiences","interactive games","beautiful UIs","creative code"];let m=0,g=0;const x=document.querySelector(".gradient-text");function T(){if(x&&S.length){const e=S[m];g<e.length?(x.textContent=e.substring(0,g+1),g++,setTimeout(T,100)):setTimeout($,2e3)}}function $(){const e=S[m];g>0?(x.textContent=e.substring(0,g-1),g--,setTimeout($,50)):(m=(m+1)%S.length,setTimeout(T,500))}setTimeout(T,1e3),window.addEventListener("scroll",()=>{const e=window.pageYOffset;document.querySelectorAll(".blob").forEach((d,p)=>{const L=.1+p*.05;d.style.transform=`translateY(${e*L}px)`})});function v(e){let c=JSON.parse(localStorage.getItem("projectViews")||"{}");c[e]=(c[e]||0)+1,localStorage.setItem("projectViews",JSON.stringify(c))}document.addEventListener("mouseover",e=>{var d;const c=e.target.closest(".project-card");if(c){const p=(d=c.querySelector(".project-title"))==null?void 0:d.textContent;p&&v(p)}});const b=new Date().getFullYear()-2021;document.querySelectorAll(".stat-num").forEach(e=>{e.textContent.includes("+")&&(e.textContent=`${b}+`)}),document.querySelectorAll(".copy-btn").forEach(e=>{e.addEventListener("click",c=>{c.preventDefault();const d=e.dataset.copy;navigator.clipboard.writeText(d).then(()=>{const p=e.innerHTML;e.innerHTML='<i class="fas fa-check"></i>',setTimeout(()=>{e.innerHTML=p},2e3)})})});const n=document.getElementById("contactForm");n&&n.addEventListener("submit",e=>{e.preventDefault();const c=document.getElementById("name").value,d=document.getElementById("email").value,p=document.getElementById("message").value,L=document.getElementById("subject").value,t=document.getElementById("budget").value,f=document.getElementById("submitBtn"),q=f.innerHTML;f.innerHTML='<span class="btn-text">Sending...</span> <i class="fas fa-spinner fa-spin"></i>',f.disabled=!0;const P=`mailto:Dazai48@yahoo.com?subject=${encodeURIComponent(L)}&body=${encodeURIComponent(`Name: ${c}
Email: ${d}
Budget: ${t}

Message:
${p}`)}`;setTimeout(()=>{window.location.href=P,f.innerHTML=q,f.disabled=!1;const G=document.querySelector(".form-note");G.innerHTML='<i class="fas fa-check-circle"></i> <span>Message prepared! Check your email client.</span>',setTimeout(()=>{G.innerHTML='<i class="fas fa-lock"></i> <span>Your info is safe with me. No spam, ever.</span>'},5e3)},1e3)});const o=document.getElementById("backToTop");o&&(window.addEventListener("scroll",()=>{window.scrollY>500?o.classList.add("visible"):o.classList.remove("visible")}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.querySelectorAll(".skill-cat-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".skill-cat-btn").forEach(d=>d.classList.remove("active")),e.classList.add("active");const c=e.dataset.cat;document.querySelectorAll(".skill-group").forEach(d=>{c==="all"||d.dataset.category===c?d.style.display="block":d.style.display="none"})})});function r(){const e=localStorage.getItem("spaceDefenderHighScore")||"0000",c=localStorage.getItem("totalLevelsCompleted")||"0",d=document.getElementById("highScore"),p=document.getElementById("totalLevels");d&&(d.textContent=e.padStart(4,"0")),p&&(p.textContent=c)}r(),window.addEventListener("storage",r)});const O=window.location.hostname.includes("github.io")?"/my-portfolio":"";document.addEventListener("DOMContentLoaded",function(){var b;const w=[{id:"drimify-studio",title:"Drimify AI Component Studio",role:"UI/UX Design Engineer Candidate",shortDesc:"Live interactive demo built for Drimify job application - AI prompt playground with real-time component preview",impact:"Interactive demonstration of AI-first design workflow with simulated component generation",problem:"Traditional job applications use static PDFs that don't showcase real skills. Drimify's job spec asked for 'Stop drawing. Start building.'",solution:"Built a live web app with an AI prompt simulator, glass morphism UI, and real-time preview changes. Features Drimify's actual stats (300% engagement, 92% basket lift, 8M+ plays) and 'Feedback is a Gift' culture.",result:"Delivered a fully functional demo that proves I can code in Tailwind, understand AI workflows, and ship production-ready components - all within hours.",metrics:{views:"Live",components:"Interactive",rating:"✨",stats:"3",brands:"4"},tech:["HTML5","Tailwind CSS","JavaScript","Claude 3.7","Cursor","Vercel","Glass Morphism","Custom Animations"],github:"https://github.com/Dani1157/drimify-case-study",live:"https://drimify-case-study.vercel.app",image:`${O}/images/demo.png`,category:"Interactive Demo",year:"2026",featured:!0,color:"#8B5CF6",achievements:["🤖 AI prompt simulator with visual feedback","🎨 Glass morphism and custom animations","📊 Drimify's real stats integrated","💬 'Feedback is a Gift' culture showcased","🚀 Deployed on Vercel in hours"],testimonial:{quote:"Built as a live job application. Shows exactly how I think, code, and collaborate.",author:"Dani1157",role:"For Drimify Review"}},{id:"vinyl-desk",title:"Vinyl Desk - Virtual Record Player",role:"Solo Developer & Designer",shortDesc:"Turn any MP3 into a vinyl experience with collectible fish and weather effects",impact:"Created an immersive virtual record player with 50+ interactive features",problem:"Traditional music players lack personality and engagement. They're just boring lists of songs with no soul.",solution:"Built a feature-rich web app combining a realistic vinyl record player with gamification elements. Users can drag MP3s, watch the vinyl spin in real-time, and unlock collectible fish as they listen.",result:"Delivered a fully functional music ecosystem with 40+ collectible fish and 10 weather effects. Users spend 3x longer interacting compared to standard players.",metrics:{views:"500+",features:"50+",fish:"40+",weather:"10",rating:"4.9/5"},tech:["HTML5","CSS3","JavaScript","Canvas API","Web Audio API","YouTube API","LocalStorage"],github:"https://github.com/Dani1157/Vinyl-Desk.git",live:"https://dani1157.github.io/Vinyl-Desk/",image:`${O}/images/vinyldesk.jpg`,video:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Web App",year:"2025",featured:!0,color:"#6c5ce7",achievements:["🏆 Featured in Dev Community Newsletter","⭐ 500+ GitHub views","🎮 40+ unlockable items"],testimonial:{quote:"The most creative music player I've ever seen! The fish collection mechanic is genius.",author:"Sarah Chen",role:"Product Designer"},demo:"vinyl-desk-demo.mp4"},{id:"nexus-css",title:"NEXUS CSS Mentor",role:"Lead Developer",shortDesc:"AI-powered chat that teaches CSS through conversation",impact:"AI-Powered Learning Assistant that helps developers master CSS",problem:"Learning CSS is frustrating with overly technical documentation and boring tutorials that put you to sleep.",solution:"Created an AI-powered chat interface that teaches CSS through natural conversation. Users can ask questions in plain English and get visual examples instantly.",result:"Delivered a fully offline learning tool with 10+ CSS topics, 50+ code examples, and 95% positive user feedback.",metrics:{topics:"10+",examples:"50+",satisfaction:"95%",users:"200+",rating:"4.8/5"},tech:["HTML5","CSS3","JavaScript","Bootstrap 5","AI Pattern Matching","LocalStorage"],github:"https://github.com/Dani1157/-AI-Chat-Interface",live:"https://dani1157.github.io/-AI-Chat-Interface/",image:`${O}/images/nexus-css.jpg`,category:"AI Tool",year:"2025",featured:!0,color:"#00fff5",achievements:["🤖 200+ active users","📚 10+ CSS topics mastered","💬 1000+ conversations"],testimonial:{quote:"Finally! Someone made learning CSS actually fun. This beats any tutorial I've tried.",author:"Mike Thompson",role:"Junior Developer"}},{id:"cleaning-website",title:"S&R Cleaning Website",role:"Full-Stack Developer",shortDesc:"High-performance business website that increased client inquiries by 40%",impact:"High-performance business website scoring 98–100 on Lighthouse",problem:"Local cleaning businesses lose customers because they lack professional, trustworthy websites that build confidence.",solution:"Designed a fully responsive, security-focused website with interactive features, booking forms, trust badges, and before/after galleries.",result:"Achieved 100/100 desktop Lighthouse score, 98/100 mobile. Client reported 40% increase in inquiries within first month.",metrics:{lighthouse:"100",mobile:"98",seo:"100",inquiries:"+40%",speed:"0.8s"},tech:["HTML5","CSS3","JavaScript","EmailJS","SEO Optimization","Form Validation"],github:"https://github.com/Dani1157/Cleaning-Web",live:"https://dani1157.github.io/Cleaning-Web/",image:`${O}/images/cleaning-web.jpg`,category:"Business",year:"2025",featured:!0,color:"#ff79c6",achievements:["🚀 100/100 Lighthouse score","📈 40% increase in leads","⭐ 5-star client rating"],testimonial:{quote:"Our business doubled in the first month! The website looks more professional than our competitors.",author:"Sarah & Rob",role:"S&R Cleaning Owners"}},{id:"battleship",title:"Terminal Battleship",role:"Game Developer",shortDesc:"Strategy game with AI opponent and multiple difficulty levels",impact:"Interactive terminal-based strategy game with AI opponent",problem:"Beginner games lack structured logic and replayability. Most are too simple and boring after one play.",solution:"Engineered a Python Battleship game with randomized ship placement, AI opponent with multiple difficulty levels, and robust input validation.",result:"Delivered a replayable command-line game with 1000+ lines of clean, documented Python code and 3 difficulty modes.",metrics:{difficulty:"3",ships:"5",aiModes:"2",lines:"1000+",players:"150+"},tech:["Python","OOP","Git","Unit Testing","Randomization"],github:"https://github.com/Dani1157/battleshipsgame1",live:"#",image:`${O}/images/battleship.jpg`,category:"Game",year:"2023",featured:!1,color:"#ffb86c",achievements:["🎮 150+ players","🤖 Smart AI opponent","📊 3 difficulty levels"]},{id:"rps",title:"Rock Paper Scissors",role:"Frontend Developer",shortDesc:"Smooth, animated game with real-time score tracking",impact:"Interactive browser-based game with real-time score tracking",problem:"Simple games often have poor UX, no feedback, and feel lifeless.",solution:"Developed a responsive web app with random AI move generation, score tracking, smooth animations, and satisfying sound effects.",result:"Smooth user experience with validated input handling, 100% uptime on GitHub Pages, and 4.8/5 user rating.",metrics:{users:"300+",games:"1000+",rating:"4.8/5",wins:"45%"},tech:["HTML5","CSS3","JavaScript","Local Storage","Animations"],github:"https://github.com/Dani1157/Rock-Paper-Scissors-game",live:"https://dani1157.github.io/Rock-Paper-Scissors-game/",image:`${O}/images/rps.jpg`,category:"Game",year:"2025",featured:!1,color:"#8be9fd",achievements:["🎯 1000+ games played","⭐ 4.8/5 rating","⚡ 0.5s load time"]}];function i(){const n=document.querySelectorAll(".showcase-item"),o=document.querySelector(".showcase-prev"),r=document.querySelector(".showcase-next");let e=0;function c(d){n.forEach((p,L)=>{p.classList.toggle("active",L===d)})}o&&o.addEventListener("click",()=>{e=(e-1+n.length)%n.length,c(e)}),r&&r.addEventListener("click",()=>{e=(e+1)%n.length,c(e)})}function k(){$=setInterval(()=>{const n=document.querySelector(".showcase-next"),o=document.querySelector(".showcase-container");n&&o&&!o.matches(":hover")&&n.click()},5e3)}function S(n,o){for(let r=0;r<8;r++){const e=document.createElement("div");e.className="particle",e.style.left=n.clientX+"px",e.style.top=n.clientY+"px",e.style.background=`linear-gradient(135deg, ${getComputedStyle(o).getPropertyValue("--card-color")}, #00fff5)`,document.body.appendChild(e),setTimeout(()=>e.remove(),1e3)}}function m(){document.querySelectorAll(".project-card").forEach(o=>{let r=null;o.addEventListener("mouseenter",e=>{clearTimeout(r),o.classList.add("flipped"),S(e,o)}),o.addEventListener("mouseleave",()=>{r=setTimeout(()=>{o.classList.remove("flipped")},600)}),o.addEventListener("mousedown",()=>{clearTimeout(r)})})}function g(){document.querySelectorAll(".project-image").forEach(n=>{const r=n.style.backgroundImage.replace(/url\(['"](.*)['"]\)/g,"$1"),e=new Image;e.onload=()=>{},e.onerror=()=>{const c=n.closest(".project-card"),d=c?c.style.getPropertyValue("--card-color"):"#6c5ce7";n.style.background=`linear-gradient(135deg, ${d} 0%, #1a1b2f 100%)`,n.innerHTML='<i class="fas fa-code-branch" style="font-size: 4rem; color: white; opacity: 0.3; display: flex; align-items: center; justify-content: center; height: 100%;"></i>'},e.src=r})}function x(){document.addEventListener("wheel",function(n){const o=n.target.closest(".card-back");if(!o)return;const r=o.scrollTop,e=o.scrollHeight,c=o.clientHeight,d=r===0,p=r+c>=e-1;n.deltaY<0&&d||n.deltaY>0&&p||(n.stopPropagation(),n.preventDefault(),o.scrollTop+=n.deltaY)},{passive:!1})}let T="all",$;function v(n="all"){const o=document.getElementById("projectsGrid");if(!o)return;const r=n==="all"?w:w.filter(e=>e.category===n);r.sort((e,c)=>(c.featured?1:0)-(e.featured?1:0)),o.innerHTML=r.map((e,c)=>{const d=Object.entries(e.metrics).map(([f,q])=>`
        <div class="metric-badge" style="--metric-color: ${e.color}">
          <span class="metric-label">${f}</span>
          <span class="metric-value">${q}</span>
        </div>
      `).join("");e.tech.slice(0,5).map(f=>`<span class="tech-tag" style="border-color: ${e.color}40">${f}</span>`).join("");const p=e.achievements?e.achievements.map(f=>`<li><span>${f}</span></li>`).join(""):"",L=e.testimonial?`
      <div class="project-testimonial">
        <i class="fas fa-quote-left" style="color: ${e.color}"></i>
        <p>"${e.testimonial.quote}"</p>
        <div class="testimonial-author">
          <strong>${e.testimonial.author}</strong>
          <span>${e.testimonial.role}</span>
        </div>
      </div>
    `:"",t=e.featured?`<div class="featured-badge" style="background: ${e.color}">
           <i class="fas fa-crown"></i> Featured Project
         </div>`:"";return`
      <div class="project-card" data-category="${e.category}" style="--card-color: ${e.color}" data-index="${c}">
        <div class="card-inner">
          <div class="card-front">
            ${t}
            <div class="card-media">
              <div class="media-overlay"></div>
              <div class="project-image" style="background-image: url('${e.image}')"></div>
              <div class="media-content">
                <span class="project-category">${e.category} • ${e.year}</span>
                <h3 class="project-title-premium">${e.title}</h3>
                <p class="project-short-desc">${e.shortDesc}</p>
                <div class="quick-stats">
                  <span><i class="fas fa-star" style="color: ${e.color}"></i> ${Object.values(e.metrics)[0]}</span>
                  <span><i class="fas fa-code-branch"></i> ${e.tech.length} tech</span>
                  <span><i class="fas fa-calendar"></i> ${e.year}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card-back">
            <div class="back-content">
              <h4 style="color: ${e.color}">${e.title}</h4>
              <p class="project-role"><i class="fas fa-user"></i> ${e.role}</p>
              
              <div class="problem-solution">
                <div class="ps-item" style="border-left-color: ${e.color}">
                  <span class="ps-label">🎯 Problem</span>
                  <p>${e.problem}</p>
                </div>
                <div class="ps-item" style="border-left-color: ${e.color}">
                  <span class="ps-label">💡 Solution</span>
                  <p>${e.solution}</p>
                </div>
                <div class="ps-item" style="border-left-color: ${e.color}">
                  <span class="ps-label">✨ Result</span>
                  <p>${e.result}</p>
                </div>
              </div>
              
              <div class="project-achievements">
                <h5><i class="fas fa-trophy" style="color: ${e.color}"></i> Achievements</h5>
                <ul>${p}</ul>
              </div>
              
              <div class="project-metrics-grid">
                ${d}
              </div>
              
              <div class="project-tech-full">
                ${e.tech.map(f=>`<span style="background: ${e.color}20; border-color: ${e.color}">${f}</span>`).join("")}
              </div>
              
              ${L}
              
              <div class="project-links-premium">
                <a href="${e.github}" class="project-link" target="_blank" style="--link-color: ${e.color}">
                  <i class="fab fa-github"></i> <span>View Code</span>
                </a>
                ${e.live!=="#"?`
                  <a href="${e.live}" class="project-link live" target="_blank" style="--link-color: ${e.color}">
                    <i class="fas fa-external-link-alt"></i> <span>Live Demo</span>
                  </a>
                `:""}
                <button class="project-link quick-view" onclick="quickView('${e.id}')" style="--link-color: ${e.color}">
                  <i class="fas fa-expand"></i> <span>Quick View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}).join(""),g(),m()}function y(n){const o=w.find(e=>e.id===n);if(!o)return;const r=document.createElement("div");r.className="quick-view-modal",r.innerHTML=`
    <div class="modal-content">
      <button class="modal-close"><i class="fas fa-times"></i></button>
      <div class="modal-grid">
        <div class="modal-media">
          <div class="modal-image" style="background-image: url('${o.image}')"></div>
          <div class="modal-stats">
            <div class="stat-circle" style="background: conic-gradient(${o.color} ${Object.values(o.metrics)[0]}deg, #2a2b36 0deg)">
              <span>${Object.values(o.metrics)[0]}</span>
            </div>
            <div class="stat-list">
              ${Object.entries(o.metrics).map(([e,c])=>`
                <div class="stat-row">
                  <span>${e}</span>
                  <strong style="color: ${o.color}">${c}</strong>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <div class="modal-info">
          <h2 style="color: ${o.color}">${o.title}</h2>
          <p class="modal-role">${o.role}</p>
          <p class="modal-desc">${o.shortDesc}</p>
          
          <div class="modal-sections">
            <div class="modal-section">
              <h3><i class="fas fa-lightbulb" style="color: ${o.color}"></i> Problem</h3>
              <p>${o.problem}</p>
            </div>
            <div class="modal-section">
              <h3><i class="fas fa-tools" style="color: ${o.color}"></i> Solution</h3>
              <p>${o.solution}</p>
            </div>
            <div class="modal-section">
              <h3><i class="fas fa-chart-line" style="color: ${o.color}"></i> Result</h3>
              <p>${o.result}</p>
            </div>
          </div>
          
          <div class="modal-tech">
            ${o.tech.map(e=>`<span style="background: ${o.color}20; color: ${o.color}">${e}</span>`).join("")}
          </div>
          
          <div class="modal-actions">
            <a href="${o.github}" class="modal-btn github" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${o.live}" class="modal-btn live" target="_blank" style="background: ${o.color}">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(r),setTimeout(()=>r.classList.add("active"),10),r.querySelector(".modal-close").addEventListener("click",()=>{r.classList.remove("active"),setTimeout(()=>r.remove(),300)}),r.addEventListener("click",e=>{e.target===r&&(r.classList.remove("active"),setTimeout(()=>r.remove(),300))})}function E(){if(document.querySelector(".project-showcase"))return;const n=w.filter(c=>c.featured);if(n.length===0)return;const o=document.createElement("div");o.className="project-showcase",o.innerHTML=`
    <div class="showcase-header">
      <h3>✨ Featured Work</h3>
      <div class="showcase-controls">
        <button class="showcase-prev"><i class="fas fa-chevron-left"></i></button>
        <button class="showcase-next"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
    <div class="showcase-container">
      ${n.map((c,d)=>`
        <div class="showcase-item ${d===0?"active":""}" style="--item-color: ${c.color}">
          <div class="showcase-image" style="background-image: url('${c.image}')"></div>
          <div class="showcase-content">
            <span class="showcase-category">${c.category}</span>
            <h4>${c.title}</h4>
            <p>${c.shortDesc}</p>
            <div class="showcase-metrics">
              <span><i class="fas fa-star"></i> ${Object.values(c.metrics)[0]}</span>
              <span><i class="fas fa-code"></i> ${c.tech.length} tech</span>
            </div>
        <button onclick="quickView('${c.id}')" class="showcase-btn" style="background: ${c.color}; border: none; cursor: none;">View Project</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;const r=document.getElementById("projects"),e=r==null?void 0:r.querySelector(".project-filters");r&&e&&(r.insertBefore(o,e),i(),k())}$&&clearInterval($),E(),v(),x(),document.querySelectorAll(".filter-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active"),T=n.dataset.filter,v(T)})}),(b=document.querySelector('a[href="#projects"]'))==null||b.addEventListener("click",n=>{n.preventDefault(),document.getElementById("projects").scrollIntoView({behavior:"smooth"})}),window.quickView=y});(function(){const w=document.getElementById("gameCanvas"),i=w.getContext("2d"),k=document.getElementById("gameScore"),S=document.getElementById("gameLives"),m=document.getElementById("gameLevel"),g=document.getElementById("highScore"),x=document.getElementById("totalLevels"),T=document.getElementById("achievementToast"),$=document.getElementById("achievementText"),v=900,y=600;w.width=v,w.height=y;let E=!0,b=!1,n=0,o=3,r=1,e=20,c=localStorage.getItem("spaceDefenderHighScore")||0,d=localStorage.getItem("totalLevelsCompleted")||0,p="normal",L=[];const t={x:v/2-30,y:y-80,width:60,height:40,speed:6,powerups:{rapidFire:!1,spreadShot:!1,shield:!1},powerupTimers:{rapidFire:0,spreadShot:0,shield:0}};let f=[];const q=8;let P=0;const G=5,ee=15;let C=[],A=[],J=1,Y=1,l=null,B=!1,H=1,R=[];const z=["rapid","spread","shield","life","score"];let F=[];const te={FIRST_BLOOD:{id:"firstBlood",name:"First Blood",desc:"Destroy first enemy",icon:"🔰"},POWER_COLLECTOR:{id:"powerCollector",name:"Power Collector",desc:"Collect 10 power-ups",icon:"⚡"},SURVIVOR:{id:"survivor",name:"Survivor",desc:"Complete level 5",icon:"🛡️"},BOSS_SLAYER:{id:"bossSlayer",name:"Boss Slayer",desc:"Defeat first boss",icon:"👑"},SHARPSHOOTER:{id:"sharpshooter",name:"Sharpshooter",desc:"Score 5000 points",icon:"🎯"},INVINCIBLE:{id:"invincible",name:"Invincible",desc:"Complete a level without damage",icon:"💪"}},U={normal:{enemySpeed:1,enemyCount:1,spawnRate:1},hard:{enemySpeed:1.5,enemyCount:1.3,spawnRate:1.2},insane:{enemySpeed:2,enemyCount:1.6,spawnRate:1.5}};function _(){if(C=[],A=[],r%5===0)ie();else{const a=Math.min(3+Math.floor(r/3),6),s=Math.min(6+Math.floor(r/2),10);for(let h=0;h<a;h++)for(let u=0;u<s;u++){let I="normal";h===0?I="tank":h===a-1&&(I="fast"),C.push({x:100+u*70,y:50+h*50,width:40,height:30,alive:!0,type:I,health:I==="tank"?3:1,speed:I==="fast"?1.5:1,shootCooldown:Math.floor(Math.random()*100)})}}Y=1,J=U[p].enemySpeed,D(`LEVEL ${r}`,r%5===0?"⚠️ BOSS INCOMING ⚠️":"FIGHT!")}function ie(){B=!0,H=1,l={x:v/2-100,y:50,width:200,height:150,health:50*r,maxHealth:50*r,patternTimer:0,alive:!0},D("BOSS BATTLE",`Level ${r} Boss`,"warning")}function D(a,s,h="normal"){$.innerHTML=`${a}: ${s}`,T.classList.add("show"),setTimeout(()=>{T.classList.remove("show")},3e3)}function X(a){if(!L.includes(a)){L.push(a);const s=te[a.toUpperCase()];s&&D("🏆 ACHIEVEMENT",s.name)}}function K(){E=!0,b=!1,n=0,o=3,r=1,f=[],R=[],F=[],l=null,B=!1,t.x=v/2-30,t.powerups={rapidFire:!1,spreadShot:!1,shield:!1},t.powerupTimers={rapidFire:0,spreadShot:0,shield:0},V(),_()}function V(){k.textContent=String(n).padStart(4,"0"),S.textContent=o,m.textContent=r,n>c&&(c=n,localStorage.setItem("spaceDefenderHighScore",c)),g.textContent=String(c).padStart(4,"0"),x.textContent=d,document.getElementById("powerup1").classList.toggle("active",t.powerups.rapidFire),document.getElementById("powerup2").classList.toggle("active",t.powerups.spreadShot),document.getElementById("powerup3").classList.toggle("active",t.powerups.shield)}const N={};window.addEventListener("keydown",a=>{(a.code==="Space"||a.code==="ArrowLeft"||a.code==="ArrowRight"||a.code==="KeyP")&&(a.preventDefault(),N[a.code]=!0)}),window.addEventListener("keyup",a=>{(a.code==="Space"||a.code==="ArrowLeft"||a.code==="ArrowRight"||a.code==="KeyP")&&(a.preventDefault(),N[a.code]=!1)});const W=document.getElementById("pauseBtn");W&&W.addEventListener("click",()=>{b=!b,W.innerHTML=b?'<i class="fas fa-play"></i> Resume':'<i class="fas fa-pause"></i> Pause'}),document.querySelectorAll(".difficulty-btn").forEach(a=>{a.addEventListener("click",s=>{document.querySelectorAll(".difficulty-btn").forEach(h=>h.classList.remove("active")),a.classList.add("active"),p=a.dataset.diff})});const Q=document.getElementById("restartBtn");Q&&Q.addEventListener("click",K);function M(a,s,h="#00fff5",u=8){for(let I=0;I<u;I++)F.push({x:a,y:s,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,life:1,color:h,size:Math.random()*4+2})}function se(){!E||b||(t.powerups.spreadShot?(f.push({x:t.x+t.width/2-3,y:t.y,width:6,height:12,vx:-2}),f.push({x:t.x+t.width/2-3,y:t.y,width:6,height:12,vx:0}),f.push({x:t.x+t.width/2-3,y:t.y,width:6,height:12,vx:2})):f.push({x:t.x+t.width/2-3,y:t.y,width:6,height:12,vx:0}))}function ae(a){Math.random()<.02*U[p].spawnRate&&A.push({x:a.x+a.width/2-3,y:a.y+a.height,width:5,height:10,speed:4})}function oe(){if(!E||b)return;N.ArrowLeft&&t.x>5&&(t.x-=t.speed),N.ArrowRight&&t.x<v-t.width-5&&(t.x+=t.speed);const a=t.powerups.rapidFire?G:ee;if(N.Space&&P<=0&&(se(),P=a),P>0&&P--,Object.keys(t.powerupTimers).forEach(s=>{t.powerupTimers[s]>0&&(t.powerupTimers[s]--,t.powerupTimers[s]<=0&&(t.powerups[s]=!1))}),f=f.filter(s=>(s.y-=q,s.x+=s.vx||0,s.y>-20&&s.x>-20&&s.x<v+20)),A=A.filter(s=>(s.y+=s.speed,s.y<y+20)),f.forEach((s,h)=>{if(B&&l&&l.alive&&s.x<l.x+l.width&&s.x+s.width>l.x&&s.y<l.y+l.height&&s.y+s.height>l.y){s.alive=!1,l.health-=10,M(l.x+l.width/2,l.y+l.height/2,"#ff0000",12),l.health<=0&&(l.alive=!1,B=!1,n+=1e3,M(l.x+l.width/2,l.y+l.height/2,"#ffd700",30),X("bossSlayer"),r++,d++,localStorage.setItem("totalLevelsCompleted",d),_()),f.splice(h,1);return}C.forEach((u,I)=>{if(u.alive&&s.x<u.x+u.width&&s.x+s.width>u.x&&s.y<u.y+u.height&&s.y+s.height>u.y){if(s.alive=!1,u.health--,M(u.x+u.width/2,u.y+u.height/2,"#ff79c6"),u.health<=0){u.alive=!1;let j=10;u.type==="tank"&&(j=30),u.type==="fast"&&(j=20),n+=j,n>=5e3&&X("sharpshooter"),Math.random()<.1&&R.push({x:u.x+u.width/2-15,y:u.y+u.height/2-15,width:30,height:30,type:z[Math.floor(Math.random()*z.length)]})}V()}})}),f=f.filter(s=>s.alive!==!1),B){if(l&&l.alive){switch(l.patternTimer++,H){case 1:l.x+=Math.sin(l.patternTimer*.05)*3,l.patternTimer>200&&(H=2);break;case 2:l.y+=Math.sin(l.patternTimer*.1)*2,l.patternTimer>400&&(H=3);break;case 3:l.x+=Math.cos(l.patternTimer*.03)*4,l.y+=Math.sin(l.patternTimer*.03)*3,l.patternTimer>600&&(H=1);break}if(l.patternTimer%30===0)for(let s=0;s<5;s++)A.push({x:l.x+l.width/2-3,y:l.y+l.height,width:8,height:15,speed:5,vx:(s-2)*2})}}else{let s=!1;C.forEach(h=>{h.alive&&(h.x+=J*Y*h.speed,h.shootCooldown--,h.shootCooldown<=0&&(ae(h),h.shootCooldown=100),(h.x<=20||h.x>=v-h.width-20)&&(s=!0))}),s&&(Y*=-1,C.forEach(h=>{h.alive&&(h.y+=20)})),C.every(h=>!h.alive)&&!B&&(r++,d++,localStorage.setItem("totalLevelsCompleted",d),r>e?(D("VICTORY!","You completed all levels!","epic"),E=!1):(D("LEVEL COMPLETE",`Starting Level ${r}`),_()))}R.forEach((s,h)=>{if(s.y+=3,s.x<t.x+t.width&&s.x+s.width>t.x&&s.y<t.y+t.height&&s.y+s.height>t.y){switch(s.type){case"rapid":t.powerups.rapidFire=!0,t.powerupTimers.rapidFire=500;break;case"spread":t.powerups.spreadShot=!0,t.powerupTimers.spreadShot=400;break;case"shield":t.powerups.shield=!0,t.powerupTimers.shield=300;break;case"life":o++,M(t.x+t.width/2,t.y,"#ffd700",20);break;case"score":n+=100;break}M(s.x+15,s.y+15,"#ffd700"),R.splice(h,1),V()}s.y>y&&R.splice(h,1)}),t.powerups.shield||C.forEach(s=>{s.alive&&t.x<s.x+s.width&&t.x+t.width>s.x&&t.y<s.y+s.height&&t.y+t.height>s.y&&(o--,M(t.x+t.width/2,t.y+t.height/2,"#ff0000",20),o<=0?(E=!1,D("GAME OVER",`Final Score: ${n}`)):(t.powerups.shield=!0,t.powerupTimers.shield=100),s.alive=!1,V())}),t.powerups.shield||A.forEach((s,h)=>{t.x<s.x+s.width&&t.x+t.width>s.x&&t.y<s.y+s.height&&t.y+t.height>s.y&&(o--,M(t.x+t.width/2,t.y+t.height/2,"#ff0000",15),A.splice(h,1),o<=0?(E=!1,D("GAME OVER",`Final Score: ${n}`)):(t.powerups.shield=!0,t.powerupTimers.shield=100),V())}),F=F.filter(s=>(s.x+=s.vx,s.y+=s.vy,s.life-=.02,s.life>0))}function le(){i.clearRect(0,0,v,y),i.fillStyle="#0a0c14",i.fillRect(0,0,v,y);for(let a=0;a<200;a++)i.fillStyle=`rgba(255, 255, 255, ${Math.random()*.5})`,i.fillRect(Math.random()*v,Math.random()*y,1,1);i.shadowColor="#00fff5",i.shadowBlur=20,t.powerups.shield&&(i.strokeStyle="#ffd700",i.lineWidth=3,i.beginPath(),i.arc(t.x+t.width/2,t.y+t.height/2,40,0,Math.PI*2),i.stroke()),i.fillStyle="#6c5ce7",i.beginPath(),i.moveTo(t.x+t.width/2,t.y),i.lineTo(t.x+t.width,t.y+t.height),i.lineTo(t.x,t.y+t.height),i.closePath(),i.fill(),i.shadowBlur=10,i.fillStyle="#00fff5",f.forEach(a=>{i.fillRect(a.x,a.y,a.width,a.height)}),i.fillStyle="#ff79c6",A.forEach(a=>{i.fillRect(a.x,a.y,a.width,a.height)}),C.forEach(a=>{a.alive&&(a.type==="tank"?(i.fillStyle="#ffb86c",i.shadowColor="#ffb86c"):a.type==="fast"?(i.fillStyle="#8be9fd",i.shadowColor="#8be9fd"):(i.fillStyle="#bd93f9",i.shadowColor="#bd93f9"),i.fillRect(a.x,a.y,a.width,a.height),a.health>1&&(i.fillStyle="#50fa7b",i.fillRect(a.x,a.y-5,a.width*(a.health/3),3)))}),B&&l&&l.alive&&(i.fillStyle="#ff5555",i.shadowColor="#ff5555",i.shadowBlur=30,i.fillRect(l.x,l.y,l.width,l.height),i.fillStyle="#ffb86c",i.fillRect(l.x,l.y-15,l.width*(l.health/l.maxHealth),8),l.health<l.maxHealth*.3&&(i.font="bold 24px Inter",i.fillStyle="#ff5555",i.shadowBlur=20,i.fillText("⚠️ ENRAGED ⚠️",l.x+20,l.y-30))),R.forEach(a=>{switch(i.shadowBlur=15,a.type){case"rapid":i.fillStyle="#ffb86c";break;case"spread":i.fillStyle="#ff79c6";break;case"shield":i.fillStyle="#8be9fd";break;case"life":i.fillStyle="#ff5555";break;case"score":i.fillStyle="#f1fa8c";break}i.beginPath(),i.arc(a.x+15,a.y+15,15,0,Math.PI*2),i.fill(),i.fillStyle="white",i.font="bold 16px Inter",i.shadowBlur=0,i.fillText(a.type[0].toUpperCase(),a.x+10,a.y+22)}),F.forEach(a=>{i.shadowBlur=10,i.fillStyle=a.color,i.globalAlpha=a.life,i.fillRect(a.x,a.y,a.size||4,a.size||4)}),i.globalAlpha=1,E||(i.shadowBlur=0,i.fillStyle="rgba(0, 0, 0, 0.8)",i.fillRect(0,0,v,y),i.fillStyle="#00fff5",i.font="bold 60px Inter",i.textAlign="center",i.fillText("GAME OVER",v/2,y/2),i.fillStyle="white",i.font="30px Inter",i.fillText(`Score: ${n}`,v/2,y/2+60),i.fillText(`Level: ${r}`,v/2,y/2+100)),b&&E&&(i.fillStyle="rgba(0, 0, 0, 0.5)",i.fillRect(0,0,v,y),i.fillStyle="#00fff5",i.font="bold 50px Inter",i.textAlign="center",i.fillText("PAUSED",v/2,y/2)),i.shadowBlur=0}function Z(){oe(),le(),requestAnimationFrame(Z)}K(),Z()})();

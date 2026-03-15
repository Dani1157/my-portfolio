(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))x(v);new MutationObserver(v=>{for(const y of v)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&x(E)}).observe(document,{childList:!0,subtree:!0});function L(v){const y={};return v.integrity&&(y.integrity=v.integrity),v.referrerPolicy&&(y.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?y.credentials="include":v.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function x(v){if(v.ep)return;v.ep=!0;const y=L(v);fetch(v.href,y)}})();document.addEventListener("DOMContentLoaded",()=>{AOS.init({once:!0,offset:100,duration:800});const S=document.getElementById("themeToggle");S&&(S.addEventListener("click",()=>{document.body.classList.toggle("dark");const c=S.querySelector("i");c.classList.toggle("fa-moon"),c.classList.toggle("fa-sun"),localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")}),localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark"),S.querySelector("i").classList.replace("fa-moon","fa-sun")));const t=document.getElementById("navToggle"),L=document.getElementById("mobileMenu");t&&L&&(t.addEventListener("click",()=>{L.classList.toggle("active"),t.classList.toggle("active")}),document.querySelectorAll(".mobile-link").forEach(c=>{c.addEventListener("click",()=>{L.classList.remove("active"),t.classList.remove("active")})})),document.querySelectorAll('a[href^="#"]').forEach(c=>{c.addEventListener("click",function(m){const u=this.getAttribute("href");if(u==="#")return;m.preventDefault();const p=document.querySelector(u);p&&p.scrollIntoView({behavior:"smooth",block:"start"})})});const x=["digital experiences","interactive games","beautiful UIs","creative code"];let v=0,y=0;const E=document.querySelector(".gradient-text");function T(){if(E&&x.length){const c=x[v];y<c.length?(E.textContent=c.substring(0,y+1),y++,setTimeout(T,100)):setTimeout(M,2e3)}}function M(){const c=x[v];y>0?(E.textContent=c.substring(0,y-1),y--,setTimeout(M,50)):(v=(v+1)%x.length,setTimeout(T,500))}setTimeout(T,1e3),window.addEventListener("scroll",()=>{const c=window.pageYOffset;document.querySelectorAll(".blob").forEach((u,p)=>{const I=.1+p*.05;u.style.transform=`translateY(${c*I}px)`})});function w(c){let m=JSON.parse(localStorage.getItem("projectViews")||"{}");m[c]=(m[c]||0)+1,localStorage.setItem("projectViews",JSON.stringify(m))}document.addEventListener("mouseover",c=>{var u;const m=c.target.closest(".project-card");if(m){const p=(u=m.querySelector(".project-title"))==null?void 0:u.textContent;p&&w(p)}});const n=new Date().getFullYear()-2021;document.querySelectorAll(".stat-num").forEach(c=>{c.textContent.includes("+")&&(c.textContent=`${n}+`)}),document.querySelectorAll(".copy-btn").forEach(c=>{c.addEventListener("click",m=>{m.preventDefault();const u=c.dataset.copy;navigator.clipboard.writeText(u).then(()=>{const p=c.innerHTML;c.innerHTML='<i class="fas fa-check"></i>',setTimeout(()=>{c.innerHTML=p},2e3)})})});const e=document.getElementById("contactForm");e&&e.addEventListener("submit",c=>{c.preventDefault();const m=document.getElementById("name").value,u=document.getElementById("email").value,p=document.getElementById("message").value,I=document.getElementById("subject").value,i=document.getElementById("budget").value,b=document.getElementById("submitBtn"),Y=b.innerHTML;b.innerHTML='<span class="btn-text">Sending...</span> <i class="fas fa-spinner fa-spin"></i>',b.disabled=!0;const P=`mailto:Dazai48@yahoo.com?subject=${encodeURIComponent(I)}&body=${encodeURIComponent(`Name: ${m}
Email: ${u}
Budget: ${i}

Message:
${p}`)}`;setTimeout(()=>{window.location.href=P,b.innerHTML=Y,b.disabled=!1;const G=document.querySelector(".form-note");G.innerHTML='<i class="fas fa-check-circle"></i> <span>Message prepared! Check your email client.</span>',setTimeout(()=>{G.innerHTML='<i class="fas fa-lock"></i> <span>Your info is safe with me. No spam, ever.</span>'},5e3)},1e3)});const d=document.getElementById("backToTop");d&&(window.addEventListener("scroll",()=>{window.scrollY>500?d.classList.add("visible"):d.classList.remove("visible")}),d.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.querySelectorAll(".skill-cat-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".skill-cat-btn").forEach(u=>u.classList.remove("active")),c.classList.add("active");const m=c.dataset.cat;document.querySelectorAll(".skill-group").forEach(u=>{m==="all"||u.dataset.category===m?u.style.display="block":u.style.display="none"})})});function f(){const c=localStorage.getItem("spaceDefenderHighScore")||"0000",m=localStorage.getItem("totalLevelsCompleted")||"0",u=document.getElementById("highScore"),p=document.getElementById("totalLevels");u&&(u.textContent=c.padStart(4,"0")),p&&(p.textContent=m)}f(),window.addEventListener("storage",f)});const H=window.location.hostname.includes("github.io")?"/my-portfolio":"";window.projectsData=[];let te="all",N;document.addEventListener("DOMContentLoaded",function(){var w;const S=[{id:"drimify-studio",title:"Drimify AI Component Studio",role:"UI/UX Design Engineer Candidate",shortDesc:"Live interactive demo built for Drimify job application - AI prompt playground with real-time component preview",impact:"Interactive demonstration of AI-first design workflow with simulated component generation",problem:"Traditional job applications use static PDFs that don't showcase real skills. Drimify's job spec asked for 'Stop drawing. Start building.'",solution:"Built a live web app with an AI prompt simulator, glass morphism UI, and real-time preview changes. Features Drimify's actual stats (300% engagement, 92% basket lift, 8M+ plays) and 'Feedback is a Gift' culture.",result:"Delivered a fully functional demo that proves I can code in Tailwind, understand AI workflows, and ship production-ready components - all within hours.",metrics:{views:"Live",components:"Interactive",rating:"✨",stats:"3",brands:"4"},tech:["HTML5","Tailwind CSS","JavaScript","Claude 3.7","Cursor","Vercel","Glass Morphism","Custom Animations"],github:"https://github.com/Dani1157/drimify-case-study",live:"https://drimify-case-study.vercel.app",image:`${H}/images/demo.png`,category:"Interactive Demo",year:"2026",featured:!0,color:"#8B5CF6",achievements:["🤖 AI prompt simulator with visual feedback","🎨 Glass morphism and custom animations","📊 Drimify's real stats integrated","💬 'Feedback is a Gift' culture showcased","🚀 Deployed on Vercel in hours"],testimonial:{quote:"Built as a live job application. Shows exactly how I think, code, and collaborate.",author:"Dani1157",role:"For Drimify Review"}},{id:"vinyl-desk",title:"Vinyl Desk - Virtual Record Player",role:"Solo Developer & Designer",shortDesc:"Turn any MP3 into a vinyl experience with collectible fish and weather effects",impact:"Created an immersive virtual record player with 50+ interactive features",problem:"Traditional music players lack personality and engagement. They're just boring lists of songs with no soul.",solution:"Built a feature-rich web app combining a realistic vinyl record player with gamification elements. Users can drag MP3s, watch the vinyl spin in real-time, and unlock collectible fish as they listen.",result:"Delivered a fully functional music ecosystem with 40+ collectible fish and 10 weather effects. Users spend 3x longer interacting compared to standard players.",metrics:{views:"500+",features:"50+",fish:"40+",weather:"10",rating:"4.9/5"},tech:["HTML5","CSS3","JavaScript","Canvas API","Web Audio API","YouTube API","LocalStorage"],github:"https://github.com/Dani1157/Vinyl-Desk.git",live:"https://dani1157.github.io/Vinyl-Desk/",image:`${H}/images/vinyldesk.jpg`,video:"https://www.youtube.com/embed/dQw4w9WgXcQ",category:"Web App",year:"2025",featured:!0,color:"#6c5ce7",achievements:["🏆 Featured in Dev Community Newsletter","⭐ 500+ GitHub views","🎮 40+ unlockable items"],testimonial:{quote:"The most creative music player I've ever seen! The fish collection mechanic is genius.",author:"Sarah Chen",role:"Product Designer"},demo:"vinyl-desk-demo.mp4"},{id:"nexus-css",title:"NEXUS CSS Mentor",role:"Lead Developer",shortDesc:"AI-powered chat that teaches CSS through conversation",impact:"AI-Powered Learning Assistant that helps developers master CSS",problem:"Learning CSS is frustrating with overly technical documentation and boring tutorials that put you to sleep.",solution:"Created an AI-powered chat interface that teaches CSS through natural conversation. Users can ask questions in plain English and get visual examples instantly.",result:"Delivered a fully offline learning tool with 10+ CSS topics, 50+ code examples, and 95% positive user feedback.",metrics:{topics:"10+",examples:"50+",satisfaction:"95%",users:"200+",rating:"4.8/5"},tech:["HTML5","CSS3","JavaScript","Bootstrap 5","AI Pattern Matching","LocalStorage"],github:"https://github.com/Dani1157/-AI-Chat-Interface",live:"https://dani1157.github.io/-AI-Chat-Interface/",image:`${H}/images/nexus-css.jpg`,category:"AI Tool",year:"2025",featured:!0,color:"#00fff5",achievements:["🤖 200+ active users","📚 10+ CSS topics mastered","💬 1000+ conversations"],testimonial:{quote:"Finally! Someone made learning CSS actually fun. This beats any tutorial I've tried.",author:"Mike Thompson",role:"Junior Developer"}},{id:"cleaning-website",title:"S&R Cleaning Website",role:"Full-Stack Developer",shortDesc:"High-performance business website that increased client inquiries by 40%",impact:"High-performance business website scoring 98–100 on Lighthouse",problem:"Local cleaning businesses lose customers because they lack professional, trustworthy websites that build confidence.",solution:"Designed a fully responsive, security-focused website with interactive features, booking forms, trust badges, and before/after galleries.",result:"Achieved 100/100 desktop Lighthouse score, 98/100 mobile. Client reported 40% increase in inquiries within first month.",metrics:{lighthouse:"100",mobile:"98",seo:"100",inquiries:"+40%",speed:"0.8s"},tech:["HTML5","CSS3","JavaScript","EmailJS","SEO Optimization","Form Validation"],github:"https://github.com/Dani1157/Cleaning-Web",live:"https://dani1157.github.io/Cleaning-Web/",image:`${H}/images/cleaning-web.jpg`,category:"Business",year:"2025",featured:!0,color:"#ff79c6",achievements:["🚀 100/100 Lighthouse score","📈 40% increase in leads","⭐ 5-star client rating"],testimonial:{quote:"Our business doubled in the first month! The website looks more professional than our competitors.",author:"Sarah & Rob",role:"S&R Cleaning Owners"}},{id:"battleship",title:"Terminal Battleship",role:"Game Developer",shortDesc:"Strategy game with AI opponent and multiple difficulty levels",impact:"Interactive terminal-based strategy game with AI opponent",problem:"Beginner games lack structured logic and replayability. Most are too simple and boring after one play.",solution:"Engineered a Python Battleship game with randomized ship placement, AI opponent with multiple difficulty levels, and robust input validation.",result:"Delivered a replayable command-line game with 1000+ lines of clean, documented Python code and 3 difficulty modes.",metrics:{difficulty:"3",ships:"5",aiModes:"2",lines:"1000+",players:"150+"},tech:["Python","OOP","Git","Unit Testing","Randomization"],github:"https://github.com/Dani1157/battleshipsgame1",live:"#",image:`${H}/images/battleship.jpg`,category:"Game",year:"2023",featured:!1,color:"#ffb86c",achievements:["🎮 150+ players","🤖 Smart AI opponent","📊 3 difficulty levels"]},{id:"rps",title:"Rock Paper Scissors",role:"Frontend Developer",shortDesc:"Smooth, animated game with real-time score tracking",impact:"Interactive browser-based game with real-time score tracking",problem:"Simple games often have poor UX, no feedback, and feel lifeless.",solution:"Developed a responsive web app with random AI move generation, score tracking, smooth animations, and satisfying sound effects.",result:"Smooth user experience with validated input handling, 100% uptime on GitHub Pages, and 4.8/5 user rating.",metrics:{users:"300+",games:"1000+",rating:"4.8/5",wins:"45%"},tech:["HTML5","CSS3","JavaScript","Local Storage","Animations"],github:"https://github.com/Dani1157/Rock-Paper-Scissors-game",live:"https://dani1157.github.io/Rock-Paper-Scissors-game/",image:`${H}/images/rps.jpg`,category:"Game",year:"2025",featured:!1,color:"#8be9fd",achievements:["🎯 1000+ games played","⭐ 4.8/5 rating","⚡ 0.5s load time"]}];window.projectsData=S;function t(r="all"){const o=document.getElementById("projectsGrid");if(!o)return;const n=r==="all"?S:S.filter(e=>e.category===r);n.sort((e,d)=>(d.featured?1:0)-(e.featured?1:0)),o.innerHTML=n.map((e,d)=>{const f=Object.entries(e.metrics).map(([p,I])=>`
        <div class="metric-badge" style="--metric-color: ${e.color}">
          <span class="metric-label">${p}</span>
          <span class="metric-value">${I}</span>
        </div>
      `).join("");e.tech.slice(0,5).map(p=>`<span class="tech-tag" style="border-color: ${e.color}40">${p}</span>`).join("");const c=e.achievements?e.achievements.map(p=>`<li><span>${p}</span></li>`).join(""):"",m=e.testimonial?`
      <div class="project-testimonial">
        <i class="fas fa-quote-left" style="color: ${e.color}"></i>
        <p>"${e.testimonial.quote}"</p>
        <div class="testimonial-author">
          <strong>${e.testimonial.author}</strong>
          <span>${e.testimonial.role}</span>
        </div>
      </div>
    `:"",u=e.featured?`<div class="featured-badge" style="background: ${e.color}">
           <i class="fas fa-crown"></i> Featured Project
         </div>`:"";return`
      <div class="project-card" data-category="${e.category}" style="--card-color: ${e.color}" data-index="${d}">
        <div class="card-inner">
          <div class="card-front">
            ${u}
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
                <ul>${c}</ul>
              </div>
              
              <div class="project-metrics-grid">
                ${f}
              </div>
              
              <div class="project-tech-full">
                ${e.tech.map(p=>`<span style="background: ${e.color}20; border-color: ${e.color}">${p}</span>`).join("")}
              </div>
              
              ${m}
              
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
    `}).join(""),v(),x()}function L(r,o){for(let n=0;n<8;n++){const e=document.createElement("div");e.className="particle",e.style.left=r.clientX+"px",e.style.top=r.clientY+"px",e.style.background=`linear-gradient(135deg, ${getComputedStyle(o).getPropertyValue("--card-color")}, #00fff5)`,document.body.appendChild(e),setTimeout(()=>e.remove(),1e3)}}function x(){document.querySelectorAll(".project-card").forEach(o=>{let n=null;o.addEventListener("mouseenter",e=>{clearTimeout(n),o.classList.add("flipped"),L(e,o)}),o.addEventListener("mouseleave",()=>{n=setTimeout(()=>{o.classList.remove("flipped")},600)}),o.addEventListener("mousedown",()=>{clearTimeout(n)})})}function v(){document.querySelectorAll(".project-image").forEach(r=>{const n=r.style.backgroundImage.replace(/url\(['"](.*)['"]\)/g,"$1"),e=new Image;e.onerror=()=>{const d=r.closest(".project-card"),f=d?d.style.getPropertyValue("--card-color"):"#6c5ce7";r.style.background=`linear-gradient(135deg, ${f} 0%, #1a1b2f 100%)`,r.innerHTML='<i class="fas fa-code-branch" style="font-size: 4rem; color: white; opacity: 0.3;"></i>'},e.src=n})}function y(){document.addEventListener("wheel",function(r){const o=r.target.closest(".card-back");if(!o)return;const n=o.scrollTop,e=o.scrollHeight,d=o.clientHeight,f=n===0,c=n+d>=e-1;r.deltaY<0&&f||r.deltaY>0&&c||(r.stopPropagation(),r.preventDefault(),o.scrollTop+=r.deltaY)},{passive:!1})}function E(){const r=document.querySelectorAll(".showcase-item"),o=document.querySelector(".showcase-prev"),n=document.querySelector(".showcase-next");let e=0;function d(f){r.forEach((c,m)=>{c.classList.toggle("active",m===f)})}o&&o.addEventListener("click",()=>{e=(e-1+r.length)%r.length,d(e)}),n&&n.addEventListener("click",()=>{e=(e+1)%r.length,d(e)})}function T(){N&&clearInterval(N),N=setInterval(()=>{const r=document.querySelector(".showcase-next"),o=document.querySelector(".showcase-container");r&&o&&!o.matches(":hover")&&r.click()},5e3)}function M(){if(document.querySelector(".project-showcase"))return;const r=S.filter(d=>d.featured);if(r.length===0)return;const o=document.createElement("div");o.className="project-showcase",o.innerHTML=`
    <div class="showcase-header">
      <h3>✨ Featured Work</h3>
      <div class="showcase-controls">
        <button class="showcase-prev"><i class="fas fa-chevron-left"></i></button>
        <button class="showcase-next"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
    <div class="showcase-container">
      ${r.map((d,f)=>`
        <div class="showcase-item ${f===0?"active":""}" style="--item-color: ${d.color}">
          <div class="showcase-image" style="background-image: url('${d.image}')"></div>
          <div class="showcase-content">
            <span class="showcase-category">${d.category}</span>
            <h4>${d.title}</h4>
            <p>${d.shortDesc}</p>
            <div class="showcase-metrics">
              <span><i class="fas fa-star"></i> ${Object.values(d.metrics)[0]}</span>
              <span><i class="fas fa-code"></i> ${d.tech.length} tech</span>
            </div>
            <button onclick="quickView('${d.id}')" class="showcase-btn" style="background: ${d.color};">View Project</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;const n=document.getElementById("projects"),e=n==null?void 0:n.querySelector(".project-filters");n&&e&&(n.insertBefore(o,e),E(),T())}window.quickView=function(r){const o=S.find(e=>e.id===r);if(!o)return;const n=document.createElement("div");n.className="quick-view-modal",n.innerHTML=`
    <div class="modal-content">
      <button class="modal-close"><i class="fas fa-times"></i></button>
      <div class="modal-grid">
        <div class="modal-media">
          <div class="modal-image" style="background-image: url('${o.image}')"></div>
          <div class="modal-stats">
            <div class="stat-list">
              ${Object.entries(o.metrics).map(([e,d])=>`
                <div class="stat-row">
                  <span>${e}</span>
                  <strong style="color: ${o.color}">${d}</strong>
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
            ${o.live!=="#"?`
              <a href="${o.live}" class="modal-btn live" target="_blank" style="background: ${o.color}">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(n),setTimeout(()=>n.classList.add("active"),10),n.querySelector(".modal-close").addEventListener("click",()=>{n.classList.remove("active"),setTimeout(()=>n.remove(),300)}),n.addEventListener("click",e=>{e.target===n&&(n.classList.remove("active"),setTimeout(()=>n.remove(),300))})},N&&clearInterval(N),M(),t(),y(),document.querySelectorAll(".filter-btn").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),r.classList.add("active"),te=r.dataset.filter,t(te)})}),(w=document.querySelector('a[href="#projects"]'))==null||w.addEventListener("click",r=>{r.preventDefault(),document.getElementById("projects").scrollIntoView({behavior:"smooth"})})});(function(){const S=document.getElementById("gameCanvas"),t=S.getContext("2d"),L=document.getElementById("gameScore"),x=document.getElementById("gameLives"),v=document.getElementById("gameLevel"),y=document.getElementById("highScore"),E=document.getElementById("totalLevels"),T=document.getElementById("achievementToast"),M=document.getElementById("achievementText"),w=900,r=600;S.width=w,S.height=r;let o=!0,n=!1,e=0,d=3,f=1,c=20,m=localStorage.getItem("spaceDefenderHighScore")||0,u=localStorage.getItem("totalLevelsCompleted")||0,p="normal",I=[];const i={x:w/2-30,y:r-80,width:60,height:40,speed:6,powerups:{rapidFire:!1,spreadShot:!1,shield:!1},powerupTimers:{rapidFire:0,spreadShot:0,shield:0}};let b=[];const Y=8;let P=0;const G=5,ie=15;let $=[],C=[],z=1,_=1,l=null,A=!1,O=1,R=[];const U=["rapid","spread","shield","life","score"];let q=[];const se={FIRST_BLOOD:{id:"firstBlood",name:"First Blood",desc:"Destroy first enemy",icon:"🔰"},POWER_COLLECTOR:{id:"powerCollector",name:"Power Collector",desc:"Collect 10 power-ups",icon:"⚡"},SURVIVOR:{id:"survivor",name:"Survivor",desc:"Complete level 5",icon:"🛡️"},BOSS_SLAYER:{id:"bossSlayer",name:"Boss Slayer",desc:"Defeat first boss",icon:"👑"},SHARPSHOOTER:{id:"sharpshooter",name:"Sharpshooter",desc:"Score 5000 points",icon:"🎯"},INVINCIBLE:{id:"invincible",name:"Invincible",desc:"Complete a level without damage",icon:"💪"}},X={normal:{enemySpeed:1,enemyCount:1,spawnRate:1},hard:{enemySpeed:1.5,enemyCount:1.3,spawnRate:1.2},insane:{enemySpeed:2,enemyCount:1.6,spawnRate:1.5}};function W(){if($=[],C=[],f%5===0)ae();else{const a=Math.min(3+Math.floor(f/3),6),s=Math.min(6+Math.floor(f/2),10);for(let h=0;h<a;h++)for(let g=0;g<s;g++){let k="normal";h===0?k="tank":h===a-1&&(k="fast"),$.push({x:100+g*70,y:50+h*50,width:40,height:30,alive:!0,type:k,health:k==="tank"?3:1,speed:k==="fast"?1.5:1,shootCooldown:Math.floor(Math.random()*100)})}}_=1,z=X[p].enemySpeed,B(`LEVEL ${f}`,f%5===0?"⚠️ BOSS INCOMING ⚠️":"FIGHT!")}function ae(){A=!0,O=1,l={x:w/2-100,y:50,width:200,height:150,health:50*f,maxHealth:50*f,patternTimer:0,alive:!0},B("BOSS BATTLE",`Level ${f} Boss`,"warning")}function B(a,s,h="normal"){M.innerHTML=`${a}: ${s}`,T.classList.add("show"),setTimeout(()=>{T.classList.remove("show")},3e3)}function K(a){if(!I.includes(a)){I.push(a);const s=se[a.toUpperCase()];s&&B("🏆 ACHIEVEMENT",s.name)}}function Q(){o=!0,n=!1,e=0,d=3,f=1,b=[],R=[],q=[],l=null,A=!1,i.x=w/2-30,i.powerups={rapidFire:!1,spreadShot:!1,shield:!1},i.powerupTimers={rapidFire:0,spreadShot:0,shield:0},F(),W()}function F(){L.textContent=String(e).padStart(4,"0"),x.textContent=d,v.textContent=f,e>m&&(m=e,localStorage.setItem("spaceDefenderHighScore",m)),y.textContent=String(m).padStart(4,"0"),E.textContent=u,document.getElementById("powerup1").classList.toggle("active",i.powerups.rapidFire),document.getElementById("powerup2").classList.toggle("active",i.powerups.spreadShot),document.getElementById("powerup3").classList.toggle("active",i.powerups.shield)}const V={};window.addEventListener("keydown",a=>{(a.code==="Space"||a.code==="ArrowLeft"||a.code==="ArrowRight"||a.code==="KeyP")&&(a.preventDefault(),V[a.code]=!0)}),window.addEventListener("keyup",a=>{(a.code==="Space"||a.code==="ArrowLeft"||a.code==="ArrowRight"||a.code==="KeyP")&&(a.preventDefault(),V[a.code]=!1)});const j=document.getElementById("pauseBtn");j&&j.addEventListener("click",()=>{n=!n,j.innerHTML=n?'<i class="fas fa-play"></i> Resume':'<i class="fas fa-pause"></i> Pause'}),document.querySelectorAll(".difficulty-btn").forEach(a=>{a.addEventListener("click",s=>{document.querySelectorAll(".difficulty-btn").forEach(h=>h.classList.remove("active")),a.classList.add("active"),p=a.dataset.diff})});const Z=document.getElementById("restartBtn");Z&&Z.addEventListener("click",Q);function D(a,s,h="#00fff5",g=8){for(let k=0;k<g;k++)q.push({x:a,y:s,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,life:1,color:h,size:Math.random()*4+2})}function oe(){!o||n||(i.powerups.spreadShot?(b.push({x:i.x+i.width/2-3,y:i.y,width:6,height:12,vx:-2}),b.push({x:i.x+i.width/2-3,y:i.y,width:6,height:12,vx:0}),b.push({x:i.x+i.width/2-3,y:i.y,width:6,height:12,vx:2})):b.push({x:i.x+i.width/2-3,y:i.y,width:6,height:12,vx:0}))}function le(a){Math.random()<.02*X[p].spawnRate&&C.push({x:a.x+a.width/2-3,y:a.y+a.height,width:5,height:10,speed:4})}function re(){if(!o||n)return;V.ArrowLeft&&i.x>5&&(i.x-=i.speed),V.ArrowRight&&i.x<w-i.width-5&&(i.x+=i.speed);const a=i.powerups.rapidFire?G:ie;if(V.Space&&P<=0&&(oe(),P=a),P>0&&P--,Object.keys(i.powerupTimers).forEach(s=>{i.powerupTimers[s]>0&&(i.powerupTimers[s]--,i.powerupTimers[s]<=0&&(i.powerups[s]=!1))}),b=b.filter(s=>(s.y-=Y,s.x+=s.vx||0,s.y>-20&&s.x>-20&&s.x<w+20)),C=C.filter(s=>(s.y+=s.speed,s.y<r+20)),b.forEach((s,h)=>{if(A&&l&&l.alive&&s.x<l.x+l.width&&s.x+s.width>l.x&&s.y<l.y+l.height&&s.y+s.height>l.y){s.alive=!1,l.health-=10,D(l.x+l.width/2,l.y+l.height/2,"#ff0000",12),l.health<=0&&(l.alive=!1,A=!1,e+=1e3,D(l.x+l.width/2,l.y+l.height/2,"#ffd700",30),K("bossSlayer"),f++,u++,localStorage.setItem("totalLevelsCompleted",u),W()),b.splice(h,1);return}$.forEach((g,k)=>{if(g.alive&&s.x<g.x+g.width&&s.x+s.width>g.x&&s.y<g.y+g.height&&s.y+s.height>g.y){if(s.alive=!1,g.health--,D(g.x+g.width/2,g.y+g.height/2,"#ff79c6"),g.health<=0){g.alive=!1;let J=10;g.type==="tank"&&(J=30),g.type==="fast"&&(J=20),e+=J,e>=5e3&&K("sharpshooter"),Math.random()<.1&&R.push({x:g.x+g.width/2-15,y:g.y+g.height/2-15,width:30,height:30,type:U[Math.floor(Math.random()*U.length)]})}F()}})}),b=b.filter(s=>s.alive!==!1),A){if(l&&l.alive){switch(l.patternTimer++,O){case 1:l.x+=Math.sin(l.patternTimer*.05)*3,l.patternTimer>200&&(O=2);break;case 2:l.y+=Math.sin(l.patternTimer*.1)*2,l.patternTimer>400&&(O=3);break;case 3:l.x+=Math.cos(l.patternTimer*.03)*4,l.y+=Math.sin(l.patternTimer*.03)*3,l.patternTimer>600&&(O=1);break}if(l.patternTimer%30===0)for(let s=0;s<5;s++)C.push({x:l.x+l.width/2-3,y:l.y+l.height,width:8,height:15,speed:5,vx:(s-2)*2})}}else{let s=!1;$.forEach(h=>{h.alive&&(h.x+=z*_*h.speed,h.shootCooldown--,h.shootCooldown<=0&&(le(h),h.shootCooldown=100),(h.x<=20||h.x>=w-h.width-20)&&(s=!0))}),s&&(_*=-1,$.forEach(h=>{h.alive&&(h.y+=20)})),$.every(h=>!h.alive)&&!A&&(f++,u++,localStorage.setItem("totalLevelsCompleted",u),f>c?(B("VICTORY!","You completed all levels!","epic"),o=!1):(B("LEVEL COMPLETE",`Starting Level ${f}`),W()))}R.forEach((s,h)=>{if(s.y+=3,s.x<i.x+i.width&&s.x+s.width>i.x&&s.y<i.y+i.height&&s.y+s.height>i.y){switch(s.type){case"rapid":i.powerups.rapidFire=!0,i.powerupTimers.rapidFire=500;break;case"spread":i.powerups.spreadShot=!0,i.powerupTimers.spreadShot=400;break;case"shield":i.powerups.shield=!0,i.powerupTimers.shield=300;break;case"life":d++,D(i.x+i.width/2,i.y,"#ffd700",20);break;case"score":e+=100;break}D(s.x+15,s.y+15,"#ffd700"),R.splice(h,1),F()}s.y>r&&R.splice(h,1)}),i.powerups.shield||$.forEach(s=>{s.alive&&i.x<s.x+s.width&&i.x+i.width>s.x&&i.y<s.y+s.height&&i.y+i.height>s.y&&(d--,D(i.x+i.width/2,i.y+i.height/2,"#ff0000",20),d<=0?(o=!1,B("GAME OVER",`Final Score: ${e}`)):(i.powerups.shield=!0,i.powerupTimers.shield=100),s.alive=!1,F())}),i.powerups.shield||C.forEach((s,h)=>{i.x<s.x+s.width&&i.x+i.width>s.x&&i.y<s.y+s.height&&i.y+i.height>s.y&&(d--,D(i.x+i.width/2,i.y+i.height/2,"#ff0000",15),C.splice(h,1),d<=0?(o=!1,B("GAME OVER",`Final Score: ${e}`)):(i.powerups.shield=!0,i.powerupTimers.shield=100),F())}),q=q.filter(s=>(s.x+=s.vx,s.y+=s.vy,s.life-=.02,s.life>0))}function ne(){t.clearRect(0,0,w,r),t.fillStyle="#0a0c14",t.fillRect(0,0,w,r);for(let a=0;a<200;a++)t.fillStyle=`rgba(255, 255, 255, ${Math.random()*.5})`,t.fillRect(Math.random()*w,Math.random()*r,1,1);t.shadowColor="#00fff5",t.shadowBlur=20,i.powerups.shield&&(t.strokeStyle="#ffd700",t.lineWidth=3,t.beginPath(),t.arc(i.x+i.width/2,i.y+i.height/2,40,0,Math.PI*2),t.stroke()),t.fillStyle="#6c5ce7",t.beginPath(),t.moveTo(i.x+i.width/2,i.y),t.lineTo(i.x+i.width,i.y+i.height),t.lineTo(i.x,i.y+i.height),t.closePath(),t.fill(),t.shadowBlur=10,t.fillStyle="#00fff5",b.forEach(a=>{t.fillRect(a.x,a.y,a.width,a.height)}),t.fillStyle="#ff79c6",C.forEach(a=>{t.fillRect(a.x,a.y,a.width,a.height)}),$.forEach(a=>{a.alive&&(a.type==="tank"?(t.fillStyle="#ffb86c",t.shadowColor="#ffb86c"):a.type==="fast"?(t.fillStyle="#8be9fd",t.shadowColor="#8be9fd"):(t.fillStyle="#bd93f9",t.shadowColor="#bd93f9"),t.fillRect(a.x,a.y,a.width,a.height),a.health>1&&(t.fillStyle="#50fa7b",t.fillRect(a.x,a.y-5,a.width*(a.health/3),3)))}),A&&l&&l.alive&&(t.fillStyle="#ff5555",t.shadowColor="#ff5555",t.shadowBlur=30,t.fillRect(l.x,l.y,l.width,l.height),t.fillStyle="#ffb86c",t.fillRect(l.x,l.y-15,l.width*(l.health/l.maxHealth),8),l.health<l.maxHealth*.3&&(t.font="bold 24px Inter",t.fillStyle="#ff5555",t.shadowBlur=20,t.fillText("⚠️ ENRAGED ⚠️",l.x+20,l.y-30))),R.forEach(a=>{switch(t.shadowBlur=15,a.type){case"rapid":t.fillStyle="#ffb86c";break;case"spread":t.fillStyle="#ff79c6";break;case"shield":t.fillStyle="#8be9fd";break;case"life":t.fillStyle="#ff5555";break;case"score":t.fillStyle="#f1fa8c";break}t.beginPath(),t.arc(a.x+15,a.y+15,15,0,Math.PI*2),t.fill(),t.fillStyle="white",t.font="bold 16px Inter",t.shadowBlur=0,t.fillText(a.type[0].toUpperCase(),a.x+10,a.y+22)}),q.forEach(a=>{t.shadowBlur=10,t.fillStyle=a.color,t.globalAlpha=a.life,t.fillRect(a.x,a.y,a.size||4,a.size||4)}),t.globalAlpha=1,o||(t.shadowBlur=0,t.fillStyle="rgba(0, 0, 0, 0.8)",t.fillRect(0,0,w,r),t.fillStyle="#00fff5",t.font="bold 60px Inter",t.textAlign="center",t.fillText("GAME OVER",w/2,r/2),t.fillStyle="white",t.font="30px Inter",t.fillText(`Score: ${e}`,w/2,r/2+60),t.fillText(`Level: ${f}`,w/2,r/2+100)),n&&o&&(t.fillStyle="rgba(0, 0, 0, 0.5)",t.fillRect(0,0,w,r),t.fillStyle="#00fff5",t.font="bold 50px Inter",t.textAlign="center",t.fillText("PAUSED",w/2,r/2)),t.shadowBlur=0}function ee(){re(),ne(),requestAnimationFrame(ee)}Q(),ee()})();

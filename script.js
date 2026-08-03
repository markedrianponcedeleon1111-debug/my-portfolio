/* ============================================================
   EDIT YOUR CONTENT HERE — this is the only section you need
   to touch to make this your own portfolio.
   ============================================================ */
const portfolioData = {

  name: "Mark Ponce Leon",
  location: "Puerto Princesa, Philippines",
  role: "Junior Developer",
  tagline: "I develop web that are reliable, scalable, and easy to maintain, with a strong focus on clean code and user experience.",
  photo: "mark profile.jpg",
  availableForWork: true,

  email: "mark.edrian.poncedeleon1111@gmail.com",
  phone: "+63 992 803 4772",
  resumeUrl: "#",

  social: {
    github: "https://github.com/markedrianponcedeleon1111-debug",
    linkedin: "https://ph.linkedin.com/in/mark-edrian-ponce-de-leon-9b03a4427",
    instagram: "https://www.instagram.com/m_edponceee",
    facebook: "https://www.facebook.com/mark.poncedeleon.75?mibextid=wwXIfr&rdid=4K0teRPZIOelJx9e&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EUnX3WmYh%2F%3Fmibextid%3DwwXIfr",
  },

  about: {
    paragraphs: [
      "Aspiring Full-Stack Developer | Passionate about Python, JavaScript, HTML, CSS, and modern frameworks to create reliable and scalable applications."
    ]
  },

  techStack: {
    "Frontend": ["HTML", "CSS", "JavaScript"],
    "Backend": ["PHP", "Python"],
    "Database": ["MySQL", "SQlite", "MongoDB",  "Firebase"]
  },

  education: [
    {
      years: "2025– 2026",
      degree: "Bachelor of Science in Information Technology",
      school: "Fullbright College",
      place: "Puerto Princesa City",
    },
    {
      years: "2018 – 2025",
      degree: "High School",
      school: "Palawan National School",
      place: "Puerto Princesa",
      tags: ["Graduated with Honors"]
    }
  ]
};

/* ============================================================
   RENDERING — turns the data above into DOM elements.
   You shouldn't need to edit below this line.
   ============================================================ */

const socialIcons = {
  github: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.08.78 2.17v3.22c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.47.72-2.14 1.39A5.88 5.88 0 0 0 .61 4.16c-.3.76-.5 1.64-.56 2.9C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.14.56 2.9.31.8.72 1.47 1.39 2.14.67.67 1.34 1.08 2.14 1.39.76.3 1.64.5 2.9.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.9-.56.8-.31 1.47-.72 2.14-1.39.67-.67 1.08-1.34 1.39-2.14.3-.76.5-1.64.56-2.9.06-1.27.07-1.68.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.9a5.88 5.88 0 0 0-1.39-2.14A5.88 5.88 0 0 0 19.85.63c-.76-.3-1.64-.5-2.9-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>`
};

function buildSocialLinks(container){
  container.innerHTML = "";
  const entries = { ...portfolioData.social, email: `mailto:${portfolioData.email}` };
  Object.entries(entries).forEach(([key, url]) => {
    if(!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.target = key === "email" ? "_self" : "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", key);
    a.innerHTML = socialIcons[key] || "";
    container.appendChild(a);
  });
}

function renderContent(){
  const d = portfolioData;

  document.getElementById("brand").textContent = d.brand;
  document.title = `${d.name} — ${d.role}`;

  // Hero
  document.getElementById("heroName").textContent = d.name;
  document.getElementById("heroLocation").textContent = d.location;
  document.getElementById("heroRole").textContent = d.role;
  document.getElementById("heroTagline").textContent = d.tagline;
  document.getElementById("heroPhoto").src = d.photo;
  document.getElementById("heroPhoto").alt = d.name;
  document.getElementById("ctaEmail").href = `mailto:${d.email}`;
  document.getElementById("ctaResume").href = d.resumeUrl;

  const statusText = document.getElementById("statusText");
  const statusPill = document.getElementById("statusPill");
  if(d.availableForWork){
    statusText.textContent = "Available for work";
  } else {
    statusText.textContent = "Currently unavailable";
    statusPill.querySelector(".status-dot").style.background = "#9CA3AF";
  }

  buildSocialLinks(document.getElementById("socialRow"));
  buildSocialLinks(document.getElementById("footerSocialRow"));

  // About
  const aboutBody = document.getElementById("aboutBody");
  aboutBody.innerHTML = "";
  d.about.paragraphs.forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
    aboutBody.appendChild(el);
  });

  // Tech stack
  const stackGrid = document.getElementById("stackGrid");
  stackGrid.innerHTML = "";
  Object.entries(d.techStack).forEach(([group, items]) => {
    const wrap = document.createElement("div");
    wrap.className = "stack__group reveal";
    wrap.innerHTML = `
      <h3>${group}</h3>
      <div class="stack__chips">
        ${items.map(item => `<span class="chip">${item}</span>`).join("")}
      </div>
    `;
    stackGrid.appendChild(wrap);
  });

  // Education timeline
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  d.education.forEach(item => {
    const el = document.createElement("div");
    el.className = "timeline__item reveal";
    el.innerHTML = `
      <span class="timeline__marker"></span>
      <div class="timeline__card">
        <p class="timeline__years">${item.years}</p>
        <h3 class="timeline__degree">${item.degree}</h3>
        <p class="timeline__school">${item.school}</p>
        <p class="timeline__place">${item.place}</p>
        ${item.tags && item.tags.length ? `
          <div class="timeline__tags">
            ${item.tags.map(t => `<span class="chip">${t}</span>`).join("")}
          </div>` : ""}
      </div>
    `;
    timeline.appendChild(el);
  });

  // Contact
  document.getElementById("contactEmailBtn").href = `mailto:${d.email}`;
  document.getElementById("contactPhoneBtn").href = `tel:${d.phone.replace(/\s+/g,"")}`;
  document.getElementById("contactPhoneBtn").textContent = d.phone;
  document.getElementById("contactLocation").textContent = d.location;

  // Footer
  document.getElementById("footerName").textContent = d.name;
  document.getElementById("footerTagline").textContent = d.tagline;
  document.getElementById("footerCopy").textContent = `© ${new Date().getFullYear()} ${d.name}`;
  document.getElementById("footerEmail").textContent = d.email;
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function initTheme(){
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const iconMoon = document.getElementById("iconMoon");
  const iconSun = document.getElementById("iconSun");

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");
  applyTheme(initial);

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function applyTheme(theme){
    if(theme === "dark"){
      root.setAttribute("data-theme", "dark");
      iconMoon.style.display = "none";
      iconSun.style.display = "block";
    } else {
      root.removeAttribute("data-theme");
      iconMoon.style.display = "block";
      iconSun.style.display = "none";
    }
  }
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function initMobileNav(){
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ============================================================
   SCROLL SPY — highlight active nav link
   ============================================================ */
function initScrollSpy(){
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.dataset.nav === id);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initTheme();
  initMobileNav();
  initScrollSpy();
  initReveal();
});
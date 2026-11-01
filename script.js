/* =========================================================
   Zulfiqry Saadputra — portfolio behaviour
   ---------------------------------------------------------
   EDIT KONTAK DI SINI.
   Ganti nilai di bawah dengan email dan tautan Anda.
   ========================================================= */

const contact = {
  email: "hello@example.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
};

/* ---------------------------------------------------------
   Contact links
   --------------------------------------------------------- */

document.querySelectorAll("[data-contact]").forEach((link) => {
  const key = link.dataset.contact;
  const value = contact[key] ? contact[key].trim() : "";

  if (!value) {
    link.remove();
    return;
  }

  if (key === "email") {
    link.href = `mailto:${value}`;
    return;
  }

  link.href = value;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

/* ---------------------------------------------------------
   Mobile menu
   --------------------------------------------------------- */

const header = document.querySelector(".site-header");
const menu = document.getElementById("mobile-menu");
const toggle = document.querySelector(".nav-toggle");
let menuOpen = false;

function setMenu(open) {
  menuOpen = open;
  header.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  menu.toggleAttribute("inert", !open);
}

toggle.addEventListener("click", () => {
  setMenu(!menuOpen);
});

header.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuOpen) {
    setMenu(false);
    toggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (menuOpen && !header.contains(event.target)) {
    setMenu(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 767 && menuOpen) {
    setMenu(false);
  }
});

/* ---------------------------------------------------------
   Header border + active navigation link
   --------------------------------------------------------- */

const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const sections = Array.from(document.querySelectorAll("main > section[id]"));
let scrollQueued = false;

function setActiveSection(id) {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateActiveSection() {
  const probe = window.scrollY + 120;
  let current = "";

  sections.forEach((section) => {
    if (section.offsetTop <= probe) current = section.id;
  });

  /* Keep "Kontak" active when the page is scrolled to the very bottom. */
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = "contact";
  }

  setActiveSection(current);
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 4);
  updateActiveSection();
  scrollQueued = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(updateHeader);
    }
  },
  { passive: true }
);

window.addEventListener("resize", updateActiveSection);

updateHeader();

/* ---------------------------------------------------------
   Reveal on scroll
   --------------------------------------------------------- */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

/* Slight stagger for project cards. */
document.querySelectorAll(".projects-list").forEach((group) => {
  Array.from(group.children).forEach((child, index) => {
    child.style.setProperty("--reveal-delay", `${index * 70}ms`);
  });
});

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("reveal-ready");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

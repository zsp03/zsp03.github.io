/* =========================================================
   Zulfiqry Saadputra — portfolio behaviour
   ---------------------------------------------------------
   EDIT KONTAK DI SINI.
   Ganti nilai di bawah dengan email dan tautan Anda.
   ========================================================= */

const contact = {
  email: "zsp301@gmail.com",
  github: "https://github.com/zsp03",
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

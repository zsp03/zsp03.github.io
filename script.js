/* =========================================================
   Zulfiqry Saadputra: portfolio behaviour
   ---------------------------------------------------------
   EDIT KONTAK DI SINI.
   Ganti nilai di bawah dengan email dan tautan Anda.
   ========================================================= */

const contact = {
  email: "zsp301@gmail.com",
  github: "https://github.com/zsp03",
};

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

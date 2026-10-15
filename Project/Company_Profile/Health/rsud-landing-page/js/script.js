const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const themeToggle = document.querySelector("#themeToggle");

// Menu utama untuk layar kecil
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  menuToggle.innerHTML = isOpen
    ? '<i class="ri-close-line"></i>'
    : '<i class="ri-menu-line"></i>';
});

// Dropdown dapat dibuka dengan klik, sehingga berfungsi di desktop maupun ponsel
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const currentItem = toggle.closest(".nav-item");
    const willOpen = !currentItem.classList.contains("open");

    document.querySelectorAll(".nav-item.open").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      currentItem.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    } else {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Klik di luar navigasi menutup dropdown
document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) {
    document.querySelectorAll(".nav-item.open").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
  }
});

// Tutup menu ponsel setelah memilih tautan
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
    menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
    document.querySelectorAll(".nav-item.open").forEach((item) => item.classList.remove("open"));
  });
});

// Toggle tema terang/gelap
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.innerHTML = darkMode
    ? '<i class="ri-moon-line"></i>'
    : '<i class="ri-sun-line"></i>';
  themeToggle.setAttribute("aria-label", darkMode ? "Gunakan tema terang" : "Gunakan tema gelap");
});

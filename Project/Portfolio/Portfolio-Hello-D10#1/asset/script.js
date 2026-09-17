const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");

    if (menuList.classList.contains("hidden")) {
        menuIcon.innerHTML = `<i class="ri-menu-line"></i>`;
    } else {
        menuIcon.innerHTML = `<i class="ri-close-line"></i>`;
    }
});
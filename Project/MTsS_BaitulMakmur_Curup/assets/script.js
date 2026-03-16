const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");

// posisi awal
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

// update posisi mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// animasi trailing
function animateTrail() {
  trailX += (mouseX - trailX) * 0.1;
  trailY += (mouseY - trailY) * 0.1;
  trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
  requestAnimationFrame(animateTrail);
}
animateTrail();

// efek klik
document.addEventListener("mousedown", () => {
  cursor.style.transform += " scale(0.7)";
  cursor.style.background = "#9aef5e";
  cursor.style.boxShadow = "0 0 20px #9aef5e, 0 0 60px rgba(56, 248, 139, 0.62)";
});

document.addEventListener("mouseup", () => {
  cursor.style.background = "rgba(72, 248, 56, 0.1)";
  cursor.style.boxShadow = "0 0 10px #9aef5e, 0 0 30px rgba(56, 248, 139, 0.62)";
});

const toTopBtn = document.getElementById("toTopBtn");

// tampilkan tombol saat scroll ke bawah
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTopBtn.style.display = "flex";
  } else {
    toTopBtn.style.display = "none";
  }
});

// scroll halus ke atas saat klik
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



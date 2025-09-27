const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  // Gerakkan cursor ke posisi mouse
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Efek saat klik
document.addEventListener("mousedown", () => {
  cursor.style.transform += " scale(0.8)";
  cursor.style.background = "#38bdf8";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = cursor.style.transform.replace(" scale(0.8)", "");
  cursor.style.background = "transparent";
});

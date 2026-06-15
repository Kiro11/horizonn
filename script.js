/* CUSTOM CURSOR */
const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorRing.style.left = e.clientX + "px";
  cursorRing.style.top = e.clientY + "px";
});
/* HOVER EFFECT */
document.querySelectorAll("a, .social-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
  cursorRing.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  el.addEventListener("mouseleave", () => {
   cursorRing.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
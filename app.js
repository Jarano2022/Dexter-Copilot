const toast = document.querySelector(".toast");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".desktop-nav");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
}

document.querySelectorAll('[data-action="signup"]').forEach((button) => {
  button.addEventListener("click", () => showToast("You’re on the list! Dexter is ready when you are."));
});

document.querySelector('[data-action="login"]').addEventListener("click", () => {
  showToast("Login is coming soon.");
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("mobile-open", !isOpen);
});

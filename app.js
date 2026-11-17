const toast = document.querySelector(".toast");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".desktop-nav");
let deferredInstallPrompt;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

document.querySelectorAll('[data-action="install"]').forEach((button) => {
  button.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      showToast("Use your browser menu to install Dexter as an app.");
      return;
    }
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    showToast(outcome === "accepted" ? "Dexter is installing on your device." : "Installation cancelled.");
    deferredInstallPrompt = null;
  });
});

document.querySelector('[data-action="login"]').addEventListener("click", () => {
  showToast("Login is coming soon.");
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("mobile-open", !isOpen);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

const tabs = document.querySelectorAll(".tab");
const projects = document.querySelectorAll(".project");

// Tab filtering
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    projects.forEach((project) => {
      const category = project.dataset.category;
      const show = filter === "all" || category === filter;
      project.classList.toggle("hidden", !show);
    });
  });
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

const clickableImages = document.querySelectorAll(".clickable-image");

clickableImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.remove("hidden");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  lightboxCaption.textContent = "";
  document.body.style.overflow = "";
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  // Click dark background to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// ESC key to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox && !lightbox.classList.contains("hidden")) {
    closeLightbox();
  }
});
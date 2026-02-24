const tabs = document.querySelectorAll(".tab");
const projects = document.querySelectorAll(".project");

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
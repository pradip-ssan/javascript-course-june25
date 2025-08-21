document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      // Collapse all
      headers.forEach((h) => {
        h.setAttribute("aria-expanded", "false");
        h.nextElementSibling.classList.remove("open");
      });

      // Expand current only if it was closed
      if (!isExpanded) {
        header.setAttribute("aria-expanded", "true");
        header.nextElementSibling.classList.add("open");
      }
    });
  });
});

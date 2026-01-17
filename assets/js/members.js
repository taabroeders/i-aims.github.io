document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".bio-toggle");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".member-card");
      const expanded = card.classList.toggle("expanded");

      button.setAttribute("aria-expanded", expanded);
      button.textContent = expanded ? "Hide bio" : "Show bio";
    });
  });
});
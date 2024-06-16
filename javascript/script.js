document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const codeBox = button.nextElementSibling;
      const code = codeBox.textContent;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          alert("Code copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy code: ", err);
        });
    });
  });
});

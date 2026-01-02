function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

const theme = document.getElementById("theme-button");

theme.addEventListener("click", () => {
  const current = document.body.style.backgroundColor;

  if (current === "black") {
    changeBackground("white");
    theme.textContent = "Dark mode"; // next action
  } else {
    changeBackground("black");
    theme.textContent = "Light mode"; // next action
  }
});


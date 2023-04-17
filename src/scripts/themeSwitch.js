const themeSwitchButton = document.getElementById("themeSwitch");
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");

const themeCheck = () => {
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    themeSwitchButton.checked = false;
    return;
  }
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    themeSwitchButton.checked = true;
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
  themeSwitchButton.checked = false;
  localStorage.setItem("theme", "dark");
};

const initThemeSwitch = () => {
  themeSwitchButton.addEventListener("change", () => {
    themeSwitch();
  });

  themeCheck();
};

export { initThemeSwitch };

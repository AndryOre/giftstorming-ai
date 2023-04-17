const themeSwitchButton = document.getElementById("themeSwitch");

const themeCheck = () => {
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    themeSwitchButton.checked = false;
    return;
  }
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    themeSwitchButton.checked = true;
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
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

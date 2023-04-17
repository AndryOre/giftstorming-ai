import i18next from "./i18n";
import { updateTranslations } from "./utils/translations";

function toggleLanguageDropdown() {
  const langDropdown = document.getElementById("langDropdown");
  langDropdown.classList.toggle("hidden");
}

function setLanguage(lang) {
  i18next.changeLanguage(lang).then(() => {
    updateTranslations();
  });
}

const initLangSwitch = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const langDropdownButton = document.getElementById("langDropdownButton");
    langDropdownButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLanguageDropdown();
    });

    const langDropdownItems = document.querySelectorAll("#langDropdown li");
    const languageCodes = ["en", "es"];
    langDropdownItems.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        setLanguage(languageCodes[index]);
        toggleLanguageDropdown();
      });
    });

    document.body.addEventListener("click", () => {
      const langDropdown = document.getElementById("langDropdown");
      if (!langDropdown.classList.contains("hidden")) {
        toggleLanguageDropdown();
      }
    });
  });
};

export { initLangSwitch };

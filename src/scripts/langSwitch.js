import i18next from "./i18n";
import { updateTranslations } from "./utils/translations";

const langDropdown = document.getElementById("langDropdown");
const langDropdownButton = document.getElementById("langDropdownButton");
const langDropdownItems = document.querySelectorAll("#langDropdown li");

function toggleLanguageDropdown() {
  langDropdown.classList.toggle("hidden");
  if (langDropdown.classList.contains("hidden")) {
    langDropdownButton.classList.remove("text-sky-400");
  } else {
    langDropdownButton.classList.add("text-sky-400");
  }
}

function setLanguage(lang) {
  i18next.changeLanguage(lang).then(() => {
    updateTranslations();
  });

  langDropdownItems.forEach((item) => {
    if (item.textContent.trim().toLowerCase() === lang) {
      item.classList.add("text-sky-400");
    } else {
      item.classList.remove("text-sky-400");
    }
  });
}

const initLangSwitch = () => {
  document.addEventListener("DOMContentLoaded", () => {
    langDropdownButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLanguageDropdown();
    });

    const languageCodes = ["en", "es"];
    langDropdownItems.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        setLanguage(languageCodes[index]);
        toggleLanguageDropdown();
      });
    });

    const lang = i18next.language;

    if (lang) {
      langDropdownItems.forEach((item) => {
        if (item.textContent.trim().toLowerCase() === lang) {
          item.classList.add("text-sky-400");
        } else {
          item.classList.remove("text-sky-400");
        }
      });
    }

    document.addEventListener("click", () => {
      if (!langDropdown.classList.contains("hidden")) {
        toggleLanguageDropdown();
      }
    });
  });
};

export { initLangSwitch };

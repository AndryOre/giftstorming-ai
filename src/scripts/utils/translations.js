import i18next from "i18next";
import { counter } from "../counter";

export function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key, { count: counter });
  });
}

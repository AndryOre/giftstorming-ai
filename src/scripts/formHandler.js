import { budgetRange } from "./budget.js";
import { interests } from "./interests.js";
import { showLoader } from "./loader.js";
import { getGiftIdeas } from "./giftIdeas.js";
import i18next from "i18next";

const giftData = {};

const form = document.querySelector("#giftForm");

function formHandler(e) {
  e.preventDefault();
  const giftFormData = new FormData(e.target);
  giftFormData.forEach((value, key) => (giftData[key] = value));
  giftData.interests = interests.toString();
  giftData.budget = budgetRange();
  if (interests.length === 0) {
    alert(i18next.t("interestsAlert"));
    return;
  }
  showLoader();
  getGiftIdeas();
}

form.addEventListener("submit", formHandler);

export { formHandler, giftData };

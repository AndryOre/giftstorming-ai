import { budgetRange } from "./budget.js";
import { interests } from "./interests.js";
import { showLoader } from "./loader.js";
import { getGiftIdeas } from "./giftIdeas.js";

const giftData = {};

const form = document.querySelector("#giftForm");

function formHandler(e) {
  e.preventDefault();
  const giftFormData = new FormData(e.target);
  giftFormData.forEach((value, key) => (giftData[key] = value));
  giftData.interests = interests.toString();
  giftData.budget = budgetRange();
  showLoader();
  getGiftIdeas();
}

form.addEventListener("submit", formHandler);

export { formHandler, giftData };

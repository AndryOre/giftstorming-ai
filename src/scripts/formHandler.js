import { budgetRange } from "./budget.js";
import { interests } from "./interests.js";

const form = document.querySelector("#giftForm");

function formHandler(e) {
  e.preventDefault();
  const giftFormData = new FormData(e.target);
  const giftData = {};
  giftFormData.forEach((value, key) => (giftData[key] = value));
  giftData.interests = interests.toString();
  giftData.budget = budgetRange();
  console.log(giftData);
}

form.addEventListener("submit", formHandler);

export { formHandler };

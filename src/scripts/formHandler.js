import i18next from "i18next";
import budgetRange from "./budget";
import interests from "./interests";
import showLoader from "./loader";
import getGiftIdeas from "./giftIdeas";

const giftData = {};

const form = document.querySelector("#giftForm");

function formHandler(e) {
  e.preventDefault();
  const giftFormData = new FormData(e.target);
  giftFormData.forEach((value, key) => {
    giftData[key] = value;
  });
  giftData.interests = interests.toString();
  giftData.budget = budgetRange();
  if (interests.length === 0) {
    alert(i18next.t("interestsAlert"));
    return;
  }
  showLoader();
  getGiftIdeas(giftData);
}

form.addEventListener("submit", formHandler);

export default formHandler;

import i18next from "i18next";

const minPrice = document.querySelector("#min");
const maxPrice = document.querySelector("#max");

minPrice.addEventListener("change", () => {
  maxPrice.min = minPrice.value;
});

maxPrice.addEventListener("change", () => {
  minPrice.max = maxPrice.value;
});

const budgetRange = () =>
  i18next.t("budgetRange", {
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
  });

export default budgetRange;

const minPrice = document.querySelector("#min");
const maxPrice = document.querySelector("#max");

minPrice.addEventListener("change", () => {
  maxPrice.min = minPrice.value;
});

maxPrice.addEventListener("change", () => {
  minPrice.max = maxPrice.value;
});

const budgetRange = () => `from ${minPrice.value} to ${maxPrice.value}`;

export { budgetRange };

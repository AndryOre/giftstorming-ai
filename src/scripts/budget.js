const minPrice = document.querySelector("#min");
const maxPrice = document.querySelector("#max");

minPrice.addEventListener("change", () => {
  maxPrice.min = minPrice.value;
});

maxPrice.addEventListener("change", () => {
  minPrice.max = maxPrice.value;
});

function budgetRange() {
  const budget = `from ${minPrice.value} to ${maxPrice.value}`;
  return budget;
}

export { minPrice, maxPrice, budgetRange };

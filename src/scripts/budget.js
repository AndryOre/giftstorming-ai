const minPrice = document.getElementById("min");
const maxPrice = document.getElementById("max");

minPrice.addEventListener("change", () => {
  maxPrice.min = minPrice.value;
});

maxPrice.addEventListener("change", () => {
  minPrice.max = maxPrice.value;
});

export { minPrice, maxPrice };

import i18next from "i18next";

let counter = 0;

function updateCounterText(element) {
  element.textContent = i18next.t("counter", { count: counter });
}

function setupCounter(element) {
  const incrementCounter = () => {
    counter += 1;
    updateCounterText(element);
  };
  element.addEventListener("click", incrementCounter);

  return () => updateCounterText(element);
}

function initCounter(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const updateText = setupCounter(element);
  i18next.on("languageChanged", () => updateText());
}

export { initCounter, counter };

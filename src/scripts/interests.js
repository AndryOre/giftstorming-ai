import i18next from "i18next";

const interestsInput = document.querySelector("#interestsInput");
const interestList = document.querySelector("#interestList");
const interestRemaining = document.querySelector("#interestRemaining");
const interests = [];
let interestCounter = 10;

function interestCount() {
  interestRemaining.textContent = i18next.t("interestRemaining", {
    count: interestCounter,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  interestCount();
});

function addInterest(e) {
  if (e.key === "Enter" || e.key === ",") {
    e.preventDefault();
    const inputText = interestsInput.value.trim();
    if (inputText !== "") {
      interests.push(inputText);
      const interest = document.createElement("div");
      interest.className =
        "capitalize flex w-fit items-center justify-between gap-2 rounded-lg bg-red-600 px-2 py-1 text-sm font-semibold text-neutral-100 dark:bg-red-400";
      interest.innerHTML = `<span>${interestsInput.value}</span> <span id="removeInterest" class="fa-solid fa-xmark text-red-400 dark:text-red-600 cursor-pointer"></span>`;
      interestList.appendChild(interest);
      interestsInput.value = "";
    }
    interestCounter--;
    interestRemaining.textContent = i18next.t("interestRemaining", {
      count: interestCounter,
    });
  }
}

function removeInterest(e) {
  if (e.target.matches("#removeInterest")) {
    const removedInterestDiv = e.target.parentElement;
    const removedInterest = removedInterestDiv.firstChild.textContent;
    const removedIndex = interests.indexOf(removedInterest);
    if (removedIndex > -1) {
      interests.splice(removedIndex, 1);
    }
    removedInterestDiv.remove();
    interestCounter++;
    interestRemaining.textContent = i18next.t("interestRemaining", {
      count: interestCounter,
    });
  }
}

interestsInput.addEventListener("keypress", addInterest);

interestList.addEventListener("click", removeInterest);

export { addInterest, removeInterest, interests };

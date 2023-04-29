const interestsInput = document.querySelector("#interestsInput");
const interestList = document.querySelector("#interestList");
const interests = [];

function addInterest(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    interests.push(interestsInput.value);
    const interest = document.createElement("div");
    interest.className =
      "flex w-fit items-center justify-between gap-2 rounded-lg bg-red-600 px-2 py-1 text-sm font-semibold text-neutral-100 dark:bg-red-400";
    interest.innerHTML = `<span>${interestsInput.value}</span> <span id="removeInterest" class="fa-solid fa-xmark text-red-400 dark:text-red-600 cursor-pointer"></span>`;
    interestList.appendChild(interest);
    interestsInput.value = "";
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
  }
}

interestsInput.addEventListener("keypress", addInterest);

interestList.addEventListener("click", removeInterest);

export { addInterest, removeInterest };

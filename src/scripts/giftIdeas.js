import { giftData } from "./formHandler.js";
import { openAi } from "./utils/openAi.js";

async function getGiftIdeas() {
  const prompt = `Please suggest 5 unique ${giftData.type} gift ideas for a ${giftData.gender} ${giftData.relationship}'s ${giftData.occasion} who is a ${giftData.age} and interested in ${giftData.interests}. The budget for the gift ranges ${giftData.budget}. Tell me the price range of each.`;
  const giftIdeasData = await openAi(prompt);
  const giftIdeas = giftIdeasData.choices[0].text
    .split("\n")
    .filter((line) => line.trim() !== "");
  showGiftIdeas(giftIdeas);
}

function showGiftIdeas(giftIdeas) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.className = "flex flex-wrap gap-4 px-4 py-4 lg:px-8";
  giftIdeas.forEach((giftIdea) => {
    const ideas = document.createElement("div");
    ideas.className =
      "flex w-72 flex-col gap-4 rounded-lg border-2 border-transparent bg-neutral-200 p-4 hover:border-red-600 hover:bg-zinc-200 dark:bg-neutral-900 dark:hover:border-red-400 dark:hover:bg-zinc-900";
    ideas.textContent = giftIdea;
    main.appendChild(ideas);
  });
}

export { getGiftIdeas };

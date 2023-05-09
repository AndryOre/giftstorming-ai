import { giftData } from "./formHandler.js";
import { openAi } from "./utils/openAi.js";

async function getGiftIdeas() {
  const prompt = `Please suggest 5 unique ${giftData.type} gift ideas for a ${giftData.gender} ${giftData.relationship}'s ${giftData.occasion} who is a ${giftData.age} and interested in ${giftData.interests}. The budget for the gift ranges ${giftData.budget}.

For each gift idea, please include the following information in an object:
- "title": A short title or name for the gift.
- "description": A brief description or reason why the gift would be a good choice.
- "price_range": A range of prices for the gift.

Example:
1. title: Personalized Wine Glasses; description: These wine glasses can be customized with any text, making them a great gift for a special occasion.; price_range: $25 - $50`;

  const giftIdeasData = await openAi(prompt);
  const giftString = giftIdeasData.choices[0].text;
  const giftIdeas = giftString
    .split("\n")
    .map((idea) => idea.trim())
    .filter((idea) => idea !== "")
    .map((idea) => {
      const parts = idea.split(";");
      return {
        title: parts[0].split(":")[1].trim(),
        description: parts[1].split(":")[1].trim(),
        price_range: parts[2].split(":")[1].trim(),
      };
    });
  showGiftIdeas(giftIdeas);
}

function showGiftIdeas(giftIdeas) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.className = "flex grow flex-wrap gap-4 px-4 py-4 lg:px-8";
  giftIdeas.forEach((giftIdea) => {
    const ideas = document.createElement("div");
    ideas.className =
      "flex flex-col gap-4 rounded-lg border-2 border-transparent bg-neutral-200 p-4 hover:border-red-600 hover:bg-zinc-200 dark:bg-neutral-900 dark:hover:border-red-400 dark:hover:bg-zinc-900 max-w-xs";
    const { title, description, price_range } = giftIdea;
    ideas.innerHTML = `
      <h2 class="text-xl font-bold text-red-400">${title}</h2>
      <p class="text-sm">${description}</p>
      <p class="text-base font-bold text-red-400">Price Range: <span class="text-neutral-100 text-sm font-normal">${price_range}</span></p>
    `;
    main.appendChild(ideas);
  });
}

export { getGiftIdeas };

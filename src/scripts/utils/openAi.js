const params = {
  model: "text-davinci-003",
  max_tokens: 512,
  prompt: "",
};

async function openAi(prompt) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_SECRET_KEY}`,
    },
    body: JSON.stringify({
      ...params,
      prompt,
    }),
  });
  const data = await response.json();
  return data;
}

export default openAi;

import { GoogleGenAI } from "@google/genai";

async function askAi(prompt) {
  const genAi = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await genAi.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text;
}

async function main() {
  const prompt = 
  "Напиши что такое REST API и как его использовать в JavaScript";
  const aiResponse = await askAi(prompt);
  const lines = aiResponse.split("\n");
  const codeLine = lines.filter((line) => {
    return line.includes("200") || line.includes("404") || line.includes("500");
  });
  const words = aiResponse.split(/[\s,.:;()\`'\"\-]+/);
  const name_methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  let count_methods = 0;

  for (const word of words) {
    if (name_methods.includes(word)) {
      count_methods++;
    }
  }
  
  console.log("AI Response:\n", aiResponse);
  console.log("===============================");
  console.log("Найденные строки с кодами ответа:");
  console.log(codeLine);
  console.log("=================================");
  console.log("Количество упоминаний HTTP:", count_methods);  
};

console.log(main());




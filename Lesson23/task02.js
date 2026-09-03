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

async function main(prompt) {
  return await askAi(prompt);
}

const aiResponse = await main("Напиши что такое REST API и как его использовать в JavaScript")
const arrString = aiResponse.split('\n');
arrString.filter((item) => item === '200' || '201' || '400' || '404' || '500')
console.log(arrString);


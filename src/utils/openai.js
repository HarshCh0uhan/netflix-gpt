import { GoogleGenAI } from "@google/genai";
import { getApiKey } from "./constants";

// Function to initialize GoogleGenAI with the API key
export const initializeAI = async () => {
  const apiKey = await getApiKey('GEMINI_API_KEY');
  return new GoogleGenAI({ apiKey });
};

// For default export compatibility
let ai = null;

// Initialize AI instance (to be called once at app startup)
export const setupAI = async () => {
  ai = await initializeAI();
  return ai;
};

export default ai;
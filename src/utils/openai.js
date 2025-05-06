// import OpenAI from "openai";

// const openAI = new OpenAI({
//     apiKey: process.env.GEMINI_KEY,
//     baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
//     dangerouslyAllowBrowser: true,
// });

// export default openAI;

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });

export default ai;

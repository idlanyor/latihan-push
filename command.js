import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

class AI {
    constructor() {
        this.gpt = new OpenAI({ apiKey: "" })
        this.gemini = new GoogleGenerativeAI("");
    }


    async geminiText(prompt) {
        const model = this.gemini.getGenerativeModel({ model: "gemini-pro" })
        const result = await model.generateContent(prompt)
        const res = await result.response;
        const text = res.text();
        return text;
    }
    async gptText(prompt) {
        const chat = await this.gpt.chat.completions.create({
            messages: [
                { role: 'system', content: "Selalu balas percakapan dalam bahasa indonesia" },
                { role: 'user', content: prompt }
                ],
            temperature: 0.5,
            model: 'gpt-3.5-turbo-16k-0613'
        })
        return chat.choices[0].message.content
    }

}

export default new AI()
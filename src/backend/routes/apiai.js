import express from 'express';
import 'dotenv/config';
// import axios from 'axios';
import { GoogleGenAI } from "@google/genai";
const router = express.Router();


router.post('/ai', async(req, res) => {
    const input = req.body.input
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API});
    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: input,
    });
    console.log(response.text);
    res.send(response.text);
});

module.exports = router;
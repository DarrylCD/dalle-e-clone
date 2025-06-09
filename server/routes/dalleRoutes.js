import express from 'express';
import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';
import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

const config = new OpenAI({
    apiKey: process.env.DALLEAI_API_KEY,
});

const openai = new OpenAI(config);

router.route('/').get(async (req, res) => {
    res.send('Hello from DALL-E Routes!');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        const aiResponse = await openai.images.generate({
            prompt, // The prompt for the image generation
            n: 1, // Number of images to generate
            size: "1024x1024",
            response_format: "b64_json", // Format of the response
        });

        const image = aiResponse.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" })
    }
})

export default router;
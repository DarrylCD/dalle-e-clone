import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';
import e from 'express';

dotenv.config();

const router = express.Router();

// configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// get all posts
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        // if no posts found, return an empty array
        if (!posts || posts.length === 0) {
            return res.status(200).json({ success: true, data: [] });
        }
        // if posts found, return the posts 
        else if (posts.length > 0) {
            res.status(200).json({ success: true, data: posts });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// create a new post
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body; // sending data from the client

        // check if all fields are provided
        if (!name || !prompt || !photo) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }
        // cloudinary uploader to upload the image
        const photoUrl = await cloudinary.uploader.upload(photo); // upload image to Cloudinary

        // create a new post in the database
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        });

        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        // handle errors
        res.status(500).json({ success: false, message: error.message });
    }
});



export default router;
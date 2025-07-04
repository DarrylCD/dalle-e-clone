# 🎨 DALL-E Clone – AI Image Generator & Sharing Platform

This is a full-stack **DALL-E clone** built with the **MERN stack** and **Vite + React**, allowing users to:

- 🧠 Enter a prompt
- 🤖 Generate AI images using **OpenAI's DALL-E**
- 📤 Share the result
- 🖼️ View all shared images on the home page

It's a visually polished and functional showcase of modern full-stack AI-integrated web development.

---

## 🚀 Features

- Prompt-based image generation using **OpenAI**
- Image upload and sharing via **Cloudinary**
- Dark/light mode support (with `next-themes`)
- Display generated images in a gallery grid
- Responsive design built with Tailwind CSS
- Powered by a robust **Express + MongoDB** backend

---

## 🛠️ Tech Stack

### 🔹 Client

- [Vite + React](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/) (for dark mode config via `next-themes`)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)

### 🔹 Server

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/) (image hosting)
- [OpenAI API](https://openai.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📸 Preview

| Home Page | Prompt Input | Generated Output |
|:--:|:--:|:--:|
| ![Prompt](https://via.placeholder.com/300x180?text=Prompt+Input) | ![Output](https://via.placeholder.com/300x180?text=Generated+Image) | ![Gallery](https://via.placeholder.com/300x180?text=Image+Feed) |

_(Replace with real screenshots or hosted links)_

---

## 📦 Environment Variables

To run this project locally, create a `.env` file in your root directory and add the following:

```env
MONGODB_URL=your_mongodb_connection_string
DALLEAI_API_KEY=your_openai_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🧑‍💻 Getting Started

1. Clone the Repository
```
git clone https://github.com/your-username/dall-e-clone.git
cd dall-e-clone
```
2. Install Dependencies
For the client:
```
cd client
npm install
```
For the server:
```
cd ../server
npm install
```
3. Run the App
In two separate terminals:

# Terminal 1 - Client
```
cd client
npm run dev
```
# Terminal 2 - Server
```
cd server
npm run start
```
The app should now be running on http://localhost:5173.

🧠 Credits & Acknowledgments
Inspired by OpenAI’s DALL-E and JavaScript Mastery

Image hosting by Cloudinary

Built with ❤️ using modern MERN stack practices

“Where imagination becomes visuals, one prompt at a time.”
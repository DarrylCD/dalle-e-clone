# 🎨 DALL-E Clone – AI Image Generator & Sharing Platform

This is a full-stack **DALL-E clone** built with the **MERN stack** and **Vite + React**, allowing users to:

- 🧠 Enter a prompt  
- 🤖 Generate AI images using **OpenAI's DALL-E**  
- 📤 Share the result  
- 🖼️ View all shared images on the home page  

It's a visually polished and functional showcase of modern full-stack AI-integrated web development.

---

## 🚀 Live Demo

🌐 **Frontend (Netlify):** [dall-e clone](https://dallecloone.netlify.app)  
⚙️ **Backend :** Hosted on Render  
- Local development: http://localhost:8080  
- Production URL is set in the `.env` file as `VITE_SERVER_URL`

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
| ![Home](https://cdn.imgchest.com/files/7bwckdxzpd7.png) | ![Prompt](https://cdn.imgchest.com/files/4nec8mkpq54.png) | ![Output](https://cdn.imgchest.com/files/49zc2bwq3oy.png) |

---

## 📦 Environment Variables

To run this project locally, create a `.env` file in your root directories.

### 🔹 Client `.env`
```env
VITE_SERVER_URL=http://localhost:8080
```

### 🔹 Server `.env`
```env
MONGODB_URL=your_mongodb_connection_string
DALLEAI_API_KEY=your_openai_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🧑‍💻 Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/DarrylCD/dalle-e-clone.git
cd dalle-e-clone
```

2. **Install Dependencies**

Client:
```bash
cd client
npm install
```

Server:
```bash
cd ../server
npm install
```

3. **Run Locally (two terminals)**

Terminal 1 - Client:
```bash
cd client
npm run dev
```

Terminal 2 - Server:
```bash
cd server
npm run start
```

- Client will run on: [http://localhost:5173](http://localhost:5173)  
- Server will run on: [http://localhost:8080](http://localhost:8080)  

---

## 🧠 Credits & Acknowledgments

- Inspired by OpenAI’s DALL-E and JavaScript Mastery  
- Image hosting by Cloudinary  
- Backend deployed with **Render**  
- Frontend deployed with **Netlify**  
- Built with ❤️ using modern MERN stack practices  

“Where imagination becomes visuals, one prompt at a time.”  
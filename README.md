📸 Pix AI — AI-Based Image Background Remover
Pix AI is a full-stack AI-powered web application that allows users to remove the background of images using Cloudinary's Generative AI APIs. Built using Next.js, Cloudinary, and Tailwind CSS, the app offers a smooth UI with download functionality and social media preview support.

🚀 Features
✅ Upload images directly from your device

🧠 Uses Cloudinary Generative AI for background removal

🔍 Real-time image preview after processing

📥 Download processed image in one click

🌐 Optimized for social media formats (coming soon)

💬 Clean UI built with Tailwind CSS

💻 Built using Next.js (App Router)

🛠️ Tech Stack
Technology	Purpose
Next.js	React framework for frontend + API routes
Cloudinary	AI-based image transformation & storage
Tailwind CSS	Modern, utility-first styling
React Hooks	State & side-effect management
Cloudinary Upload Presets	Secure image upload configuration

📷 Demo


🔗 Live Demo: https://pixai.vercel.app
📁 Source Code: GitHub Repo

📂 Project Structure
bash
Copy
Edit
/pix-ai
├── app/
│   └── page.jsx       # Main UI Page
├── pages/api/
│   └── imageuploader.js  # API to upload image to Cloudinary
├── public/
├── styles/
├── utils/
├── .env.local
└── README.md
⚙️ Getting Started (Local)
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/pix-ai.git
cd pix-ai
Install dependencies:

bash
Copy
Edit
npm install
Create .env.local:

ini
Copy
Edit
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
Start the app:

bash
Copy
Edit
npm run dev
🧠 AI Usage
Pix AI uses the generativeBackgroundReplace() effect from Cloudinary's Generative AI toolkit to automatically detect and replace/remove backgrounds from uploaded images.

🙌 Acknowledgements
Cloudinary Generative AI

Next.js

Tailwind CSS

📬 Contact
Made with ❤️ by Paras Ohri

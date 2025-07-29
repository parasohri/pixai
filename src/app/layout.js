import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider 
} from '@clerk/nextjs'
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cloudinary SaaS Toolkit",
  description: "Upload videos, enhance images, remove backgrounds, and generate social-ready content — all from one powerful SaaS platform built with Next.js and Clerk.",
  keywords: [
    "Cloudinary",
    "Image API",
    "Video Upload",
    "Next.js SaaS",
    "Background Remover",
    "Image Enhancer",
    "Social Share Generator",
    "Media Automation"
  ],
  authors: [{ name: "Paras Ohri" }],
  creator: "Paras Ohri",
  metadataBase: new URL("https://pixai-yhsm.vercel.app/p"),
  openGraph: {
    title: "Cloudinary SaaS Toolkit",
    description: "A modern SaaS app for automated image and video processing.",
    url: "https://pixai-yhsm.vercel.app/",
    siteName: "Cloudinary SaaS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloudinary SaaS Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudinary SaaS Toolkit",
    description: "Enhance your media workflow with AI and Cloudinary API.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html data-theme="coffee" lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

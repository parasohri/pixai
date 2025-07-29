"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
 
export default function Home() {
  const router=useRouter();
 const { isSignedIn } =useUser();
  return ( 
    <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-7xl">
             
                    <h1 className="text-4xl font-bold">Cloudinary Saas:AI-Powered Media Transformation Platform</h1>
                    <p className="py-6 ">
                    AI-Managed Photo Resizing<br/>
                    Video Compression
                    </p>
                    <button 
                    className="btn btn-primary"
                    onClick={() =>isSignedIn? router.push("/home"): router.push("/signup")}
                    >Get Started</button>
                </div>
            </div>
        </div>
  );
}

// "use client";
// import Image from "next/image";
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
 
// export default function Home() {
//   const router=useRouter();
//  const { isSignedIn } =useUser();
//   return ( 
//     <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content text-center">
//                 <div className="max-w-7xl">
             
//                     <h1 className="text-4xl font-bold">Cloudinary Saas:AI-Powered Media Transformation Platform</h1>
//                     <p className="py-6 ">
//                     AI-Managed Photo Resizing<br/>
//                     Video Compression
//                     </p>
//                     <button 
//                     className="btn btn-primary"
//                     onClick={() =>isSignedIn? router.push("/home"): router.push("/signup")}
//                     >Get Started</button>
//                 </div>
//             </div>
//         </div>
//   );
// }
"use client";
import React from "react";
import { motion } from "framer-motion"; // Using framer-motion for more robust animations
import dynamic from "next/dynamic";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Dynamically import the Globe component to ensure it's client-side rendered
const World = dynamic(() => import("../components/ui/globe.jsx").then((m) => m.World), {
  ssr: false, // This is crucial for components that rely on browser APIs
  loading: () => (
    <div className="flex items-center justify-center h-full w-full text-gray-400">
      Loading Globe...
    </div>
  ), // Optional: Add a loading state
});

export default function GlobeDemo() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  // Configuration for the 3D globe
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056", // Dark blue for the globe itself
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF", // White atmosphere for a glow effect
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)", // White polygons with transparency
    ambientLight: "#38bdf8", // Sky blue ambient light
    directionalLeftLight: "#ffffff", // White directional light from left
    directionalTopLight: "#ffffff", // White directional light from top
    pointLight: "#ffffff", // White point light
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 }, // Initial view position
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  // Colors for the animated arcs
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"]; // Teal, Blue, Indigo

  // Sample arc data for demonstration
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
    { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[2] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[0] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[1] },
    { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: colors[2] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[0] },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[1] },
    { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[2] },
    { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[0] },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[1] },
    { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[0] },
    { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[1] },
    { order: 7, startLat: 52.52, startLng: 13.405, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[2] },
    { order: 8, startLat: -8.833221, startLng: 13.264837, endLat: -33.936138, endLng: 18.436529, arcAlt: 0.2, color: colors[0] },
    { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2, color: colors[1] },
    { order: 8, startLat: 1.3521, startLng: 103.8198, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: colors[2] },
    { order: 9, startLat: 51.5072, startLng: -0.1276, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[0] },
    { order: 9, startLat: 22.3193, startLng: 114.1694, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.7, color: colors[1] },
    { order: 9, startLat: 1.3521, startLng: 103.8198, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.5, color: colors[2] },
    { order: 10, startLat: -22.9068, startLng: -43.1729, endLat: 28.6139, endLng: 77.209, arcAlt: 0.7, color: colors[0] },
    { order: 10, startLat: 34.0522, startLng: -118.2437, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.3, color: colors[1] },
    { order: 10, startLat: -6.2088, startLng: 106.8456, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.3, color: colors[2] },
    { order: 11, startLat: 41.9028, startLng: 12.4964, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[0] },
    { order: 11, startLat: -6.2088, startLng: 106.8456, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.2, color: colors[1] },
    { order: 11, startLat: 22.3193, startLng: 114.1694, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[2] },
    { order: 12, startLat: 34.0522, startLng: -118.2437, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.1, color: colors[0] },
    { order: 12, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.2, color: colors[1] },
    { order: 12, startLat: 22.3193, startLng: 114.1694, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.3, color: colors[2] },
    { order: 13, startLat: 52.52, startLng: 13.405, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
    { order: 13, startLat: 11.986597, startLng: 8.571831, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: colors[1] },
    { order: 13, startLat: -22.9068, startLng: -43.1729, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.1, color: colors[2] },
    { order: 14, startLat: -33.936138, startLng: 18.436529, endLat: 21.395643, endLng: 39.883798, arcAlt: 0.3, color: colors[0] },
  ];

  return (
    // Main container for the entire section.
    // Uses flexbox to arrange content, full screen height, and a dark background.
    <div className="relative flex flex-col md:flex-row items-center justify-center h-screen w-full bg-zinc-950 text-gray-100 overflow-hidden">
      {/* Content Wrapper: Constrains width, centers content, and handles overflow */}
      <div className="max-w-7xl mx-auto w-full h-full relative flex flex-col md:flex-row items-center justify-center p-4 sm:p-8">
        {/* Text Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start slightly below and transparent
          animate={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 lg:w-2/5 p-4 md:p-0 mb-10 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            PIX<br/> AI: <br className="hidden sm:inline" />AI-Powered Media Transformation
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-md mb-8">
            Unlock the power of AI with seamless photo resizing, video compression, and advanced media transformations.
          </p>
          <button
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            onClick={() => (isSignedIn ? router.push("/home") : router.push("/signup"))}
          >
            Get Started
          </button>
        </motion.div>

        {/* Globe Section Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and transparent
          animate={{ opacity: 1, scale: 1 }} // Animate to full size and visible
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Smooth animation with a slight delay
          className="relative w-full h-[400px] md:h-[600px] md:w-1/2 lg:w-3/5 flex items-center justify-center"
        >
          {/* Gradient overlay to blend the globe into the background, especially at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none select-none z-20" />
          
          {/* The Globe component itself */}
          <World data={sampleArcs} globeConfig={globeConfig} />
        </motion.div>
      </div>
    </div>
  );
}
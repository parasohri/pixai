"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  useClerk,
  useUser,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { LogOutIcon, MenuIcon, XIcon } from "lucide-react";

export default function AppLayout({ children }) {
  const router = useRouter();
  const { signOut } = useClerk();
  const { user, isLoaded } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Renamed state for clarity

  const handleLogoClick = () => router.push("/");
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-850 text-gray-100 font-sans">
      {/* Top Navbar Header */}
      <header className="bg-zinc-900 shadow-xl w-full sticky top-0 z-50 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Toggle (Hamburger Icon) - Shown on mobile, hidden on desktop */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-200 mr-4"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? (
              <XIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>

          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="cursor-pointer text-2xl font-extrabold text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out"
          >
            Cloudinary SaaS
          </div>

          {/* Spacer for desktop nav if needed, but not required if menu is in sidebar */}
          <div className="hidden md:block flex-grow" /> 

          {/* Right: User Info / Auth */}
          <div className="flex items-center gap-4 ml-auto"> {/* ml-auto pushes content to the right */}
            <SignedIn>
              {isLoaded && user && (
                <>
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
                    <img
                      src={user.imageUrl}
                      alt="User Avatar"
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="hidden lg:block text-sm text-gray-400 truncate max-w-[180px]">
                    {user.emailAddresses[0]?.emailAddress}
                  </div>

                  {/* Sign Out */}
                  <button
                    onClick={() => signOut()}
                    className="flex items-center px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-colors duration-200 ease-in-out"
                  >
                    <LogOutIcon className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </>
              )}
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className="px-5 py-2 text-base font-medium bg-blue-600 hover:bg-blue-700 rounded-lg text-white shadow-md transition-colors duration-200 ease-in-out">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>

      {/* Main content area below the header */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-zinc-900 border-r border-zinc-700/50 flex flex-col
            md:relative md:translate-x-0 transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          // Adjusted padding-top to account for the fixed header
          style={{ paddingTop: '4rem' }} // h-16 = 4rem
        >
          {/* Close button for mobile sidebar */}
          <div className="md:hidden p-4 self-end">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-blue-400"
              aria-label="Close menu"
            >
              <XIcon className="w-7 h-7" />
            </button>
          </div>

          {/* Sidebar Nav Links */}
          <nav className="flex flex-col p-4 gap-3">
            <Link
              href="/addtexttoimage"
              onClick={() => setSidebarOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:bg-zinc-800 hover:text-blue-400 rounded-md transition-colors duration-200"
            >
              Add Text to Image
            </Link>
            <Link
              href="/backgroundremoval"
              onClick={() => setSidebarOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:bg-zinc-800 hover:text-blue-400 rounded-md transition-colors duration-200"
            >
              Background Removal
            </Link>
            <Link
              href="/socialshare"
              onClick={() => setSidebarOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:bg-zinc-800 hover:text-blue-400 rounded-md transition-colors duration-200"
            >
              Social Share
            </Link>
            <Link
              href="/improveblurimage"
              onClick={() => setSidebarOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:bg-zinc-800 hover:text-blue-400 rounded-md transition-colors duration-200"
            >
              Improve Blur
            </Link>
            <Link
              href="/videoupload"
              onClick={() => setSidebarOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:bg-zinc-800 hover:text-blue-400 rounded-md transition-colors duration-200"
            >
              Video Upload
            </Link>
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        {/* Page Content */}
        {/* On desktop, ml-64 pushes content away from the 64-unit wide sidebar.
            On mobile, ml-0 (default) as sidebar is an overlay. */}
        <main className="flex-grow max-w-7xl mx-auto w-full pt-4 px-4 sm:px-6 lg:px-8 pb-8 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}
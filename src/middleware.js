import { auth, clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define exact public routes
const publicRoutes = [
  "/",
  "/signin",
  "/signup",
];

 
const isPublicRoute = (req) => {
  const pathname = new URL(req.url).pathname;

  if (publicRoutes.includes(pathname)) return true;

  // Match dynamic portfolio routes
  if (/^\/portfolio\/[^\/]+$/.test(pathname)) return true;
  if (/^\/portfoliotwo\/[^\/]+$/.test(pathname)) return true;

  return false;
};

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const pathname = new URL(req.url).pathname;

  // If user is not logged in and route is protected
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/sign-up", req.url));
  }

  // If user is logged in and visiting signin/signup, redirect to home
  if (userId && ["/signin", "/signup", "/"].includes(pathname)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

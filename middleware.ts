import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect everything except public routes
    "/((?!_next|favicon.ico|login|register).*)",
  ],
};

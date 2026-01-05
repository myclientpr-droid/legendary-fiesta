import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const ua = req.headers.get("user-agent") || "";

  // Allow Googlebot and other crawlers to bypass auth
  if (/Googlebot|bingbot|Slurp/i.test(ua)) {
    return; // let crawlers access public pages
  }

  // Protect only admin routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
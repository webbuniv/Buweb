import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/signin" || path === "/signup"

  // Get the session cookie
  const session = request.cookies.get("appwrite-session")?.value

  // If the user is not authenticated and trying to access a protected route
  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  // If the user is authenticated and trying to access auth pages
  if (session && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

// Configure the paths that should be checked by the middleware
export const config = {
  matcher: [
    // Protected routes
    "/",
    "/news/:path*",
    "/events/:path*",
    "/teams/:path*",
    "/profile",
    "/settings",
    // Auth routes
    "/signin",
    "/signup",
  ],
}

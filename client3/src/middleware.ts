import { NextResponse, NextRequest } from 'next/server';
import { getCurrentUser } from '@/lib/actions/user.action';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const protectedPaths = ['/', '/profile', '/settings'];

  if (protectedPaths.includes(url.pathname)) {

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

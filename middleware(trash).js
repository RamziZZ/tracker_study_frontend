import { NextResponse } from "next/server";

export function middleware(request) {
  // Front-end only application: do not enforce authentication redirects.
  return NextResponse.next();
}
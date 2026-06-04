import { NextRequest, NextResponse } from "next/server";

const WORDPRESS_POSTS_API = "https://www.edunav.net/wp-json/wp/v2/posts";

export const dynamic = "force-dynamic";

const ALLOWED_PARAMS = new Set([
  "slug",
  "_embed",
  "per_page",
  "page",
  "categories",
  "exclude",
]);

export async function GET(request: NextRequest) {
  const upstreamParams = new URLSearchParams();

  request.nextUrl.searchParams.forEach((value, key) => {
    if (ALLOWED_PARAMS.has(key)) {
      upstreamParams.append(key, value);
    }
  });

  try {
    const response = await fetch(`${WORDPRESS_POSTS_API}?${upstreamParams.toString()}`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const body = await response.text();

    return new NextResponse(body, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "application/json",
        "X-WP-TotalPages": response.headers.get("X-WP-TotalPages") || "0",
        "X-WP-Total": response.headers.get("X-WP-Total") || "0",
      },
    });
  } catch (error) {
    console.error("WordPress proxy error:", error);

    return NextResponse.json(
      { message: "Failed to fetch posts from WordPress" },
      { status: 502 }
    );
  }
}

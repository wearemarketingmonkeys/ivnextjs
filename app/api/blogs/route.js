// app/api/blogs/route.js
export async function GET() {
  try {
    const res = await fetch("https://iv-blogs.ivhub.com/blogslist/feeds", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Upstream response not OK:", res.status);
      return new Response(
        JSON.stringify({ error: "Failed to fetch upstream data" }),
        { status: res.status }
      );
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Proxy fetch failed:", error);
    return new Response(
      JSON.stringify({ error: "Proxy fetch failed" }),
      { status: 500 }
    );
  }
}

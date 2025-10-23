export async function GET() {
  try {
    const res = await fetch("https://iv-blogs.ivhub.com/blogslist", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: `Fetch failed: ${res.status}` }), { status: 500 });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ error: "Proxy failed", details: String(error) }), { status: 500 });
  }
}

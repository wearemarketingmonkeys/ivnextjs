export async function GET() {
  try {
    const res = await fetch('https://iv-blogs.ivhub.com/blogslist');
    return new Response(JSON.stringify({ ok: res.ok, status: res.status }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}

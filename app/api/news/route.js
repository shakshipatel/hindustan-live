import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const MOCK_PATH = path.join(process.cwd(), "data", "articles.json");

async function fetchFromNewsAPI() {
  const key = process.env.NEWSAPI_KEY;
  if (!key) return null;

  const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=${key}`;
  const res = await fetch(url);
  if (!res.ok) return null;

  const json = await res.json();
  return (json.articles || []).map((a, idx) => ({
    id: `n${idx}`,
    title: a.title || "Untitled",
    summary: a.description || "",
    image: a.urlToImage || null,
    publishedAt: a.publishedAt || new Date().toISOString(),
    content: a.content || a.description || "",
    source: a.source?.name || "NewsAPI",
  }));
}

export async function GET() {
  try {
    const remote = await fetchFromNewsAPI();
    if (remote && remote.length) return NextResponse.json(remote);

    const raw = fs.readFileSync(MOCK_PATH, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch (err) {
    try {
      const raw = fs.readFileSync(MOCK_PATH, "utf-8");
      const data = JSON.parse(raw);
      return NextResponse.json(data);
    } catch (e) {
      return NextResponse.json([], { status: 500 });
    }
  }
}

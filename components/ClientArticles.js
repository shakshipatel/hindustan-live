"use client";

import { useEffect, useState } from "react";

import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

export default function ClientArticles() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => {
        if (mounted) {
          setArticles(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (mounted) setError(err.message || "Fetch error");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="grid md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );

  if (error) return <div className="text-red-600">Failed to load: {error}</div>;

  if (!articles || !articles.length)
    return <div className="text-gray-600">No latest articles.</div>;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {articles.map((a) => (
        <Card key={a.id} article={a} />
      ))}
    </div>
  );
}

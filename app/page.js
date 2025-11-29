import Script from "next/script";

import Hero from "../components/Hero";
import Card from "../components/Card";
import CategorySection from "../components/CategorySection";
import Sidebar from "../components/Sidebar";
import FilterChips from "../components/FilterChips";
import Horoscope from "../components/Horoscope";
import WebStories from "../components/WebStories";

import articles from "../data/articles.json";

export default function Home() {
  const top = articles[0] || null;
  const sideArticles = articles.slice(1, 5);
  const restArticles = articles.slice(5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "हिंदुस्तान",
    url: "https://www.livehindustan.com",
    publisher: {
      "@type": "Organization",
      name: "Hindustan Media Ventures Limited",
    },
  };

  return (
    <>
      <Script id="home-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Ad Banner Placeholder */}
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 mb-4 text-center">
        <span className="text-xs text-gray-400">विज्ञापन</span>
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-24 md:h-28 rounded flex items-center justify-center mt-1">
          <span className="text-gray-500 text-sm">Advertisement Banner</span>
        </div>
      </div>

      {/* Hero Section */}
      {top ? (
        <Hero article={top} sideArticles={sideArticles} />
      ) : (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-500">कोई खबर उपलब्ध नहीं है।</p>
        </div>
      )}

      {/* Filter Chips with horizontal scroll */}
      <FilterChips />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Category Section - देश */}
          <CategorySection
            title="देश"
            articles={articles.filter(
              (a) => a.category === "देश" || a.source === "राष्ट्रीय"
            )}
          />

          {/* News Grid */}
          <section>
            <div className="flex items-center justify-between mb-4 border-b-2 border-red-600 pb-2">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-600 rounded"></span>
                ताज़ा खबरें
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {articles.slice(0, 4).map((a) => (
                <Card key={a.id} article={a} />
              ))}
            </div>
          </section>

          {/* Category Section - खेल */}
          <CategorySection
            title="खेल"
            articles={articles.filter((a) => a.category === "खेल")}
          />

          {/* Category Section - मनोरंजन */}
          <CategorySection
            title="मनोरंजन"
            articles={articles.filter((a) => a.category === "मनोरंजन")}
          />

          {/* Horoscope Section */}
          <Horoscope />

          {/* Web Stories Section */}
          <WebStories />

          {/* More News */}
          {restArticles.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4 border-b-2 border-red-600 pb-2">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-600 rounded"></span>
                  और खबरें
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {restArticles.map((a) => (
                  <Card key={a.id} article={a} variant="small" />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar trendingArticles={articles} />
        </div>
      </div>
    </>
  );
}

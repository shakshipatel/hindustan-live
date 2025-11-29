import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

import Sidebar from "../../../components/Sidebar";

import articles from "../../../data/articles.json";

export async function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }) {
  const article = articles.find((a) => a.id === params.id);
  return {
    title: article ? `${article.title} | हिंदुस्तान` : "Article Not Found",
    description: article?.summary || "",
  };
}

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.id === params.id) || null;
  const relatedArticles = articles
    .filter((a) => a.id !== params.id)
    .slice(0, 4);

  if (!article) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            खबर नहीं मिली
          </h1>
          <p className="text-gray-600 mb-4">
            यह खबर उपलब्ध नहीं है या हटा दी गई है।
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            होम पेज पर जाएं
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: article.image || null,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: "हिंदुस्तान" },
    publisher: {
      "@type": "Organization",
      name: "Hindustan Media Ventures Limited",
    },
  };

  return (
    <>
      <Script id={`article-jsonld-${article.id}`} type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-red-600">
          होम
        </Link>
        <span className="mx-2">›</span>
        <span className="text-red-600">{article.source}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Article */}
        <article className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <header className="mb-6">
            <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mb-3">
              {article.source}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {new Date(article.publishedAt).toLocaleDateString("hi-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Summary */}
          <p className="text-lg text-gray-700 font-medium mb-6 border-l-4 border-red-600 pl-4">
            {article.summary}
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed">{article.content}</p>
            <p className="text-gray-800 leading-relaxed mt-4">
              इस खबर से जुड़ी अधिक जानकारी के लिए हमारे साथ जुड़े रहें। हम आपको
              सभी ताज़ा अपडेट देते रहेंगे।
            </p>
          </div>

          {/* Share buttons */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-gray-500 mb-3">शेयर करें:</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar trendingArticles={relatedArticles} />
        </div>
      </div>

      {/* Related Articles */}
      <section className="mt-8">
        <div className="flex items-center mb-4 border-b-2 border-red-600 pb-2">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-1 h-5 bg-red-600 rounded"></span>
            संबंधित खबरें
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {relatedArticles.map((a) => (
            <Link
              key={a.id}
              href={`/article/${a.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition"
            >
              <div className="relative aspect-video">
                <Image
                  src={a.image || "/placeholder.svg"}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-red-600 transition">
                  {a.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function CategorySection({ title, articles, showMore = true }) {
  if (!articles || articles.length === 0) return null;

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 6); // 5 articles for right side
  const bottomArticles = articles.slice(6, 8); // 2 articles for bottom

  return (
    <section className="mb-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4 border-l-4 border-red-600 pl-3">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {showMore && (
          <Link
            href="#"
            className="text-red-600 text-sm hover:underline font-medium"
          >
            और पढ़ें →
          </Link>
        )}
      </div>

      {/* Main content grid - Left main card + Right side list */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
        {/* Main large article - Left side */}
        <div className="lg:col-span-3">
          <Link
            href={`/article/${mainArticle.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={mainArticle.image || "/placeholder.svg"}
                alt={mainArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              {mainArticle.source && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">
                  {mainArticle.source}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition line-clamp-2">
                {mainArticle.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {mainArticle.summary}
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                <svg
                  className="w-3.5 h-3.5"
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
                <span>
                  {new Date(mainArticle.publishedAt).toLocaleDateString(
                    "hi-IN",
                    {
                      day: "numeric",
                      month: "short",
                    }
                  )}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right side - Stacked articles with space-between */}
        <div className="lg:col-span-2 flex flex-col justify-between bg-white rounded-lg p-3 shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
            <span className="w-1 h-5 bg-red-600 rounded"></span>
            <h3 className="font-bold text-gray-900">ताज़ा खबरें</h3>
          </div>

          {/* Articles list with space-between */}
          <div className="flex-1 flex flex-col justify-between">
            {sideArticles.map((a, index) => (
              <Link
                key={a.id}
                href={`/article/${a.id}`}
                className="flex gap-3 group hover:bg-gray-50 px-1 py-1 rounded transition"
              >
                <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={a.image || "/placeholder.svg"}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition">
                    {a.title}
                  </h4>
                  <span className="text-xs text-gray-400 mt-0.5 block">
                    {new Date(a.publishedAt).toLocaleTimeString("hi-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row - 2 cards */}
      {bottomArticles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          {bottomArticles.map((a) => (
            <Link
              key={a.id}
              href={`/article/${a.id}`}
              className="flex gap-3 group bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={a.image || "/placeholder.svg"}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition">
                  {a.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {a.summary}
                </p>
                <span className="text-xs text-gray-400 mt-1 block">
                  {new Date(a.publishedAt).toLocaleDateString("hi-IN", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

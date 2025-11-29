import Image from "next/image";
import Link from "next/link";

export default function Card({ article, variant = "default" }) {
  const img = article.image || "/placeholder.svg";

  if (variant === "horizontal") {
    return (
      <Link
        href={`/article/${article.id}`}
        className="flex gap-3 group py-3 border-b border-gray-200 last:border-0 hover:bg-gray-50 px-2 -mx-2 rounded transition"
      >
        <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
          <Image
            src={img}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2 group-hover:text-red-600 transition">
            {article.title}
          </h3>
          <span className="text-xs text-gray-400 mt-1 block">
            {new Date(article.publishedAt).toLocaleTimeString("hi-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "small") {
    return (
      <Link href={`/article/${article.id}`} className="group block">
        <div className="relative aspect-video w-full overflow-hidden rounded">
          <Image
            src={img}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="text-sm font-semibold leading-tight mt-2 line-clamp-2 group-hover:text-red-600 transition">
          {article.title}
        </h3>
      </Link>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition">
      <Link href={`/article/${article.id}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={img}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
          {article.source && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded font-medium">
              {article.source}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-base leading-tight line-clamp-2 group-hover:text-red-600 transition">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {article.summary}
          </p>
          <div className="mt-3 text-xs text-gray-400 flex items-center gap-2">
            <svg
              className="w-3 h-3"
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
              {new Date(article.publishedAt).toLocaleDateString("hi-IN", {
                day: "numeric",
                month: "short",
              })}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

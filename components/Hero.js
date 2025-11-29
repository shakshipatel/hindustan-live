import Image from "next/image";
import Link from "next/link";

export default function Hero({ article, sideArticles = [] }) {
  const img = article.image || "/placeholder.svg";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      {/* Main story */}
      <div className="lg:col-span-2">
        <Link href={`/article/${article.id}`} className="group block">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src={img}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block font-medium">
                {article.source || "मुख्य खबर"}
              </span>
              <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
                {article.title}
              </h1>
              <p className="text-gray-200 text-sm mt-2 hidden md:block line-clamp-2">
                {article.summary}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Side stories */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900 border-b-2 border-red-600 pb-2 flex items-center gap-2">
          <span className="w-1 h-4 bg-red-600 rounded"></span>
          ताज़ा खबरें
        </h3>
        {sideArticles.slice(0, 4).map((a) => (
          <Link
            key={a.id}
            href={`/article/${a.id}`}
            className="flex gap-3 group p-2 rounded hover:bg-gray-50 transition"
          >
            <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
              <Image
                src={a.image || "/placeholder.svg"}
                alt={a.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold leading-tight line-clamp-2 group-hover:text-red-600 transition">
                {a.title}
              </h4>
              <span className="text-xs text-gray-500 mt-1 block">
                {new Date(a.publishedAt).toLocaleTimeString("hi-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

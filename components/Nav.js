"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const categories = [
  { name: "होम", href: "/", active: true },
  { name: "राज्य", href: "#" },
  { name: "देश", href: "#" },
  { name: "क्रिकेट", href: "#" },
  { name: "लाइव स्कोर", href: "#" },
  { name: "मनोरंजन", href: "#" },
  { name: "बिजनेस", href: "#" },
  { name: "करियर", href: "#" },
  { name: "विदेश", href: "#" },
  { name: "धर्म", href: "#" },
  { name: "राशिफल", href: "#" },
  { name: "लाइफस्टाइल", href: "#" },
  { name: "ऑटो", href: "#" },
  { name: "गैजेट्स", href: "#" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Section - Icons and Search */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left - Hamburger and Logo */}
            <div className="flex items-center gap-4">
              <button
                className="text-gray-600 hover:text-red-600 p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="border-2 border-red-600 rounded px-2 py-1">
                  <span
                    className="text-red-600 font-bold text-2xl md:text-3xl"
                    style={{ fontFamily: "serif" }}
                  >
                    हि
                  </span>
                </div>
                <span
                  className="text-red-600 font-bold text-2xl md:text-3xl ml-1"
                  style={{ fontFamily: "serif" }}
                >
                  हिन्दुस्तान
                </span>
              </Link>
            </div>

            {/* Center - Quick Links */}
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <a
                href="#"
                className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>फोटो</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>वीडियो</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>शहर चुनें</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <span>ई-पेपर</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>साइन इन</span>
              </a>
            </div>

            {/* Right - Search */}
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="यहाँ लिखें"
                  className="w-32 md:w-48 px-3 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation Tabs */}
      <div className="border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1 rounded-full shadow-md hidden md:flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition whitespace-nowrap ${
                  cat.active
                    ? "text-red-600 border-b-2 border-red-600 -mb-[2px]"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {cat.name}
              </Link>
            ))}
            {/* More button */}
            <button className="flex-shrink-0 px-4 py-3 text-gray-600 hover:text-red-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1 rounded-full shadow-md hidden md:flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="p-4 space-y-3">
            <div className="flex flex-wrap gap-3 pb-3 border-b">
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-gray-600"
              >
                <span>📷</span> फोटो
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-gray-600"
              >
                <span>🎥</span> वीडियो
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-gray-600"
              >
                <span>📍</span> शहर चुनें
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-gray-600"
              >
                <span>📰</span> ई-पेपर
              </a>
            </div>
          </div>
          <ul className="flex flex-col text-sm border-t">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link
                  href={cat.href}
                  className={`block px-4 py-3 border-b border-gray-100 ${
                    cat.active
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import { useRef } from "react";

const filters = [
  { name: "ट्रेंडिंग", active: true },
  { name: "उत्तर प्रदेश" },
  { name: "बिहार" },
  { name: "दिल्ली NCR" },
  { name: "झारखंड" },
  { name: "मध्य प्रदेश" },
  { name: "राजस्थान" },
  { name: "उत्तराखंड" },
  { name: "छत्तीसगढ़" },
  { name: "हरियाणा" },
  { name: "पंजाब" },
  { name: "महाराष्ट्र" },
];

export default function FilterChips() {
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
    <div className="relative bg-white rounded-lg shadow-sm p-3 mb-6">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-1.5 rounded-full shadow-md border border-gray-200 hidden md:flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 text-gray-600"
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

      {/* Scrollable Chips */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-6 md:px-8"
      >
        {filters.map((filter, i) => (
          <button
            key={i}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition ${
              filter.active
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-1.5 rounded-full shadow-md border border-gray-200 hidden md:flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 text-gray-600"
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
  );
}

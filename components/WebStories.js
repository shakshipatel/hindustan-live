"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "सभी वेब स्टोरी",
  "मनोरंजन",
  "ट्रेंडिंग",
  "धर्म",
  "न्यूज़",
  "खेल",
  "फैशन",
  "खान-पान",
  "खुद करें",
  "टेक",
  "ब्यूटी",
  "यात्रा",
  "हेल्थ",
];

const stories = [
  {
    id: 1,
    title: "बॉलीवुड की टॉप 10 अभिनेत्रियां",
    image: "https://picsum.photos/200/350?random=101",
    category: "मनोरंजन",
  },
  {
    id: 2,
    title: "क्रिकेट वर्ल्ड कप की यादें",
    image: "https://picsum.photos/200/350?random=102",
    category: "खेल",
  },
  {
    id: 3,
    title: "दिवाली स्पेशल रेसिपी",
    image: "https://picsum.photos/200/350?random=103",
    category: "खान-पान",
  },
  {
    id: 4,
    title: "टेक गैजेट्स 2025",
    image: "https://picsum.photos/200/350?random=104",
    category: "टेक",
  },
  {
    id: 5,
    title: "फैशन ट्रेंड्स विंटर 2025",
    image: "https://picsum.photos/200/350?random=105",
    category: "फैशन",
  },
  {
    id: 6,
    title: "भारत की खूबसूरत जगहें",
    image: "https://picsum.photos/200/350?random=106",
    category: "यात्रा",
  },
];

export default function WebStories() {
  const scrollRef = useRef(null);
  const categoryRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-8">
      {/* Ad Banner */}
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 mb-4 text-center">
        <span className="text-xs text-gray-400">विज्ञापन</span>
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 h-48 rounded flex items-center justify-center mt-1">
          <div className="text-center">
            <span className="text-orange-600 font-bold text-lg">
              Advertisement
            </span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="relative mb-4">
        <div
          ref={categoryRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                index === 0
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(scrollRef, "left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition hidden md:flex"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Stories */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-1 py-2"
        >
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`#story-${story.id}`}
              className="group flex-shrink-0 w-36 sm:w-44"
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Story indicator */}
                <div className="absolute top-2 left-2 right-2 flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex-1 h-0.5 bg-white/50 rounded-full"
                    ></div>
                  ))}
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded">
                  {story.category}
                </span>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white text-sm font-semibold line-clamp-2 leading-tight">
                    {story.title}
                  </h3>
                </div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-white/90 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(scrollRef, "right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition hidden md:flex"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

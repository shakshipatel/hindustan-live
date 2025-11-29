import Image from "next/image";
import Link from "next/link";

import StockWidget from "./StockWidget";

const zodiacSigns = [
  { name: "मेष", icon: "♈" },
  { name: "वृष", icon: "♉" },
  { name: "मिथुन", icon: "♊" },
  { name: "कर्क", icon: "♋" },
  { name: "सिंह", icon: "♌" },
  { name: "कन्या", icon: "♍" },
  { name: "तुला", icon: "♎" },
  { name: "वृश्चिक", icon: "♏" },
  { name: "धनु", icon: "♐" },
  { name: "मकर", icon: "♑" },
  { name: "कुंभ", icon: "♒" },
  { name: "मीन", icon: "♓" },
];

export default function Sidebar({ trendingArticles = [] }) {
  return (
    <aside className="space-y-6">
      {/* Trending section */}
      <div className="bg-white rounded shadow-sm p-4">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-2">
          <span className="text-red-600">🔥</span> ट्रेंडिंग न्यूज़
        </h3>
        <ul className="space-y-3">
          {trendingArticles.slice(0, 5).map((a, i) => (
            <li key={a.id} className="flex gap-3 group">
              <span className="text-2xl font-bold text-gray-300 w-6">
                {i + 1}
              </span>
              <Link
                href={`/article/${a.id}`}
                className="text-sm font-medium leading-tight line-clamp-2 group-hover:text-red-600 transition flex-1"
              >
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Stock Widget */}
      <StockWidget />

      {/* Horoscope Mini Widget */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 p-3 border-b border-gray-200">
          <span className="w-1 h-5 bg-red-600 rounded"></span>
          <h3 className="font-bold text-gray-900">राशिफल</h3>
          <span className="flex-1 h-px bg-red-200 ml-2"></span>
        </div>

        <div className="p-3">
          <p className="text-sm text-red-600 font-medium mb-3">आज का राशिफल</p>

          <div className="grid grid-cols-4 gap-3">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign.name}
                href={`#rashifal-${sign.name}`}
                className="group flex flex-col items-center hover:text-red-600 transition"
              >
                <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-red-400 flex items-center justify-center mb-1 bg-gray-50 transition">
                  <span className="text-lg text-gray-400 group-hover:text-red-500 transition">
                    {sign.icon}
                  </span>
                </div>
                <span className="text-[10px] text-gray-700 group-hover:text-red-600 font-medium">
                  {sign.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Ad placeholder */}
      <div className="bg-gray-100 rounded p-4 text-center">
        <div className="border-2 border-dashed border-gray-300 rounded py-12">
          <span className="text-gray-400 text-sm">विज्ञापन</span>
        </div>
      </div>

      {/* Subscribe section */}
      <div className="bg-red-700 text-white rounded p-4">
        <h3 className="font-bold mb-2">📰 ई-पेपर</h3>
        <p className="text-sm opacity-90 mb-3">आज का हिंदुस्तान ई-पेपर पढ़ें</p>
        <button className="w-full bg-white text-red-700 font-semibold py-2 rounded hover:bg-gray-100 transition">
          अभी पढ़ें
        </button>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";

const zodiacSigns = [
  { name: "मेष", nameEn: "Aries", icon: "♈", dates: "21 मार्च - 19 अप्रैल" },
  { name: "वृष", nameEn: "Taurus", icon: "♉", dates: "20 अप्रैल - 20 मई" },
  { name: "मिथुन", nameEn: "Gemini", icon: "♊", dates: "21 मई - 20 जून" },
  { name: "कर्क", nameEn: "Cancer", icon: "♋", dates: "21 जून - 22 जुलाई" },
  { name: "सिंह", nameEn: "Leo", icon: "♌", dates: "23 जुलाई - 22 अगस्त" },
  { name: "कन्या", nameEn: "Virgo", icon: "♍", dates: "23 अगस्त - 22 सितंबर" },
  {
    name: "तुला",
    nameEn: "Libra",
    icon: "♎",
    dates: "23 सितंबर - 22 अक्टूबर",
  },
  {
    name: "वृश्चिक",
    nameEn: "Scorpio",
    icon: "♏",
    dates: "23 अक्टूबर - 21 नवंबर",
  },
  {
    name: "धनु",
    nameEn: "Sagittarius",
    icon: "♐",
    dates: "22 नवंबर - 21 दिसंबर",
  },
  {
    name: "मकर",
    nameEn: "Capricorn",
    icon: "♑",
    dates: "22 दिसंबर - 19 जनवरी",
  },
  {
    name: "कुंभ",
    nameEn: "Aquarius",
    icon: "♒",
    dates: "20 जनवरी - 18 फरवरी",
  },
  { name: "मीन", nameEn: "Pisces", icon: "♓", dates: "19 फरवरी - 20 मार्च" },
];

const predictions = [
  "आपको अपनी सेहत का ख़ास ध्यान रखना है। ऑफि...",
  "पर्सनल और प्रोफेशनल लाइफ में आपको बैलेंस...",
  "बैंकिंग अपडेट से छोटे-मोटे बदलाव आ सकते हैं,...",
  "करियर में आगे बढ़ने के मौके आपके सामने आ...",
  "आज आप कुछ बड़े फैसले लेंगे। आज एनर्जेटिक महसू...",
  "निवेश से पहले आपको थोड़ा रुककर सोचना...",
];

export default function Horoscope() {
  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4 border-l-4 border-red-600 pl-3">
        <h2 className="text-xl font-bold text-gray-900">
          आज का राशिफल पढ़ने के लिए अपनी राशि चुनें
        </h2>
      </div>

      {/* Zodiac Cards - First 6 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
        {zodiacSigns.slice(0, 6).map((sign, index) => (
          <Link
            key={sign.nameEn}
            href={`#rashifal-${sign.nameEn.toLowerCase()}`}
            className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-red-300 transition text-center"
          >
            {/* Zodiac Icon */}
            <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-gray-200 group-hover:border-red-400 flex items-center justify-center bg-gray-50 transition">
              <span className="text-3xl text-gray-400 group-hover:text-red-500 transition">
                {sign.icon}
              </span>
            </div>
            {/* Name */}
            <h3 className="font-bold text-gray-800 mb-1">{sign.name}</h3>
            {/* Prediction */}
            <p className="text-xs text-gray-500 line-clamp-2 mb-3">
              {predictions[index]}
            </p>
            {/* Button */}
            <button className="text-xs text-red-600 border border-red-600 rounded px-3 py-1.5 hover:bg-red-600 hover:text-white transition font-medium">
              और देखें
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}

"use client";

const breakingItems = [
  "ब्रेकिंग: प्रधानमंत्री ने किया नई योजना का ऐलान",
  "दिल्ली में भारी बारिश, कई इलाकों में जलभराव",
  "शेयर बाजार में तेजी, सेंसेक्स 500 अंक ऊपर",
  "टीम इंडिया ने जीता मैच, सीरीज 2-0 से आगे",
];

export default function BreakingNews() {
  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <span className="bg-white text-red-600 px-3 py-2 text-sm font-bold whitespace-nowrap">
          ब्रेकिंग न्यूज़
        </span>
        <div className="overflow-hidden flex-1 py-2">
          <div className="animate-marquee whitespace-nowrap">
            {breakingItems.map((item, i) => (
              <span key={i} className="mx-8">
                • {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

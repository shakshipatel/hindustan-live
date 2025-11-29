"use client";

import { useState, useEffect } from "react";

const mockStocks = [
  {
    name: "Poonawalla Fincorp",
    price: "482.50",
    change: "+3.65",
    isPositive: true,
  },
  {
    name: "Motilal Oswal Financial Services",
    price: "959.65",
    change: "+3.56",
    isPositive: true,
  },
  { name: "SRF", price: "2933.00", change: "+3.43", isPositive: true },
  {
    name: "Elitecon International",
    price: "86.00",
    change: "-4.66",
    isPositive: false,
  },
  { name: "Gail (India)", price: "176.10", change: "-4.19", isPositive: false },
  { name: "HDFC Bank", price: "1645.30", change: "+1.25", isPositive: true },
  {
    name: "Reliance Industries",
    price: "2456.80",
    change: "-0.85",
    isPositive: false,
  },
  { name: "TCS", price: "3892.45", change: "+2.15", isPositive: true },
];

export default function StockWidget() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString("en-IN", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        }) +
          ", " +
          now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
          <span className="text-white font-bold">ट्रेडिंग स्टॉक</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Time */}
      <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
        <p className="text-xs text-gray-500">{currentTime}</p>
      </div>

      {/* Stocks List */}
      <div className="divide-y divide-gray-100">
        {mockStocks.slice(0, 5).map((stock, index) => (
          <div
            key={index}
            className="px-3 py-2.5 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex-1 min-w-0 pr-2">
              <p className="text-sm text-gray-800 font-medium truncate">
                {stock.name}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-bold text-gray-900">{stock.price}</p>
              <p
                className={`text-xs font-medium ${
                  stock.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stock.isPositive ? "+" : ""}
                {stock.change} %
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="p-3 bg-gray-50 border-t border-gray-200">
        <button className="w-full text-center text-sm text-red-600 font-medium hover:underline">
          और देखें →
        </button>
      </div>
    </div>
  );
}

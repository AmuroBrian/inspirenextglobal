"use client";
import React, { useEffect, useState } from "react";

export default function LiveNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/bbc-news");
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        const processedItems = Array.isArray(data.items)
          ? data.items.map(processNewsItem)
          : [];
        setNews(processedItems);
      } catch (err) {
        setError("Failed to load news. Please try again later.");
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const processNewsItem = (item) => {
    let imageUrl = null;

    if (item["media:thumbnail"] && item["media:thumbnail"].$.url) {
      imageUrl = item["media:thumbnail"].$.url;
    } else if (item["media:content"] && item["media:content"].$.url) {
      imageUrl = item["media:content"].$.url;
    } else if (item.enclosure && item.enclosure.url) {
      imageUrl = item.enclosure.url;
    } else {
      imageUrl = extractImageFromContent(item["content:encoded"] || item.content || "");
    }

    const processedImageUrl = imageUrl
      ? imageUrl.replace(/^http:\/\//, "https://")
      : null;

    return {
      ...item,
      imageUrl: processedImageUrl,
      // Use the image proxy for all external images to avoid mixed content warnings or CORS issues
      safeImageUrl: processedImageUrl
        ? `/api/image-proxy?url=${encodeURIComponent(processedImageUrl)}`
        : null,
    };
  };

  const extractImageFromContent = (html) => {
    if (!html) return null;
    try {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const img = tempDiv.querySelector("img");
      return img?.src || null;
    } catch (e) {
      console.error("Error parsing HTML for image extraction:", e);
      return null;
    }
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen-minus-header-footer py-12 bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-gray-300 border-t-blue-500 mb-4"></div>
        <div className="text-xl text-gray-700 font-medium">Fetching the latest news...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen-minus-header-footer py-12 bg-gray-50 text-red-600">
        <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div className="text-lg mb-4 text-center">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Retry loading news"
        >
          Retry Loading News
        </button>
      </div>
    );

  return (
    <section className="relative bg-white py-6 sm:py-8 px-4 sm:px-6 max-w-7xl mx-auto rounded-xl shadow-lg border border-gray-100 my-8">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mr-3 shadow-sm">
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
        </span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            World News
          </h1>
          <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">
            Latest from BBC
          </div>
        </div>
      </div>

      {/* News Grid (Responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(0, 9).map((item, idx) => ( // Display up to 9 news items for a cleaner grid
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            aria-label={`Read more about ${item.title}`}
          >
            {item.safeImageUrl && (
              <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-xl bg-gray-100">
                <img
                  src={item.safeImageUrl}
                  alt={item.title || "News image"}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 leading-snug mb-2 line-clamp-3">
                {item.title}
              </h3>
              {item.contentSnippet && (
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
                  {item.contentSnippet}
                </p>
              )}
              <div className="mt-auto flex items-center justify-between text-xs text-gray-500 font-medium">
                <span className="flex items-center">
                  <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  {item.pubDate ? new Date(item.pubDate).toLocaleString('en-US', {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }) : "Date N/A"}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                  BBC
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
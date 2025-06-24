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
        // Ensure data.items is an array before mapping
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

  // Process each news item to handle images properly
  const processNewsItem = (item) => {
    let imageUrl = null;

    // Prioritize media:thumbnail and media:content
    if (item["media:thumbnail"] && item["media:thumbnail"].$.url) {
      imageUrl = item["media:thumbnail"].$.url;
    } else if (item["media:content"] && item["media:content"].$.url) {
      imageUrl = item["media:content"].$.url;
    }
    // Fallback to enclosure
    else if (item.enclosure && item.enclosure.url) {
      imageUrl = item.enclosure.url;
    }
    // Fallback to content:encoded or content
    else {
      imageUrl = extractImageFromContent(item["content:encoded"] || item.content || "");
    }

    // Ensure image URLs are HTTPS and use the proxy
    const processedImageUrl = imageUrl
      ? imageUrl.replace(/^http:\/\//, "https://")
      : null;

    return {
      ...item,
      // Use processedImageUrl directly if it's already secure, otherwise use the proxy
      imageUrl: processedImageUrl,
      safeImageUrl: processedImageUrl
        ? `/api/image-proxy?url=${encodeURIComponent(processedImageUrl)}`
        : null,
    };
  };

  // Helper: Extract image from content HTML using a more robust approach
  const extractImageFromContent = (html) => {
    if (!html) return null;
    try {
      // Use a temporary div to parse HTML, as DOMParser can be finicky
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
      <div className="py-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2"></div>
        <div>Loading news...</div>
      </div>
    );

  if (error)
    return (
      <div className="py-8 text-center text-red-500">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );

  return (
    <section className="relative bg-white py-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto rounded-2xl border border-[#E0E0E0] mb-8">
      <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-wide mb-6 pl-1">
        Today
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {news.slice(0, 8).map((item, idx) => (
          <div key={idx} className="bg-white border border-[#E0E0E0] rounded-2xl overflow-hidden shadow-sm flex flex-col h-full">
            <div className="flex-1 flex flex-col p-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-bold text-[#222] leading-snug hover:underline mb-1"
                title={item.title}
              >
                {item.title}
              </a>
              <div className="text-xs text-gray-500 mb-2">
                BBC News &middot; {item.pubDate && new Date(item.pubDate).toLocaleString()}
              </div>
              {item.contentSnippet && (
                <div className="text-sm text-gray-500 leading-tight line-clamp-3">
                  {item.contentSnippet}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
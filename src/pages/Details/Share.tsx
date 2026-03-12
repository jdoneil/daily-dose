import React from "react";
import type { Comic } from "../Gallery";

interface ShareProps {
  comic: Comic;
}

export const Share: React.FC<ShareProps> = ({ comic }) => {
  const handleShare = async (platform: string) => {
    const shareUrl = comic.url || window.location.href;
    const shareText = `Check out: ${comic.title}`;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          "_blank",
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          "_blank",
        );
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        break;
    }
  };

  return (
    <div className="border-ink border-2 bg-white px-6 py-12">
      <h3 className="border-b border-gray-300 pb-4 text-lg font-bold">Share</h3>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <button className="hover:bg-accent-soft hover:border-accent-warm cursor-pointer border border-gray-300 px-6 py-2">
          📘 Facebook
        </button>
        <button className="hover:bg-accent-soft hover:border-accent-warm cursor-pointer border border-gray-300 px-6 py-2">
          🐦 Twitter
        </button>
        <button className="hover:bg-accent-soft hover:border-accent-warm cursor-pointer border border-gray-300 px-6 py-2">
          📌 Pinterest
        </button>
        <button className="hover:bg-accent-soft hover:border-accent-warm cursor-pointer border border-gray-300 px-6 py-2">
          💼 LinkedIn
        </button>
      </div>
    </div>
  );
};

import React from "react";
import type { Comic } from "../Gallery";

interface ShareProps {
  comic: Comic;
}

export const Share: React.FC<ShareProps> = () => {
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

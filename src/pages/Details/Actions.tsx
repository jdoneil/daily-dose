import React from "react";
import type { Comic } from "../Gallery";

interface ActionsProps {
  comic: Comic; // Replace 'any' with your Comic type
}

export const Actions: React.FC<ActionsProps> = ({ comic }) => {
  return (
    <div className="border-ink border-2 bg-white px-6 py-12">
      <h3 className="border-b border-gray-300 pb-4 text-lg font-bold">
        Actions
      </h3>
      <div className="mt-6 flex flex-col font-bold">
        <button className="hover:bg-accent-warm mb-3 cursor-pointer bg-black p-3 text-white">
          🤍 Add to Favorites
        </button>
        <button className="border-ink hover:bg-accent-soft hover:border-accent mb-3 cursor-pointer border-2 p-3 hover:border">
          📥 Download Image
        </button>
        <button className="border-ink hover:bg-accent-soft hover:border-accent mb-3 cursor-pointer border-2 p-3 hover:border">
          🔗 Copy Link
        </button>
      </div>
    </div>
  );
};

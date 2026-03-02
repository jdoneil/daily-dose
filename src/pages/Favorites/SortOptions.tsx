import React from "react";

interface SortOptionsProps {
  onSortChange?: (sortBy: string) => void;
}

export const SortOptions: React.FC<SortOptionsProps> = ({ onSortChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange?.(e.target.value);
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white py-4 text-sm">
      <div className="mx-auto flex max-w-360 items-center justify-between">
        <div className="flex items-center">
          <p className="mr-2 uppercase">Sort By: </p>
          <button className="hover:bg-accent-soft focus:bg-accent-soft hover:border-accent focus:border-accent mr-4 cursor-pointer border border-gray-200 px-4 py-2 focus:outline-none">
            Most Recent
          </button>
          <button className="hover:bg-accent-soft focus:bg-accent-soft hover:border-accent focus:border-accent mr-4 cursor-pointer border border-gray-200 px-4 py-2 focus:outline-none">
            Most Viewed
          </button>
          <button className="hover:bg-accent-soft focus:bg-accent-soft hover:border-accent focus:border-accent mr-4 cursor-pointer border border-gray-200 px-4 py-2 focus:outline-none">
            Alphabetical
          </button>
        </div>
        <div className="flex items-center">
          <button className="hover:bg-accent-soft mr-2 cursor-pointer border border-black px-4 py-2">
            📥 Export All
          </button>
          <button className="hover:bg-accent-soft mr-2 cursor-pointer border border-black px-4 py-2">
            📥 Share Collection
          </button>
          <button className="hover:bg-accent-soft mr-2 cursor-pointer border border-black px-4 py-2">
            🗑️ Remove Selected
          </button>
        </div>
      </div>
    </div>
  );
};

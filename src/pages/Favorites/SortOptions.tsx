import React from "react";

interface SortOptionsProps {
  onSortChange?: (sortBy: string) => void;
  selectedSort: string;
}

const sortOptions = ["Most Recent", "Most Viewed", "Alphabetical"];

export const SortOptions: React.FC<SortOptionsProps> = ({
  onSortChange,
  selectedSort,
}) => {
  const handleChange = (sort: string) => {
    onSortChange?.(sort);
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white py-6 text-sm">
      <div className="mx-auto flex max-w-360 items-center justify-between">
        <div className="flex items-center">
          <p className="mr-2 uppercase">Sort By: </p>
          {sortOptions.map((sortOpt) => {
            return (
              <button
                className={`${selectedSort === sortOpt && "bg-accent-soft border-accent outline-none"} hover:bg-accent-soft hover:border-accent mr-4 cursor-pointer border border-gray-200 px-4 py-2`}
                onClick={() => handleChange(sortOpt)}
              >
                {sortOpt}
              </button>
            );
          })}
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

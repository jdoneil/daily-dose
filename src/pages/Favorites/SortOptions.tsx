import React from "react";

interface SortOptionsProps {
  onSortChange?: (sortBy: string) => void;
  selectedSort: string;
  removeSelected: () => void;
  exportSelected: () => void;
}

const sortOptions = ["Most Recent", "Most Viewed", "Alphabetical"];

export const SortOptions: React.FC<SortOptionsProps> = ({
  onSortChange,
  selectedSort,
  removeSelected,
  exportSelected,
}) => {
  const handleChange = (sort: string) => {
    onSortChange?.(sort);
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white text-sm md:py-6">
      <div className="mx-auto max-w-360 flex-col items-center justify-between p-6 md:flex md:flex-row md:p-0">
        <div className="flex items-center">
          <p className="mr-2 hidden whitespace-nowrap uppercase md:block">
            Sort By:{" "}
          </p>
          {/* Medium viewport and up: Button row*/}
          <div className="flex text-sm whitespace-nowrap">
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
        </div>
        {/* desktop export options row */}
        <div className="bg-accent-soft hidden w-full flex-row items-center md:block md:w-auto md:bg-white">
          <button
            className="hover:bg-accent-soft mr-2 cursor-pointer border border-black px-4 py-2"
            onClick={() => exportSelected()}
          >
            📥 Export Selected
          </button>
          <button
            className="hover:bg-accent-soft mr-2 cursor-pointer border border-black px-4 py-2"
            onClick={() => removeSelected()}
          >
            🗑️ Remove Selected
          </button>
        </div>
      </div>
      {/* mobile export options row */}
      <div className="bg-accent-soft flex w-full items-center p-6 md:hidden">
        <button
          className="mr-2 cursor-pointer border border-black bg-white px-4 py-2"
          onClick={() => exportSelected()}
        >
          📥 Export Selected
        </button>
        <button
          className="mr-2 cursor-pointer border border-black bg-white px-4 py-2"
          onClick={() => removeSelected()}
        >
          🗑️ Remove Selected
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";

const filters = [
  "All",
  "Work",
  "Relationships",
  "Death",
  "Travel",
  "Modern Life",
];

export const Filters: React.FC = () => {
  const [selected, setSelected] = useState("All");

  return (
    <div className="bg-paper border-gray-300 border-b p-4 ">
      <div className="max-w-350 mx-auto flex overflow-auto scrollbar-hidden items-center">
        <span className="hidden sm:block text-sm mr-2 uppercase"> Filter:</span>
        {filters.map((filter) => {
          return (
            <div
              className={`border py-2 px-4 whitespace-nowrap mr-4 text-sm md:text-base ${
                selected === filter
                  ? "border-accent bg-red-200"
                  : "border-gray-300"
              }`}
              key={filter}
              onClick={() => setSelected(filter)}
            >
              <span>{filter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const filters = [
  "All",
  "Work",
  "Relationships",
  "Death",
  "Travel",
  "Modern Life",
];

type FiltersProps = {
  selectedFilters: string[];
  setSelectedFilters: (filter: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  selectedFilters,
  setSelectedFilters,
}) => {
  return (
    <div className="bg-paper border-b border-gray-300 p-4">
      <div className="scrollbar-hidden mx-auto flex max-w-350 items-center overflow-auto">
        <span className="mr-2 hidden text-sm uppercase sm:block"> Filter:</span>
        {filters.map((filter) => {
          return (
            <div
              className={`mr-4 cursor-pointer border px-4 py-2 text-sm whitespace-nowrap md:text-base ${
                selectedFilters.includes(filter)
                  ? "border-accent bg-red-200"
                  : "border-gray-300"
              }`}
              key={filter}
              onClick={() => setSelectedFilters(filter)}
            >
              <span>{filter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

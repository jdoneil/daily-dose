import { useCallback, useEffect, useState } from "react";
import { Filters } from "./Filters";
import comicData from "../../data/comics-data.json";

export type Comic = {
  id: number;
  caption: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  dateAdded: string;
  views: number;
  favorites: number;
};

type GalleryProps = {
  searchQuery: string;
};

export default function Gallery({ searchQuery }: GalleryProps) {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(["All"]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setComics([...comicData.comics]);
    }, 1000);
  }, []);

  const allFilters = [
    "All",
    ...new Set(comicData.comics.flatMap((comic) => comic.tags)),
  ];

  const setTagFilters = useCallback((filter: string) => {
    setSelectedFilters((prev) => {
      const updated = prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : prev[0] === "All"
          ? [filter]
          : [...prev, filter];
      return updated.length === 0 ? ["All"] : updated;
    });
  }, []);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(next));

      if (!prev.includes(id)) {
        localStorage.setItem("lastAdded", new Date().toISOString());
      }

      return next;
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Filters
        selectedFilters={selectedFilters}
        setSelectedFilters={setTagFilters}
        allFilters={allFilters}
      />
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {comics
          .filter(
            (comic) =>
              (selectedFilters.includes("All") ||
                comic.tags.some((tag) => selectedFilters.includes(tag))) &&
              (searchQuery === "" ||
                comic.caption
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())),
          )
          .map((comic) => (
            <div
              key={comic.id}
              className="comic-card border-ink flex cursor-pointer flex-col border-2 bg-white transition-all duration-300"
            >
              <img
                className="border-ink border-b-2"
                src={comic.imageUrl}
                alt={comic.imageAlt}
              ></img>
              <div className="bg-paper flex flex-1 flex-col px-2 py-2">
                <p className="flex-1">{comic.caption}</p>
                <div className="my-4 flex items-center justify-between text-xs uppercase">
                  <div className="flex max-w-[80%] gap-2 overflow-clip">
                    {comic.tags?.map((tag) => (
                      <span key={tag} className="bg-accent-soft text-ink p-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mr-2 cursor-pointer text-xl transition-transform duration-200 hover:scale-125"
                    onClick={() => toggleFavorite(comic.id)}
                  >
                    {favoriteIds.includes(comic.id) ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

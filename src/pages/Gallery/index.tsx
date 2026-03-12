import { useCallback, useEffect, useState } from "react";
import { Filters } from "./Filters";
import comicData from "../../data/comics-data.json";
import { Panel } from "./Panel";
import { Link } from "react-router";
import { useFavorites } from "../../hooks/useFavorites";

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
  const [error, setError] = useState("");
  const [selectedFilters, setSelectedFilters] = useState(["All"]);
  const { favoriteIds, toggleFavorite } = useFavorites();

  useEffect(() => {
    setTimeout(() => {
      try {
        setComics([...comicData.comics]);
        setLoading(false);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : String(error));
      }
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching comics</p>;

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
            <Link to={`/comic/${comic.id}`}>
              <Panel
                comic={comic}
                toggleFavorite={toggleFavorite}
                favoriteIds={favoriteIds}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

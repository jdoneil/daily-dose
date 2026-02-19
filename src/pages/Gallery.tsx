import { useCallback, useEffect, useState } from "react";
import { Filters } from "../components/Filters";
import comicData from "../data/comics-data.json";

<style>{`
  .comic-card {
    animation: slideUp 0.5s ease-out forwards;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .comic-card:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0 #c4463a;
  }
`}</style>;

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

export default function Gallery() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(["All"]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setComics([...comicData.comics]);
    }, 1000);
  }, []);

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
  if (error) return <p>Error</p>;

  return (
    <>
      <Filters
        selectedFilters={selectedFilters}
        setSelectedFilters={setTagFilters}
      />
      <main className="grid grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {comics.map((comic) => (
          <div className="comic-card border-ink flex cursor-pointer flex-col border-2 bg-white transition-all duration-300">
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
                    <span className="bg-accent-soft text-ink p-2">{tag}</span>
                  ))}
                </div>
                <p className="mr-2">❤️</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

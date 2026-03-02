import React, { useEffect, useState } from "react";
import FavoritesHero from "./FavoritesHero";
import { SortOptions } from "./SortOptions";
import comicData from "../../data/comics-data.json";
import type { Comic } from "../Gallery/Gallery";

const Favorites: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (favoriteIds) {
        setComics(
          comicData.comics.filter((comic) => favoriteIds.includes(comic.id)),
        );
      }
    }, 1000);
  }, [favoriteIds]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(next));
      return next;
    });
  };

  if (loading) return <h1>Loading Favorites...</h1>;

  return (
    <>
      <FavoritesHero />
      <SortOptions />
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {comics.map((comic) => (
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
};

export default Favorites;

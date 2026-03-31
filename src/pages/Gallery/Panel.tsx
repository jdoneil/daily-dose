import React from "react";
import type { Comic } from ".";

interface PanelProps {
  comic: Comic;
  toggleFavorite: (id: number) => void;
  favoriteIds: number[];
}

export const Panel: React.FC<PanelProps> = ({
  comic,
  toggleFavorite,
  favoriteIds,
}) => {
  return (
    <div
      key={comic.id}
      className="comic-card border-ink flex cursor-pointer flex-col border-2 bg-white transition-all duration-300"
    >
      <img
        className="border-ink bg-cream aspect-4/3 w-full border-b-2 object-contain"
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(comic.id);
            }}
          >
            {favoriteIds.includes(comic.id) ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

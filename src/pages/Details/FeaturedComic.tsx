import React from "react";
import type { Comic } from "../Gallery";

interface FeaturedComicProps {
  comic: Comic;
  favoriteIds: number[];
}

export const FeaturedComic: React.FC<FeaturedComicProps> = ({
  comic,
  favoriteIds,
}) => {
  return (
    <div
      key={comic.id}
      className="comic-card border-ink relative flex flex-1 cursor-pointer flex-col border-2 bg-white p-6 transition-all duration-300"
    >
      {favoriteIds.includes(comic.id) && (
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-accent-warm px-2 py-2 text-xs text-white">
            <span>🤍</span>
            <span> Favorite</span>
          </div>
        </div>
      )}

      <img
        className="border-ink border-b-2"
        src={comic.imageUrl}
        alt={comic.imageAlt}
      ></img>
      <div className="bg-paper flex flex-1 flex-col px-2 py-2">
        <p className="border-b border-gray-300 py-6">{comic.caption}</p>
        <div className="my-4 flex items-center text-xs uppercase">
          <div className="flex max-w-[80%] gap-2 overflow-clip">
            {comic.tags?.map((tag) => (
              <span key={tag} className="bg-accent-soft text-ink p-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

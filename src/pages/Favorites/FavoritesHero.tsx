import React from "react";
import type { Comic } from "../Gallery";

type HeroProps = {
  favorites: Comic[];
};

const FavoritesHero: React.FC<HeroProps> = ({ favorites }: HeroProps) => {
  const categories = [...new Set(favorites.flatMap((comic) => comic.tags))];
  const lastAdded = localStorage.getItem("lastAdded");
  const formattedDate = lastAdded
    ? new Date(lastAdded).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "—";

  return (
    <div className="bg-accent favorites-hero w-full px-8 py-16 text-white md:px-32">
      <div className="mx-auto max-w-350">
        <h1 className="font-serif text-4xl font-bold">My Favorites</h1>
        <p className="my-8 font-bold">
          Your personal collection of beloved Perlman wisom
        </p>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="font-serif text-4xl font-bold">
              {favorites.length}
            </span>
            <span className="mt-2">Comics Saved</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-4xl font-bold">
              {categories.length}
            </span>
            <span className="mt-2">Categories</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-4xl font-bold">
              {formattedDate}
            </span>
            <span className="mt-2">Last Added</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesHero;

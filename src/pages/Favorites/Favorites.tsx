import React from "react";
import FavoritesHero from "./FavoritesHero";
import { SortOptions } from "./SortOptions";

const Favorites: React.FC = () => {
  return (
    <>
      <FavoritesHero />
      <SortOptions />
      <div className="mx-auto grid min-h-screen max-w-360 grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        Favorites
      </div>
    </>
  );
};

export default Favorites;

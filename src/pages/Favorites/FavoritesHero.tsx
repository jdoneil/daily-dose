import React from "react";

// interface FavoritesHeroProps {}

const FavoritesHero: React.FC = () => {
  return (
    <div className="bg-accent favorites-hero w-full px-32 py-16 text-white">
      <div className="mx-auto max-w-350">
        <h1 className="font-serif text-4xl font-bold">My Favorites</h1>
        <p className="my-8 font-bold">
          Your personal collection of beloved Perlman wisom
        </p>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold">12</span>
            <span className="mt-2">Comics Saved</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold">12</span>
            <span className="mt-2">Comics Saved</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold">12</span>
            <span className="mt-2">Comics Saved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesHero;

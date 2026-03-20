import React, { useEffect, useState, useCallback } from "react";
import FavoritesHero from "./FavoritesHero";
import { SortOptions } from "./SortOptions";
import comicData from "../../data/comics-data.json";
import type { Comic } from "../Gallery";
import FavoritesCard from "./FavoritesCard";
import { useFavorites } from "../../hooks/useFavorites";
import FavoritesSkeleton from "./FavoritesSkeleton";

const Favorites: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("Most Recent");
  const [selected, setSelected] = useState<number[]>([]);
  const { favoriteIds, toggleFavorite, removeFavorites } = useFavorites();

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

  const sortedComics = [...comics].sort((a, b) => {
    switch (sort) {
      case "Most Recent":
        return (
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      case "Most Viewed":
        return b.views - a.views;
      case "Alphabetical":
        return a.caption.localeCompare(b.caption);
      default:
        return 0;
    }
  });

  const setSelectedComics = useCallback((id: number, isChecked: boolean) => {
    setSelected((prev) =>
      isChecked
        ? [...prev, id]
        : prev.filter((selectedId) => selectedId !== id),
    );
  }, []);

  const removeSelected = useCallback(() => {
    removeFavorites(selected);
    setSelected([]);
  }, [removeFavorites, selected]);

  const exportSelected = useCallback(() => {
    //TODO what is the intended functionality here?
    const selectedComics = sortedComics.filter((comic) =>
      selected.includes(comic.id),
    );
    selectedComics.forEach((comic) => {
      console.log(comic.imageUrl);
    });
  }, [sortedComics, selected]);

  if (loading) return <FavoritesSkeleton />;

  return (
    <>
      <FavoritesHero favorites={comics} />
      <SortOptions
        onSortChange={setSort}
        selectedSort={sort}
        removeSelected={removeSelected}
        exportSelected={exportSelected}
      />
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedComics.map((comic) => (
          <FavoritesCard
            key={comic.id}
            comic={comic}
            toggleFavorite={toggleFavorite}
            favoriteIds={favoriteIds}
            setSelected={setSelectedComics}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;

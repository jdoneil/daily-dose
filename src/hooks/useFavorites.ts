import { useCallback, useState } from "react";

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = useCallback((id: number) => {
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
  }, []);

  const removeFavorites = useCallback((idsToRemove: number[]) => {
    setFavoriteIds((prev) => {
      const next = prev.filter((id) => !idsToRemove.includes(id));
      localStorage.setItem("favorites", JSON.stringify(next));
      return next;
    });
  }, []);

  return { favoriteIds, toggleFavorite, removeFavorites };
}

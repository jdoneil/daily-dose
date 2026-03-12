import React from "react";
import type { Comic } from "../Gallery";

interface ActionsProps {
  comic: Comic;
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
}

export const Actions: React.FC<ActionsProps> = ({
  comic,
  favoriteIds,
  toggleFavorite,
}) => {
  const handleDownloadImage = async () => {
    try {
      const response = await fetch(comic.imageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `comic-${comic.id}.jpg`;
      link.click();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(comic.imageUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyLink = async () => {
    const comicLink = `${window.location.origin}/comic/${comic.id}`;

    try {
      await navigator.clipboard.writeText(comicLink);
    } catch {
      console.error("Error copying link");
    }
  };

  return (
    <div className="border-ink border-2 bg-white px-6 py-12">
      <h3 className="border-b border-gray-300 pb-4 text-lg font-bold">
        Actions
      </h3>
      <div className="mt-6 flex flex-col font-bold">
        <button
          onClick={() => toggleFavorite(comic.id)}
          className="hover:bg-accent-warm mb-3 cursor-pointer bg-black p-3 text-white"
        >
          {favoriteIds.includes(comic.id)
            ? " Remove from Favorites"
            : `🤍 Add to Favorites`}
        </button>
        <button
          onClick={handleDownloadImage}
          className="border-ink hover:bg-accent-soft hover:border-accent mb-3 cursor-pointer border-2 p-3"
        >
          📥 Download Image
        </button>
        <button
          onClick={handleCopyLink}
          className="border-ink hover:bg-accent-soft hover:border-accent mb-3 cursor-pointer border-2 p-3"
        >
          🔗 Copy Link
        </button>
      </div>
    </div>
  );
};

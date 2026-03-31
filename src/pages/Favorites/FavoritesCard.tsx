import { Link } from "react-router";
import type { Comic } from "../Gallery";

type FavoritesCardProps = {
  comic: Comic;
  toggleFavorite: (id: number) => void;
  favoriteIds: number[];
  setSelected: (id: number, isChecked: boolean) => void;
};

export default function FavoritesCard({
  comic,
  setSelected,
}: FavoritesCardProps) {
  return (
    <Link to={`/comic/${comic.id}`}>
      <div
        key={comic.id}
        className="comic-card border-ink relative flex cursor-pointer flex-col border-2 bg-white transition-all duration-300"
      >
        <div className="absolute top-0 flex w-full items-center justify-between p-4">
          <input
            type="checkbox"
            className="accent-accent-warm h-6 w-6 cursor-pointer"
            onChange={(e) =>
              setSelected(comic.id, (e.target as HTMLInputElement).checked)
            }
          />
          <div className="bg-accent-warm px-2 py-2 text-xs text-white">
            <span>🤍</span>
            <span> Favorite</span>
          </div>
        </div>
        <img
          className="border-ink aspect-4/3 w-full border-b-2 object-cover"
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
          </div>
        </div>
      </div>
    </Link>
  );
}

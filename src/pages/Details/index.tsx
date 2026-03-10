import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import comicData from "../../data/comics-data.json";
import type { Comic } from "../Gallery";
import { FeaturedComic } from "./FeaturedComic";
import { Actions } from "./Actions";
import { Share } from "./Share";
import ComicDetails from "./ComicDetails";
import { getRandomComicLink } from "../../utils/randomComicLink";
import { useFavorites } from "../../hooks/useFavorites";

const Details: React.FC = () => {
  const { id: comicId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(true);
  const { favoriteIds, toggleFavorite } = useFavorites();

  const handleRandomComic = () => {
    navigate(getRandomComicLink());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const featured = comicData.comics.find(
      (comic) => comic.id === Number(comicId),
    );
    setComic(featured || null);
    setLoading(false);
  }, [comicId]);

  if (loading) return <h1>loading</h1>;

  if (comic)
    return (
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-4 py-4 sm:grid-cols-3">
        <div className="flex flex-col sm:col-span-2">
          <FeaturedComic comic={comic} favoriteIds={favoriteIds} />
        </div>
        <div className="flex flex-col gap-6 font-serif sm:col-span-1">
          <Actions
            comic={comic}
            favoriteIds={favoriteIds}
            toggleFavorite={toggleFavorite}
          />
          <Share comic={comic} />
          <ComicDetails comic={comic} />
          <div className="border-ink border-2 bg-white px-6 py-6 text-sm font-bold">
            <div className="flex justify-between gap-2">
              <Link
                to={
                  comic.id === comicData.comics[0].id
                    ? `/comic/${comicData.comics.length}`
                    : `/comic/${comic.id - 1}`
                }
                className="flex flex-1"
              >
                <button className="flex-1 cursor-pointer border-2 border-black py-2 hover:bg-black hover:text-white">
                  ← Previous
                </button>
              </Link>
              <Link
                to={
                  comic.id === comicData.comics.length
                    ? "/comic/1"
                    : `/comic/${comic.id + 1}`
                }
                className="flex flex-1"
              >
                <button className="flex-1 cursor-pointer border-2 border-black py-2 hover:bg-black hover:text-white">
                  Next →
                </button>
              </Link>
            </div>
            <button
              onClick={handleRandomComic}
              className="bg-accent-warm mt-4 flex w-full cursor-pointer items-center justify-center py-4 text-white hover:bg-black"
            >
              🎲 Random Comic
            </button>
          </div>
        </div>
      </div>
    );
};

export default Details;

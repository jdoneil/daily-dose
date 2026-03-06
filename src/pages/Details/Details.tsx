import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import comicData from "../../data/comics-data.json";
import type { Comic } from "../Gallery/Gallery";

const Details: React.FC = () => {
  const { id: comicId } = useParams<{ id: string }>();
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(true);

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
          <div
            key={comic.id}
            className="comic-card border-ink flex flex-1 cursor-pointer flex-col border-2 bg-white p-6 transition-all duration-300"
          >
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
        </div>
        <div className="flex flex-col gap-6 font-serif sm:col-span-1">
          <div className="border-ink border-2 bg-white px-6 py-12">
            <h3 className="border-b border-gray-300 pb-4 text-lg font-bold">
              Actions
            </h3>
            <div className="mt-6 flex flex-col font-bold">
              <button className="hover:bg-accent-warm mb-3 cursor-pointer bg-black p-3 text-white">
                🤍 Add to Favorites
              </button>
              <button className="border-ink hover:bg-accent-soft hover:border-accent mb-3 cursor-pointer border-2 p-3 hover:border">
                📥 Download Image
              </button>
              <button className="border-ink hover:bg-accent-soft hover:border-accent mb-3 cursor-pointer border-2 p-3 hover:border">
                🔗 Copy Link
              </button>
            </div>
          </div>
          <div className="border-ink border-2 bg-white px-6 py-12">
            <h3 className="border-b border-gray-300 pb-4 text-lg font-bold">
              Share
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="border border-gray-300 px-6 py-2">
                📘 Facebook
              </button>
              <button className="border border-gray-300 px-6 py-2">
                🐦 Twitter
              </button>
              <button className="border border-gray-300 px-6 py-2">
                📌 Pinterest
              </button>
              <button className="border border-gray-300 px-6 py-2">
                💼 LinkedIn
              </button>
            </div>
          </div>
          <div className="border-ink border-2 bg-white px-6 py-12">
            <h3 className="border-b border-gray-300 pb-4 text-lg font-bold">
              Details
            </h3>
            <div className="mt-6 flex flex-col">
              <div className="flex justify-between border-b border-gray-300 py-2">
                <span>Comic ID:</span>
                <span>#{comicId}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 py-2">
                <span>Views:</span>
                <span>{comic.views}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 py-2">
                <span>Favorited:</span>
                <span>{comic.favorites}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 py-2">
                <span>Date Added:</span>
                <span>{comic.dateAdded}</span>
              </div>
            </div>
          </div>
          <div className="border-ink border-2 bg-white px-6 py-6 text-sm font-bold">
            <div className="flex justify-between gap-2">
              <button className="flex-1 cursor-pointer border-2 border-black py-2 hover:bg-black hover:text-white">
                ← Previous
              </button>
              <button className="flex-1 cursor-pointer border-2 border-black py-2 hover:bg-black hover:text-white">
                Next →
              </button>
            </div>
            <button className="bg-accent-warm mt-4 flex w-full cursor-pointer items-center justify-center py-4 text-white hover:bg-black">
              🎲 Random Comic
            </button>
          </div>
        </div>
      </div>
    );
};

export default Details;

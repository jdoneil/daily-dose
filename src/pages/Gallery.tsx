import { useEffect, useState } from "react";
import { Filters } from "../components/Filters";
import comicData from "../data/comics-data.json";

export type Comic = {
  id: number;
  caption: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  dateAdded: string;
  views: number;
  favorites: number;
};

export default function Gallery() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setComics([...comicData.comics]);
    }, 1000);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Filters />
      <main className="py-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {comics.map((comic) => (
          <div className="flex flex-col border-2 border-ink">
            <img
              className="border-b-2 border-ink"
              src={comic.imageUrl}
              alt={comic.imageAlt}
            ></img>
            <div className="bg-paper px-2 py-2">
              <p>{comic.caption}</p>
              <div className="flex items-center justify-between my-4">
                <div>
                  {comic.tags?.map((tag) => (
                    <span className="bg-accent-soft p-2">{tag}</span>
                  ))}
                </div>
                <p>❤️</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

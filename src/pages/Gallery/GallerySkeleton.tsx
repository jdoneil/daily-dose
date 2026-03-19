import ComicCardSkeleton from "../../components/ComicCardSkeleton";

const SKELETON_CARD_COUNT = 6;
const SKELETON_FILTER_COUNT = 7;

export const GallerySkeleton: React.FC = () => {
  return (
    <>
      <div className="bg-paper w-full border-b border-gray-300 p-4">
        <div className="scrollbar-hidden mx-auto flex max-w-360 items-center overflow-auto">
          <span className="mr-2 hidden text-sm uppercase sm:block">
            {" "}
            Filter:
          </span>
          {Array.from({ length: SKELETON_FILTER_COUNT }).map((_, index) => (
            <div
              key={index}
              className="bg-line mr-4 h-8 w-20 shrink-0 animate-pulse border border-gray-300"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
          <ComicCardSkeleton key={index} showFavoriteButton />
        ))}
      </div>
    </>
  );
};

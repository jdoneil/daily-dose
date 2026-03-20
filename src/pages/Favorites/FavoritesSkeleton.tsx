import ComicCardSkeleton from "../../components/ComicCardSkeleton";

const SKELETON_CARD_COUNT = 6;

export default function FavoritesSkeleton() {
  return (
    <>
      <div className="bg-accent w-full px-8 py-16 text-white md:px-32">
        <div className="mx-auto max-w-350">
          <div className="mb-8 h-10 w-56 animate-pulse bg-white/30" />
          <div className="mb-8 h-6 w-80 animate-pulse bg-white/30" />

          <div className="flex gap-8">
            <div className="flex flex-col">
              <div className="h-10 w-16 animate-pulse bg-white/30" />
              <div className="mt-2 h-5 w-28 animate-pulse bg-white/30" />
            </div>
            <div className="flex flex-col">
              <div className="h-10 w-16 animate-pulse bg-white/30" />
              <div className="mt-2 h-5 w-24 animate-pulse bg-white/30" />
            </div>
            <div className="flex flex-col">
              <div className="h-10 w-20 animate-pulse bg-white/30" />
              <div className="mt-2 h-5 w-20 animate-pulse bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-200 bg-white text-sm md:py-6">
        <div className="mx-auto max-w-360 flex-col items-center justify-between p-6 md:flex md:flex-row md:p-0">
          <div className="flex items-center">
            <div className="bg-line mr-2 hidden h-5 w-16 animate-pulse md:block" />
            <div className="flex gap-4 whitespace-nowrap">
              <div className="bg-line h-10 w-28 animate-pulse border border-gray-200" />
              <div className="bg-line h-10 w-28 animate-pulse border border-gray-200" />
              <div className="bg-line h-10 w-28 animate-pulse border border-gray-200" />
            </div>
          </div>

          <div className="hidden w-full flex-row items-center md:block md:w-auto">
            <div className="bg-line mr-2 inline-block h-10 w-40 animate-pulse border border-black" />
            <div className="bg-line mr-2 inline-block h-10 w-40 animate-pulse border border-black" />
          </div>
        </div>

        <div className="bg-accent-soft flex w-full items-center p-6 md:hidden">
          <div className="mr-2 h-10 w-40 animate-pulse border border-black bg-white" />
          <div className="mr-2 h-10 w-40 animate-pulse border border-black bg-white" />
        </div>
      </div>

      <div className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
          <ComicCardSkeleton key={index} showSelectionOverlay />
        ))}
      </div>
    </>
  );
}

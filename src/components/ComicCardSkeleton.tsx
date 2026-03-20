type ComicCardSkeletonProps = {
  showFavoriteButton?: boolean;
  showSelectionOverlay?: boolean;
};

export default function ComicCardSkeleton({
  showFavoriteButton = false,
  showSelectionOverlay = false,
}: ComicCardSkeletonProps) {
  return (
    <div className="border-ink relative flex flex-col border-2 bg-white">
      {showSelectionOverlay && (
        <div className="absolute top-0 flex w-full items-center justify-between p-4">
          <div className="h-6 w-6 animate-pulse bg-white/70" />
          <div className="bg-accent-warm/80 h-8 w-24 animate-pulse" />
        </div>
      )}

      <div className="border-ink bg-line aspect-4/3 animate-pulse border-b-2" />

      <div className="bg-paper flex flex-1 flex-col px-2 py-2">
        <div className="bg-line mb-2 h-4 w-full animate-pulse" />
        <div className="bg-line mb-4 h-4 w-2/3 animate-pulse" />

        <div className="my-4 flex items-center justify-between">
          <div className="flex max-w-[80%] gap-2 overflow-hidden">
            <div className="bg-line h-8 w-12 animate-pulse" />
            <div className="bg-line h-8 w-14 animate-pulse" />
          </div>

          {showFavoriteButton && (
            <div className="bg-line mr-2 h-6 w-6 animate-pulse rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
}

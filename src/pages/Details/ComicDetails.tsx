import React from "react";
import type { Comic } from "../Gallery";

interface ComicDetailsProps {
  comic: Comic;
}

const ComicDetails: React.FC<ComicDetailsProps> = ({ comic }) => {
  return (
    <div className="border-ink border-2 bg-white px-6 py-12">
      <h3 className="border-b border-gray-300 pb-4 text-lg font-bold">
        Details
      </h3>
      <div className="mt-6 flex flex-col">
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span>Comic ID:</span>
          <span>#{comic.id}</span>
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
  );
};

export default ComicDetails;

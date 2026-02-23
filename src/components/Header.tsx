import React from "react";

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <header className="sticky border-b-2">
      {/*Desktop Header*/}
      <div className="mx-auto hidden max-w-350 flex-row items-center justify-between px-12 py-8 md:flex">
        <h1 className="font-serif text-3xl font-bold">
          Daily <span className="text-accent">Perlman</span>
        </h1>
        <div className="flex items-center">
          <div className="search-box relative">
            <input
              type="text"
              className="bg-paper relative mr-4 w-70 border-2 px-4 py-1"
              placeholder="Search comics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute top-1/2 right-6 -translate-y-1/2">
              🔍
            </span>
          </div>
          <a className="text-paper bg-ink mr-4 hidden px-6 py-3 font-bold whitespace-nowrap sm:inline-block">
            ⭐ Favorites
          </a>
          <a className="text-paper bg-ink hidden px-6 py-3 font-bold whitespace-nowrap sm:inline-block">
            🎲 Random
          </a>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="flex flex-col justify-between px-4 py-4 md:hidden">
        <h1 className="mb-4 font-serif text-2xl font-bold">
          Daily <span className="text-accent">Perlman</span>
        </h1>
        <div className="flex items-center">
          <div className="search-box relative w-full">
            <input
              type="text"
              className="bg-paper relative mr-4 w-full border-2 px-4 py-2"
              placeholder="Search comics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute top-1/2 right-6 -translate-y-1/2">
              🔍
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

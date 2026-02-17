import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="sticky border-b-2">
      {/*Desktop Header*/}
      <div className="hidden md:flex flex-row items-center justify-between px-12 py-8 max-w-350 mx-auto">
        <h1 className="text-3xl font-bold font-serif">
          Daily <span className="text-accent">Perlman</span>
        </h1>
        <div className="flex items-center">
          <div className="search-box relative">
            <input
              type="text"
              className="border-2 mr-4 px-4 py-1 bg-paper w-70 relative"
              placeholder="Search comics..."
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2">
              🔍
            </span>
          </div>
          <a className="hidden sm:inline-block mr-4 text-paper bg-ink px-6 py-3 font-bold whitespace-nowrap">
            ⭐ Favorites
          </a>
          <a className="hidden sm:inline-block text-paper bg-ink px-6 py-3 font-bold whitespace-nowrap">
            🎲 Random
          </a>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="md:hidden flex flex-col  justify-between px-4 py-4">
        <h1 className="text-2xl font-bold font-serif mb-4">
          Daily <span className="text-accent">Perlman</span>
        </h1>
        <div className="flex items-center">
          <div className="search-box relative w-full">
            <input
              type="text"
              className="border-2 mr-4 px-4 py-2 bg-paper w-full relative"
              placeholder="Search comics..."
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2">
              🔍
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

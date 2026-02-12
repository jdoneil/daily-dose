import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="sticky border-b-2 px-48 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-serif">
          Daily <span className="text-accent">Perlman</span>
        </h1>
        <div>
          <input
            type="text"
            className="border-2 mr-4 px-4 py-1 bg-paper"
            placeholder="Search comics"
          />
          <a className="mr-4 text-paper bg-ink px-6 py-3 font-bold">
            ⭐ Favorites
          </a>
          <a className="text-paper bg-ink px-6 py-3 font-bold">🎲 Random</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

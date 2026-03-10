import { Link, useNavigate } from "react-router";
import { getRandomComicLink } from "../utils/randomComicLink";

const mobileNavItems = [
  {
    emoji: "🏠",
    caption: "Home",
    link: "/",
  },
  {
    emoji: "🎲",
    caption: "Random",
    link: ``,
  },
  {
    emoji: "🖤",
    caption: "Favorites",
    link: "/favorites",
  },
];

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleRandomComic = () => {
    navigate(getRandomComicLink());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Footer */}
      <footer className="mt-12 hidden items-center justify-center bg-black py-6 md:flex">
        <span className="text-paper">
          Showing 6 of 247 comics • Created with ❤️ for Asher Perlman fans{" "}
        </span>
      </footer>
      {/* Mobile Footer */}
      <footer className="sticky bottom-0 flex justify-around border-t-2 border-black bg-white py-6 md:hidden">
        {mobileNavItems.map((navItem) =>
          navItem.caption === "Random" ? (
            <button
              key={navItem.caption}
              type="button"
              onClick={handleRandomComic}
              className="hover:text-accent-warm flex flex-1 cursor-pointer flex-col items-center justify-center hover:underline"
            >
              <span className="text-2xl">{navItem.emoji}</span>
              <span className="text-xs font-bold text-gray-600 uppercase">
                {navItem.caption}
              </span>
            </button>
          ) : (
            <Link
              key={navItem.caption}
              to={`${navItem.link}`}
              className="flex flex-1"
            >
              <div className="hover:text-accent-warm flex flex-1 flex-col items-center justify-center hover:underline">
                <span className="text-2xl">{navItem.emoji}</span>
                <span className="text-xs font-bold text-gray-600 uppercase">
                  {navItem.caption}
                </span>
              </div>
            </Link>
          ),
        )}
      </footer>
    </>
  );
};

import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const LinksList = ({ selectedPage, setSelectedPage }) => {
  return (
    <>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Testimonials"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-6xl font-bold">TY</h4>

        {isAboveSmallScreens ? (
          // DESKTOP NAV
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <LinksList
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          // MOBILE NAV
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="/assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {
          <div
            className={`fixed right-0 bottom-0 h-full bg-blue w-[66%] ease-in-out duration-500 
            ${
              !isAboveSmallScreens && isMenuToggled
                ? "translate-x-0"
                : `translate-x-full`
            } 
            ease-in-out duration-500`}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="/assets/close-icon.svg" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <LinksList
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;

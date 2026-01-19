import React, { useCallback, useMemo } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY;
          setScrolled(offset > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skill" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];
  const navBgClass = useMemo(
    () => (scrolled ? "bg-yellow-200" : "bg-black"),
    [scrolled]
  );
  const navTextClass = useMemo(
    () => (scrolled ? "text-black" : "text-white"),
    [scrolled]
  );
  const hoverClass = useMemo(
    () => (scrolled ? "hover:text-black" : "hover:text-yellow-200"),
    [scrolled]
  );
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 bg-gray-800 shadow-md z-50 transition-colors duration-500 ${navBgClass}`}
    >
      <div
        className={`container mx-auto flex justify-between items-center p-4 ${navTextClass}`}
      >
        <div className="text-2xl font-bold">SLES SAKIRIN</div>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className={`cursor-pointer hover:underline transition-colors duration-300 ${hoverClass}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <div
              className={`w-6 h-0.5 bg-current mb-1 transition-transform duration-300 ${menuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current mb-1 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}
            ></div>
          </button>
          {menuOpen && (
            <ul className="absolute right-4 mt-2 w-40 bg-white rounded-md shadow-lg py-2 text-black">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="cursor-pointer"
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

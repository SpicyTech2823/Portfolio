import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skill" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];    
  return (
    <nav className={`fixed top-0 left-0  w-full h-20 bg-black shadow-md z-50  transition-colors duration-500 ${scrolled ? 'bg-yellow-200' : 'bg-black'}`}>
      <div className={`container mx-auto flex justify-between items-center p-4  ${scrolled ? 'text-black' : 'text-white'}`}>
        <div className=" text-2xl font-bold">SLES SAKIRIN</div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium ">
          <li className=" space-x-10 mt-3 ">
            {navItems.map((item) => (
              <Link  
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className={`cursor-pointer hover:underline  ${scrolled ? 'hover:text-black' : 'hover:text-yellow-200'}`}
              >
                {item.label}
               
              </Link>
            ))}
          </li>
        </ul>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div className={`w-6 h-0.5 bg-current mb-1 transition-transform duration-300 ${menuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
          {menuOpen && (
            <ul className={`absolute right-4 mt-2 w-40 bg-white rounded-md shadow-lg py-2 ${scrolled ? 'text-black' : 'text-black'}`}>
              {navItems.map((item) => (
                <li key={item.id} className="px-4 py-2 hover:bg-gray-200">  
                  <Link  
                    to={item.id}
                    smooth={true} 
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(false)}
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
  )
}

export default Navbar;
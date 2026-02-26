import { useState } from "react";
import { Link, NavLink } from "react-router";
import { ShoppingCart, UserRound, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "NEW ARRIVALS", path: "/newarrivals" },
    { name: "MEN", path: "/men" },
    { name: "WOMEN", path: "/women" },
    { name: "KIDS", path: "/kids" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-60 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/src/assets/Reybon logo.png"
              alt="Reybon"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden! md:flex! items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition duration-300 ${
                    isActive
                      ? "text-red-500"
                      : "text-gray-800 hover:text-red-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-red-500 transform transition-all duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      } origin-left`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Section (Now Properly Structured) */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-44 bg-gray-100/80 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            {/* Icons (always visible) */}
            <Link to="/login">
              <UserRound className="h-5 w-5 text-gray-800 hover:text-red-500 transition duration-300" />
            </Link>

            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-800 hover:text-red-500 transition duration-300" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-red-500"
                      : "text-gray-800 hover:text-red-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
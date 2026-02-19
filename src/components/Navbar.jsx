import { Link, NavLink } from "react-router";
import { ShoppingCart, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    /* ================== Navbar ================= */
    <header
    className="
        fixed top-0 left-0 w-full z-50 backdrop-blur-sm
        bg-linear-to-b from-red-100 to-white/20
        shadow-lg"
    >
    <div className="max-w-6xl mx-auto flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="transition hover:scale-105">
        <img
            src="src/assets/Reybon logo.png"
            alt="Reybon"
            className="h-12 w-auto"
        />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center h-full">
            <ul className="flex items-center gap-6 font-semibold text-sm space-x-4 h-full">
                {[
                { name: "NEW ARRIVALS", path: "/newarrivals" },
                { name: "MAN", path: "/man" },
                { name: "WOMAN", path: "/woman" },
                { name: "KIDS", path: "/kids" },
                ].map((item) => (
                <li key={item.path} className="flex items-center">
                    <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                        `!text-black transition ${
                        isActive ? "border-b-2 border-red-400 !text-red-400" : ""
                        }`
                    }
                    >
                    {item.name}
                    </NavLink>
                </li>
                ))}
            </ul>
            </nav>


        {/* Actions */}
        <div className="flex items-center gap-4">
        <input
            type="text"
            placeholder="Search..."
            className="border border-black/30 rounded-full px-4 py-1 focus:outline-none"
        />

        <Link to="/login">
            <UserRound className="h-6 w-6 text-black transition hover:text-red-400" />
        </Link>

        <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-black transition hover:text-red-400" />
            <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-2 rounded-full">
            0
            </span>
        </Link>
        </div>

    </div>
    </header>

  );
};

export default Navbar;


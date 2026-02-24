import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import MealsLogo from "../assets/Logo.jpeg";
export default function Navbar() {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav
      className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8 pb-2 flex justify-between border-b text-gray-700
    dark:text-[#cce7c9]"
    >
      <div className="flex items-center gap-2">
        <img alt="logo" src={MealsLogo} className="w-10 h-10 rounded-full" />
        <h1 className="text-3xl font-semibold ">Happy Meal</h1>
      </div>
      <div className="flex items-center gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">
          <Search />
        </NavLink>
        <button onClick={() => toggleTheme()}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-slate-100 py-4 dark:bg-slate-700">
            <div className="container flex items-center justify-between gap-4">
                <Link
                    className="rounded border-2 border-black/30  py-2 px-4 text-2xl font-bold dark:border-white/30 dark:text-white"
                    to="/">
                    React Router Countries
                </Link>
                <nav className="flex items-center gap-4">
                    <NavLink
                        className={({ isActive }) =>
                            (isActive
                                ? "text-rose-600 hover:text-rose-700 dark:text-rose-600 dark:hover:text-rose-700"
                                : undefined) +
                            " block p-2 font-semibold uppercase transition dark:text-white/70 dark:hover:text-white"
                        }
                        to="/home">
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            (isActive
                                ? "text-rose-600 hover:text-rose-700 dark:text-rose-600 dark:hover:text-rose-700"
                                : undefined) +
                            " block p-2 font-semibold uppercase transition dark:text-white/70 dark:hover:text-white"
                        }
                        to="/about">
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;

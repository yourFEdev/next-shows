"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import NavLink from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const menus = [
    "Home",
    "About",
    "Projects",
];

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const [open, setOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () =>
            setScrolled(window.scrollY > 20);

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            <header
                className={`
                fixed
                top-0
                left-0
                w-full
                z-40
                transition-all
                duration-300
                ${
                    scrolled
                        ? "backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800"
                        : ""
                }
                `}
            >
                <div
                    className="
                    max-w-7xl
                    mx-auto
                    px-6
                    h-20
                    flex
                    items-center
                    justify-between
                    "
                >
                    <h1
                        className="
                        text-xl
                        font-bold
                        bg-gradient-to-r
                        from-violet-500
                        to-blue-500
                        bg-clip-text
                        text-transparent
                        "
                    >
                     {process.env.NEXT_PUBLIC_NAME}
                    </h1>

                    <nav
                        className="
                        hidden
                        md:flex
                        gap-8
                        items-center
                        "
                    >
                        {menus.map(menu => (
                            <NavLink
                                key={menu}
                                title={menu}
                            />
                        ))}
                    </nav>

                    <div
                        className="
                        hidden
                        md:flex
                        items-center
                        gap-3
                        "
                    >
                        <ThemeToggle />

                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden"
                    >
                        <Menu />
                    </button>
                </div>
            </header>

            <MobileMenu
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}
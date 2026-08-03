"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import NavLink from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const menus = ["Home", "About", "Projects"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70"
            : ""
        } `}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <h1 className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
            andreka.dev
          </h1>

          <nav className="hidden items-center gap-8 md:flex">
            {menus.map((menu) => (
              <NavLink key={menu} title={menu} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

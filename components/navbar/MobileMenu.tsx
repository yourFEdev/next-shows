"use client";

import { X } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const menus = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
];

export default function MobileMenu({
    open,
    onClose,
}: Props) {

    return (
        <div
            className={`
            fixed
            inset-0
            z-50
            transition-all
            ${open ? "visible" : "invisible"}
            `}
        >
            <div
                onClick={onClose}
                className="
                absolute
                inset-0
                bg-black/50
                "
            />

            <div
                className={`
                absolute
                right-0
                top-0
                h-full
                w-72
                bg-white
                dark:bg-slate-900
                p-8
                transition-transform
                duration-300
                ${open ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <button
                    onClick={onClose}
                    className="mb-10"
                >
                    <X />
                </button>

                <div className="space-y-6">
                    {menus.map(menu => (
                        <a
                            key={menu}
                            href={`#${menu.toLowerCase()}`}
                            onClick={onClose}
                            className="block text-lg"
                        >
                            {menu}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
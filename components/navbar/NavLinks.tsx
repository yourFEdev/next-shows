"use client";

interface Props {
    title: string;
}

export default function NavLink({
    title,
}: Props) {
    return (
        <a
            href={`#${title.toLowerCase()}`}
            className="
            relative
            text-sm
            font-medium
            hover:text-violet-500
            transition
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-violet-500
            hover:after:w-full
            after:transition-all
            "
        >
            {title}
        </a>
    );
}
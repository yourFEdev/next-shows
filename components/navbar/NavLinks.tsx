"use client";

interface Props {
  title: string;
}

export default function NavLink({ title }: Props) {
  return (
    <a
      href={`#${title.toLowerCase()}`}
      className="relative text-sm font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all hover:text-violet-500 hover:after:w-full"
    >
      {title}
    </a>
  );
}

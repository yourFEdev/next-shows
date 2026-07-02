import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                `
                rounded-xl
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                bg-gradient-to-r
                from-violet-600
                to-indigo-600
                text-white
                hover:scale-105
                hover:shadow-xl
                hover:shadow-violet-500/30
                active:scale-95
                cursor-pointer
                `,
                className
            )}
            {...props}
        />
    );
}
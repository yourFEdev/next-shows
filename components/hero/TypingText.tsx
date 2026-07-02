"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {

    return (
        <TypeAnimation
            sequence={[
                "Frontend Developer",
                2000,
                "Vue.js Developer",
                2000,
                "Next.js Developer",
                2000,
                "ERP Developer",
                2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="
            mt-6
            text-3xl
            md:text-5xl
            font-bold
            gradient-text
            "
        />
    );
}
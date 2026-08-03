"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Developer",
        2000,
        "Vue.js Developer",
        2000,
        "Next.js Developer",
        2000,
        "Laravel Developer",
        2000,
      ]}
      wrapper="h2"
      repeat={Infinity}
      className="gradient-text mt-6 text-3xl font-bold md:text-5xl"
    />
  );
}

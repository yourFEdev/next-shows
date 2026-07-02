"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import TechCards from "./TechCards";
import TypingText from "./TypingText";


export default function Hero() {
    return (
        <section
            id="home"
            className="
            relative
            min-h-screen
            overflow-hidden
            flex
            items-center
            "
        >
            <div className="container-page">

                <div
                    className="
                    grid
                    lg:grid-cols-2
                    gap-20
                    items-center
                    "
                >
                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                    >

                        <span
                            className="
                            inline-block
                            rounded-full
                            bg-violet-500/10
                            text-violet-500
                            px-4
                            py-2
                            font-medium
                            "
                        >
                            👋 Hello, Im
                        </span>

                        <h1
                            className="
                            mt-6
                            text-5xl
                            md:text-7xl
                            font-black
                            leading-tight
                            "
                        >
                            {process.env.NEXT_PUBLIC_NAME}
                        </h1>

                        <TypingText />

                        <p
                            className="
                            mt-8
                            text-lg
                            text-slate-500
                            dark:text-slate-400
                            max-w-xl
                            leading-8
                            "
                        >
                            Building scalable web applications using
                            React, Next.js, Vue.js,
                            TypeScript and modern frontend technologies.
                        </p>

                          <div className="mt-10 flex flex-wrap gap-4">
                                    <a href= {process.env.NEXT_PUBLIC_NAME}>
                                        <Button>
                                            Download CV
                                        </Button>
                                    </a>
                                </div>

                     

                    </motion.div>

                    {/* RIGHT */}

                    <TechCards />

                </div>

            </div>

        </section>
    );
}
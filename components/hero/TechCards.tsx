"use client";

import { motion } from "framer-motion";

const techs = [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
];

export default function TechCards() {

    return (

        <motion.div

            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: .8 }}

            className="
            relative
            hidden
            lg:block
            h-[320px]
            "

        >

            {techs.map((tech, i) => (

                <motion.div

                    key={tech}

                    animate={{
                        y: [0, -15, 0]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 3 + i
                    }}

                    className="
                    absolute
                    card
                    w-52
                    p-6
                    "

                    style={{
                        top: `${i * 120}px`,
                        left: `${(i % 2) * 180}px`
                    }}

                >

                    <h3 className="font-bold">

                        {tech}

                    </h3>

                </motion.div>

            ))}

        </motion.div>

    );

}
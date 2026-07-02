"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  Sparkles,
} from "lucide-react";

const focus = [
  "JavaScript",
  "TypeScript",
  "Vue 3",
  "Quasar",
  "React",
  "Next.js",
  "Pinia",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">
            ABOUT ME
          </p>

          <h2 className="section-title mt-3">
            Building modern web experiences
            with clean and scalable code.
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-10"
          >

            <div className="flex flex-col items-center">

              <div
                className="
                w-36
                h-36
                rounded-full
                bg-gradient-to-br
                from-violet-500
                to-indigo-500
                flex
                items-center
                justify-center
                text-5xl
                font-black
                text-white
                shadow-lg
                shadow-violet-500/30
                "
              >
                Px.
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Frontend Developer
              </h3>

              <div
                className="
                mt-2
                flex
                items-center
                gap-2
                text-green-400
                text-sm
                "
              >
                <Sparkles size={15} />
                Available for Work
              </div>

            </div>

            <div className="mt-10 space-y-6">

              <p className="text-slate-400 leading-8">
                Im a Frontend Web Developer passionate about building
                modern, scalable, and user-friendly web applications.
                I enjoy transforming ideas into intuitive digital
                experiences with clean and maintainable code.
              </p>

            </div>

            {/* Mini Stats */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="rounded-xl bg-slate-800/50 p-4">
                <BriefcaseBusiness className="text-violet-500 mb-3" />

                <h4 className="text-2xl font-bold">
                  2+
                </h4>

                <p className="text-slate-400 text-sm">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl bg-slate-800/50 p-4">
                <MapPin className="text-violet-500 mb-3" />

                <h4 className="text-2xl font-bold">
                  ID
                </h4>

                <p className="text-slate-400 text-sm">
                  Indonesia
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-10"
          >

            <h3 className="text-3xl font-bold">
              Tech Stack
            </h3>

            <p className="mt-3 text-slate-400">
              Technologies I use to build scalable,
              maintainable and modern web applications.
            </p>

            <div
              className="
              mt-10
              grid
              grid-cols-2
              gap-5
              "
            >

              {focus.map((item) => (

                <div
                  key={item}
                  className="
                  rounded-xl
                  border
                  border-violet-500/20
                  bg-violet-500/5
                  px-5
                  py-4
                  font-semibold
                  text-violet-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500
                  hover:bg-violet-500
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-violet-500/20
                  cursor-default
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
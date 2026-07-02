"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Topup Game",
    image: "/projects/payroll.png",
    description:
      "Topup voucher game online with payment integration and dashboard.",
    tech: ["Typescript","React", "Redux", "Express.js", "MongoDB"],
  },
  {
    title: "Notelyx",
    image: "/projects/warehouse.png",
    description:
      "Notepad web based with login system",
    tech: ["Vue", "Quasar", "Pinia"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="container-page">

        <span className="section-subtitle">
          FEATURED PROJECTS
        </span>

        <div
          className="
          mt-16
          grid
          lg:grid-cols-3
          gap-8
          "
        >

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .1,
              }}
              className="
              card
              overflow-hidden
              group
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                h-56
                w-full
                object-cover
                group-hover:scale-105
                transition
                duration-500
                "
              />

              <div className="p-6">

                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-slate-500
                  dark:text-slate-400
                  leading-7
                  "
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map(item => (

                    <span
                      key={item}
                      className="badge"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <button
                  className="
                  mt-8
                  text-violet-500
                  font-semibold
                  flex
                  items-center
                  gap-2
                  group-hover:gap-3
                  transition-all
                  "
                >
                  View Project

                  <ArrowUpRight
                    size={18}
                  />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
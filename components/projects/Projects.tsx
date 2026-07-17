"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Voucher Hub",
    image: "/voucherHub.png",
    description: "Topup voucher with payment integration and dashboard.",
    tech: ["Typescript", "React", "Redux", "Express.js", "MongoDB"],
    link: "https://frontend-voucherhub.vercel.app/",
  },
  {
    title: "KidneyMate",
    image: "/projects/warehouse.png",
    description: "on progress",
    tech: ["Vue", "Pinia"],
    link: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <span className="section-subtitle">FEATURED PROJECTS</span>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
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
                delay: index * 0.1,
              }}
              className="
              card
              overflow-hidden
              group
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
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
                  {project.tech.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    <ArrowUpRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

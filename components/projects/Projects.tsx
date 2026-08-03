"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Company Profile BMS",
    image: "/comproBms.png",
    description:
      "Corporate profile website showcasing medical products and company services with a modern responsive design.",
    tech: ["TypeScript", "React", "Next.js"],
    link: "https://www.bhinekamitrasejati.com/",
    github: "https://github.com/yourFEdev?tab=repositories",
  },
  {
    title: "Voucher Hub",
    image: "/voucherHub.png",
    description:
      "Digital voucher marketplace with payment integration, transaction management, and an admin dashboard.",
    tech: ["TypeScript", "React", "Next.js", "Express.js", "MongoDB"],
    link: "https://kidneymate.andreka.dev/",
    github: "https://github.com/yourFEdev/frontend-voucherHub",
  },
  {
    title: "KidneyMate",
    image: "/kidneyMate.png",
    description:
      "Hemodialysis companion application for monitoring fluid intake, medications, blood pressure, and dialysis schedules.",
    tech: ["TypeScript", "PHP", "Vue", "Pinia", "Laravel", "MySQL"],
    link: "https://kidneymate.andreka.dev/",
    github: "https://github.com/yourFEdev/frontend-kidneyMate",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-subtitle">FEATURED PROJECTS</span>

          <h2 className="mt-4 text-4xl font-black">Selected Work</h2>

          <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">
            A collection of projects I&apos;ve built using modern web
            technologies, focusing on performance, scalability, and user
            experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-2xl"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
                    <span className="font-medium text-white">Live Demo</span>

                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-4 min-h-[96px] leading-7 text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-800 px-3 py-1 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-slate-300 transition-all hover:text-white"
                >
                  View GitHub
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

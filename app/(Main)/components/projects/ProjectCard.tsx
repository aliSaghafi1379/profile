"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

type Project = {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  technologies: string[] | null;
  demo_url: string | null;
  github_url: string | null;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl
        border border-border
        bg-card
        transition-colors duration-300
        hover:border-primary/40
        hover:shadow-[0_0_35px_rgba(124,58,237,0.10)]
      "
    >
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            unoptimized
            fill
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No image
          </div>
        )}

        {/* Image overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-linear-to-t
            from-black/60
            via-transparent
            to-transparent
            opacity-60
          "
        />

        {/* Top-right arrow */}
        <div
          className="
            absolute right-4 top-4
            flex size-9 items-center justify-center
            rounded-full
            border border-white/10
            bg-black/40
            text-white
            backdrop-blur-md
            transition-all duration-300
            group-hover:bg-primary
            group-hover:border-primary
          "
        >
          <ArrowUpRight
            size={18}
            className="
              transition-transform duration-300
              group-hover:rotate-12
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Title */}
        <h2
          className="
            text-xl font-semibold tracking-tight
            text-foreground
            transition-colors duration-300
            group-hover:text-primary
          "
        >
          {project.title}
        </h2>

        {/* Description */}
        {project.description && (
          <p
            className="
              mt-3 line-clamp-3
              text-sm leading-7
              text-muted-foreground
            "
          >
            {project.description}
          </p>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                    rounded-full
                    border border-border
                    bg-muted/50
                    px-3 py-1
                    text-xs font-medium
                    text-muted-foreground
                    transition-colors duration-300
                    group-hover:border-primary/20
                  "
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Bottom actions */}
        <div className="mt-auto flex items-center gap-3 pt-6">
          {project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-xl
                border border-border
                px-4 py-2.5
                text-sm font-medium
                text-foreground
                transition-all duration-300
                hover:border-primary/40
                hover:bg-primary/10
                hover:text-primary
              "
            >
              <FaGithub size={17} />
              GitHub
            </Link>
          )}

          {project.demo_url && (
            <Link
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-primary
                px-4 py-2.5
                text-sm font-medium
                text-primary-foreground
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]
              "
            >
              <ExternalLink size={17} />
              مشاهده صفحه
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

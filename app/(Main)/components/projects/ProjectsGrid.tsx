"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./projects-data";

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProjects = projects.slice(0, visibleCount);

  const hasMore = visibleCount < projects.length;

  return (
    <div className="w-full space-y-8">
      <div
        className="
          grid grid-cols-1 gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) => Math.min(count + 3, projects.length))
            }
            className="
              inline-flex items-center gap-2
              rounded-xl border border-border
              bg-card px-5 py-3
              text-sm font-medium text-foreground
              transition-colors
              hover:border-primary
              hover:text-primary
            "
          >
            نمایش پروژه‌های بیشتر
            <ChevronDown size={18} />
          </button>
        </div>
      )}

      {!hasMore && projects.length > 6 && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount(6)}
            className="
              rounded-xl px-5 py-3
              text-sm font-medium
              text-muted-foreground
              transition-colors
              hover:text-primary
            "
          >
            نمایش کمتر
          </button>
        </div>
      )}
    </div>
  );
}

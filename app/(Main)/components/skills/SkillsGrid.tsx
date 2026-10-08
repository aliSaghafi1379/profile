"use client";

import { motion } from "motion/react";

import SkillCard from "./SkillCard";
import type { Skill } from "./skills-data";

type SkillsGridProps = {
  skills: Skill[];
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const visibleSkills = skills.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
        grid w-full
        grid-cols-3
        gap-2.5
        sm:gap-4
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
      "
    >
      {visibleSkills.map((skill) => (
        <motion.div
          key={skill.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 14,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.35,
                ease: "easeOut",
              },
            },
          }}
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  );
}

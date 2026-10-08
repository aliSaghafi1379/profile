"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { PiSigmaThin } from "react-icons/pi";
import { FaFileWord, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { FaFilePowerpoint } from "react-icons/fa6";

import { Code2 } from "lucide-react";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import type { Skill } from "./skills-data";

const iconMap: Record<string, IconType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  git: SiGit,
  docker: SiDocker,
  vscode: Code2,
  math: PiSigmaThin,
  word: FaFileWord,
  excel: BsFillFileEarmarkExcelFill,
  powerpoint: FaFilePowerpoint,
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJsSquare,
};

const iconColors: Record<string, string> = {
  nextjs: "#FFFFFF",
  react: "#61DAFB",
  typescript: "#3178C6",
  tailwind: "#06B6D4",
  shadcn: "#FFFFFF",
  git: "#F05032",
  docker: "#2496ED",
  vscode: "#007ACC",
  math: "#1565C0",
  word: "#2B579A",
  excel: "#217346",
  powerpoint: "#D24726",
  html: "#E34F26",
  css: "#1572B6",
  js: "#F7DF1E",
};

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = iconMap[skill.icon];

  const levelText =
    skill.level >= 70 ? "پیشرفته" : skill.level >= 40 ? "متوسط" : "مبتدی";

  const level = Math.min(100, Math.max(0, skill.level));

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        group relative flex min-w-0 flex-col items-center
        overflow-hidden
        rounded-2xl
        border border-border
        bg-card
        p-3
        transition-all duration-300
        hover:border-primary/40
        hover:shadow-[0_0_30px_rgba(124,58,237,0.10)]
        sm:p-4
      "
    >
      {/* subtle glow */}
      <div
        className="
          pointer-events-none absolute -top-12 left-1/2
          size-24 -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative mb-3 flex size-14 items-center justify-center
          rounded-2xl
          border border-border
          bg-icon-bg/50
          transition-all duration-300
          group-hover:border-primary/30
          group-hover:scale-105
          sm:size-16
        "
      >
        {Icon ? (
          <Icon
            size={34}
            color={iconColors[skill.icon] ?? "currentColor"}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="text-xs text-muted-foreground">
            {skill.name.slice(0, 2)}
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        className="
          whitespace-nowrap
          text-center text-sm font-semibold
          text-foreground
          transition-colors duration-300
          group-hover:text-primary
          sm:text-base
        "
      >
        {skill.name}
      </h3>

      {/* Level */}
      <span className="mt-1 text-xs text-muted-foreground">{levelText}</span>

      {/* Progress */}
      <div
        className="
          mt-4 h-1.5 w-full
          overflow-hidden rounded-full
          bg-muted
        "
        role="progressbar"
        aria-label={`میزان تسلط به ${skill.name}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            h-full rounded-full
            bg-primary
            shadow-[0_0_10px_rgba(124,58,237,0.35)]
          "
        />
      </div>
    </motion.article>
  );
}

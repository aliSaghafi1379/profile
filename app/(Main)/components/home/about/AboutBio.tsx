"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type AboutBioProps = {
  bio: string;
};

export default function AboutBio({ bio }: AboutBioProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* متن درباره من */}
      <p
        className={`text-justify text-base leading-8 tracking-tight text-sidebar-text transition-all duration-300 ${
          isExpanded
            ? "line-clamp-none"
            : "line-clamp-5 sm:line-clamp-6 md:line-clamp-5 lg:line-clamp-none"
        }`}
      >
        {bio}
      </p>

      {/* دکمه بیشتر / کمتر */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors duration-200 hover:text-accent lg:hidden"
      >
        {isExpanded ? (
          <>
            کمتر
            <ChevronUp size={17} />
          </>
        ) : (
          <>
            بیشتر
            <ChevronDown size={17} />
          </>
        )}
      </button>
    </div>
  );
}

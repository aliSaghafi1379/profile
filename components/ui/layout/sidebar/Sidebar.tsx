"use client";

import Link from "next/link";
import { sidebarList, SidebarItem } from "./sidebar-data";
import { usePathname } from "next/navigation";
import ProfileInfo from "./ProfileInfo";
import ThemeToggle from "./ThemeToggle";
import ThemeToggleDesctop from "./ThemeToggleDesctop";
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside
      className="fixed z-50 inset-x-0 bottom-0 w-full h-20 bg-sidebar flex justify-between items-center py-1 px-3 sm:px-16 border-t border-[#123A70] drop-shadow-[0_-2px_8px_rgba(18,58,112,0.25)] md:shrink-0 md:inset-x-auto
        md:right-0
        md:top-0
        md:bottom-auto
        md:h-dvh
        md:w-48
        md:flex-col
        md:justify-between
        md:border-t-0
        md:px-3
        lg:w-64
        
        "
    >
      <div
        className="size-full flex justify-between items-center md:shrink-0 md:inset-x-auto
        md:flex-col
        md:justify-start
        md:h-auto
        md:mt-4
        "
      >
        <span className="hidden md:block w-full pr-3 mb-9">
          <ProfileInfo />
        </span>
        {sidebarList.map((side: SidebarItem) => {
          const Icon = side.icon;
          const isActive = pathname === side.url;
          return (
            <Link
              href={side.url}
              key={side.title}
              className={`h-full flex flex-col justify-center items-center gap-0.5 rounded-lg p-3 transition-all duration-300 lg:hover:text-primary lg:hover:shadow-[0_0_18px_rgba(139,92,246,0.12)] lg:hover:bg-primary/10 lg:p-3 ${isActive ? "text-[#7C3AED] hover:text-[#7C3AED] lg:bg-primary/15 lg:text-primary lg:shadow-[0_0_18px_rgba(139,92,246,0.15)]  " : "text-sidebar-text hover:text-[#F8FAFC]"} 
                  md:flex-row
                  md:p-0 md:shrink-0 md:h-auto md:w-full md:justify-start md:gap-5 md:mt-5 md:pr-3 lg:mt-3
            `}
            >
              <Icon
                strokeWidth={1.8}
                className={` size-5.5 lg:size-6
                   ${
                     isActive
                       ? "drop-shadow-[0_0_8px_#7C3AED]"
                       : "text-sidebar-text"
                   }
                  
                `}
              />
              <span className="text-[12px] md:text-[15px] lg:text-[16px] font-medium">
                {side.title}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="hidden lg:block w-full pr-3 mb-8">
        <ThemeToggleDesctop />
      </div>
      <div className="hidden md:block lg:hidden w-full pr-3 mb-8">
        <ThemeToggle />
      </div>
    </aside>
  );
}

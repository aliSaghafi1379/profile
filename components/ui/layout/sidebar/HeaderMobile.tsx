"use client";

import ProfileInfo from "./ProfileInfo";
import ThemeToggle from "./ThemeToggle";
export default function HeaderMobile() {
  return (
    <header className="w-full h-14 bg-sidebar flex justify-between items-center py-1 px-5 sm:px-10 border-b border-[#123A70] drop-shadow-[0_-2px_8px_rgba(18,58,112,0.25)] md:hidden">
      <ProfileInfo />
      <ThemeToggle />
    </header>
  );
}

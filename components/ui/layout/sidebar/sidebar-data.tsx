import { House, LucideIcon, FolderKanban, CodeXml, Mail } from "lucide-react";

export type SidebarItem = {
  url: string;
  title: string;
  icon: LucideIcon;
  id: number;
};
export const sidebarList: SidebarItem[] = [
  { url: "/", title: "صفحه اصلی", icon: House, id: 1 },
  { url: "/projects", title: "پروژه ها", icon: FolderKanban, id: 2 },
  { url: "/skills", title: "مهارت ها", icon: CodeXml, id: 3 },
  { url: "/contact", title: "راه ارتباطی", icon: Mail, id: 4 },
];

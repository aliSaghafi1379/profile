import ProjectsGrid from "../components/projects/ProjectsGrid";
import TitleForAll from "../components/TitleForAll";
import { getProjects } from "@/lib/data/public-data";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="flex flex-col items-center justify-center gap-10 lg:px-5 lg:pt-3 xl:px-16 xl:pt-6">
      <TitleForAll
        titleThisPage="پروژه های من"
        textDetails="از ایده تا اجرا؛ نگاهی به چیزهایی که ساخته‌ام."
      />

      <ProjectsGrid projects={projects} />
    </main>
  );
}

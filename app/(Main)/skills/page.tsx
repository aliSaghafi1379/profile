import OtherSkills from "../components/skills/OtherSkills";
import SkillsGrid from "../components/skills/SkillsGrid";
import TitleForAll from "../components/TitleForAll";
import { getSkills } from "@/lib/data/public-data";

export default async function SkillPage() {
  const { skills, otherSkills } = await getSkills();

  return (
    <main className="flex flex-col lg:px-5 lg:pt-3 xl:px-16 xl:pt-6 gap-10 items-center justify-center">
      <TitleForAll
        titleThisPage="مهارت های من"
        textDetails="ابزارها و تکنولوژی‌هایی که در مسیر توسعه با آن‌ها کار می‌کنم."
      />

      <SkillsGrid
        skills={skills.map((skill) => ({
          ...skill,
          isActive: skill.is_active,
          sortOrder: skill.sort_order,
          levelLabel: skill.level_label,
        }))}
      />

      <OtherSkills skills={otherSkills} />
    </main>
  );
}

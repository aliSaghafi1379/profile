import type { OtherSkill } from "./skills-data";

type OtherSkillsProps = {
  skills: OtherSkill[];
};

export default function OtherSkills({ skills }: OtherSkillsProps) {
  return (
    <section className="mt-7 w-full">
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex size-9 shrink-0 items-center justify-center
            rounded-xl
            border border-primary/20
            bg-primary/10
            text-primary
          "
        >
          <span className="text-lg">✦</span>
        </div>

        <div>
          <h2 className="text-base font-bold text-foreground sm:text-lg">
            سایر مهارت ها
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="
              group inline-flex items-center gap-2
              rounded-xl
              border border-border
              bg-card
              px-3.5 py-2.5
              text-xs font-medium
              text-muted-foreground
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:bg-primary/5
              hover:text-foreground
              hover:shadow-[0_0_18px_rgba(124,58,237,0.08)]
              sm:text-sm
            "
          >
            <span
              className="
                size-1.5 shrink-0 rounded-full
                bg-primary/60
                transition-all duration-300
                group-hover:bg-primary
                group-hover:shadow-[0_0_8px_rgba(124,58,237,0.5)]
              "
              aria-hidden="true"
            />

            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

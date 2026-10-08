import type { ReactNode, ElementType } from "react";

type InfoCardProps = {
  icon: ElementType;
  title: string;
  children: ReactNode;
};

export default function InfoCard({
  icon: Icon,
  title,
  children,
}: InfoCardProps) {
  return (
    <div
      className="
        group relative flex w-full items-center gap-4
        overflow-hidden rounded-2xl
        border border-border
        bg-card
        p-4
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-primary/40
        hover:shadow-[0_0_25px_rgba(139,92,246,0.08)]
      "
    >
      {/* نور ظریف هنگام Hover */}
      <div
        className="
          pointer-events-none absolute -right-10 -top-10
          size-24 rounded-full
          bg-primary/10
          blur-2xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative flex size-14 shrink-0 items-center
          justify-center rounded-2xl
          border border-primary/10
          bg-icon-bg
          text-primary
          transition-all duration-300
          group-hover:border-primary/30
          group-hover:shadow-[0_0_18px_rgba(139,92,246,0.12)]
        "
      >
        <Icon size={25} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="relative min-w-0">
        <h3 className="font-semibold text-foreground">{title}</h3>

        <div className="mt-2 text-sm leading-6 text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

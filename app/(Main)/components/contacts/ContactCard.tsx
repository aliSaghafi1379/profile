import Link from "next/link";
import { SiTelegram, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FiLinkedin, FiMail, FiPhoneCall, FiArrowUpLeft } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { ContactItem } from "./contact-data";

const iconMap: Record<string, IconType> = {
  telegram: SiTelegram,
  linkedin: FiLinkedin,
  instagram: SiInstagram,
  whatsapp: SiWhatsapp,
  email: FiMail,
  phone: FiPhoneCall,
};

type ContactCardProps = {
  contact: ContactItem;
};

export default function ContactCard({ contact }: ContactCardProps) {
  const Icon = iconMap[contact.icon];

  const isExternal = contact.href.startsWith("https://");

  return (
    <Link
      href={contact.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        group relative flex min-w-0 items-center gap-3
        overflow-hidden
        rounded-2xl
        border border-border
        bg-card
        p-4
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_0_30px_rgba(124,58,237,0.08)]
        sm:gap-4
        sm:p-5
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute -right-10 -top-10
          size-24
          rounded-full
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
          relative flex size-12 shrink-0
          items-center justify-center
          rounded-2xl
          border border-border
          bg-muted/50
          transition-all duration-300
          group-hover:scale-105
          group-hover:border-primary/30
          group-hover:bg-primary/10
          sm:size-14
        "
        style={{ color: contact.color }}
      >
        {Icon ? (
          <Icon
            size={26}
            aria-hidden="true"
            className="
              transition-transform duration-300
              group-hover:scale-110
            "
          />
        ) : (
          <span className="text-sm font-bold">{contact.title.slice(0, 1)}</span>
        )}
      </div>

      {/* Text */}
      <div className="relative min-w-0 flex-1">
        <h2
          className="
            text-sm font-bold
            text-foreground
            transition-colors duration-300
            group-hover:text-primary
            sm:text-base
          "
        >
          {contact.title}
        </h2>

        <p
          dir="auto"
          className="
            mt-1
            wrap-break-words
            text-xs leading-6
            text-muted-foreground
            transition-colors duration-300
            sm:text-sm
          "
        >
          {contact.value}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="
          relative flex size-8 shrink-0
          items-center justify-center
          rounded-full
          border border-border
          text-muted-foreground
          transition-all duration-300
          group-hover:border-primary/30
          group-hover:bg-primary/10
          group-hover:text-primary
        "
      >
        <FiArrowUpLeft
          size={17}
          aria-hidden="true"
          className="
            transition-transform duration-300
            group-hover:-translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </div>
    </Link>
  );
}

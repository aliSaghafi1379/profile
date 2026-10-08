import { CalendarDays, GraduationCap, ShieldCheck, MapPin } from "lucide-react";

import InfoCard from "./InfoCard";

const iconMap = {
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  MapPin,
};

type HomeDetail = {
  id: number;
  title: string;
  value: string | null;
  icon: string | null;
  sort_order: number;
  is_active: boolean;
};

type ProfileDetailsProps = {
  details: HomeDetail[];
};

export default function ProfileDetails({ details }: ProfileDetailsProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4 pt-10">
      {details.map((detail) => {
        const Icon =
          iconMap[detail.icon as keyof typeof iconMap] ?? CalendarDays;

        const values = detail.value ? detail.value.split("|") : [];

        return (
          <InfoCard key={detail.id} icon={Icon} title={detail.title}>
            {values.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </InfoCard>
        );
      })}
    </section>
  );
}

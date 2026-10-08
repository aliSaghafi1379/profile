import AboutBio from "./AboutBio";

type ProfileInfoProps = {
  fullName: string;
  jobTitle: string;
  bio: string;
};

export default function ProfileInfo({
  fullName,
  jobTitle,
  bio,
}: ProfileInfoProps) {
  return (
    <div className="w-full flex flex-col gap-4 items-center md:flex-1 md:inline">
      {/* نام */}
      <p className="text-center text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-right md:text-6xl">
        {fullName}
      </p>

      {/* عنوان شغلی */}
      <p className="text-center text-xl font-semibold text-primary sm:text-2xl md:text-right">
        {jobTitle}
      </p>

      {/* درباره من */}
      <AboutBio bio={bio} />
    </div>
  );
}

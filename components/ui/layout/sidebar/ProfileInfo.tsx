import Image from "next/image";

type ProfileInfoProps = {
  imageUrl?: string | null;
};

export default function ProfileInfo({ imageUrl }: ProfileInfoProps) {
  return (
    <div className="flex">
      <div
        className="
          group relative
          xl:size-14
          lg:size-12
          md:size-10
          size-9
          rounded-full
          p-0.5
          bg-linear-to-br
          from-primary
          via-violet-500
          to-primary/20
          shadow-[0_0_25px_rgba(124,58,237,0.18)]
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]
        "
      >
        <div
          className="
            relative
            size-full
            overflow-hidden
            rounded-full
            border-2
            border-background
            bg-card
          "
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Profile"
              fill
              sizes="64px"
              className="
                object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />
          ) : (
            <div className="flex size-full items-center justify-center text-lg font-bold text-primary">
              A
            </div>
          )}
        </div>

        {/* Online dot */}
        <span
          className="
            absolute
            bottom-0
            right-0
            size-3.5
            rounded-full
            border-2
            border-background
            bg-emerald-400
            shadow-[0_0_10px_rgba(52,211,153,0.7)]
          "
        />
      </div>
    </div>
  );
}

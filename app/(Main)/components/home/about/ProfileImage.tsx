import Image from "next/image";

type ProfileImageProps = {
  imageUrl: string | null;
};

export default function ProfileImage({ imageUrl }: ProfileImageProps) {
  return (
    <div className="relative size-52 md:size-64">
      {/* نور ملایم پشت قاب */}
      <div
        className="absolute inset-4 rounded-full
        bg-linear-to-br from-violet-500/20 via-blue-500/15 to-purple-500/20
        opacity-70 blur-2xl"
      />

      {/* قاب شیشه‌ای */}
      <div
        className="absolute inset-2 rounded-full
        border border-white/12
        bg-[#0B1B30]/70
        p-2
        shadow-[0_0_20px_rgba(139,92,246,0.08)]
        backdrop-blur-xl"
      >
        {/* سطح داخلی */}
        <div
          className="relative h-full w-full overflow-hidden
          rounded-full
          border border-[#16304D]
          bg-[#061426]"
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Profile image"
              fill
              sizes="(max-width: 768px) 208px, 256px"
              className="object-cover"
            />
          )}

          {/* انعکاس شیشه‌ای ظریف */}
          <div
            className="pointer-events-none absolute inset-0
            rounded-full
            bg-linear-to-br from-white/[0.07] via-transparent to-blue-400/4"
          />
        </div>
      </div>
    </div>
  );
}

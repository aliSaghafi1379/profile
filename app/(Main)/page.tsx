import ProfileImage from "./components/home/about/ProfileImage";
import ProfileInfo from "./components/home/about/ProfileInfo";
import ProfileDetails from "./components/home/info/ProfileDetails";

import { getHomeData } from "@/lib/data/public-data";

export default async function Home() {
  const { homeContent, details } = await getHomeData();

  return (
    <main className="py-1 px-3 lg:px-10 lg:pt-8 xl:px-20 xl:pt-16 text-white flex flex-col items-center">
      <div className="flex flex-col md:block items-center">
        <div className="md:float-right" style={{ shapeOutside: "circle(50%)" }}>
          <ProfileImage imageUrl={homeContent?.profile_image_url ?? null} />
        </div>

        <ProfileInfo
          fullName={homeContent?.full_name ?? ""}
          jobTitle={homeContent?.job_title ?? ""}
          bio={homeContent?.bio ?? ""}
        />
      </div>

      <ProfileDetails details={details} />
    </main>
  );
}

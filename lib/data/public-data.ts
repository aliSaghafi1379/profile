import { createClient } from "@supabase/supabase-js";

import { cacheLife, cacheTag } from "next/cache";

function createPublicSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}

/* -------------------------------------------------------------------------- */
/*                                   HOME                                     */
/* -------------------------------------------------------------------------- */

export async function getHomeData() {
  "use cache";

  cacheLife({
    stale: 3600,
    revalidate: 3600,
    expire: 86400,
  });

  cacheTag("home");

  const supabase = createPublicSupabaseClient();

  const [
    { data: homeContent, error: homeError },
    { data: details, error: detailsError },
  ] = await Promise.all([
    supabase
      .from("home_content")
      .select("*")
      .eq("is_active", true)
      .limit(1)
      .maybeSingle(),

    supabase
      .from("home_details")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true }),
  ]);

  if (homeError) {
    console.error("Error fetching home content:", homeError);
  }

  if (detailsError) {
    console.error("Error fetching home details:", detailsError);
  }

  return {
    homeContent,
    details: details ?? [],
  };
}

/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */

export async function getProjects() {
  "use cache";

  cacheLife({
    stale: 3600,
    revalidate: 3600,
    expire: 86400,
  });

  cacheTag("projects");

  const supabase = createPublicSupabaseClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      `
        id,
        title,
        description,
        image_url,
        technologies,
        demo_url,
        github_url,
        sort_order,
        is_active
      `,
    )
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching projects:", error);
  }

  return data ?? [];
}

/* -------------------------------------------------------------------------- */
/*                                   SKILLS                                   */
/* -------------------------------------------------------------------------- */

export async function getSkills() {
  "use cache";

  cacheLife({
    stale: 3600,
    revalidate: 3600,
    expire: 86400,
  });

  cacheTag("skills");

  const supabase = createPublicSupabaseClient();

  console.log("🔥 getSkills started");

  const { data: skills, error: skillsError } = await supabase
    .from("skills")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  console.log("🔥 skills result:", {
    data: skills,
    error: skillsError,
  });

  const { data: otherSkills, error: otherSkillsError } = await supabase
    .from("other_skills")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  console.log("🔥 otherSkills result:", {
    data: otherSkills,
    error: otherSkillsError,
  });

  return {
    skills: skills ?? [],
    otherSkills: otherSkills ?? [],
  };
}

/* -------------------------------------------------------------------------- */
/*                                  CONTACTS                                  */
/* -------------------------------------------------------------------------- */

export async function getContacts() {
  "use cache";

  cacheLife({
    stale: 3600,
    revalidate: 3600,
    expire: 86400,
  });

  cacheTag("contacts");

  const supabase = createPublicSupabaseClient();

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching contacts:", error);
  }

  return data ?? [];
}

export type Project = {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  technologies: string[] | null;
  demo_url: string | null;
  github_url: string | null;
  sort_order: number;
  is_active: boolean;
};

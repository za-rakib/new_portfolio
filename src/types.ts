export interface Project {
  id: string;
  name: string;
  icon: string;
  description: string;
  screenshots: string[];
  links: { label: string; url: string }[];
}
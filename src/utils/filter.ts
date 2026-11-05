import { Project, ProjectCategory } from '../types/portfolio';

export const ALL_CATEGORIES = 'All';

export function filterProjects(
  projects: Project[],
  selectedCategory: string,
  searchQuery = ''
): Project[] {
  let filtered = projects;

  if (selectedCategory && selectedCategory !== 'All') {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return filtered;
}

export function getCategoryCounts(projects: Project[]): Record<string, number> {
  const counts: Record<string, number> = {
    All: projects.length,
    Research: 0,
    'Software & Web Development': 0,
    'Game Development': 0,
    'Robotics & IoT': 0,
    'Digital Logic Design': 0,
  };

  for (const p of projects) {
    if (counts[p.category] !== undefined) {
      counts[p.category]++;
    }
  }

  return counts;
}

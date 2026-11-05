import { EducationItem, ExperienceItem, Project, SearchMatch, SkillCategory } from '../types/portfolio';

export interface SearchDataset {
  projects: Project[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
  skills: SkillCategory[];
  researchTopics: string[];
}

function extractSnippet(text: string, query: string, maxLength: number = 75): string {
  const qLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  const idx = textLower.indexOf(qLower);
  if (idx === -1) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
  const start = Math.max(0, idx - 20);
  const end = Math.min(text.length, idx + query.length + 45);
  let snippet = text.slice(start, end).trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  return snippet;
}

export function searchPortfolio(query: string, data: SearchDataset): SearchMatch[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchMatch[] = [];

  // Search Projects
  for (const proj of data.projects) {
    const titleMatch = proj.title.toLowerCase().includes(q);
    const subMatch = proj.subtitle.toLowerCase().includes(q);
    const descMatch = proj.description.toLowerCase().includes(q);
    const tagMatch = proj.tags.some((t) => t.toLowerCase().includes(q));

    if (titleMatch || subMatch || descMatch || tagMatch) {
      results.push({
        id: proj.id,
        title: proj.title,
        section: 'PROJECTS',
        category: proj.category,
        subtitle: proj.subtitle,
        tags: proj.tags,
        snippet: descMatch ? extractSnippet(proj.description, q) : undefined,
        targetElementId: proj.id,
        projectId: proj.id,
        projectCategory: proj.category,
      });
    }
  }

  // Search Experience
  for (const exp of data.experiences) {
    const roleMatch = exp.role.toLowerCase().includes(q);
    const compMatch = exp.company.toLowerCase().includes(q);
    const descMatch = exp.description.toLowerCase().includes(q);

    if (roleMatch || compMatch || descMatch) {
      results.push({
        id: exp.id,
        title: exp.role,
        section: 'EXPERIENCE',
        subtitle: exp.company,
        snippet: descMatch ? extractSnippet(exp.description, q) : undefined,
        targetElementId: exp.id,
      });
    }
  }

  // Search Education
  for (const edu of data.educations) {
    const degreeMatch = edu.degree.toLowerCase().includes(q);
    const instMatch = edu.institution.toLowerCase().includes(q);

    if (degreeMatch || instMatch) {
      results.push({
        id: edu.id,
        title: edu.degree,
        section: 'EDUCATION',
        subtitle: edu.institution,
        targetElementId: edu.id,
      });
    }
  }

  // Search Skills
  for (const skillCat of data.skills) {
    const matchedSkills = skillCat.skills.filter((s) => s.toLowerCase().includes(q));
    if (matchedSkills.length > 0 || skillCat.name.toLowerCase().includes(q)) {
      results.push({
        id: skillCat.id,
        title: skillCat.name,
        section: 'SKILLS',
        subtitle: matchedSkills.length > 0 ? matchedSkills.join(', ') : skillCat.skills.join(', '),
        targetElementId: 'section-skills',
      });
    }
  }

  // Search Research Topics
  if (data.researchTopics) {
    for (const topic of data.researchTopics) {
      if (topic.toLowerCase().includes(q)) {
        results.push({
          id: `research-${topic.slice(0, 15).replace(/\s+/g, '-').toLowerCase()}`,
          title: topic,
          section: 'RESEARCH',
          subtitle: 'Research Interest & Domain',
          targetElementId: 'section-research-interests',
        });
      }
    }
  }

  return results;
}

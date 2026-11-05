import test from 'node:test';
import assert from 'node:assert/strict';
import { searchPortfolio } from './search';
import { filterProjects, getCategoryCounts } from './filter';
import {
  projectsList,
  experienceList,
  educationList,
  skillCategories,
  researchInterestsData,
} from '../data/portfolioData';

test('searchPortfolio matches "pc" in projects (PCGenixAI) and experiences', () => {
  const results = searchPortfolio('pc', {
    projects: projectsList,
    experiences: experienceList,
    educations: educationList,
    skills: skillCategories,
    researchTopics: researchInterestsData.topics,
  });

  assert.ok(results.length > 0, 'Should return results for query "pc"');
  const pcgenix = results.find((r) => r.title.includes('PCGenixAI'));
  assert.ok(pcgenix, 'PCGenixAI should be matched for "pc"');
});

test('filterProjects handles category filtering', () => {
  const researchProjects = filterProjects(projectsList, 'Research');
  assert.equal(researchProjects.length, 2);

  const softwareProjects = filterProjects(projectsList, 'Software & Web Development');
  assert.equal(softwareProjects.length, 4);

  const roboticsProjects = filterProjects(projectsList, 'Robotics & IoT');
  assert.equal(roboticsProjects.length, 8);

  const allProjects = filterProjects(projectsList, 'All');
  assert.equal(allProjects.length, 20);
});

test('getCategoryCounts computes exact counts matching portfolio video', () => {
  const counts = getCategoryCounts(projectsList);
  assert.equal(counts['All'], 20);
  assert.equal(counts['Research'], 2);
  assert.equal(counts['Software & Web Development'], 4);
  assert.equal(counts['Game Development'], 2);
  assert.equal(counts['Robotics & IoT'], 8);
  assert.equal(counts['Digital Logic Design'], 4);
});

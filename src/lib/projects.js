/** Normalize a project title into a URL-safe slug. */
export function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Ensure every project has a stable slug (explicit or derived from title). */
export function withSlug(project = {}) {
  return {
    ...project,
    slug: project.slug || slugify(project.title),
  };
}

export function projectsWithSlugs(projects = []) {
  return projects.map(withSlug);
}

/** Page path for a project detail route (respects Astro base / pageBase). */
export function projectPageHref(project, pageBase = '/') {
  const { slug } = withSlug(project);
  if (!slug) return '';
  const base = pageBase.endsWith('/') ? pageBase : `${pageBase}/`;
  return `${base}projects/${slug}/`;
}

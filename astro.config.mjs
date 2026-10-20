import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository?.split('/') ?? [];
const isOrganizationSite = Boolean(owner && repo === `${owner}.github.io`);

export default defineConfig({
  output: 'static',
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: repo && !isOrganizationSite ? `/${repo}` : '/',
  trailingSlash: 'always',
});

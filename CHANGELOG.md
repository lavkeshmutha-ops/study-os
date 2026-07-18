# Changelog

## [Unreleased]

### Fixed
- Fixed all lint errors related to unescaped quotes, set-state-in-effect and explicit any types.

### Added
- Added Zod, Pino, eslint-plugin-boundaries, Husky, Commitlint, and lint-staged for engineering tooling.
- Configured ESLint to enforce feature-first boundaries.


- Created missing infrastructure: env.server.ts, env.client.ts, logger.ts, errors.ts, and auth/current-user.ts.


- Introduced feature-first architecture by migrating dashboard, subjects, and onboarding components into features/.


- Configured testing infrastructure with Vitest and Playwright.


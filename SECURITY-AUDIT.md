# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 5, "moderate": 14, "high": 45, "critical": 13, "total": 77}. After remediation: {"info": 0, "low": 0, "moderate": 5, "high": 11, "critical": 0, "total": 16}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "betterTogether",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `webpack-dev-server`: high; requires dependency migration. https://github.com/advisories/GHSA-4v9v-hfq4-rm2v https://github.com/advisories/GHSA-79cf-xcqc-c78w https://github.com/advisories/GHSA-9jgg-88mc-972h https://github.com/advisories/GHSA-f5vj-f2hx-8m93 https://github.com/advisories/GHSA-m28w-2pqf-7qgj https://github.com/advisories/GHSA-mx8g-39q3-5c79

Do not treat compatible lockfile updates as completion of the framework migrations above.

# AI Readiness Discovery Directory

This directory contains the machine-readable discovery protocols and metadata that make this site "Agent Ready" (RFC 8288, RFC 9727, RFC 9728, SEP-1649, and Agent Skills Discovery RFC v0.2.0).

## 🚀 Portability Guide
If you want to reuse this AI Readiness setup for other sites, follow these steps:

### 1. Copy the Skills Library
Copy the `.agent/skills/` directory from the root of this project to your new project.

### 2. Configure Discovery Metadata
1.  **Skills Index**: Copy `scripts/agent-readiness.sh`. Update the `BASE_URL` in the script to match the new site's domain and run it to generate a new `/.well-known/agent-skills/index.json`.
2.  **API Catalog**: Copy `public/.well-known/api-catalog` and update the `anchor` and `href` URLs.
3.  **MCP Card**: Copy `public/.well-known/mcp/server-card.json` and update the `endpoint` URL.

### 3. Implement Integration Logic
Two components require site-specific implementation:
- **WebMCP**: Add the `navigator.modelContext.registerTool` script to your new site's global layout/head.
- **Markdown Negotiation**: Add the `Accept: text/markdown` middleware logic (see `src/middleware.ts`) to your new site's server-side logic.

### 4. Verify
Run the audit script to confirm the new site passes:
```bash
python3 .agent/skills/ai-readiness-coordinator/scripts/audit_site.py https://new-site.com
```

---
*Maintained by the AI Readiness Coordinator.*

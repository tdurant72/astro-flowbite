#!/bin/bash

echo "🚀 Preparing AI Readiness skills for hosting..."

# 1. Create target directory
mkdir -p public/.well-known/agent-skills

# 2. Copy source skills from .agent/skills
# Using find to only copy directories
find .agent/skills -maxdepth 1 -type d -not -path ".agent/skills" -exec cp -r {} public/.well-known/agent-skills/ \;

# 3. Generate the index.json
# Usage: python3 generate_index.py <SKILLS_DIR> <BASE_URL>
python3 .agent/skills/agent-skills-discovery/scripts/generate_index.py ./public/.well-known/agent-skills https://sublimeux.com/.well-known/agent-skills

echo "✅ AI Readiness skills prepared."

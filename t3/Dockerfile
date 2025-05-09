FROM node:18-alpine

# Install additional tools (Git, curl, etc.)
RUN apk update && apk add --no-cache git curl

# Set a common working directory for your projects
WORKDIR /workspace

# This container is meant to be a generic dev environment.
# No project-specific package.json is copied here.
CMD ["sh"]

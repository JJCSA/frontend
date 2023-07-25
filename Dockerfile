ARG ARCH=

# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "BUILDER"
FROM ${ARCH}/node:14 as BUILDER

ARG npm_config_loglevel=error
ENV NPM_CONFIG_LOGLEVEL ${npm_config_loglevel}

ARG node_env=development
ENV NODE_ENV=${node_env}

ARG react_app_site_key=
ENV REACT_APP_SITE_KEY=${react_app_site_key}


# Set working directory
WORKDIR /app
# Copy package*.json from current directory to working directory in image
COPY package*.json /app/

# Install the NPM dependencies
# RUN npm install
RUN node --max-old-space-size=16384 `which npm` install

# Copy ALL files from current directory to working directory in image
COPY ./ /app/

RUN npm run build


# nginx state for serving content
FROM ${ARCH}/nginx:alpine as PRODUCTION
# FROM nginx:latest as PRODUCTION
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from BUILDER stage
COPY --from=BUILDER /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Running nginx in debug mode
# ENTRYPOINT ["nginx-debug", "-g", "daemon off;"]

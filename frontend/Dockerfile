# Stage 1: Build the React app
FROM node:20-alpine AS build_stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the static files from the build_stage to Nginx's html folder
# Note: Vite uses 'dist', Create React App uses 'build'
COPY --from=build_stage /app/dist /usr/share/nginx/html

#  Copy a custom nginx config if you have client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
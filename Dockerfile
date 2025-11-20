# --- build the frontend (Vite) ---
FROM node:20.11.1 AS frontend-builder
WORKDIR /app

# copy only root frontend files required for install/build
COPY package*.json ./
# If you have a root package-lock.json, copy it too
COPY package-lock.json ./
RUN npm ci

# copy the rest and build
COPY . .
RUN npm run build            # assumes vite outputs `dist/`

# --- final image: backend that serves the built frontend ---
FROM node:20.11.1
WORKDIR /usr/src/app

# copy backend package files and install only backend deps
COPY backend/package*.json ./backend/
WORKDIR /usr/src/app/backend
RUN npm ci --production

# copy backend source
COPY backend/ ./ 

# copy frontend dist into backend public (adjust if your backend expects a different folder)
# frontend-builder produced /app/dist
COPY --from=frontend-builder /app/dist ./public

# expose port used by your Express server (adjust if server listens elsewhere)
ENV PORT=3000
EXPOSE 3000

# tell app where Mongo runs (override at runtime)
ENV MONGO_URI=mongodb://mongo:27017/campusbuddy

# start server (adjust if your backend start file or script is different)
CMD ["node", "server.js"]

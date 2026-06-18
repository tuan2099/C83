# C83 Group Frontend

React app initialized with TanStack Start, Vite, Tailwind CSS v4, TypeScript,
shadcn/ui, and the Lovable TanStack Vite config package.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
npm run test
```

## Docker

Build and run locally:

```bash
docker compose up -d --build
curl http://127.0.0.1:3000/healthz
```

Without Compose:

```bash
docker build -t c83group-frontend:latest .
docker run -d --name c83group-frontend -p 3000:3000 --restart unless-stopped c83group-frontend:latest
```

On CentOS 7.9, run this app inside Docker rather than installing modern Node
directly on the host. The image uses Debian-based Node 20, so it is not limited
by CentOS 7's older system glibc.

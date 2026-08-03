FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000

RUN pnpm build

CMD ["pnpm", "start"]
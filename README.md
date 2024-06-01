# Users CRUD

## Stack
- Next
- Nest
- Postgres

## Backend Service URL
- https://tcpc-api-production.up.railway.app

## Endpoints
- `GET /users`: get all users
- `POST /users`: create user
- `GET /users/:id`: get user by id
- `PUT /users/:id`: update user
- `DELETE /users/:id`: delete user

## Run locally

### 1. Clone the project
```bash
git clone https://github.com/waldo2810/tcpc.git
```
### 2. Install deps
Front:
```bash
pnpm install
```
### 3. Run app
Front:
```bash
pnpm run dev
```
Back:
```bash
pnpm run start:dev
```

## Build docker image

### 1. docker compose
```bash
docker compose up --build
```

or

```bash
docker-compose up --build
```

### 2. Go to app
```bash
http://localhost:3000/
```

Made by Waldo Sobrino
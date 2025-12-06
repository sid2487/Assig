## A small backend application that fetches data from the GitHub REST API, caches it in memory, and exposes clean API endpoints for:

Listing repositories.
Filtering repositories.
Viewing a single repository by name.
Viewing GitHub user details.

## Features:
Uses a public REST API (GitHub API)
Stores fetched data using an in-memory cache
Includes proper error handling
Written in TypeScript using a production-style folder structure

## The application uses a simple in-memory cache stored in:
src/utils/cache.ts

## API Endpoints:

1) Get GitHub user info
   GET /api/user

2) List all repositories
   GET /api/repos

   Filter repos by programming language:
   GET /api/repos?language=ruby

3) Get detailed view of a single repository
   GET /api/repos/:name

## Error Handling
  Network failures
  Invalid API responses
  Global Error Handler

## Project Structure:

```txt
src/
├── controllers/
│   └── github.controller.ts
├── services/
│   └── github.ts
├── utils/
│   └── cache.ts
├── types/
│   ├── Repo.ts
│   └── User.ts
├── routes/
│   └── github.routes.ts
├── middleware/
│   └── errorHandler.ts
└── index.ts


```

## Setup & Run Instructions:
1) Clone the project
   git clone <repo-url>

2) npm install

3) run the server:
   npm run dev


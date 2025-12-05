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

src/
│
├── controllers/
│   └── github.controller.ts   # Handles incoming requests
│
├── services/
│   └── github.ts      # Fetches & caches GitHub API data
│
├── utils/
│   └── cache.ts               # In-memory cache
|
├── types/
│   └── Repo.ts                # types of repo response
|   └── User.ts                # types of user response
│
├── routes/
│   └── github.routes.ts       # API routes
│
├── middleware/
│   └── errorHandler.ts        # Centralized error handling
│
├── index.ts                   # Express app setup



## Setup & Run Instructions:
1) Clone the project
   git clone <repo-url>
   cd github-api-ts

2) npm install

3) run the server:
   npm run dev


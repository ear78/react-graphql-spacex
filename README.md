# React GraphQL SpaceX

A full-stack demo that uses Express and GraphQL to wrap the SpaceX REST API and expose launch and rocket data through a GraphQL endpoint. The front end is built with React, TypeScript, Vite, and Apollo Client to query that GraphQL API and display SpaceX mission data.

## Project Overview

- **Backend**: Express + `express-graphql` serves a GraphQL API at `/graphql`.
- **Data source**: Fetches SpaceX data from the public SpaceX REST API (`https://api.spacexdata.com/v3`).
- **Frontend**: React + TypeScript + Vite.
- **GraphQL client**: Apollo Client to query launches, single launch details, rockets, and rocket details.

## Key Features

- GraphQL schema wrapping SpaceX REST resources
- Queries for `launches`, `launch`, `rockets`, and `rocket`
- Apollo Client integration in a React UI
- Local dev server orchestration with `concurrently`

## Architecture

1. **Server**
   - `server.js` boots an Express app.
   - `schema.js` defines GraphQL object types and resolvers.
   - Resolvers use `axios` to call the SpaceX REST API and return data as GraphQL responses.
2. **Client**
   - React app lives in `client/`.
   - Uses Apollo Client to fetch data from the backend GraphQL endpoint.
   - Built with Vite for fast development.
3. **Optional deployment**
   - `netlify/functions/graphql.js` wraps the same GraphQL schema in a Netlify serverless function.

## Getting Started

### Install dependencies

```bash
npm install
npm install --prefix client
```

### Run locally

```bash
npm run dev
```

This starts both the backend and frontend together.

- Backend GraphQL server: `http://localhost:5001/graphql`
- Frontend app: typically `http://localhost:5173`

### Build the client

```bash
npm run build
```

This installs client dependencies and builds the React app for production.

## GraphQL API

The backend exposes the following GraphQL queries:

- `launches` — returns a list of SpaceX launches
- `launch(flight_number: Int)` — returns a single launch by flight number
- `rockets` — returns a list of rockets
- `rocket(rocket_id: String)` — returns a single rocket by ID

### Example query

```graphql
query GetLaunches {
  launches {
    flight_number
    mission_name
    launch_year
    launch_success
    rocket {
      rocket_name
      rocket_type
    }
    links {
      mission_patch
    }
  }
}
```

## Notes

- The project uses the SpaceX API v3 REST endpoints.
- The GraphQL layer is a thin adapter that maps REST responses into GraphQL object types.
- Apollo Client on the frontend handles data fetching and caching.

## Folder structure

- `server.js` — Express server entrypoint
- `schema.js` — GraphQL schema and resolver definitions
- `client/` — React + Apollo frontend
- `netlify/functions/graphql.js` — serverless GraphQL wrapper for Netlify

## License

This project is provided as-is."}
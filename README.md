# Simple CRUD App with React.js, Json-Server as Rest Api and ReactBootstrap

## Getting Started

- run `yarn` to install all the dependencies
- run `yarn backend` to start the json-server
- run `yarn dev` to start the react app

## Json Server

The backend is a simple json-server with a db.json file that contains the data.
It acts like a REST API and provides the data for the frontend.
The Json Server spins up on port 3333.
The `posts` endpoint is available and provides the following methods:
- GET /posts
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

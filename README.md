# Week 2 Node Express API

A simple Express.js API created for the Week 2 assignment.

## Features

- GET `/` → `My Week 2 API!`
- POST `/user` → accepts `name` and `email`, then responds with `Hello, [name]!`
- GET `/user/:id` → returns `User [id] profile`
- JSON body parsing
- 400 error handling for missing `name` or `email`
- `.env` support for `PORT`
- Static HTML page
- Custom request-logging middleware

## Run locally

1. Install Node.js.
2. Open this project folder in a terminal.
3. Run:

```bash
npm install
npm start
```

4. Open `http://localhost:3000`

## POST example

Send a POST request to `/user` with JSON:

```json
{
  "name": "Kennedy",
  "email": "kennedy@example.com"
}
```

Expected response:

```json
{
  "message": "Hello, Kennedy!"
}
```

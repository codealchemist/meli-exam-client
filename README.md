# meli-exam-client

Client app for MELI frontend engineering exam.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Live demo

https://meli-exam-client.herokuapp.com/

# Folder structure

- `src`
  - `api`: Requests to backend using `fetch`.
  - `components`: React components.
  - `pages`: React pages or main views that match 1 to 1 with set routes.

# Routes

- `/`: Mapped to `HomePage` component.
- `/items`: Mapped to `ResultsPage` component.
- `/items/:id`: Mapped to `DetailsPage` component.

# Development

Clone the client repo and instal dependencies:

```
git clone https://github.com/codealchemist/meli-exam-client
cd meli-exam-client
npm i
```

Clone the server repo, install dependencies and start it:

```
git clone https://github.com/codealchemist/meli-exam-server
cd meli-exam-server
npm i
npm start
```

Start the client with `npm start`.

# Testing

Run test on a single pass with `npm test`.

Run tests while developing with `npm run test:watch` to watch for file changes.

# Linting

Run the linter on the command line with `npm run lint`.

`.eslintrc` already extends `standard` so if your IDE supports integration with ESLINT you'll get linting there.

# About

The app is build with React, bootstraped with CRA.

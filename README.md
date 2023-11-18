# Basic-App-Structure

Image Background Remover

## Pre requisites

- Node 18.0^

## Install dependencies

```
npm install or npm i
```

## Before Starting Server

Step 1: Create environment configuration file:

The schema is define in /config/index.js

- For development, define required variables in development.json.
- For production, define required variables in production.json.
- For test, define required variables in test.json.

Step 2: define the NODE_ENV default is 'development':

export NODE_ENV=development ||export NODE_ENV=production || export NODE_ENV=test

## Start Server

```
npm start
```

Or

```
node server | bunyan #install bunyan globally for good formatting of logs
```

Or

```
npm run server (hot reloading)
```

## Tail Logs

```
npm run logs
```

## Stop app

```
npm run stop
```

## Lint

```
> npm run lint
> npm run prettier
```

## Create Migration

```
npm run db:migrate:create migration-name
```

## Run Migration

```
npm run db:migrate
```

## Undo Migration

```
npm run db:migrate:undo
```

## Contributing

- Every Database Table should have a corresponding Model file in `models` folder
- We use `Sequelize` as our ORM
- Use `npx sequelize` to cli for migrations
- The `controllers` and `routes` folder should exactly mimic each other. All routers in `routes` should have their corresponding `controllers` file/folder

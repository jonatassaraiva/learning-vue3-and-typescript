# Nuxt 3 Base Project
This project implements the use of some frameworks to build a web application using Nuxt 3 and TypeScript.

## Setup
Make sure to install the dependencies:
```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

Create the file .env with local development values variables:
```
NODE_ENV="development"
AWS_DEPLOYMENT_BUCKET="local"
```

## Development Server
Start the development server on http://localhost:3000
```bash
npm run dev
```

## Production SSR
Build the application for production with SSR:
```bash
npm run build
```

Locally preview production build:
```bash
npm run preview-ssr
```

Locally serverless lambda:
```bash
npm run preview-ssr-lambda
```

## Production SPA
Build the application for production with SPA:
```bash
npm run generate
```
Locally preview production build:
```bash
npm run preview-spa
```

## Bash to deploy on AWS Lambda
```
#!/bin/bash
# npm i
AWS_ACCESS_KEY_ID="<yout aws acccess id>" \
AWS_SECRET_ACCESS_KEY="<yout aws secret acccess key>" \
NODE_ENV="production" \
AWS_DEPLOYMENT_BUCKET="<same bucket to upload the output app>" \
npm run deploy
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

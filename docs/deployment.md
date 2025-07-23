# Deployment Process

## Frontend Deployment
1. Build the React application:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to a static hosting service (e.g., Vercel, Netlify).

## Backend Deployment
1. Ensure the `.env` file is configured with production variables.
2. Deploy the backend to a cloud platform (e.g., Render, Railway, Heroku).

## CI/CD Pipeline
- The pipeline is triggered on every push to the `main` branch.
- It includes steps for testing, building, and deploying the application.

## Monitoring
- Health check endpoint: `/health`
- Uptime monitoring endpoint: `/uptime`

## Rollback Procedure
1. Revert to the previous commit:
   ```bash
   git revert <commit-hash>
   ```
2. Push the changes to trigger the CI/CD pipeline.

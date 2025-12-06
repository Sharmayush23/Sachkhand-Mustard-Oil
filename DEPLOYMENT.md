# Deploying MEFA Needles Website

This guide will walk you through deploying your MEFA Needles website to **Render** for free.
Since this application uses a NodeJS server (for API and serving the frontend), Render is an excellent choice.

## Prerequisites

- A [GitHub](https://github.com/) account.
- A [Render](https://render.com/) account (you can sign up with GitHub).
- Your code pushed to a GitHub repository.

## Step 1: Push Code to GitHub

If you haven't already, push your current code to a GitHub repository.

## Step 2: Create a Web Service on Render

1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click the **"New +"** button and select **"Web Service"**.
3. Choose **"Build and deploy from a Git repository"** and click **"Next"**.
4. Connect your GitHub account if you haven't already, and select your repository (`mefa-needle-project`).
5. Configure the service with the following settings:

| Setting | Value |
| :--- | :--- |
| **Name** | `mefa-needles` (or any name you like) |
| **Region** | Choose the one closest to you (e.g., Singapore, Ohio) |
| **Branch** | `main` (or `master`, whichever is your default) |
| **Root Directory** | Leave empty (defaults to root) |
| **Runtime** | **Node** |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Instance Type** | **Free** |

## Step 3: Configure Environment Variables

1. Scroll down to the **"Environment Variables"** section.
2. Add the following variable:

| Key | Value |
| :--- | :--- |
| `NODE_VERSION` | `20.16.11` (Optional, but good practice to match local) |

> [!NOTE]
> Since we are using "In-Memory" storage for this demo, you do not need to set up a `DATABASE_URL`.
> If you decide to add a real database later, you will need to create a PostgreSQL database on Render and add the `DATABASE_URL` environment variable here.

## Step 4: Deploy

1. Click **"Create Web Service"**.
2. Render will start building your application. You can watch the logs in the dashboard.
3. Once the build finishes, you will see a green "Live" badge.
4. Click the URL provided by Render (e.g., `https://mefa-needles.onrender.com`) to visit your live site!

## Troubleshooting

- **Build Failed**: Check the "Logs" tab. Common issues are missing dependencies or type errors. Run `npm run build` locally to see if it passes.
- **Application Error**: If the site loads but shows an error, check the "Logs". Ensure the Start Command is `npm start`.

---

# Alternative: Deploying on Vercel

If you prefer Vercel, the project is now configured for it.

## Step 1: Install Vercel CLI (Optional)

You can deploy directly via the website or using the CLI.
`npm install -g vercel`

## Step 2: Deploy

1. Login to [Vercel](https://vercel.com).
2. Click **"Add New..."** -> **"Project"**.
3. Import your Git Repository.
4. **Build Output Settings**:
    - **Framework Preset**: Vite
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist/public`
5. Click **"Deploy"**.

**Note**: Since we added `api/index.ts` and `vercel.json`, Vercel will automatically handle the server-side API requests as Serverless Functions.


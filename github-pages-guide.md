# Deploying Your Portfolio to GitHub Pages

This guide will walk you through the steps to deploy your portfolio to GitHub Pages.

## Why GitHub Pages?

GitHub Pages is a free hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub, and deploys and hosts them as a website. It's perfect for:

- Personal portfolios
- Project documentation
- Simple websites

## Prerequisites

1. You need a GitHub account
2. Basic understanding of Git commands

## Step 1: Prepare Your Repository

1. Create a new repository named `yourusername.github.io` (replace "yourusername" with your actual GitHub username)
2. Make it public
3. Don't initialize it with any files

## Step 2: Build Your Portfolio for Static Hosting

1. In your Replit project, run the deployment script:

```bash
bash deploy-to-github-pages.sh
```

This script creates a `gh-pages-build` folder with a static version of your portfolio that works without a backend server.

## Step 3: Push to GitHub Pages Repository

1. Navigate to the build folder:

```bash
cd gh-pages-build
```

2. Initialize a new Git repository:

```bash
git init
```

3. Add all files to be committed:

```bash
git add .
```

4. Commit the changes:

```bash
git commit -m "Initial portfolio deployment"
```

5. Add your GitHub Pages repository as a remote:

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
```

6. Push to GitHub:

```bash
git branch -M main
git push -u origin main
```

## Step 4: Verify Deployment

1. Wait a few minutes for GitHub to build your site
2. Visit `https://yourusername.github.io` to see your portfolio online

## Making Updates

Whenever you want to update your portfolio:

1. Make your changes in the Replit project
2. Run the deployment script again
3. Push the changes to GitHub

```bash
bash deploy-to-github-pages.sh
cd gh-pages-build
git add .
git commit -m "Update portfolio"
git push
```

## Customizing Your Domain (Optional)

If you have your own domain name, you can set it up with GitHub Pages:

1. In your GitHub repository, go to Settings > Pages
2. Under "Custom domain," enter your domain name
3. Save the changes
4. Update your domain's DNS settings with your domain registrar

## Troubleshooting

- If your site isn't working, check the GitHub Pages section in your repository settings
- Make sure your repository is public
- If images or links are broken, check that the paths are correct (they should be relative paths)

## Important Notes

- GitHub Pages sites are public even if the repository is private
- There's a 1GB limit for GitHub Pages sites
- GitHub Pages sites have a soft bandwidth limit of 100GB per month
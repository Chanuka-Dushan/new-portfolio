# GitHub Pages Deployment Steps

Follow these steps to deploy your portfolio website to GitHub Pages:

## 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository: `yourusername.github.io` (replace "yourusername" with your actual GitHub username)
4. Make sure the repository is set to "Public"
5. Click "Create repository"

## 2. Build Your Portfolio for GitHub Pages

1. Make sure all your changes are saved
2. In your Replit terminal, run the deployment script:

```bash
chmod +x deploy-to-github-pages.sh
./deploy-to-github-pages.sh
```

3. This will create a `gh-pages-build` directory with your static website files

## 3. Push to GitHub

1. Initialize a Git repository in the build directory:

```bash
cd gh-pages-build
git init
```

2. Add all files to the repository:

```bash
git add .
```

3. Commit the files:

```bash
git commit -m "Initial portfolio deployment"
```

4. Connect to your GitHub repository:

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
```

5. Push to GitHub:

```bash
git branch -M main
git push -u origin main
```

## 4. View Your Website

1. Wait a few minutes for GitHub Pages to deploy your site
2. Visit `https://yourusername.github.io` to see your portfolio online!

## Making Updates Later

To update your website in the future:

1. Make your changes in the Replit project
2. Run the deployment script again
3. Push the changes to GitHub:

```bash
cd gh-pages-build
git add .
git commit -m "Update portfolio"
git push
```

Your website will be automatically updated within a few minutes.
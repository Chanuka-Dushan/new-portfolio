#!/bin/bash

# Script to deploy the portfolio to GitHub Pages
echo "Starting GitHub Pages deployment process..."

# Create a build directory
mkdir -p gh-pages-build

# Copy static files that don't need processing
cp client/index.html gh-pages-build/ 2>/dev/null || :
mkdir -p gh-pages-build/public
cp -r client/public/* gh-pages-build/public/ 2>/dev/null || :

# Temporarily replace main.tsx with static version
echo "Creating temporary static main file..."
if [ -f client/src/main.tsx.bak ]; then
  rm client/src/main.tsx.bak
fi
cp client/src/main.tsx client/src/main.tsx.bak
cp client/src/main-static.tsx client/src/main.tsx

# Build the app with Vite
echo "Building the portfolio for GitHub Pages..."
cd client
npx vite build --config vite.config.github.js
cd ..

# Restore original main.tsx
mv client/src/main.tsx.bak client/src/main.tsx

# Move the built files to the gh-pages-build directory
cp -r client/dist/* gh-pages-build/

# Add a .nojekyll file to bypass Jekyll processing on GitHub Pages
touch gh-pages-build/.nojekyll

# Create a basic 404.html that redirects to index.html
cat > gh-pages-build/404.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // Redirect to the main page while preserving the URL
    window.location.href = window.location.origin + 
      window.location.pathname.split('/').slice(0, -1).join('/') + 
      '/index.html' + 
      window.location.search;
  </script>
</head>
<body>
  <p>Redirecting to homepage...</p>
</body>
</html>
EOF

# Create a helpful README for GitHub Pages
cat > gh-pages-build/README.md << 'EOF'
# Portfolio - Chanuka Dushan

This portfolio website showcases my skills as a Software Engineer and Mobile Application Developer.

## Features
- Modern, animated UI with Framer Motion
- Dark theme with custom styling
- Projects showcase
- Skills and technologies overview
- GitHub statistics
- Contact form

Visit my [GitHub Profile](https://github.com/Chanuka-Dushan) to see more of my work.
EOF

echo "Build complete! Files are in the gh-pages-build directory."
echo ""
echo "To deploy to GitHub Pages:"
echo "-----------------------------------------------------"
echo "1. Create a new repository named yourusername.github.io"
echo "2. Initialize git in the gh-pages-build directory:"
echo "   cd gh-pages-build"
echo "   git init"
echo "   git add ."
echo "   git commit -m \"Initial portfolio deployment\""
echo ""
echo "3. Add your GitHub repository as remote and push:"
echo "   git remote add origin https://github.com/yourusername/yourusername.github.io.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Your portfolio will be available at: https://yourusername.github.io"
echo "-----------------------------------------------------"
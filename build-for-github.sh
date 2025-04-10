#!/bin/bash

# Create a directory for GitHub Pages
mkdir -p github-pages

# Build the client-side app
cd client
npm run build

# Copy the built files to the GitHub Pages directory
cp -r dist/* ../github-pages/

# Create a basic .nojekyll file to tell GitHub not to use Jekyll
touch ../github-pages/.nojekyll

# Create a basic README for the GitHub Pages repo
cat > ../github-pages/README.md << 'EOF'
# Portfolio Website

This is my personal portfolio website showcasing my skills and projects in software development and mobile app development.

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- And many more!

Visit the live site at [https://yourusername.github.io](https://yourusername.github.io)
EOF

echo "Build completed! The files for GitHub Pages are in the 'github-pages' directory."
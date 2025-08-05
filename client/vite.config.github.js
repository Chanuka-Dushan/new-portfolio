import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This is a simplified config just for GitHub Pages static deployment
export default defineConfig({
  plugins: [react()],
  base: "/new-portfolio/", // Use relative paths for GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "..", "shared"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
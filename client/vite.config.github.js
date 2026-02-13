import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import path from "path";
import fs from "fs";

export default async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    // ✅ Custom plugin to copy index.html to 404.html
    {
      name: "copy-index-to-404",
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const indexHtml = path.join(distDir, "index.html");
        const fallbackHtml = path.join(distDir, "404.html");

        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, fallbackHtml);
          console.log("✅ 404.html fallback copied");
        }
      }
    }
  ];

  // Optional Replit plugin
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return defineConfig({
    plugins,
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "..", "shared"),
        "@assets": path.resolve(__dirname, "..", "attached_assets"),
      },
    },
    root: __dirname,
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    }
  });
};

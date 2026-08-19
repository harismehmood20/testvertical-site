import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync } from "node:fs";

export default defineConfig(({ mode }) => ({
  // GitHub Pages serves this project from /testvertical-site-updated_v3_added/
  // Normal builds (including Netlify) serve from the domain root.
  base: mode === "github" ? "/testvertical-site-updated_v3_added/" : "/",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    {
      name: "github-pages-404",
      closeBundle() {
        if (mode === "github") {
          copyFileSync("dist/index.html", "dist/404.html");
        }
      },
    },
  ],
  build: {
    outDir: "dist",
  },
}));

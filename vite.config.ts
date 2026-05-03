import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const isGitHub = process.env.GITHUB_PAGES === "true" || process.env.GITHUB_REPOSITORY !== undefined;
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "mernportfolio";
const base = isGitHub ? `/${repoName}/` : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

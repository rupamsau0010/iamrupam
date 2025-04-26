import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  },
  async closeBundle() {
    // Write an empty .nojekyll file to the dist folder after build
    const fs = await import('fs');
    const { resolve } = await import('path');
    fs.writeFileSync(resolve(__dirname, 'dist/.nojekyll'), '');
  }
}));

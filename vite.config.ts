



import { componentTagger } from "lovable-tagger";
import { defineConfig } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  server: {
    host: "::",
    port: 8080,
    https: {
      key: fs.readFileSync("./ssl/key.pem"),
      cert: fs.readFileSync("./ssl/cert.pem"),
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

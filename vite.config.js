import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
  server: {
    host: true,
    open: true,
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/signup": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/login": {
        target: "http://localhost:5000",
        changeOrigin: true,
      }
    }
  }
});

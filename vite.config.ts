import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      cssMinify: false,
    },
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});

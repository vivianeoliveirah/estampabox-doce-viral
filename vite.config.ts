import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      cssMinify: false,
    },
  },

  nitro: {
    hooks: {
      "build:before": (nitro) => {
        for (const asset of nitro.options.serverAssets) {
          if (asset.baseName === "server") {
            asset.ignore = [
              ...(asset.ignore ?? []),
              "styles.css",
            ];
          }
        }
      },
    },
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});

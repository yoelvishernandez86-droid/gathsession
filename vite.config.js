import { defineConfig } from "vite";

export default defineConfig({
  base: "/gathsession/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});

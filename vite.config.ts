import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@layout": resolve(__dirname, "./src/components/layout"),
      "@ui": resolve(__dirname, "./src/components/ui"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@forms": resolve(__dirname, "./src/components/forms"),
      "@components": resolve(__dirname, "./src/components"),
      "@enums": resolve(__dirname, "./src/enums"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@constants": resolve(__dirname, "./src/constants"),
    },
  },
});

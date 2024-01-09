import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
});

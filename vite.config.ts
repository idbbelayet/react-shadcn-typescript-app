import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
//import fs from "fs";

import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   port: 44303,
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, "key.pem")),
  //     cert: fs.readFileSync(path.resolve(__dirname, "cert.pem")),
  //   },
  //   strictPort: true,
  // },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

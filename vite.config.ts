import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cartographer as themePlugin } from "@replit/vite-plugin-cartographer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react(), themePlugin()],
    resolve: {
        alias: {
            "@shared": path.resolve(__dirname, "shared"),
            "@client": path.resolve(__dirname, "client/src"),
            "@": path.resolve(__dirname, "client/src"),
        },
    },
    root: path.resolve(__dirname, "client"),
    build: {
        outDir: path.resolve(__dirname, "dist/public"),
        emptyOutDir: true,
    },
});

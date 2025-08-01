import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    base: '/widgets/',
    publicDir: 'public',
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/main.tsx"),
                bookDisplayWidget: path.resolve(__dirname, "src/book-display/book-display-widget.tsx"),
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: 'assets/[name][extname]'
            },
        },
    },
})

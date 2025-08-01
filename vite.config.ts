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
                bookDisplayWidget: path.resolve(__dirname, 'src/book-display/book-display-widget.tsx'),
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].css',
                chunkFileNames: '[name].js', // Optional: makes shared chunks readable
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
    },
})

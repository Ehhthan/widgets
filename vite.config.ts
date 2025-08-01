import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

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
            output: {
                entryFileNames: `index.js`,
                chunkFileNames: `chunk.js`,
                assetFileNames: `style.css`,
            },
        },
    },
})

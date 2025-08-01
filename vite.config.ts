import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/widgets/',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        target: 'es2015', // for MediaWiki compatibility
        rollupOptions: {
            input: {
                bookDisplayWidget: path.resolve(__dirname, 'src/book-display/book-display-widget.tsx'),
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name][extname]',
                chunkFileNames: '[name].js',
            },
            external: [], // 🚫 Don't externalize React
        },
        commonjsOptions: {
            include: [/node_modules/],
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
})

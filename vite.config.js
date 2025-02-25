import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
    ],
    base: {mgitoqabuskanz.github.io},
    server: {
        port: 3000,
    },
    build: {
        outDir: 'build',
    },
    resolve: {
        alias: {
            'react-pdf': 'react-pdf/dist/esm/entry.webpack',
        },
    },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/typing-cn/' : '',
    define: { __APP_VERSION__: JSON.stringify(pkg.version) },
    plugins: [
        react(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        visualizer({ open: true, brotliSize: true, filename: 'report.html' }),
    ],
    resolve: { alias: { '@': '/src' } },
    build: { target: 'es2015' },
}));

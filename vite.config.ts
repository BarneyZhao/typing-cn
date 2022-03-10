import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/typing-cn/' : '',
    define: { __APP_VERSION__: JSON.stringify(pkg.version) },
    plugins: [react()],
    resolve: { alias: { '@': '/src' } },
}));

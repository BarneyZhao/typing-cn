import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/typing-cn/' : '',
    plugins: [react()],
    resolve: { alias: { '@': '/src' } },
}));

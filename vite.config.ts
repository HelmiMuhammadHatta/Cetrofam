import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isStatic = process.env.BUILD_TARGET === 'static';

export default defineConfig(({ isSsrBuild }) => ({
  resolve: { tsconfigPaths: true },
  plugins: [
    isStatic ? {
      name: 'fix-ssr-input',
      enforce: 'pre',
      config(config) {
        if (isSsrBuild && config.build?.rollupOptions?.input) {
          // Remove html input for SSR to prevent Rolldown error
          delete config.build.rollupOptions.input;
        }
      }
    } : undefined,
    devtools(),
    nitro(
      isStatic ? { 
        preset: 'static',
        prerender: { crawlLinks: true, routes: ['/'] },
      } : {
        preset: 'vercel',
      }
    ),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ].filter(Boolean),
}))

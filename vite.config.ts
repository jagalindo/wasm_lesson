// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/wasm_lesson/' : '/',
}))


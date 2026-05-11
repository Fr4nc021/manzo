import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite 7: flag `vite --host` alone may not bind to LAN; true listens on all interfaces.
  server: { host: true },
  preview: { host: true },
})

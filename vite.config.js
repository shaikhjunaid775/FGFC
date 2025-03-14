import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
  plugins: [react(),tailwindcss(),],
  content: "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
})

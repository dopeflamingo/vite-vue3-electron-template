import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

export default ({ command, mode }) => {
  if (command === 'build') {
    return {
      // base: path.resolve(__dirname, "dist/"),
      base: './',
      plugins: [vue()],
      build: {
        outDir: path.join(__dirname, 'dist'),
        emptyOutDir: true,
        minify: false,
        commonjsOptions: {},
        assetsDir: '', 
        sourcemap: true,
      },

    }
  } else {
      return {
        plugins: [vue()],
      }
  }
}
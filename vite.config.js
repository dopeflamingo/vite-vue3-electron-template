import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

export default ({ command, mode }) => {
  if (command === 'build') {
    return {
      base: path.resolve(__dirname, "./dist/"),
      plugins: [vue()],

    }
  } else {
      return {
        plugins: [vue()],
      }
  }
}
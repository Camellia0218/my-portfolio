import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 1. 显式设置基础路径，确保 Vercel 上的资源引用为绝对路径
  base: "/",

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // 2. 明确输出目录为 dist，与 Vercel 的默认设置保持一致
    outDir: "dist",
    // 3. 针对你大量的图片资源，可以调大 chunk 大小限制，避免构建警告
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // 分块策略：将第三方库单独打包，缩短单个文件体积
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
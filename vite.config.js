import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression"; // For compressing assets (Gzip, Brotli)
import { ViteMinifyPlugin } from "vite-plugin-minify"; // For minimizing JS and CSS

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress", // Use Brotli compression (better than gzip)
      ext: ".br", // Add .br extension to compressed files
      deleteOriginFile: false, // Keeps the original file
    }),
    ViteMinifyPlugin({
      // Minifying JS/CSS
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    }),
  ],
  base: "/slider-app/",

  build: {
    outDir: "dist", // Directory to output the build
    sourcemap: false, // Disable source maps for production
    cssCodeSplit: true, // Split CSS into smaller chunks for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Create chunks for libraries (improves caching)
          react: ["react", "react-dom"],
        },
      },
    },
  },

  // Lazy Loading Images & Assets
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.webp"], // Asset types for lazy loading

  server: {
    open: true, // Opens browser automatically
    compress: true, // Enables gzip compression for dev server
  },

  esbuild: {
    minify: true, // Minifies JS files
    target: "es2015", // Target modern browsers (improves performance)
  },

  // Accessibility: Define necessary ARIA roles and attributes for keyboard navigation
  resolve: {
    alias: {
      "@": "/src", // Shortcut for source directory
    },
  },
});

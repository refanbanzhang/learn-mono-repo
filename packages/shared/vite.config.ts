import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  plugins: [
    {
      name: 'vite-plugin-image-resolver',
      resolveId(source) {
        if (source.endsWith('.png') || source.endsWith('.svg') || source.endsWith('.jpg')) { // 支持jpg格式
          return source;
        }
      },
      load(id) {
        if (id.endsWith('.png') || id.endsWith('.svg') || id.endsWith('.jpg')) { // 支持jpg格式
          return `export default ${JSON.stringify(id)}`;
        }
      },
    },
  ],
});
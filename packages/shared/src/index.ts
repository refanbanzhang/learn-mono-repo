// 导出图片
export { default as logo } from './assets/images/1.jpg';
// 添加更多图片导出...

// 导出所有图片
const images = import.meta.glob('./assets/images/*.{jpg,png,svg}', { eager: true }) as Record<string, { default: string }>;
export const imageExports = Object.fromEntries(
  Object.entries(images).map(([key, { default: value }]) => [key.split('/').pop()?.split('.')[0], value])
);
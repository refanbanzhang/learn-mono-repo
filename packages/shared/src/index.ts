import img from './assets/images/1.jpg';

// 导出 img
export { img };

// // 导出所有图片
// const images = import.meta.glob('./assets/images/*.{jpg,png,svg}', { eager: true }) as Record<string, { default: string }>;
// export const imageExports = Object.fromEntries(
//   Object.entries(images).map(([key, { default: value }]) => [key.split('/').pop()?.split('.')[0], value])
// );

export const SECRET_KEY = '123456'

export const add = (a: number, b: number) => {
  return a + b
}


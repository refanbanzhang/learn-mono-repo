import img from './assets/images/1.jpg';
import icon from './assets/images/hourglass.svg'
import { fetchBookmarks } from './api';
import { Bookmark } from './types';

const SECRET_KEY = '123456'

const add = (a: number, b: number) => a + b

export {
  img,
  icon,
  SECRET_KEY,
  add,
  fetchBookmarks,
}

export type { Bookmark }
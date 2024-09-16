import bookmarks from './bookmarks.json';
import { Bookmark } from '../types';

export const fetchBookmarks = (): Promise<Bookmark[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bookmarks);
    }, 500);
  });
};

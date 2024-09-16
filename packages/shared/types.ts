export interface Bookmark {
  dateAdded: number;
  id: string;
  index: number;
  parentId: string;
  title: string;
  url?: string;
  dateLastUsed?: number;
  children?: Bookmark[];
  dateGroupModified?: number;
}
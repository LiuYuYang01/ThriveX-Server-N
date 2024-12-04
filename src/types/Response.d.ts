interface Paging {
  page: number;
  size: number;
}

interface PagingData<T> {
  next: boolean;
  result: T[];
  total: number;
  pages: number;
  size: number;
  prev: boolean;
  page: number;
}
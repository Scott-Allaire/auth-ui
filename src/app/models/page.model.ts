export interface Page<T> {
  totalItems: number,
  totalPages: number,
  pageSize: number,
  pageNumber: number,
  content: Array<T>
}

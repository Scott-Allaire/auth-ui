export interface Page<T> {
  total: number,
  pageSize: number,
  pageNumber: number,
  values: Array<T>
}

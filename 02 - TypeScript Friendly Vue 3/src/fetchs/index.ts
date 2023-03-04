interface FetchCountCallback {
  (count: number): void
}

export function fetchCount(cb: FetchCountCallback) {
  cb(0)
}
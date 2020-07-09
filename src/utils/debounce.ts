export const debounce = (fn: (...params: any) => void, timeout: number) => {
  let id: number;

  return (...params: any) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => fn(...params), timeout);
  }
}

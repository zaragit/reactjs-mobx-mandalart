export function insertAtIndex<T = any>(array: Array<T>, index: number, obj: T) {
  array.splice(index, 0, obj);
  return array;
}

export function getEmptyArray(length: number) {
  return Array.from({ length });
}

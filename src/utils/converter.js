export function toArray(props) {
  return Object.entries(props).reduce((arr, [key, val]) => {
    arr.push(key);
    arr.push(val);

    return arr;
  }, []);
}

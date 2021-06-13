const first = (arr, n = 1) => {
  if (n === 1) return arr[0];
  const res = [];
  if (!arr.length) return res;
  for (let i = 0; i < n && i < arr.length; i++) res.push(arr[i]);
  return res;
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

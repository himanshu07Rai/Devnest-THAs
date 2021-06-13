const clone = (arr) => {
  const res = arr.slice(0);
  return res;
};
console.log(clone([1, 2, 4, 0]));
console.log(clone([1, 2, [4, 0]]));

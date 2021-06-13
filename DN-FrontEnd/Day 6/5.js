const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let f = 0;
let maxF = 1;
let res = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] === arr[j]) f++;
    if (f > maxF) {
      maxF = f;
      res = arr[i];
    }
  }
  f = 0;
}

console.log(res + " ( " + maxF + " times ) ");

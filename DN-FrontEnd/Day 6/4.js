const joinArr = (arr) => {
  let i = 1;
  while (i--) {
    console.log(arr.join(","));
    console.log(arr.join(","));
    console.log(arr.join("+"));
  }
};

joinArr(["Red", "Green", "White", "Black"]);

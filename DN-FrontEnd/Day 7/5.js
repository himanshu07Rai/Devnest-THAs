const cylinder = {
  rad: 0,
  height: 0,
  volume() {
    return ((22 / 7) * this.rad * this.rad * this.height).toFixed(4);
  },
};

cylinder.rad = 5;
cylinder.height = 25;

console.log(cylinder.volume());

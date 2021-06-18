window.onload = function () {
  const container = document.getElementById("frame");

  const makeRows = (rows, cols) => {
    for (c = 0; c < rows * cols; c++) {
      let cell = document.createElement("div");
      cell.id = `${c}`;
      container.appendChild(cell).className = "grid-item";
    }
  };
  makeRows(20, 20);
  const markActives = () => {
    const actives = [
      130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190,
      191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250,
      251, 253, 267, 269, 272, 274,
    ];
    for (let id of actives) {
      const active = document.getElementById(`${id - 1}`);
      active.classList.add("selected");
    }
  };

  markActives();

  container.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
  });
};

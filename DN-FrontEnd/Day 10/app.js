const items = document.getElementsByClassName("item");

const randomIds = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f"];
let moves = 0,
  solved = 0;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(randomIds);

let selected = [];
console.log([...items]);
console.log(randomIds);

let i = 0;
[...items].forEach((item) => {
  item.id = randomIds[i];
  i += 1;
  item.addEventListener("click", () => {
    console.log(selected);
    moves += 1;
    item.classList.toggle(`${item.id}`);
    if (selected.length === 0) selected.push(item);
    else if (item.id === selected[0].id && item !== selected[0]) {
      item.classList.add("solved");
      selected[0].classList.add("solved");
      selected = [];
      solved += 1;
    } else {
      setTimeout(() => {
        item.classList.toggle(`${item.id}`);
        selected[0].classList.toggle(`${selected[0].id}`);
        selected = [];
      }, 500);
    }
    if (solved === 6) {
      window.alert(`Moves taken : ${moves}`);
      setTimeout("location.reload(true);", 500);
    }
  });
});

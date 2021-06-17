console.log(library2);
var library2 = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

console.log(library2);

library2.sort((a, b) =>
  a.libraryID > b.libraryID ? 1 : b.libraryID > a.libraryID ? -1 : 0
);

console.log(library2);

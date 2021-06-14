const student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log("Before Deleting : ");
for (let item in student) {
  console.log(item, "--", student[item]);
}

delete student.rollno;

console.log("After Deleting : ");
for (let item in student) {
  console.log(item, "--", student[item]);
}

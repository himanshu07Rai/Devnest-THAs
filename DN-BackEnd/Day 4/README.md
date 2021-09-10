```

let fs = require("fs")

fs.mkdirSync("new");

fs.writeFileSync("new/hello.txt","Hello",(err)=>{
    if(err){
        console.log(err);
    }
});

fs.appendFileSync("new/hello.txt"," appended");

> fs.readFileSync("new/hello.txt");

<Buffer 48 65 6c 6c 6f 20 61 70 70 65 6e 64 65 64>

> fs.readFileSync("new/hello.txt","utf-8");

'Hello appended'

var data= fs.readFileSync("new/hello.txt","utf-8");

console.log(data);

fs.renameSync("new/hello.txt","new/hello2.txt");

fs.unlinkSync("new/hello2.txt");

fs.rmdirSync("new");

```

```

PS C:\Users\ACER\Desktop\js> node app.js one two three four five
Inside require_test.js
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ACER\\Desktop\\js\\app.js',
  'one',
  'two',
  'three',
  'four',
  'five'
]

```

const fs = require('fs');
//fs.readFile('./poem.txt', 'utf8', (err, data) => {
//    if (err) {
//        return console.log(err);
//    } 
//    console.log(data);
//    }
//});

//
////writing to a document we are creating
////err is first in node, this is great for debugging
//fs.writeFile('./spicy.txt', '🔥🔥🔥 Hot Fire 🔥🔥🔥', (err) => {
//    if (err){
//        return console.log(err);
//    }
//    return console.log('File successfully created!');
//});
//
////could be useful for lowercasing instance names

//const fileName = process.argv[2];
//
//fs.writeFile(`./${fileName}`, 'Hello!', (err) => {
//    if (err) {
//        return console.log(err);
//    }
//    console.log(`${fileName} was created!`);
//});
//

//node filereader.js poem.txt newPoem.txt
const oldfile  process.argv[2];//poem.txt
const newfile = process.argv

let oldFileContents = fs.createReadStream(oldfile);
oldFileContents.pipe(fs.createWriteStream(newFile));


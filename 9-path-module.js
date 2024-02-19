const { Console } = require('console');
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const directory = path.dirname(filePath);
console.log(directory);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);

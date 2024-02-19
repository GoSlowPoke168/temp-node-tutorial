const { readFileSync, writeFileSync } = require('fs');
//  const fs = require('fs')
//  fs.readFileSync()
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {
    flag: 'a',
});

// { flag: 'a' } Allows you to append text to the file, otherwise it will by default, override the file data
console.log('done with this task');
console.log('starting the next one');

// Sync reads code line by line, reads file first, then writes
//  If the file is super big, it will make the program unusable for other users

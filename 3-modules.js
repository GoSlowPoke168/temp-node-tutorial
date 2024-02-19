// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade'); // When requiring the function, it will automatically invoke the code
console.log(names);
console.log(data);

sayHi('jeremy');
sayHi(names.john);
sayHi(names.peter);

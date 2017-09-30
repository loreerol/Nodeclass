//1. import randomizer module so that we can use it in this file
const randomizer = require('./random.js');
//2. get a random day of the week and store it in a variable
const randomDay = randomizer.getRandomDay();
//3. log that random day variable to the console
console.log(randomDay);
//4. get a random month of the year and store it in a variable
const randomMonth = randomizer.getRandomMonth();
//5. log that random month to the console
console.log(randomMonth);


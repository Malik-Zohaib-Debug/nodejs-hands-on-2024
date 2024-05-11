// when we use commonJS then we usually import like this and their is no need to
// add file extension at the end of import
// const  {generateRandomNumber, celsiusToFahrenheit}  = require('./utils/index');

// when we export in ES module we use import statement and also give extension to 
// file

// If you wanted to use commonJS change the type from package.json to commonJS

import getPosts, { getPostsLength } from "./controller/postController.js";

// console.log("Random Number: ", generateRandomNumber());
// console.log("Celsius to Fahrenheit: ", celsiusToFahrenheit(0));

console.log("All Posts -> ", getPosts());

console.log("All Posts Length -> ", getPostsLength());


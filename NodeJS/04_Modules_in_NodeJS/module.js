/**
 * Split your code into different files and folders.
 * All maths related function will be written in math.js
 * 
 * To use the math.js file in other file
 * --------------------------------------
 * use require -> const name = require('filename')
 * 
 */

// How to import a module in NodeJS? - CommonJS (default): and ES Modules (modern):
// Nodejs uses the CommonJS, Module standard implementation in its module ecosystem in pakage.json - type. 

// What is package.json in NodeJS?
// package.json in NodeJS is a metadata file that contains project-specific information such as dependencies, scripts, version, 
// author details, and other configuration settings required for managing and building the project.

// Node.js modules are reusable blocks of code that help organize an application into manageable parts
// Types of Modules:  In Nodejs, there is 3 type of modules namely

// Core Modules (Built-in Modules)- fs, os, path, http, https, events, etc
// Local Modules (User-defined Modules) - folder, files, project setup, etc
// Third-Party Modules (External Modules) - npm, yarn: express etc.

const buffer = require('buffer') // built in package

const math = require('./math')

//De-structuring -> we can directlly use add and sub function
const {add , sub  } = require('./math')

console.log("Math Add value is : ",math.add(2 , 4));
console.log("Math Subtract value is : ",math.sub(2 , 4));

console.log("\nUsing destructured function \n")

console.log("Math Add value is : ",add(2 , 4));
console.log("Math Subtract value is : ",sub(2 , 4));


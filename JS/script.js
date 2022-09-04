// charAt

const string = "Hello World!";
let index1 = string.charAt(6);
console.log("Character at index 6 is " + index1);



// charCodeAt

const greeting = "Good morning!";
let result = greeting .charCodeAt(5);
console.log(result);



// codePointAt

let message = "Happy Birthday";
let codePoint1 = message.codePointAt(1);
console.log("Unicode Code Point of 'a' is " + codePoint1);



// concat

let emptyString = "";
let joinedString = emptyString.concat("JavaScript", " is", " fun.");
console.log(joinedString);


// endsWith


let sentence = "Java is to JavaScript what Car is to Carpet.";
let check = sentence.endsWith("to Carpet.");
console.log(check);    


// fromCharCode

let string1 = String.fromCharCode(72, 69, 76, 76, 79);
console.log(string1);



// fromCodePoint

let alphabets = String.fromCodePoint(65, 66, 67);
console.log(alphabets);



// includes

const message1 = "JavaScript is fun";
let result1 = message1.includes("Java");
console.log(result1);



// indexOf

const message2 = "JavaScript is not Java";
const index = message2.indexOf("va");
console.log('index: ' + index);



// lastIndexOf

var str = "Programming";
var substr = "g";
var result2 = str.lastIndexOf(substr);
console.log(result2);



// length

let sentence1 = "I love Programiz.";
let len = sentence1.length;
console.log(len);



// localeCompare

let result3 = 'c'.localeCompare('b');
console.log(result3);



// match

const message3 = "JavaScript is a fun programming language.";
const exp = /programming/;
let result4 = message3.match(exp);
console.log(result4)



// matchAll

const sentence2 = "JavaScript1JavaScript2";
const regex = /JavaScript\d/g;
let results = sentence2.matchAll(regex);

for (result of results) {
  console.log(result);
}



// padEnd

let string4 = "CODE";
let paddedString = string4.padEnd(10, "*");
console.log(paddedString);



// padStart

let string5 = "CODE";
let paddedString1 = string5.padStart(10, "*");
console.log(paddedString1);




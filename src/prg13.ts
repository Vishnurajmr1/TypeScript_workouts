/* Write a program to identify whether a string is a palindrome or not 
A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
Program should accept a string and display whether the string is a palindrome or not
*/

export {};

const promptInput = require("prompt-sync")();

let str: string = promptInput("Enter a word : ");

let len: number = str.length;
let isPalindrome: boolean = true;

for (let i = 0; i < len / 2; i++) {
  if (str[i] !== str[len - i - 1]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It is a Palindrome");
} else {
  console.log("It is not a Palindrome");
}

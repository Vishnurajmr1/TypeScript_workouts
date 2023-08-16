//Write a program to check whether a student
//has passed or failed in a subject after he
//or she enters their mark
//(pass mark for a subject is 50 out of 100).

//Program should accept an input from the user and
//output a message as “Passed” or “Failed”
export {};
const promptInput = require("prompt-sync")();

let mark: number = parseInt(promptInput("Enter the mark"));
if (mark <= 0 || mark > 100) {
  console.log("Please enter a valid mark");
} else {
  mark >= 50 ? console.log("Passed") : console.log("Failed");
}

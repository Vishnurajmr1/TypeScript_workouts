// Using the ‘switch case’ write a program to accept an input number
//from the user and output the day according to the input number.

export {};

const promptInput = require("prompt-sync")();

let date_inp: number = parseInt(promptInput("Enter an integer number"));
let day: string;

enum Days {
  SUNDAY = "Sunday",
  MONDAY = "monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
}

switch (true) {
  case date_inp == 1:
    day = Days.SUNDAY;
    break;
  case date_inp == 2:
    day = Days.MONDAY;
    break;
  case date_inp == 3:
    day = Days.TUESDAY;
    break;
  case date_inp == 4:
    day = Days.WEDNESDAY;
    break;
  case date_inp == 5:
    day = Days.THURSDAY;
    break;
  case date_inp == 6:
    day = Days.FRIDAY;
    break;
  case date_inp == 7:
    day = Days.SATURDAY;
    break;
  default:
    day = "Invalid Entry";
}

console.log(`The day is: ${day}`);

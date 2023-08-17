"use strict";
/*
Write a TypeScript program to display the status
(I.e. display book name,author name & reading status) of books.
You are given an object library in the code's template.
It contains a list of books with the above mentioned properties.
Your task is to display the following:
If the book is unread:
You still need to read '<book_name>' by <author_name>.
If the book is read:
Already read '<book_name>' by <author_name>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
const library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        readingStatus: true
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: true
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false
    }
];
library.forEach((book) => {
    if (!book.readingStatus) {
        console.log(`You still need to ${book.title} by ${book.author}`);
    }
    else {
        console.log(`Already read the ${book.title} by ${book.author}`);
    }
});

// // Exercise 4: Arrays, Objects, Loops, and Functions

// // === Array Practice ===
// // 1. Create an array of your favorite movies.
let favMovies = ["Interstellar", "Mission: Impossible", "Batman"]

// // 2. Add a new movie to the array.
favMovies.push("Superman");

// // 3. Log the first movie in the array to the console.
console.log(favMovies[0]);

// // === Object Practice ===
// // 1. Create an object to represent a book with properties like title, author, and year.
let book = {
    title: "Animal Farm",
    author: "George Orwell",
    year: 1944
}

// // 2. Log the book's title to the console.
console.log(book.title);

// // 3. Update the book's year and log the updated object.
book.year = 1945;
console.log(book.year);

// // === Loop Practice ===
// // 1. Use a for loop to log numbers from 1 to 10.
console.log("Numbers 1 to 10:");
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// // 2. Use a while loop to log numbers from 10 to 1.
console.log("Numbers 10 to 1:");
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}

// // === Function Practice ===
// // 1. Write a function that takes two numbers and returns their sum.
const addNumbers = (a, b) => a + b;
console.log("Sum of 5 and 3:", addNumbers(5, 3));

// // 2. Write a function that takes a name and returns a greeting message.
const greet = (name) => `Hello, ${name}!`
console.log(greet("John"));
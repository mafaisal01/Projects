// import BookJson from './Bookstore.books.json' assert { type: "json" };
// import Book from './models/Book.js';

// export const seedBooksData = async () => {
//     try {
//         //connection to the database
//     //query 
//     await Book.deleteMany({});
//     await Book.insertMany(BookJson);
//     console.log("Data seeded successfully");

//     //dicsonnect
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

import Book from './models/Book.js';
import fs from 'fs';

const BookJson = JSON.parse(fs.readFileSync('./Bookstore.books.json', 'utf-8'));

export const seedBooksData = async () => {
    try {
        await Book.deleteMany({});
        await Book.insertMany(BookJson);
        console.log("Data seeded successfully");
    } catch (error) {
        console.log("Error: ", error);
    }
};

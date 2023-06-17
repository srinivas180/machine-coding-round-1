import { createContext, useState } from "react";

import { booksData } from "../db/books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState(booksData);

    const updateBookCategory = (book, category) => {
        setBooks((books) => {
            book.category = category;
            return [...books.filter((item) => item._id !== book._id), book];
        });
    };

    return (
        <BooksContext.Provider value={{ books, updateBookCategory }}>
            {children}
        </BooksContext.Provider>
    );
}

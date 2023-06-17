import { useContext } from "react";
import { Link } from "react-router-dom";

import { BookCard } from "../../components/BookCard";
import { BooksContext } from "../../contexts/BooksContext";
import "./index.css";

export function Home() {
    const { books } = useContext(BooksContext);
    return (
        <div className="container">
            <div className="search">
                <Link to="/search" className="link link--secondary">
                    Search
                </Link>
            </div>
            <div className="category">
                <h2 className="category__heading">Current Reading</h2>
                <div className="category__books">
                    {books
                        .filter((book) => book.category === "Currently Reading")
                        .map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                </div>
            </div>
            <div>
                <h2 className="category__heading">Want to Read</h2>
                <div className="category__books">
                    {books
                        .filter((book) => book.category === "Want To Read")
                        .map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                </div>
            </div>
            <div>
                <h2 className="category__heading">Read</h2>
                <div className="category__books">
                    {books
                        .filter((book) => book.category === "Read")
                        .map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                </div>
            </div>
        </div>
    );
}

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookCard } from "../../components/BookCard";
import { BooksContext } from "../../contexts/BooksContext";
import "./index.css";

export function Search() {
    const [searchQuery, setSearchQuery] = useState();
    const { books } = useContext(BooksContext);

    const filteredBooks = books.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    return (
        <div className="container">
            <div className="search-container">
                <Link className="link link--secondary" to="/">
                    Go to Home
                </Link>
                <input
                    className="search__input"
                    name="search"
                    type="search"
                    placeholder="Search for books"
                    width="80%"
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </div>
            <div className="filtered-books">
                {filteredBooks.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
}

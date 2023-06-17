import { useContext } from "react";

import { BooksContext } from "../../contexts/BooksContext";
import "./index.css";

export function BookCard({ book }) {
    const { updateBookCategory } = useContext(BooksContext);
    return (
        <div className="book">
            <img src={book.imageURL} />
            <p className="book__title">{book.title}</p>
            <p className="book__author">{book.author}</p>
            <p className="book__category">
                <span className="book__label">Category:</span> {book.category}
            </p>
            <div className="selection">
                <p className="selection__heading">
                    <span className="book__label">Move to: </span>
                </p>
                <select
                    className="selection__options"
                    onChange={(event) => {
                        updateBookCategory(book, event.target.value);
                    }}
                >
                    <option>Select category</option>
                    <option name="Currently Reading" value="Currently Reading">
                        Currently Reading
                    </option>
                    <option name="Want To Read" value="Want To Read">
                        Want to Read
                    </option>
                    <option name="Read" value="Read">
                        Read
                    </option>
                    <option name="None" value="None">
                        None
                    </option>
                </select>
            </div>
        </div>
    );
}

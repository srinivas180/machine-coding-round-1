import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./contexts/BooksContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <BooksProvider>
                <App />
            </BooksProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

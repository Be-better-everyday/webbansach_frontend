import Book from "../../models/Book";
import React from "react";
import BookProps from "./components/BookProps";

const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './..//images/books/1.png'
        },
        {
            id: 2,
            title: 'Book 2',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../images/books/2.png'
        },
        {
            id: 3,
            title: 'Book 3',
            description: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../images/books/3.png'
        },
        {
            id: 4,
            title: 'Book 4',
            description: 'Description for Book 4',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../images/books/4.png'
        },
        {
            id: 5,
            title: 'Book 5',
            description: 'Description for Book 5',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../images/books/5.png'
        },
        {
            id: 6,
            title: 'Book 6',
            description: 'Description for Book 6',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../images/books/6.png'
        }
    ];

    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map(book => (
                        <BookProps key={book.id} book={book} />
                    ))
                }
            </div>
        </div>
    );
}

export default List;
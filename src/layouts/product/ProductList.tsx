import Book from "../../models/Book";
import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import NewBookProps from "./components/NewBookProps";
import { getAllBooks } from "../../api/BookAPI";
import { error } from "console";

const ProductList: React.FC = () => {

    const [bookList, setBookList] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        getAllBooks().then(
            bookData => {
                setBookList(bookData);
                setIsLoading(false);
            }
        ).catch(
            error => {
                setError(error);
            }
        );
    }, []);

    if(isLoading) return (
        <div>
            <h1>Data is loading</h1>
        </div>
    );

    if(error) return (
        <div>
            <h1>
                An Error has occurred: {error}
            </h1>
        </div>
    );


    return (
        <div className="container">
            <div className="row mt-4">
                {
                    bookList.map(book => (
                        <NewBookProps key={book.bookId} book={book} />
                    ))
                }
            </div>
        </div>
    );
}

export default ProductList;
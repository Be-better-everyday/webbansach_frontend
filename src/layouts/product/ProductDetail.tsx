import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookModel from "../../models/BookModel";
import { findBookById } from "../../api/BookAPI";


const ProductDetail: React.FC = () => {
    // Get "bookId" from URI
    const { bookId } = useParams();

    let bookIdNumber = 0;
    try {
        bookIdNumber = parseInt(bookId + "");
        if (Number.isNaN(bookIdNumber)) {
            bookIdNumber = 0;
        }
    } catch (error) {
        console.error("Error: ", error);
    }
    // const bookId = book.bookId;

    const [book, setBook] = useState<BookModel | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        findBookById(bookIdNumber)
            .then(book => {
                setBook(book);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            })
    }, [bookId]);

    if (isLoading) return (
        <div>
            <h1>Data is loading</h1>
        </div>
    );

    if (error) return (
        <div>
            <h1>
                An Error has occurred: {error}
            </h1>
        </div>
    );

    console.log(book);
    if (!book) {
        return (
            <div>
                Book you found is not existed !
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-4">
                    {book.bookId}
                </div>

                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h1>{book.bookName}</h1>
                            <h4>{book.averageStar}</h4>
                            <h4>{book.actualPrice}</h4>
                            <hr />
                            {/* <p>{book.description}</p> */}
                            <div dangerouslySetInnerHTML={{__html: book.description + ""}}></div>
                            <hr />
                        </div>
                        <div className="col-4">
                            Order Part
                        </div>

                    </div>
                </div>

                <div className="col-4 mt-4 mb-4">Review</div>
            </div>
        </div>
    );
}

export default ProductDetail;
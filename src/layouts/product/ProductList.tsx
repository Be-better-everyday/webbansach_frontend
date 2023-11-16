import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import NewBookProps from "./components/NewBookProps";
import { findBooksByName, getAllBooks } from "../../api/BookAPI";
import { error } from "console";
import { Pagination } from "../utils/Pagination";

interface ProductListProps {
    bookNameKey: string;
}

const ProductList: React.FC<ProductListProps> = ({bookNameKey}) => {

    const [bookList, setBookList] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalBooks, setTotalBooks] = useState(0);
    const [previousBookNameKey, setPreviousBookNameKey] = useState<string>("");

    if(previousBookNameKey !== bookNameKey){
        setPreviousBookNameKey(bookNameKey);
        setCurrentPage(1);
    }

    useEffect(() => {
        if(bookNameKey === '') {
            getAllBooks(8, currentPage).then(
                bookData => {
                    setBookList(bookData.result);
                    setTotalPages(bookData.totalPages);
                    setTotalBooks(bookData.totalBooks);
                    setIsLoading(false);
                }
            ).catch(
                error => {
                    setError(error);
                }
            );
        }else {
            
            findBooksByName(bookNameKey, 8, currentPage).then(
                bookData => {
                    setBookList(bookData.result);
                    setTotalPages(bookData.totalPages);
                    setTotalBooks(bookData.totalBooks);
                    setIsLoading(false);
                    // if(currentPage > totalPages) setCurrentPage(0);
                }
            ).catch(
                error => {
                    setError(error);
                }
            );
        }
    }, [currentPage, bookNameKey]);

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

    const pagination = (page: number) => {
        console.log(page);
        setCurrentPage(page);
    }

    if(bookList.length === 0) {
        return (
            <div className="container">
            <div className="row mt-4 mb-4">
                <h1>Can not find book with your input name!</h1>
            </div>
        </div>
        )
    }

    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                {
                    bookList.map(book => (
                        <NewBookProps key={book.bookId} book={book} />
                    ))
                }
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} pagination={pagination}/>
        </div>
    );
}

export default ProductList;
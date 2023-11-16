import React, { useEffect, useState } from "react";
import { getThreeNewestBooks } from "../../../api/BookAPI";
import BookModel from "../../../models/BookModel";
import CarouselItem from "./CarouselItem";

const Carousel: React.FC = () => {

    const [bookList, setBookList] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);
    // const []

    useEffect(() => {
        getThreeNewestBooks().then(
            bookData => {
                setBookList(bookData.result);
                setIsLoading(false);
            }
        ).catch(
            error => {
                setError(error);
            }
        );
    }, []);

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


    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <CarouselItem key={0} book={bookList[0]} />
                    </div>
                    <div className="carousel-item active" data-bs-interval="10000">
                        <CarouselItem key={1} book={bookList[1]} />
                    </div>
                    <div className="carousel-item active" data-bs-interval="10000">
                        <CarouselItem key={2} book={bookList[2]} />
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;



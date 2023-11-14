import React, { useEffect, useState } from "react";
import ImageModel from "../../../models/ImageModel";
import { getAllImagesOfBook, getFirstImageOfBook } from "../../../api/ImageAPI";
import BookModel from "../../../models/BookModel";


interface CarouselItemInterface {
    book: BookModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = ({ book }) => {

    const bookId = book.bookId;

    const [imageList, setImageList] = useState<ImageModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        getFirstImageOfBook(bookId).then(
            ImageData => {
                setImageList(ImageData);
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

    // "dataIcon" to make sure image have data, avoid error when Image of book is not existed
    let dataIcon: string = "";
    if (imageList[0] && imageList[0].imageData) {
        dataIcon = imageList[0].imageData;
    }


    return (
        <div className="row align-items-center">
            <div className="col-5 text-center">
                <img src={dataIcon} className="float-end" style={{ width: '150px' }} alt="" />
            </div>
            <div className="col-7 text-align-left">
                <h5>{book.bookName}</h5>
                <p>{book.description}</p>
            </div>
        </div>
    );
}

export default CarouselItem;
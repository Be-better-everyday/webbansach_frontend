import React, { useEffect, useState } from "react";
import ImageModel from "../../../models/ImageModel";
import { getAllImagesOfBook } from "../../../api/ImageAPI";
import BookModel from "../../../models/BookModel";


interface NewBookProps {
    book: BookModel;
}

const NewBookProps: React.FC<NewBookProps> = ({ book }) => {

    const bookId = book.bookId;

    const [imageList, setImageList] = useState<ImageModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        getAllImagesOfBook(bookId).then(
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
        <div className="col-md-3 mt-2">
            <div className="card">
                <img
                    src={dataIcon}
                    // src={require('./../../../images/books/1.png')}
                    className="card-img-top"
                    alt={book.bookName}
                    style={{ height: '200px' }}
                />

                <div className="card-body">
                    <h5 className="card-title">{book.bookName}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{book.listPrice}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{book.actualPrice}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewBookProps;
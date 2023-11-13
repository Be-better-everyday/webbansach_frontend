import React from "react";
import BookModel from "../../../models/BookModel";

interface NewBookProps {
    book: BookModel;
}

const NewBookProps: React.FC<NewBookProps> = ({ book }) => {
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                {/* <img
                    src={book.imageUrl}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: '200px' }}
                /> */}
                <img
                    src="#"
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
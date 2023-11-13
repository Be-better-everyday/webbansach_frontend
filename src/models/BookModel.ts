class BookModel {
    bookId: number;
    bookName?: string; // this property can be Null
    listPrice?: number;
    actualPrice?: number;
    description?: string;
    stockQuantity?: number;
    author?: string;
    averageStar?: number;

    constructor(
        bookId: number,
        bookName?: string, // this property can be Null
        listPrice?: number,
        actualPrice?: number,
        description?: string,
        stockQuantity?: number,
        author?: string,
        averageStar?: number,
    ){
        this.bookId = bookId;
        this.bookName = bookName;
        this.listPrice = listPrice;
        this.actualPrice = actualPrice;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.author = author;
        this.averageStar = averageStar;
    }
}
export default BookModel;
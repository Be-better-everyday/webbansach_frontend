import BookModel from "../models/BookModel";
import { my_request } from "./Request";

interface bookResultInterface {
  result: BookModel[];
  totalPages: number;
  // totalBooksInAPage: number; // number of book in a page
  totalBooks: number;
}

async function getBooks(endpoint: string): Promise<bookResultInterface> {
  const result: BookModel[] = [];

  // Use "request" function
  const response = await my_request(endpoint);

  // Get json of "Book"
  const responseData = response._embedded.books;

  // get pageData
  const totalPages: number = response.page.totalPages;
  // const totalBooksInAPage: number = response.page.totalElements;
  const totalBooks: number = response.page.totalElements;

  for (const key in responseData) {
    result.push({
      bookId: responseData[key].bookId,
      bookName: responseData[key].bookName,
      listPrice: responseData[key].listPrice,
      actualPrice: responseData[key].actualPrice,
      description: responseData[key].description,
      stockQuantity: responseData[key].stockQuantity,
      author: responseData[key].author,
      averageStar: responseData[key].averageStar,
    });
  }

  return { result: result, totalPages: totalPages, totalBooks: totalBooks };
}

async function getOneBook(endpoint: string): Promise<BookModel | undefined > {
  let result: BookModel ;

  // Use "request" function
  try {
    const response = await fetch(endpoint);
    console.log(endpoint);

    if(!response.ok){
        throw new Error("getOneBook() error!");
    }

    const bookData = await response.json();
    console.log(bookData);
    if(bookData) {
        result = {
            bookId: bookData.bookId,
            bookName: bookData.bookName,
            listPrice: bookData.listPrice,
            actualPrice: bookData.actualPrice,
            description: bookData.description,
            stockQuantity: bookData.stockQuantity,
            author: bookData.author,
            averageStar: bookData.averageStar,
          };
          return result;
    }
  }catch (error) {
    console.error("Error: ", error);
    throw Error("Book is not existed!");
  }
}

// *** Used Function in other ".tsx" File
export async function getAllBooks(size: number, currentPage: number): Promise<bookResultInterface> {
  const endpoint = `http://localhost:8081/books?page=${currentPage - 1}&size=${size}&sort=bookId,asc`;
  console.log(endpoint);
  return getBooks(endpoint);
}

export async function getThreeNewestBooks(): Promise<bookResultInterface> {
  const endpoint = `http://localhost:8081/books?sort=bookId,asc&page=0&size=3`;
  console.log(endpoint);
  return getBooks(endpoint);
}

export async function findBooksByName(
  bookName: string,
  size: number,
  currentPage: number
): Promise<bookResultInterface> {
  const endpoint = `http://localhost:8081/books/search/findByBookNameContaining?page=${
    currentPage - 1
  }&size=${size}&sort=bookId,asc&bookName=${bookName}`;
  console.log(endpoint);
  return getBooks(endpoint);
}

export async function findBooksByNameAndCategory(
  bookName: string,
  size: number,
  currentPage: number,
  categoryId: number
): Promise<bookResultInterface> {
  const endpoint = `http://localhost:8081/books/search/findByBookNameContainingAndBookCategoryList_CategoryId?bookName=${bookName}&categoryId=${categoryId}&page=${
    currentPage - 1
  }&size=${size}&sort=bookId,asc`;
  console.log(endpoint);
  return getBooks(endpoint);
}


export async function findBookById(bookId: number): Promise<BookModel | undefined> {
    const endpoint = `http://localhost:8081/books/${bookId}`;

    return getOneBook(endpoint);
}
import React from "react";
import BookModel from "../models/BookModel";
import { my_request } from "./Request";

async function getBooks(endpoint:string) {
    const result: BookModel[] = [];
    
    // Use "request" function
    const response = await my_request(endpoint);

    // Get json of "Book"
    const responseData = response._embedded.books;
    console.log(responseData);
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
        })
    }

    return result;
}

export async function getAllBooks(): Promise<BookModel[]> {
    return getBooks("http://localhost:8081/books");
}

export async function getThreeNewestBooks(): Promise<BookModel[]> {
    return getBooks("http://localhost:8081/books?sort=bookId,desc&page=0&size=3");;
}
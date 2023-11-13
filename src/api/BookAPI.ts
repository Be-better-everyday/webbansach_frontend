import React from "react";
import BookModel from "../models/BookModel";

async function request(endpoint:string) {

    // Get Data
    const response =  await fetch(endpoint);
    if(!response.ok){
        throw new Error(`Can't access Endpoint \"${endpoint}\"`);
    }
    return response.json();
}

export async function getAllBooks(): Promise<BookModel[]> {
    const result: BookModel[] = [];
    
    // Endpoint
    const endpoint: string = 'http://localhost:8081/books';
    // const endpoint: string = 'https://api.publicapis.org/entries';
    
    // Use "request" function
    const response = await request(endpoint);
    console.log(response)
    // console.log(response);
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
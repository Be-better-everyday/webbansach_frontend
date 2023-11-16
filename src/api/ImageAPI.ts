import BookModel from "../models/BookModel";
import ImageModel from "../models/ImageModel";
import { my_request } from "./Request";

export async function getAllImages(endpoint: string): Promise<ImageModel[]> {
    const result: ImageModel[] = []; 
    
    // Use "request" function
    const response = await my_request(endpoint);
    // console.log(response)
    // console.log(response);
    // Get json of "Book"
    const responseData = response._embedded.images;
    // console.log(responseData);
    for (const key in responseData) {
        result.push({
            imageId: responseData[key].imageId,
            imageName: responseData[key].imageName,
            isIcon: responseData[key].isIcon,
            link: responseData[key].link,
            imageData: responseData[key].imageData,
        })
    }

    return result;
}

export async function getAllImagesOfBook(imageId: number): Promise<ImageModel[]> {

    // Endpoint
    const endpoint: string = `http://localhost:8081/books/${imageId}/imageList`;

    return getAllImages(endpoint);
}

export async function getFirstImageOfBook(imageId: number): Promise<ImageModel[]> {

    // Endpoint
    const endpoint: string = `http://localhost:8081/books/${imageId}/imageList?sort=iamgeId,asc&page=0&size=1`;

    return getAllImages(endpoint);
}
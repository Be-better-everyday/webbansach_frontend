import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import ProductList from "../product/ProductList";
import { useParams } from "react-router-dom";

interface HomePageProps {
    bookNameKey: string;
    setBookNameKey: (bookName: string) => void;
}
// function HomePage() {
const HomePage : React.FC<HomePageProps> = ({bookNameKey, setBookNameKey}) => {
    const {categoryId} = useParams();
    let categoryIdNumber = 0;

    try {
        categoryIdNumber = parseInt(categoryId + '');
    }catch (error) {
        // categoryIdNumber = 0;
        console.log("Error: ", error);
    }

    if(Number.isNaN(categoryIdNumber)) categoryIdNumber = 0;

    return (
        <div>
            <Banner />
            <Carousel />
            <ProductList bookNameKey={bookNameKey} categoryIdNumber={categoryIdNumber} />
        </div>
    );
}

export default HomePage;
import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import ProductList from "../product/ProductList";

interface HomePageProps {
    bookNameKey: string;
    setBookNameKey: (bookName: string) => void;
}
// function HomePage() {
    const HomePage : React.FC<HomePageProps> = ({bookNameKey, setBookNameKey}) => {
    return (
        <div>
            <Banner />
            <Carousel />
            <ProductList bookNameKey={bookNameKey} />
        </div>
    );
}

export default HomePage;
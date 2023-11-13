import React from "react";
import "./App.css";
import Footer from "./layouts/header-footer/Footer";
import Navbar from "./layouts/header-footer/Navbar";
import HomePage from "./layouts/homepage/HomePage";
import { getAllBooks } from "./api/BookAPI";

function App() {
  getAllBooks().then().catch();

  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>

  );
}

export default App;

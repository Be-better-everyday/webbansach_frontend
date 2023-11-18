import React, { useState } from "react";
import "./App.css";
import Footer from "./layouts/header-footer/Footer";
import Navbar from "./layouts/header-footer/Navbar";
import HomePage from "./layouts/homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./layouts/about/About";

function App() {
  const [bookNameKey, setBookNameKey] = useState("");


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bookNameKey={bookNameKey} setBookNameKey={setBookNameKey} />

        <Routes>         
          <Route path="/" element={<HomePage bookNameKey={bookNameKey} setBookNameKey={setBookNameKey} />}></Route>
          <Route path='/:categoryId' element={
            <HomePage bookNameKey={bookNameKey} setBookNameKey={setBookNameKey} />
          } />
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;

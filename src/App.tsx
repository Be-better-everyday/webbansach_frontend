import React, { useState } from "react";
import "./App.css";
import Footer from "./layouts/header-footer/Footer";
import Navbar from "./layouts/header-footer/Navbar";
import HomePage from "./layouts/homepage/HomePage";

function App() {
  const [bookNameKey, setBookNameKey] = useState("");


  return (
    <div className="App">
      <Navbar bookNameKey={bookNameKey} setBookNameKey={setBookNameKey} />
      <HomePage bookNameKey={bookNameKey} setBookNameKey={setBookNameKey} />
      <Footer />
    </div>

  );
}

export default App;

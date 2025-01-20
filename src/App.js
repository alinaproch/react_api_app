import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:isbn" element={<BookDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

<div className="container">
  <h1>Home Page</h1>
  <div className="loader">Loading...</div>

</div>



export default App;

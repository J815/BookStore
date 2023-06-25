import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {BookList} from './components/BookList';
import {Cart} from './components/Cart';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Bookstore</h1>
          <nav className="app-nav">
            <ul className="app-nav-list">
              <li className="app-nav-item">
                <Link to="/" className="app-nav-link">Books</Link>
              </li>
              <li className="app-nav-item">
                <Link to="/cart" className="app-nav-link">Your Cart</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="app-content">
          <Routes>
            <Route path="/" exact element={<BookList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


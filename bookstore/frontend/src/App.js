import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {BookList} from './components/BookList';
import {Cart} from './components/Cart';

function App() {
  return (
    <Router>
      <div>
        <h1>Bookstore</h1>
        <nav>
          <ul>
              <Link to="/">Books</Link>
              <Link to="/cart">Your Cart</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<BookList/>} />
          <Route path="/cart" component={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


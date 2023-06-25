import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const handleAddToCart = async (bookId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-to-cart/', {
        book_id: bookId,
        quantity: 1,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksData = await axios.get('http://localhost:8000/api/books/');
      console.log(booksData)
      setBooks(booksData.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
        <div className='all-book'>
            <ul className='book-list'>
                {books.map((book)=> (
                    <div key={book.id} className='book-item'>
                        <div className='book-image'>{"#image"}</div>
                       <div className='book-serial'>{"book serial - "+ book.id}</div>
                        <div className='book-title'> {"name : " +book.title} </div>
                         <div className='book-author'>{"author : "+book.author}</div>
                         <div className='book-price'>{"price : "+book.price}</div>
                         <button className='add-to-cart-button' onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};
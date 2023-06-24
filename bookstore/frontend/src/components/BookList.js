import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksData = await axios.get('/api/books/');
      setBooks(booksData.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  return (
        <div>
            <ul style={{ display: 'flex'}}>
                {books.map((book)=> (
                    <div key={book.id} style={{ height:'180px', width:'130px', border:'1px solid #ccc', padding: '10px', marginRight: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                        <div style={{ height: '80px'}}>{"#image"}</div>
                       <div>{"book serial - "+ book.id}</div>
                        <div> {book.title} </div>
                         <div>{book.author}</div>
                         <div>{book.price}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
// import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const BookList = () => {
  // const [books, setBooks] = useState([]);
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

  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  // const fetchBooks = async () => {
  //   try {
  //     const booksData = await axios.get('/api/books/');
  //     setBooks(booksData.data);
  //   } catch (error) {
  //     console.error('Error fetching books:', error);
  //   }
  // };
   const books=[
    {id:1 ,title: 'b1', author: 'a1', price: 10},
    {id:2 ,title: 'b2', author: 'a2', price: 100},
    {id:12 ,title: 'b3', author: 'a1', price: 110},
    {id:15 ,title: 'b16', author: 'a15', price: 130},
   ];

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
                         <button onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};
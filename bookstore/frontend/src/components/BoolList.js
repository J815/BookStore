import React, { useEffect, useState } from 'react';


export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksData = await getBooks();
      setBooks(booksData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  return (
        <div>
            <h2 style={{ padding: '30px'}}>Available Books</h2>
            <ul style={{ display: 'flex'}}>
                {books.map((book)=> (
                    <div key={book.id} style={{ height:'180px', width:'130px', border:'1px solid #ccc', padding: '10px', marginRight: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                        <div style={{ height: '80px'}}>{"#image"}</div>
                       <div>{"book serial - "+ book.id}</div>
                        <div> {book.title} </div>
                         <div>{book.author}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
import React from 'react';

export const BookList= () =>{
    const books= [
        { id : 1, title: 'book1', author: 'author1'},
        { id : 2, title: 'book2', author: 'author2'},
        { id : 3, title: 'book3', author: 'author3'},
        { id : 4, title: 'book4', author: 'author4'},
        { id : 5, title: 'book5', author: 'author5'}
    ];
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
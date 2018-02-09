import React, { Component } from 'react';

class BooksList extends Component{

    render() {
        //console.log(this.props.books)
        return (
                <ol className="books-grid">
                    {this.props.books.map((book) =>
                    <li key={book.id}>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                            <select onChange={() => this.props.onUpdateBookList(book)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className='book-subtitle'>{book.subtitle}</div>
                        <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                )} 
                </ol>
        )
    }

}


export default BooksList



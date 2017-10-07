"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import BookItem from './book-item';
import BookForm from './book-form';

class BookList extends React.Component {

    componentDidMount(){
        this.props.getBooks(
            [
                {
                    id: 1,
                    title: 'Book 1',
                    description: 'Book 1',
                    price: 19.99
                },
                {
                    id: 2,
                    title: 'Book 2',
                    description: 'Book 2',
                    price: 29.99  
                }                  
            ]
        );
    }
    render(){        
        const bookList = this.props.books.map(function(book){
            return (
                <BookItem 
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    description={book.description}
                    price={book.price} />
            )
        })
        return(
            <div>
                <div className="page-header">
                    <h1>The React BookStore</h1>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8">
                        <div className="row">
                            {bookList}
                        </div> 
                    </div>
                    <div className="col-xs-12 col-sm-4">
                       <BookForm />
                    </div>
                </div>                               
            </div>
        )
    }
}

//just return the data from the store
function mapStateToProps(state){
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBooks: getBooks}, dispatch);
}
//connects component to the store
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
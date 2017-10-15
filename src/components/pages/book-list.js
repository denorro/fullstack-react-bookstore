"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks, deleteBook} from '../../actions/booksActions';
import BookItem from './book-item';
import BookForm from './book-form';
import Cart from './cart';

class BookList extends React.Component {

    constructor(props){
        super(props);
        this.deleteBookItem = this.deleteBookItem.bind(this);
    }

    componentDidMount(){
       this.props.getBooks();
    }

    deleteBookItem(_id){
        this.props.deleteBook(_id);
    }

    render(){        
        const bookList = this.props.books.map(function(book){
            return (
                <BookItem 
                    key={book._id}
                    _id={book._id}
                    title={book.title}
                    description={book.description}
                    price={book.price} 
                    deleteBookItem={this.deleteBookItem}
                />
            )
        }, this);

        return(
            <div>
                <div className="page-header">
                    <h1 className="text-center">The React BookStore</h1>
                </div>
                { this.props.msg &&
                    <div className="alert alert-info text-center" role="alert">{this.props.msg}</div>
                }                
                <Cart />                
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
        books: state.books.books,
        msg: state.books.msg
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getBooks: getBooks,
        deleteBook: deleteBook
    }
    , dispatch);
}
//connects component to the store
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import BookItem from './book-item';
import BookForm from './book-form';

class BookList extends React.Component {



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
                    <h1 className="text-center">The React BookStore</h1>
                </div>
                { this.props.msg &&
                    <div className="alert alert-info text-center" role="alert">{this.props.msg}</div>
                }
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
    console.log('State: ', state);
    return {        
        books: state.books.books,
        msg: state.books.msg
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBooks: getBooks}, dispatch);
}
//connects component to the store
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
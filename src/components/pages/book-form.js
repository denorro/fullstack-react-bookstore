import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook} from '../../actions/booksActions';
import {findDOMNode} from 'react-dom';
class BookForm extends React.Component{

    handleSubmit = () => {
        const book = [
            {
                title: findDOMNode(this.refs.title).value,
                description: findDOMNode(this.refs.description).value,
                price: findDOMNode(this.refs.price).value
            }
        ];
        this.props.postBook(book);
    }
    
    render(){
        return(
            <form className="well">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Title..." ref="title" />
                </div>
                <div className="form-group">
                <label>Description</label>
                    <input type="text" className="form-control" placeholder="Description..." ref="description" />
                </div>
                <div className="form-group">
                <label>Price</label>
                    <input type="number" className="form-control" placeholder="Price..." min="0.0" step="0.25" max="10000.00" ref="price" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({postBook}, dispatch);
}
export default connect(null, mapDispatchToProps)(BookForm);
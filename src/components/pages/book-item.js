import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, updateCart} from '../../actions/cartActions';

class BookItem extends React.Component{

    constructor(props){
        super(props);
        this.deleteBookItem = this.deleteBookItem.bind(this);
    }

    deleteBookItem(){
        const index = this.props._id;
        this.props.deleteBookItem(index);
    }

    handleCart = () => {
        const book = [...this.props.cart, {
            key: this.props.key,
            _id: this.props._id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price,
            qty: 1
        }];
        if(this.props.cart.length > 0){
            let _id = this.props._id;
            let cartIndex = this.props.cart.findIndex(function(cart){
                return cart._id === _id;
            });
            if(cartIndex === -1){
                this.props.addToCart(book);
            }
            else{
                this.props.updateCart(_id, 1);
            }
        }
        else {
            this.props.addToCart(book);
        }    
    }
    
    render(){
        return(
            <div className="col-xs-12 col-md-6" key={this.props.key}>
                <div className="well">
                    <h2 className="text-center">{this.props.title}</h2>
                    <h2 className="text-center">{this.props.description}</h2>
                    <h2 className="text-center">{this.props.price}</h2>
                    <button className="btn btn-success btn-block" onClick={this.handleCart}>
                        <i className="glyphicon glyphicon-shopping-cart"></i>
                        <span> Add To Cart</span>
                    </button>
                    <button className="btn btn-danger btn-block" onClick={this.deleteBookItem}>
                        <i className="glyphicon glyphicon-trash"></i>
                        <span> Delete Book</span>
                    </button>
                </div>                    
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addToCart: addToCart,
            updateCart: updateCart,
        }
        , dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
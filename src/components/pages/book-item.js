import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';

class BookItem extends React.Component{

    handleCart = () => {
        const book = [...this.props.cart, {
            _id: this.props._id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price
        }];
        this.props.addToCart(book);
    }

    render(){
        return(
            <div className="col-xs-12 col-md-6" key={this.props.id}>
                <div className="well">
                    <h2 className="text-center">{this.props.title}</h2>
                    <h2 className="text-center">{this.props.description}</h2>
                    <h2 className="text-center">{this.props.price}</h2>
                    <button className="btn btn-success btn-block" onClick={this.handleCart}><i className="glyphicon glyphicon-usd"></i><span> Buy Now</span></button>
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
    return bindActionCreators({addToCart}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
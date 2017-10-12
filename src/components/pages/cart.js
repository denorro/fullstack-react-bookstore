import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem, updateCart} from '../../actions/cartActions';

class Cart extends React.Component{

    constructor(){
        super();
    }    

    incrementQty(_id){
        this.props.updateCart(_id, 1);
    }

    decrementQty(_id, qty){
        if(qty > 1){
            this.props.updateCart(_id, -1);
        }
        else {
            this.deleteItem(_id);
        }        
    }

    deleteItem(_id) {
        const cartCopy = this.props.cart;
        const indexToDelete = cartCopy.findIndex(
            function(cart){
                return cart._id === _id;
            }
        )
        let cartAfterDelete = [...cartCopy.slice(0, indexToDelete) , ...cartCopy.slice(indexToDelete + 1)]
        this.props.deleteItem(cartAfterDelete);
    }

    render(){
        if(this.props.cart[0]){
            return this.renderCart();
        }
        else {
            return this.renderEmpty();
        }
    }

    renderEmpty(){
        return(<div></div>)
    }    

    renderCart(){
        const cartItemsList = this.props.cart.map(function(cartItem){
            return(
                <div className="panel panel-default" key={cartItem._id}>
                    <div className="panel-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6G0P3qiNLxphD_scyvciRqhzfHvxro1_Gl5TQVRtz9TkRIz9" 
                             className="img-responsive" 
                             style={{width: '30px', height: '30px', display:'inline-block', marginRight:'50px'}}
                        />
                        <span style={{marginRight:'50px'}}>{cartItem.title}</span>
                        <span style={{marginRight:'50px'}}>${cartItem.price}</span>
                        <span style={{marginRight:'15px'}}>QTY: {cartItem.qty} </span>
                        <div className="btn-group" role="group" style={{marginRight:'50px'}}>
                            <button type="button" className="btn btn-default" onClick={this.incrementQty.bind(this, cartItem._id)}>
                                <i className="glyphicon glyphicon-plus"></i>
                            </button>
                            <button type="button" className="btn btn-default" onClick={this.decrementQty.bind(this, cartItem._id, cartItem.qty)}>
                                <i className="glyphicon glyphicon-minus"></i>
                            </button>                             
                        </div>
                        <button className="btn btn-danger" onClick={this.deleteItem.bind(this, cartItem._id)}>
                            <i className="glyphicon glyphicon-trash"></i><span> Delete</span>
                         </button>
                    </div>
                </div>
            )
        }, this);
        return(            
                <div className="well">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2 className="panel-title text-center">Cart Items</h2>
                                </div>
                                <div className="panel-body">
                                    {cartItemsList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )             
    }    
}
function mapStateToProps(state){
    return { cart : state.cart.cart }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteItem:deleteItem,
        updateCart:updateCart
    }
    , dispatch)    
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
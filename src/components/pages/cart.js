import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem} from '../../actions/cartActions';

class Cart extends React.Component{

    constructor(){
        super();
    }    

    changeQty(_id, qty){

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
                        <span style={{marginRight:'50px'}}>
                            <input type="number" 
                                   className="form-control" 
                                   min="0" step="1" 
                                   value="1" 
                                   ref="qty" 
                                   style={{width:'75px', display:'inline-block'}} 
                                   onChange={this.changeQty.bind(this, cartItem._id, this.refs.qty)} 
                            />
                        </span>
                        <button className="btn btn-danger" onClick={this.deleteItem.bind(this, cartItem._id)}>Delete</button>
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
    return bindActionCreators({deleteItem}, dispatch)
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
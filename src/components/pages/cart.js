import React from 'react';
import {connect} from 'react-redux';


class Cart extends React.Component{
    render(){
        if(this.props.cart[0]){
            return this.renderCart();
        }
        else {
            return this.renderEmpty();
        }
    }

    renderEmpty(){
        return(
            <div></div>
        )
    }

    renderCart(){
        const cartItemsList = this.props.cart.map(function(cartItem){
            return (
                <div className="panel panel-primary">
                    <div class="panel-header">
                        <h2 className="panel-title"></h2>
                    </div>
                </div>
            )
        });        
    }

    
}
function mapStateToProps(state){
    
}
export default connect(mapStateToProps)(Cart);
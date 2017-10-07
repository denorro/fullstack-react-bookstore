import React from 'react';
import {connect} from 'react-redux'
class BookItem extends React.Component{
    render(){
        return(
            <div className="col-xs-12 col-md-6" key={this.props.id}>
                <div className="well">
                    <h2 className="text-center">{this.props.title}</h2>
                    <h2 className="text-center">{this.props.description}</h2>
                    <h2 className="text-center">{this.props.price}</h2>
                    <button className="btn btn-success btn-block"><i className="glyphicon glyphicon-usd"></i><span> Buy Now</span></button>
                </div>                    
            </div>
        )
    }
}
export default BookItem;
import React from 'react';
import BookList from './book-list';
import About from './about';
import Contact from './contact';
import Team from './team';
import Navbar from './navbar';
import Cart from './cart';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class MainApp extends React.Component {
    
    render(){
        return (
            <section>
                <div>
                    <Navbar cartCount={this.props.totalQty}/>
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={BookList} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/team" component={Team} />
                        <Route path="/cart" component={Cart} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </section>            
        )
    }
}
function mapStateToProps(state){
    return {
        totalQty: state.cart.totalQty
    }
}
export default withRouter(connect(mapStateToProps)(MainApp));
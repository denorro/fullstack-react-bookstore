import React from 'react';
import BookList from './book-list';
import About from './about';
import Contact from './contact';
import Team from './team';
import Navbar from './navbar';
import Cart from './cart';
import {Switch, Route} from 'react-router-dom';

export default class MainApp extends React.Component {
    
    render(){
        return (
            <section>
                <div>
                    <Navbar />
                </div>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={BookList} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                </div>
            </section>            
        )
    }
}
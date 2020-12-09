import React from 'react';
import { BrowserRouter as Router, Link,  Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './../Pages/Home';
import Products from './../Pages/Products';
import ProductDetails from './../Pages/ProductDetails';
import './../App.css';

export default function RouteConfig() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="*" component={() => { return (<div><h1>Page Not Found</h1><h3>Please go to this {<Link to="/">link</Link>} for going back to home page</h3></div>); }} />
            </Switch>
        </Router>
    );
}
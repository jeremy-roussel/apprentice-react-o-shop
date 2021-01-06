import React from 'react';
import { Route, Switch } from 'react-router';
import './Main.scss'
import AdminOrders from '../../pages/AdminOrders'
import AdminProducts from '../../pages/AdminProducts'
import CheckOut from '../../pages/CheckOut'
import Home from '../../pages/Home'
import Orders from '../../pages/Orders'
import OrderSuccess from '../../pages/OrderSuccess'
import Products from '../../pages/Products'
import ShoppingCart from '../../pages/ShoppingCart'

function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={ Home }></Route>
                <Route exact path="/AdminOrders" component={ AdminOrders }></Route>
                <Route exact path="/AdminProducts" component={ AdminProducts }></Route>
                <Route exact path="/CheckOut" component={ CheckOut }></Route>
                <Route exact path="/Orders" component={ Orders }></Route>
                <Route exact path="/OrderSuccess" component={ OrderSuccess }></Route>
                <Route exact path="/Products" component={ Products }></Route>
                <Route exact path="/ShoppingCart" component={ ShoppingCart }></Route>
            </Switch>
        </div>
    )
}

export default Main;

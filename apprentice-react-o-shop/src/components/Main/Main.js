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
import navLinks from '../../utils/constants'

function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path={navLinks.Home.link} component={ Home }/>
                <Route exact path={navLinks.AdminOrders.link} component={ AdminOrders }/>
                <Route exact path={navLinks.AdminProducts.link} component={ AdminProducts }/>
                <Route exact path={navLinks.CheckOut.link} component={ CheckOut }/>
                <Route exact path={navLinks.Orders.link} component={ Orders }/>
                <Route exact path={navLinks.OrderSuccess.link} component={ OrderSuccess }/>
                <Route exact path={navLinks.Products.link} component={ Products }/>
                <Route exact path={navLinks.Products.link} component={ ShoppingCart }/>
                <Route path='*' component={ Home }/>
            </Switch>
        </div>
    )
}

export default Main;

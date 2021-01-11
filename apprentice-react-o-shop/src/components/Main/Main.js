import React from 'react';
import { Route, Switch } from 'react-router';

import './Main.scss'
import AdminOrders from '../../pages/AdminOrders'
import AdminProducts from '../../pages/AdminProducts'
import CheckOut from '../../pages/CheckOut'
import Orders from '../../pages/Orders'
import OrderSuccess from '../../pages/OrderSuccess'
import Products from '../../pages/Products'
import ShoppingCart from '../../pages/ShoppingCart'
import navLinks from '../../utils/constants'

function Main() {
    return (
        <div className="main container-fluid">
            <Switch>
                <Route exact path={navLinks.AdminOrders.link} component={ AdminOrders }/>
                <Route exact path={navLinks.AdminProducts.link} component={ AdminProducts }/>
                <Route exact path={navLinks.CheckOut.link} component={ CheckOut }/>
                <Route exact path={navLinks.Orders.link} component={ Orders }/>
                <Route exact path={navLinks.OrderSuccess.link} component={ OrderSuccess }/>
                <Route exact path={navLinks.Products.link} component={ Products }/>
                <Route exact path={navLinks.ShoppingCart.link} component={ ShoppingCart }/>
            </Switch>
        </div>
    )
}

export default Main;

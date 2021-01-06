import React, { useState } from 'react';

function NavBar(){

    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
            <a className="navbar-brand" href="/#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Products">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Orders" >Orders</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ShoppingCart" >Shopping Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/CheckOut" >Checkout</a>
                </li>
                <li className={open ? "nav-item dropdown show" : "nav-item dropdown"}>
                    <span className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown"  aria-expanded={open} onClick={() => setOpen(!open)} >Admin</span>
                    <div className={open ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdown01">
                    <a className="dropdown-item" href="/AdminOrders">Admin Orders</a>
                    <a className="dropdown-item" href="/AdminProducts">Admin Products</a>
                    <a className="dropdown-item" href="/OrderSuccess">Order Success</a>
                    </div>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;

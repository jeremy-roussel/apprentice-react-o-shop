import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import LinkListItem from './ListLinkItem'
import DropDownItem from './DropDownItem'
import { navLinks } from '../../utils/constants'

function NavBar(){

    const fullName = useSelector( state => state.login.user.firstName + ' ' + state.login.user.lastName );

    const [isDropDownOpen, setisDropDownOpen] = useState(false)
    const NavList = []
    const DropDownList = []

    for (const key in navLinks) {
        if (navLinks[key].admin === false && navLinks[key].menu === true) {
            NavList.push(<LinkListItem link={navLinks[key].link} text={navLinks[key].text} key={key}/>)
        }
        else if (navLinks[key].admin === true) {
            DropDownList.push(<DropDownItem link={navLinks[key].link} text={navLinks[key].text} key={key}/>)
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
               {NavList}
                <li className={isDropDownOpen ? "nav-item dropdown show" : "nav-item dropdown"}>
                    <span className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown"  aria-expanded={isDropDownOpen} onClick={() => setisDropDownOpen(!isDropDownOpen)} >{fullName}</span>
                    <div className={isDropDownOpen ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdown01">
                    {DropDownList}
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

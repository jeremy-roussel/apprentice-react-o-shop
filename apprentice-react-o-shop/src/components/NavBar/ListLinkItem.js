import React from 'react'
import { useLocation } from 'react-router-dom'

function ListLinkItem({link, text}){

  const location = useLocation();
  const active = (link === location.pathname) ? true : false

  return (
    <li className={active ? "nav-item active" : "nav-item"}>
        <a className="nav-link" href={link}>{text}</a>
    </li>
  )
}

export default ListLinkItem;

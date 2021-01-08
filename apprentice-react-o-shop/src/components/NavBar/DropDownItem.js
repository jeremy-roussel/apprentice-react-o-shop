import React from 'react'
import { useLocation } from 'react-router-dom'

function DropDownItem({link, text}){

  const location = useLocation();
  const active = (link === location.pathname) ? true : false

  return (
    <a className={active ? "dropdown-item active" : "dropdown-item"} href={link}>{text}</a>
  )
}

export default DropDownItem;

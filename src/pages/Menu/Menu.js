import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

export default function Menu() {

    // {}  импортировать стейты из пунктов меню
    const SECTIONS = [
        {title : "Start game", to: "/game"},
        {title: "Options", to: "/options"},
        {title: "High Scrore", to: "/hs"}
    ]

    return (
        <div className="menuContainer">
            {SECTIONS.map(({title, to})=> {
                return <div className="menuSection"><span><Link to={to}>{title}</Link></span></div>
            })}
        </div>
    )
}
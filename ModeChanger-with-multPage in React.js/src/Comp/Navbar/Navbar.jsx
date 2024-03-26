import React, { useContext } from 'react'
import UserContext2 from '../../Context/UserContext2'
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const { button, setButton, value, setValue, modeChanger } = useContext(UserContext2)
    return (
        <>
            <div className={value ? 'light-mode' : 'dark-mode'} id='navbar'>
                <div className="logo"><h1>LOGO</h1></div>
                <div className="nav-list">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/About'>About</NavLink>
                    <NavLink to='/OtherPage'>OtherPage</NavLink>
                    <button onClick={modeChanger}>{button}</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
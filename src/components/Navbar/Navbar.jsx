import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item}`}>
            <NavLink to="/home" activeClassName={s.active}>Home</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to="/posts" activeClassName={s.active}>Posts</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>



    </nav>
}

export default Navbar;
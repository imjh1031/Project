import React, { useState } from "react";
import './Header.css';
import {Link} from 'react-router-dom';

import Logo from '../../assest/image/logo.png';
import Img01 from '../../assest/image/img01.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [login, setLogin] = useState<boolean>(false);
    return (
        <div id="wrap">
        <header id="header">
            <div className="mainimg">
                <div>
                    <Link to={ '/' } className = "logo" ><img className="image01" src={Logo} alt=""
                            style={{ "width": "100px", "height" : "130px" }} /></Link>
                    <div className="top_nav">
                        <li>
                            <Link to = { '/About' }>About</Link>
                        </li>
                        <li>
                            <Link to = {'/CategoryMain'}>Product</Link>
                            <ul className="sub">
                                <li><Link to = {'/Category'}> Man perfume</Link></li>
                                <li><Link to = {'/Category'}> Woman perfume</Link></li>
                                <li><Link to = {'/Category'}> Diffuser</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to = {'/Reference'}> Reference</Link>
                        </li>
                        <li>
                            <Link to = {'/QnaBoard'}>Q&A</Link>
                        </li>
                    </div>
                    <div className="icon">
                        <ul>
                            <FontAwesomeIcon onClick={() => setLogin(!login)} icon={faLockOpen} className = "lock-open"/>
                            
                            {login ? (<><Link to={'/Shopping'}><FontAwesomeIcon icon={faCartShopping} className = "Cart" /></Link>
                            <Link to={'/Update'}><FontAwesomeIcon icon={faUserLock} className = "Cart" /></Link></>) : 
                            (<><Link to={ '/login' }> <FontAwesomeIcon icon={faUser} className = "User"/></Link>
                            <Link to ={ '/login' }> <FontAwesomeIcon icon={faCartShopping} className = "Cart" /></Link></>)}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </header>
        </div>
    );
}

export default Header;
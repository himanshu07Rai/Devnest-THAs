import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const clickHandler = () =>{
        setClick(!click);
    }
    const closeMobileMenu=()=>{
        setClick(false);
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = "/" className="navbar-logo">
                        BB
                    </Link>
                    <div className="menu-icon" onClick={clickHandler}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className="nav-item" >
                            <Link to = "/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to = "/deaths" className="nav-links" onClick={closeMobileMenu}>
                                Deaths
                            </Link>
                        </li>
                        <li>
                            <Link to = "/quotes" className="nav-links" onClick={closeMobileMenu}>
                                Quotes
                            </Link>
                        </li>
                    </ul>                   
                </div>
            </nav>
        </>
    )
}

export default Navbar

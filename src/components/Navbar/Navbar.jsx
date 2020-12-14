import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Bi from 'react-icons/bi'
import * as Ai from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import './Navbar.scss'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar);
    
    return (
        <>
            <div className="navbar">
                <div className="navbar_container">
                    <h2>myteam</h2>
                    <Link to="#" className="navbar_menubars">
                        {
                            sidebar 
                            ? <Ai.AiOutlineClose onClick={showSideBar} />
                            : <Bi.BiMenuAltRight onClick={showSideBar} />
                        }
                    </Link>

                    <ul className="navbar_links">
                        {SidebarData.map((item, index) => (
                            <li className={item.rName} key={index}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <nav className={sidebar ? 'navbar_menu active' : 'navbar_menu' }>
                <ul className="navbar_items">
                    {SidebarData.map((item, index) => (
                        <li className={item.cName} key={index}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFlag, faCoins, faChartPie, faBars, faTrophy } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
          path: '/',
          name: 'Dashboard',
          icon: <FontAwesomeIcon icon={faTrophy} />,
        },
        {
          path: '/budget',
          name: 'Budget',
          icon: <FontAwesomeIcon icon={faChartPie} />,
        },
        {
          path: '/goalsPage',
          name: 'Goals',
          icon: <FontAwesomeIcon icon={faFlag} />,
        },
        {
          path: '/literacy',
          name: 'Personal Finance',
          icon: <FontAwesomeIcon icon={faCoins} />,
        },
        {
          path: '/challenge',
          name: 'Challenge',
          icon: <FontAwesomeIcon icon={faTrophy} />,
        },
        {
          path: '/profilepage',
          name: 'Profile Page',
          icon: <FontAwesomeIcon icon={faUser} />,
        },
      ];
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <FontAwesomeIcon icon={faBars} onClick={toggle} />
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
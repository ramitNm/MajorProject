import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './burger_2.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { color } from 'framer-motion';


export const Burger_2 = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
           
        },
        {
            path:"/Blogs",
            name:"Complaint",
          
        },
        {
            path:"/Contact",
            name:"Add Property",
            
        },
        {
            path:"/About_us",
            name:"Update Property",
            
        },
        {
            path:"/Link_us",
            name:"View Profile",
            
        }
    ]
    return (
        <div className="container-burger">
           <div style={{width: isOpen ? "200px" : "50px",background: "transparent"}} className="sidebar">
               <div className="top_section">
               <img src="\src\Vikaspedia Icons\image-removebg-preview (4).png" style={{display: isOpen ? "block" : "none"}} alt="vikaspidia sign" className="img-responsive logo" />
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{color:"white"}}>
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

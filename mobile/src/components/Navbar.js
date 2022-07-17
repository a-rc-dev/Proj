import React, {useState} from "react";
import './Navbar';
import {FaTimes} from 'react-icons/fa'; 
import { FaBars } from 'react-icons/fa'
import { FaAppleAlt } from 'react-icons/fa'


const Navbar = () => {

    const [click,setClick]=useState(false);

    const clickHandler = () =>setClick(!click);




    return (

        <div className="navbar">
            <div className="logo">
          <h1><FaAppleAlt size={45} style={{color:'rgb(223 104 104)'}}/><span>Minhas Calorias</span></h1>
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>

                <li className="nav-item">
                    <a href="/">Inicio</a>
                </li>
                
            </ul>

            <div className="hamburger" onClick={clickHandler}>
                {click ? (<FaTimes size={30} style={{color:'#f8f8f8'}}/>) :  <FaBars size={30} style={{color:'#f8f8f8'}}/> }
               

            </div>
        </div>

    )


}
export default Navbar;
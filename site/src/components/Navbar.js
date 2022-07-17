import { render } from "@testing-library/react";
import React from "react";
import MenuItems from "./MenuItems";
import './NavCss.css'


const Navbar = () => {



    return (
        <nav>
            <div className="NavbarItems">
              
                <h1 className='navbar-logo'><i className="fa-solid fa-calculator"></i></h1>
                <ul className="nav-menu">

                    {MenuItems.map((item, index) => {

                        return (
                            <li key={index}>
                                <a className={item.sName} href={item.url}>

                                {item.title}

                                </a>


                            </li>



                        );


                    }



                    )


                    }
                </ul>
            </div>
        
        </nav>


    )
}
export default Navbar;


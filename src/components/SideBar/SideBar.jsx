import React from 'react'
import Logo from '../../imgs/ssn-logo.jpg'
import '../SideBar/SideBar.css'
import {UilEstate} from "@iconscout/react-unicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

import { SidebarData } from '../../Data/Data'; 

const SideBar = () => {
  return (
    <div className='Sidebar'>
        <div className='logo'>
            <img src={Logo} alt=''/>
        </div>

        <div className="menu">
            {SidebarData.map((item,index)=>{
                return (
                    <div className="menuItems">
                    <div>
                        <FontAwesomeIcon icon={item.icon}/>
                    </div>
                    <span>
                        {item.heading}
                    </span>
                    </div>
                )           
            })}
            <div className="menuItems">
                    <div>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    </div>
                    <span>
                        Sign out
                    </span>
            </div>
        </div>

    </div>
  )
}

export default SideBar

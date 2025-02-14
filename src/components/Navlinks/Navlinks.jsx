import React from "react";
import img from "../../assets/img.jpg"
import{useNavigate,useNavigation}from 'react-router-dom' 
 import "../../App.css" 
/* import Navlinks from './components/Navlinks.js'; */

export default function Navlinks() {
    const navigate = useNavigate();
    return(
        <div className='navbar-container'>
            <img src={img} alt=''width={"100px"}/>
            <div className='navlinks'>
                <ul>
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li onClick={()=>navigate('/about')}>About</li>
                    <li onClick={()=>navigate('/contact')}>Contact</li>

                </ul>
            </div>
        </div>
    )
}
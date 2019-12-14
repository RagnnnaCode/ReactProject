import React from 'react';
import style from './Services.module.css'
import {Link} from 'react-router-dom';
import WOW from 'wowjs';

const Services = (props) => {
    return(
        <div className={style.wrapperS}>
            <div className={style.NavBar}>
                <ul className="list1" >
                    <li ><Link to="/">Home</Link></li>
                    <li className={style.listcomp2}><Link to="/Services">Services</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Work">Work</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                </ul>
            </div>
            <div className={style.acrostia}>
                <p>acrostia</p>
            </div>
        </div>
    )
}
export default Services;
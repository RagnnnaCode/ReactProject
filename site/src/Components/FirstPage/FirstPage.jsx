import React from 'react';
import style from './FP.module.css'
import {Link} from 'react-router-dom';

const FirstPage = (props) => {
    return(
        <div className={style.wrapper}>
            <div className={style.all}>
                <div className={style.NavBar}>
                    <ul className="list1" >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Work">Work</Link></li>
                        <li><Link to="/Contacts">Contacts</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default FirstPage;